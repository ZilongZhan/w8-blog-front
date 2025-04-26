import { PostsInfo } from "../types";

export interface PostClientStructure {
  getPostsInfo: () => Promise<PostsInfo>;
}
