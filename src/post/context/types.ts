import { Post } from "../types";

export interface PostsContextStructure {
  posts: Post[];
  postsTotal: number;
  loadPostsInfo: () => Promise<void>;
}
