import { Post } from "./Post";

export interface ServerResponse extends Response {
  success: boolean;
}

export interface PostResponse extends ServerResponse {
  result: Post[];
}
