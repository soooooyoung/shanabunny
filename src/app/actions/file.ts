import { FileResponse } from "@/shared/models";
import { get, postFormData } from "./actions";
import { FileListResponse } from "@/shared/models/Response";
import { showError } from "@/shared/utils/common";

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
    showError(e);
  }
};

export const getMusicList = async () => {
  try {
    const response = await get<FileListResponse>(
      "file/music/list",

      {
        cache: "no-cache",
        // next: {
        //   revalidate: 3600,
        // },
      }
    );
    return response;
  } catch (e) {
    showError(e);
  }
};
