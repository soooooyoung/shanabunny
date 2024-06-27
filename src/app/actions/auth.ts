import { ServerResponse, User } from "@/shared/models";
import { post } from "./actions";

export const postSignin = async (params: User) => {
  try {
    const response = await post<ServerResponse, User>("signin", params);
    return response.success;

    //TODO: handle response with popup
  } catch (e) {
    return false;
  }
};
