import { Post, Category } from "./Post";

export interface ServerResponse extends Response {
  success: boolean;
  error?: string;
}

export interface PostResponse extends ServerResponse {
  result: Post[];
}

export interface CategoryResponse extends ServerResponse {
  result: Category[];
}

export interface FileResponse extends ServerResponse {
  result: { FileID: number };
}
