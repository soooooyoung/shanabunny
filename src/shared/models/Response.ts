import { Post } from "./Post";

export interface ServerResponse {
  success: boolean;
}

export interface PostResponse extends ServerResponse {
  result: Post[];
}
