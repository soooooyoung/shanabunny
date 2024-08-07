"use client";
import { useInView } from "react-intersection-observer";
import { getProjects } from "@/app/actions/blog";
import { Post } from "@/shared/models";
import { useEffect, useState } from "react";
import PostItem from "./PostItem";
import { useSearchParams } from "next/navigation";
import { Category } from "@/shared/models/Post";

interface Props {
  auth?: boolean;
  postList?: Post[];
  categories?: Category[];
}

const LIMIT = 0;

export default function PostList({ auth, postList, categories }: Props) {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [postEnd, setPostEnd] = useState(false);
  const [offset, setOffset] = useState(LIMIT + 1);
  const [posts, setPosts] = useState<Post[]>(postList || []);
  const { ref, inView } = useInView();

  const loadPosts = async () => {
    if (postEnd) return;
    try {
      const response = await getProjects(offset, LIMIT);
      if (response && response.length > 0) {
        setPosts([...posts, ...response]);
        setOffset(offset + LIMIT + 1);

        if (response.length == LIMIT) setPostEnd(true);
      }
    } catch (e) {}
  };

  useEffect(() => {
    if (inView) {
      loadPosts();
    }
  }, [inView, postEnd]);

  return (
    <div className="">
      <div className="relative">
        {posts
          .filter((post) => {
            if (!category || !categories || categories.length < 2)
              return post.PostType == 0;

            return (
              post.PostType == 0 && post.CategoryID?.toString() == category
            );
          })
          .map((post, postIndex) => (
            <PostItem key={postIndex} post={post} auth={auth} />
          ))}
      </div>
      <div className="text-rose-200 uppercase " ref={ref}></div>
    </div>
  );
}
