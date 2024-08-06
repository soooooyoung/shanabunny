"use client";

import { Post } from "@/shared/models/Post";
import Image from "next/image";
import PostDate from "./PostDate";
import { useEffect, useState } from "react";
import { deleteBlog } from "@/app/actions/blog";
import trash from "@/../public/icons/trash.svg";
import pencil from "@/../public/icons/pencil-square.svg";
import { ContentReader } from "./ContentReader";
import Link from "next/dist/client/link";

interface Props {
  post: Post;
  auth?: boolean;
  folded?: boolean;
}
export default function PostItem({ post, auth, folded }: Props) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !post.PostID || !post.Published) {
    return null;
  }
  const onDelete = async (postId: number) => {
    if (!auth) return;
    try {
      const response = await deleteBlog(postId);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <article className="pt-12 first-of-type:pt-0 group">
      <div className="md:flex">
        <div className="w-48 shrink-0">
          <time className="text-sm inline-flex items-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-200 md:leading-8 before:w-1.5 before:h-1.5 before:rounded-full before:bg-pink-500 before:ring-4 before:ring-rose-500/30 mb-3">
            <span className="ml-[1.625rem] md:ml-5">
              {post.PostTime ? (
                <PostDate dateString={post.PostTime} />
              ) : (
                post.CreatedTime && <PostDate dateString={post.CreatedTime} />
              )}
            </span>
          </time>

          {auth && (
            <div className="flex justify-center gap-4">
              <Link href={"edit"} className="opacity-50 hover:opacity-100">
                <Image width={16} src={pencil} alt="edit" />
              </Link>
              <button
                className="opacity-50 hover:opacity-100"
                onClick={() => {
                  if (post.PostID) onDelete(post.PostID);
                }}
              >
                <Image width={16} src={trash} alt="delete" />
              </button>
            </div>
          )}
        </div>
        <div className="grow ml-8 md:ml-0 pb-12 group-last-of-type:pb-0 border-b [border-image:linear-gradient(to_right,theme(colors.cyan.400/.3),theme(colors.purple.300),theme(colors.pink.400/.3))1] group-last-of-type:border-none">
          <header>
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300/60 via-purple-500 to-pink-400/60 leading-8 pb-6">
              {post.Title}
            </h2>
          </header>
          <ContentReader content={post.Content} className="text-slate-800" />
        </div>
      </div>
    </article>
  );
}
