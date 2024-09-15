"use client";

import Image from "next/image";
import { Post } from "@/shared/models";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ContentReader } from "./ContentReader";
import PostDate from "./PostDate";
import { deleteBlog } from "@/app/actions/blog";
import Pencil from "@/../public/icons/pencil-square.svg";
import Trash from "@/../public/icons/trash.svg";
import { revalidatePath } from "next/cache";
import { refresh } from "aos";
import { $generateNodesFromDOM } from "@lexical/html";

interface Props {
  postList?: Post[];
  auth?: boolean;
}

export default function PostViewer({ postList, auth }: Props) {
  const [isMounted, setIsMounted] = useState(false);
  const [currentPost, setCurrentPost] = useState<Post>();
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get("id");

  const onDelete = async (postId?: number) => {
    if (!auth || !postId) return;

    try {
      await deleteBlog(postId);
      refresh();
    } catch (e) {}
  };

  const onEdit = (postId?: number) => {
    if (!auth || !postId) return;
    router.push(`/edit?id=${postId}`);
  };

  useEffect(() => {
    setIsMounted(true);

    if (id) {
      setCurrentPost(postList?.find((post) => post.PostID == Number(id)));
    } else {
      setCurrentPost(postList?.[0]);
    }
  }, [id, postList]);

  if (!isMounted || !postList || postList.length < 1) {
    return null;
  }

  return (
    <div className="mt-20">
      {auth && currentPost && (
        <div>
          <button
            className="bg-rose-100 hover:bg-purple-200  p-2 rounded-xl float-right"
            onClick={() => {
              if (currentPost.PostID) onDelete(currentPost.PostID);
            }}
          >
            <Image src={Trash} alt="delete" width={16} />
          </button>
          <button
            className="bg-rose-100 p-2 rounded-xl float-right mx-2 hover:bg-purple-200"
            onClick={() => {
              if (currentPost.PostID) onEdit(currentPost.PostID);
            }}
          >
            <Image src={Pencil} alt="edit" width={16} />
          </button>
        </div>
      )}
      {currentPost && (
        <div className="max-w-3xl mx-auto text-center pb-12 ">
          {currentPost.PostTime ? (
            <PostDate dateString={currentPost.PostTime} />
          ) : (
            currentPost.CreatedTime && (
              <PostDate dateString={currentPost.CreatedTime} />
            )
          )}
          <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-pink-300/60 via-indigo-300 to-cyan-200/80 pb-6">
            {currentPost.Title}
          </h2>
          {currentPost.TitleImage && (
            <Image className="m-auto " src={currentPost.TitleImage} alt="" />
          )}
          <ContentReader
            className="text-slate-700"
            content={currentPost.Content}
          />
        </div>
      )}
    </div>
  );
}
