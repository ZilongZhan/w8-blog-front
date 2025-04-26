import { PostBasic } from "../types";

export interface PostDto extends PostBasic {
  _id: string;
  publishDate: string;
}

export interface PostsInfoDto {
  posts: PostDto[];
  postsTotal: number;
}
