import { SerializedLexicalNode } from "lexical";

export class Post {
  PostType?: number;
  PostID?: number;
  UserID?: number;
  CategoryID?: number;

  Title?: string;
  TitleImage?: string;
  Content?: string;

  Published?: boolean;

  PostTime?: string;
  CreatedTime?: string;
  UpdatedTime?: string;
}

export interface RawElement {
  type?: string;
  text?: string;
  src?: string;
  fileID?: number;
}
export interface RawPost extends SerializedLexicalNode {
  children: RawElement[];
}

export interface Category {
  Name?: string;
  CategoryID?: number;
}

export interface Mail {
  Name?: string;
  Email?: string;
  Content?: string;
  CreatedTime?: string;
}
