import { Post, PostsInfo } from "../types";

export interface PostDto extends Omit<Post, "id" | "publishDate"> {
  _id: string;
  publishDate: string;
}

export interface PostsInfoDto extends Omit<PostsInfo, "posts"> {
  posts: PostDto[];
}
