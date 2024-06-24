"use client";

import Image from "next/image";
import { Post } from "@/shared/models";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ContentReader } from "./ContentReader";
import PostDate from "./PostDate";

interface Props {
  postList?: Post[];
}

export const PostViewer = ({ postList }: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !postList || postList.length < 1) {
    return null;
  }

  let post =
    postList?.find((post) => post.PostID && post.PostID == Number(id ?? 1)) ??
    postList[0];

  return (
    <>
      {post && (
        <div className="max-w-3xl mx-auto text-center pb-12 ">
          {post.PostTime ? (
            <PostDate dateString={post.PostTime} />
          ) : (
            post.CreatedTime && <PostDate dateString={post.CreatedTime} />
          )}
          <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-pink-300/60 via-indigo-300 to-cyan-200/80 pb-6">
            {post.Title}
          </h2>
          {post.TitleImage && (
            <Image className="m-auto " src={post.TitleImage} alt="" />
          )}
          <ContentReader className="text-slate-700" content={post.Content} />
        </div>
      )}
    </>
  );
};
