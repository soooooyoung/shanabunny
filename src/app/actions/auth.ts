import { ServerResponse, User } from "@/shared/models";
import { post } from "./actions";
import { showError } from "@/shared/utils/common";

export const postSignin = async (params: User) => {
  try {
    const response = await post<ServerResponse, User>("signin", params);
    return response;
  } catch (e) {
    showError(e);
  }
};
