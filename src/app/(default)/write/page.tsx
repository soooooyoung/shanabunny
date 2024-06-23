"use client";
import dynamic from "next/dynamic";
import Particles from "@/components/atoms/Particles";
import RadialGradient from "@/components/atoms/RadialGradient";
import PageTitle from "@/components/widgets/PageTitle";
import { useState } from "react";
import { Post } from "@/shared/models";
import { postBlog, postFile } from "@/app/actions";

// https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading
const DynamicEditor = dynamic(() => import("@/components/widgets/Editor"), {
  ssr: false,
});

export default function Write() {
  const [title, setTitle] = useState("");
  const [published, setPublished] = useState(false);
  const onSave = async (content?: string) => {
    try {
      if (!content || !title) return;

      let doc = new DOMParser().parseFromString(content, "text/html");
      const images = doc.querySelectorAll("img");
      const base64Images: { index: number; src: string }[] = [];

      images.forEach((img, index) => {
        const src = img.src;
        if (src.startsWith("data:image")) {
          base64Images.push({ index, src });
        }
      });

      await Promise.all(
        base64Images.map(async ({ index, src }) => {
          const id = await postFile(src);

          images[index].src = id ? `/api/file?id=${id}` : "";
          if (!id) throw new Error("Failed to save Image");
        })
      );

      const post: Post = {
        UserID: 1,
        PostType: 0,
        Title: title,
        Content: doc.documentElement.outerHTML,

        Published: published,
      };

      await postBlog(post);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {/* Content */}
      <section className="relative">
        {/* Radial gradient */}
        <RadialGradient />

        {/* Particles animation */}
        <div className="absolute inset-0 h-96 -z-10" aria-hidden="true">
          <Particles />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Page header */}
            <PageTitle title="NEW POST" />

            <div className="mx-auto max-w-3xl">
              {/* Options */}
              <div className="flex ">
                <label className="inline-flex items-center mb-3">
                  <input
                    type="checkbox"
                    className="relative w-4 h-4 aspect-square !appearance-none !bg-none checked:!bg-gradient-to-tr checked:!from-pink-300 checked:!to-white bg-white border border-purple-300 shadow-sm rounded !outline-none !ring-0 !text-transparent !ring-offset-0 checked:!border-pink-300 hover:!border-cyan-200 cursor-pointer transition-all duration-300 ease-in-out focus-visible:!outline-offset-2 focus-visible:!outline-2 focus-visible:!outline-rose-300/30 focus-visible:border-rose-300 after:w-[35%] after:h-[53%] after:absolute after:opacity-0 after:top-[40%] after:left-[50%] after:-translate-x-2/4 after:-translate-y-2/4 after:rotate-[25deg] after:drop-shadow-[1px_0.5px_1px_rgba(255,205,125,0.5)] after:border-r-[0.17em] after:border-r-white after:border-b-[0.17em] after:border-b-white after:transition-all after:duration-200 after:ease-linear checked:after:opacity-100 checked:after:rotate-45 checked:animate-pulse"
                    onChange={(e) => {
                      setPublished(e.target.checked);
                    }}
                  />
                  <span className="ml-2 text-purple-300">Published</span>
                </label>
                {/* <div className="inline-flex items-center mt-3 mx-auto">
                  <input
                    type="file"
                    className="input-file w-full px-3 py-1.5 bg-white rounded-md"
                    multiple={true}
                    accept={".png, .jpg, .gif"}
                  />
                </div> */}
              </div>
              {/* Title */}
              <input
                className="w-full px-3 py-1.5 focus-visible:!outline-offset-2 focus-visible:!outline-2 focus-visible:!outline-pink-200 focus-visible:animate-pulse"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value || "");
                }}
              />

              {/* Content */}
              <DynamicEditor onSave={onSave} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
