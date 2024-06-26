"use client";
import { useInView } from "react-intersection-observer";
import { getProjects } from "@/app/actions/blog";
import { Post } from "@/shared/models";
import { useEffect, useState } from "react";
import PostItem from "./PostItem";

interface Props {
  auth?: boolean;
  postList?: Post[];
}

const LIMIT = 0;

export default function PostList({ auth, postList }: Props) {
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
    } catch (e) {
      alert(e);
    }
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
          .filter((post) => post.PostType == 0)
          .map((post, postIndex) => (
            <PostItem key={postIndex} post={post} auth={auth} />
          ))}
      </div>
      <div ref={ref}>Loading...</div>
    </div>
  );
}
