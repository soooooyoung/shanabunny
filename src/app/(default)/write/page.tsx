"use client";
import Particles from "@/components/atoms/Particles";
import RadialGradient from "@/components/atoms/RadialGradient";
import PageTitle from "@/components/widgets/PageTitle";
import { Editor } from "@/components/widgets/Editor";
import { useState } from "react";
import { FileData, Post, RawPost } from "@/shared/models";
import { postBlog, postFile } from "@/shared/utils/APIUtility";

export default function Write() {
  const [title, setTitle] = useState("");
  const onSave = async (content?: RawPost) => {
    if (!content || !title) return;

    if (content.children.length > 0) {
      const contentList = content.children.map(async (element) => {
        switch (element.type) {
          case "text":
            break;
          case "inline-image":
            {
              if (!element.src) break;
              const file: FileData = {
                UserID: 0,
                EncodedData: element.src,
              };
              const res = await postFile(file);
              element.src = res ? res.toString() : "";
            }
            break;
          default:
            break;
        }
        return element;
      });

      const processedContent = JSON.stringify(contentList);
      const post: Post = {
        UserID: 0,
        PostType: 0,
        Title: title,
        Content: processedContent,
        TitleImage: "",
      };

      await postBlog(post);
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
