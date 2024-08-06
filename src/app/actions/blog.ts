import { PostResponse, Post, ServerResponse } from "@/shared/models";
import { revalidatePath } from "next/cache";
import { del, get, post } from "./actions";
import { Mail } from "@/shared/models/Post";
import { cache } from "react";
import { CategoryResponse } from "@/shared/models/Response";
import { showError } from "@/shared/utils/common";

export const getAllCategories = cache(async () => {
  try {
    const response = await get<CategoryResponse>("post/categories", {
      next: { revalidate: 3600 * 24 },
    });
    return response.result;
  } catch (e) {
    showError(e);
  }
});

export const getAllPosts = async () => {
  try {
    const response = await get<PostResponse>("post", {
      cache: "no-cache",
      // next: { revalidate: 1200 },
    });
    return response.result;
  } catch (e) {}
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
        cache: "no-cache",
        // next: { revalidate: 1200 },
      }
    );
    return response.result;
  } catch (e) {
    showError(e);
  }
};

export const postBlog = async (params: Post) => {
  try {
    const response = await post<PostResponse, Post>("post", params);
    return response;
  } catch (e) {
    showError(e);
  }
};

export const deleteBlog = async (postID: number) => {
  try {
    const response = await del<PostResponse>(`post/${postID}`);
    console.log("RESPONSE", response);
    if (response.success) revalidatePath("/[slug]", "page");
    return response;
  } catch (e) {
    showError(e);
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
