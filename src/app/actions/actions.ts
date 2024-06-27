"use server";

import { cookies } from "next/headers";

const headers: HeadersInit = {
  apikey: process.env.APIKEY || "",
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const get = async <T>(url: string, options?: RequestInit) => {
  return fetch(`${process.env.HOST}/${url}`, {
    headers: {
      ...headers,
      Cookie: cookies().get("token")?.value
        ? `token=${cookies().get("token")?.value}`
        : "",
    },
    ...options,
  }).then((res) => res.json()) as T;
};

export const post = async <T, S>(
  url: string,
  params?: S,
  options?: RequestInit
) => {
  return fetch(`${process.env.HOST}/${url}`, {
    headers: {
      ...headers,
      Cookie: cookies().get("token")?.value
        ? `token=${cookies().get("token")?.value}`
        : "",
    },
    method: "post",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    body: JSON.stringify(params),
    ...options,
  }).then((res) => {
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
};

export const del = async <T>(url: string, options?: RequestInit) => {
  return fetch(`${process.env.HOST}/${url}`, {
    headers: {
      ...headers,
      Cookie: cookies().get("token")?.value
        ? `token=${cookies().get("token")?.value}`
        : "",
    },
    method: "delete",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    ...options,
  }).then((res) => {
    return res.json() as T;
  });
};

export const postFormData = async <T>(
  url: string,
  params: FormData,
  options?: RequestInit
) => {
  return fetch(`${process.env.HOST}/${url}`, {
    headers: {
      apikey: process.env.APIKEY || "",
      Cookie: cookies().get("token")?.value
        ? `token=${cookies().get("token")?.value}`
        : "",
    },
    cache: "no-cache",
    method: "post",
    mode: "cors",
    credentials: "same-origin",
    body: params,
    ...options,
  }).then((res) => res.json() as T);
};
