"use client";

import Image from "next/image";
import { Post } from "@/shared/models";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ContentReader } from "./ContentReader";
import PostDate from "./PostDate";
import { deleteBlog } from "@/app/actions/blog";
import Pencil from "@/../public/icons/pencil-square.svg";
import Trash from "@/../public/icons/trash.svg";
import Particles from "../atoms/Particles";

interface Props {
  postList?: Post[];
  auth?: boolean;
}

export default function PostViewer({ postList, auth }: Props) {
  const [isMounted, setIsMounted] = useState(false);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const onDelete = async (postId?: number) => {
    if (!auth || !postId) return;
    try {
      const response = await deleteBlog(postId);
    } catch (e) {
      alert(e);
    }
  };

  const onEdit = (postId?: number) => {
    if (!auth || !postId) return;
    try {
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !postList || postList.length < 1) {
    return null;
  }

  let post =
    postList?.find((post) => post.PostID && post.PostID == Number(id ?? 1)) ??
    postList[postList.length - 1];

  return (
    <>
      {auth && (
        <div>
          <button
            className="bg-rose-100 hover:bg-purple-200  p-2 rounded-xl float-right"
            onClick={() => {
              if (post.PostID) onDelete(post.PostID);
            }}
          >
            <Image src={Trash} alt="delete" width={16} />
          </button>
          <button
            className="bg-rose-100 p-2 rounded-xl float-right mx-2 hover:bg-purple-200"
            onClick={() => {
              if (post.PostID) onEdit(post.PostID);
            }}
          >
            <Image src={Pencil} alt="edit" width={16} />
          </button>
        </div>
      )}
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
}
