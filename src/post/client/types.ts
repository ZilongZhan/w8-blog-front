import { Post } from "../types";

export interface PostClientStructure {
  getPostsInfo: () => Promise<PostInfo>;
}

export interface PostInfo {
  posts: Post[];
  postsTotal: number;
}
