"use server";

import { cache } from "react";
import { FileResponse, PostResponse, FileData, Post } from "../models";
import { cookies } from "next/headers";

export const preload = () => {
  void getBlogPost();
};

export const getBlogPost = cache(async () => {
  return fetch(`${process.env.HOST}/post`, {
    next: { revalidate: 3600 },
    headers: { apikey: process.env.APIKEY || "" },
  }).then((res) => {
    if (res.status == 200) return res.json() as Promise<PostResponse>;
  });
});

export const headers: HeadersInit = {
  apikey: process.env.APIKEY || "",
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const api = {
  get: async <T>(url: string) => {
    return fetch(url, { headers }).then(async (res) => res.json()) as T;
  },
  post: async <T, S>(url: string, params?: S) => {
    return fetch(url, {
      cache: "no-cache",
      headers,
      method: "post",
      mode: "cors",
      credentials: "same-origin",
      body: JSON.stringify(params),
    }).then(async (res) => {
      const cookiesArray = res.headers.getSetCookie();

      if (cookiesArray && cookiesArray.length > 0) {
        let token;
        for (const cookie of cookiesArray) {
          const [name, value] = cookie.trim().split(/[=;]/);

          if (name === "token") {
            token = value;
            cookies().set("token", token, { secure: true });
          }
        }
      }
      return res.json() as T;
    });
  },
};

export const postFile = async (params: FileData) => {
  try {
    const response = await api.post<FileResponse, FileData>(
      `${process.env.HOST}/file`,
      params
    );
    return response.result[0].FileID;
  } catch (e) {
    //TODO: handle error with popup
  }
};

export const postBlog = async (params: Post) => {
  try {
    const response = await api.post<PostResponse, Post>(
      `${process.env.HOST}/post`,
      params
    );
    return response;
  } catch (e) {
    //TODO: handle error with popup
  }
};
