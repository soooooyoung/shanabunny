import { PostResponse, Post, ServerResponse } from "@/shared/models";
import { revalidatePath } from "next/cache";
import { del, get, post } from "./actions";
import { Mail } from "@/shared/models/Post";
import { cache } from "react";
import { CategoryResponse } from "@/shared/models/Response";

export const preload = async () => {
  await getAllCategories();
};

export const getAllCategories = cache(async () => {
  const response = await get<CategoryResponse>("post/categories", {
    next: { revalidate: 3600 * 24 },
  });

  return response.result;
});

export const getAllPosts = async () => {
  const response = await get<PostResponse>("post", {
    next: { revalidate: 3600 },
  });

  return response.result;
};

export const getProjects = async (offset: number = 0, limit: number = 0) => {
  try {
    const response = await post<
      PostResponse,
      { offset?: number; limit?: number }
    >(
      "post/page",
      { offset, limit },
      {
        next: { revalidate: 3600 },
      }
    );
    return response.result;
  } catch (e) {
    //TODO: handle error with popup
  }
};

export const postBlog = async (params: Post) => {
  try {
    const response = await post<PostResponse, Post>("post", params);
    return response;
  } catch (e) {
    console.log(e);
    //TODO: handle error with popup
  }
};

export const deleteBlog = async (postID: number) => {
  try {
    const response = await del<PostResponse>(`post/${postID}`);
    if (response.success) revalidatePath("/[slug]", "page");
    return response;
  } catch (e) {
    console.log(e);
    //TODO: handle error with popup
  }
};

export const postMail = async (params: Mail) => {
  try {
    const response = await post<ServerResponse, Mail>("post/mail", params);
    return response;
  } catch (e) {
    console.log(e);
    //TODO: handle error with popup
  }
};
