import { FileResponse } from "@/shared/models";
import { base64ToArrayBuffer } from "@/shared/utils/common";
import { postFormData } from "./actions";

export const postFile = async (base64str: string) => {
  try {
    const formData = new FormData();
    const arrayBuffer = base64ToArrayBuffer(base64str);
    formData.append("file", new Blob([arrayBuffer]));
    const response = await postFormData<FileResponse>("file", formData);
    return response.success ? response.result.FileID : 0;
  } catch (e) {
    throw e;
    //TODO: handle error with popup
  }
};
