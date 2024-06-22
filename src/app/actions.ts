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
import { base64ToArrayBuffer } from "@/shared/utils/common";

async function compressBase64Data(data: string): Promise<ArrayBuffer> {
  const zip = new JSZip();
  zip.file<JSZip.InputType>("data.txt", data || "");
  const zipBlob = await zip.generateAsync({ type: "arraybuffer" });
  return zipBlob;
}

const extractBase64Data = async (blob: Blob): Promise<string> => {
  const zip = new JSZip();
  const zipContent = await zip.loadAsync(blob);
  const dataFile = zipContent.file("data.txt");
  if (dataFile) {
    return await dataFile.async("string");
  } else {
    throw new Error("data.txt not found in the zip");
  }
};

const headers: HeadersInit = {
  apikey: process.env.APIKEY || "",
  Accept: "application/json",
  "Content-Type": "application/json",
  Cookie: cookies().get("token")?.value
    ? `token=${cookies().get("token")?.value}`
    : "",
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
  },
  postFormData: async <T>(
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
      cache: "no-cache",
      // next: { revalidate: 3600 },
    });
    const posts = response.result.map((post) => {});

    return response.result;
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
    return response.success;

    //TODO: handle response with popup
  } catch (e) {
    return false;
  }
};

/**
 * File
 */

// export const getFile = async (FileID: string) => {
//   try {
//     const response = await api.get<Response>(`file/${FileID}`, {
//       next: { revalidate: 3600 },
//     });
//     const blob = await response.blob();
//     const base64data = await extractBase64Data(blob);

//     if (!response.ok) {
//       throw new Error("Network Error");
//     }

//     return base64data;
//   } catch (e) {
//     //TODO: handle error with popup
//   }
// };

export const postFile = async (base64str: string) => {
  try {
    const formData = new FormData();
    const arrayBuffer = base64ToArrayBuffer(base64str);
    formData.append("file", new Blob([arrayBuffer]));
    const response = await api.postFormData<FileResponse>("file", formData);
    return response.success ? response.result.FileID : 0;
  } catch (e) {
    throw e;
    //TODO: handle error with popup
  }
};
