"use server";

import { cookies } from "next/headers";
import JSZip from "jszip";
import {
  FileResponse,
  PostResponse,
  FileData,
  Post,
  ServerResponse,
  User,
} from "@/shared/models";

async function compressBase64Data(data: string): Promise<ArrayBuffer> {
  const zip = new JSZip();
  zip.file<JSZip.InputType>("data.txt", data || "");
  const zipBlob = await zip.generateAsync({ type: "arraybuffer" });
  return zipBlob;
}
const headers: HeadersInit = {
  apikey: process.env.APIKEY || "",
  Accept: "application/json",
  "Content-Type": "application/json",
  Cookie: `token=${cookies().get("token")?.value}`,
};

const api = {
  get: async <T>(url: string, options?: RequestInit) => {
    return fetch(`${process.env.HOST}/${url}`, { headers, ...options }).then(
      (res) => res.json()
    ) as T;
  },
  post: async <T, S>(url: string, params?: S, options?: RequestInit) => {
    return fetch(`${process.env.HOST}/${url}`, {
      headers,
      method: "post",
      mode: "cors",
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
  },
  postFile: async <T>(
    url: string,
    params?: FormData,
    options?: RequestInit
  ) => {
    return fetch(`${process.env.HOST}/${url}`, {
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
        apikey: process.env.APIKEY || "",
        Cookie: `token=${cookies().get("token")?.value || ""}`,
      },
      method: "post",
      mode: "cors",
      credentials: "same-origin",
      body: params,
      ...options,
    }).then((res) => res.json() as T);
  },
};

export const preload = async () => {
  await getBlog();
};

/**
 * Blog
 */
export const getBlog = async () => {
  try {
    const response = await api.get<PostResponse>("post", {
      next: { revalidate: 3600 },
    });
    return response;
  } catch (e) {
    //TODO: handle error with popup
  }
};

export const postBlog = async (params: Post) => {
  try {
    const response = await api.post<PostResponse, Post>("post", params);
    return response;
  } catch (e) {
    console.log(e);
    //TODO: handle error with popup
  }
};

/**
 * Auth
 */
export const postSignin = async (params: User) => {
  try {
    const response = await api.post<ServerResponse, User>("signin", params);
    console.log(response);
    return response.success;

    //TODO: handle response with popup
  } catch (e) {
    return false;
  }
};

/**
 * File
 */
export const postFile = async (params: FileData) => {
  if (!params.EncodedData) return;
  try {
    const data = await compressBase64Data(params.EncodedData);
    const formData = new FormData();
    formData.append("file", new Blob([data]), "data.zip");

    const response = await api.post<FileResponse, FormData>(
      `${process.env.HOST}/file`,
      formData
    );

    return response.result[0].FileID;
  } catch (e) {
    //TODO: handle error with popup
  }
};
