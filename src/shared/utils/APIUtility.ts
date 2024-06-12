import { cache } from "react";
import { PostResponse } from "../models";
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
    "use server";
    return fetch(url, { headers }).then(async (res) => res.json()) as T;
  },
  post: async <T, S>(url: string, params?: S) => {
    "use server";
    return fetch(url, {
      cache: "no-cache",
      headers,
      method: "post",
      // mode: "cors",
      body: JSON.stringify(params),
      // credentials: "same-origin",
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
