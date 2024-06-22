"use client";
import Particles from "@/components/atoms/Particles";
import RadialGradient from "@/components/atoms/RadialGradient";
import PageTitle from "@/components/widgets/PageTitle";
import { Editor } from "@/components/widgets/Editor";
import { useState } from "react";
import { Post } from "@/shared/models";
import { postBlog, postFile } from "@/app/actions";

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
        TitleImage: "",

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
              {/* Title */}
              <input
                className="w-full px-3 py-1.5"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value || "");
                }}
              />
              {/* Title Image */}
              {/* <input
                type="file"
                className="input-file w-full px-3 py-1.5"
                multiple={true}
                accept={".png, .jpg, .gif"}
              /> */}
              {/* Content */}
              <Editor onSave={onSave} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
