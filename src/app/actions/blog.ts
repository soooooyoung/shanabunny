"use server";

import {
  PostResponse,
  PostListResponse,
  Post,
  ServerResponse,
} from "@/shared/models";
import { revalidateTag } from "next/cache";
import { del, get, post } from "./actions";
import { Mail } from "@/shared/models/Post";
import { CategoryResponse } from "@/shared/models/Response";
import { showError } from "@/shared/utils/common";
import { redirect } from "next/navigation";

export const getAllCategories = async () => {
  try {
    const response = await get<CategoryResponse>("post/categories", {
      next: { revalidate: 3600 * 24 },
    });
    return response.result;
  } catch (e) {
    showError(e);
  }
};

export const getAllPosts = async () => {
  try {
    const response = await get<PostListResponse>("post", {
      next: { revalidate: 1200, tags: ["post"] },
    });
    return response.result;
  } catch (e) {}
};

export const getProjects = async (offset: number = 0, limit: number = 0) => {
  try {
    const response = await post<
      PostListResponse,
      { offset?: number; limit?: number }
    >(
      "post/page",
      { offset, limit },

      {
        next: { revalidate: 1200, tags: ["post"] },
      }
    );
    return response.result;
  } catch (e) {
    showError(e);
  }
};

export const postBlog = async (params: Post) => {
  let result = false;

  try {
    const response = await post<PostListResponse, Post>("post", params);
    if (response.success) result = true;
  } catch (e) {
    showError(e);
  }

  if (result) {
    revalidateTag("post");
    redirect("/blog");
  }
};

export const deleteBlog = async (postID: number) => {
  let result = false;
  try {
    const response = await del<PostResponse>(`post/${postID}`);
    if (response.success) result = true;
  } catch (e) {
    showError(e);
  }
  if (result) {
    if (result) revalidateTag("post");
  }
};

export const postMail = async (params: Mail) => {
  try {
    const response = await post<ServerResponse, Mail>("post/mail", params);
    return response;
  } catch (e) {
    showError(e);
  }
};
