import { cache } from "react";
import { PostResponse } from "../models/Response";

export const preload = () => {
  void getPost();
};

export const getPost = cache(async () => {
  return fetch(`${process.env.HOST}/post`, {
    next: { revalidate: 3600 },
    headers: { apikey: process.env.APIKEY || "" },
  }).then((res) => {
    if (res.status == 200) return res.json() as Promise<PostResponse>;
  });
});
