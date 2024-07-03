import { FileData, FileResponse } from "@/shared/models";
import { get, postFormData } from "./actions";
import { FileListResponse } from "@/shared/models/Response";

export const postFile = async (
  buffer: ArrayBuffer,
  path?: string,
  filename?: string
) => {
  try {
    const formData = new FormData();
    formData.append("file", new Blob([buffer]), filename);
    const response = await postFormData<FileResponse>(path ?? "file", formData);
    return response.success ? response.result.FileID : 0;
  } catch (e) {
    throw e;
    //TODO: handle error with popup
  }
};

export const getMusicList = async () => {
  const response = await get<FileListResponse>("file/music/list", {
    cache: "no-cache",
    // next: {
    //   revalidate: 3600,
    // },
  });
  return response;
};
