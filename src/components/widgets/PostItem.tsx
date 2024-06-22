"use client";

import { Post } from "@/shared/models/Post";
import Image from "next/image";
import PostDate from "./PostDate";
import { useEffect, useState } from "react";
import dompurify from "dompurify";

interface Props {
  post: Post;
}
export default function PostItem({ post }: Props) {
  const [isMounted, setIsMounted] = useState(false);
  const sanitizer = dompurify.sanitize;
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <article className="pt-12 first-of-type:pt-0 group">
      <div className="md:flex">
        <div className="w-48 shrink-0">
          <time className="text-sm inline-flex items-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-200 md:leading-8 before:w-1.5 before:h-1.5 before:rounded-full before:bg-pink-500 before:ring-4 before:ring-rose-500/30 mb-3">
            <span className="ml-[1.625rem] md:ml-5">
              {post.CreatedTime && <PostDate dateString={post.CreatedTime} />}
            </span>
          </time>
        </div>
        <div className="grow ml-8 md:ml-0 pb-12 group-last-of-type:pb-0 border-b [border-image:linear-gradient(to_right,theme(colors.cyan.400/.3),theme(colors.purple.300),theme(colors.pink.400/.3))1] group-last-of-type:border-none">
          <header>
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300/60 via-purple-500 to-pink-400/60 leading-8 pb-6">
              {post.Title}
            </h2>
          </header>
          {post.TitleImage && (
            <figure className="bg-gradient-to-b from-rose-200/20 to-transparent rounded-3xl p-px mb-8">
              <Image
                className="w-full rounded-[inherit]"
                src={post.TitleImage}
                width={574}
                height={326}
                alt={post.Title ?? ""}
              />
            </figure>
          )}

          <div
            dangerouslySetInnerHTML={{ __html: sanitizer(post.Content ?? "") }}
          />
        </div>
      </div>
    </article>
  );
}
