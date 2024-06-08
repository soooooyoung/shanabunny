import { cache } from "react";
import { PostResponse, CreateUserParams, ServerResponse } from "../models";

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
  get: async <T>(url: string) =>
    fetch(url, { headers }).then((res) => res.json() as T),
  post: async <T, S>(url: string, params?: S) =>
    fetch(url, { headers, method: "post", body: JSON.stringify(params) }).then(
      (res) => res.json() as T
    ),
};
