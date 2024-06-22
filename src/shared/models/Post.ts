import { SerializedLexicalNode } from "lexical";

export class Post {
  PostType?: number;
  PostID?: number;
  UserID?: number;
  Title?: string;
  TitleImage?: string;
  Content?: string;

  Published?: boolean;

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
