import { Post, PostFormData } from "../types";

export interface PostsContextStructure {
  posts: Post[];
  postsTotal: number;
  loadPostsInfo: (pageNumber?: number) => Promise<void>;
  addPost: (postFormData: PostFormData) => Promise<void>;
  deletePost: (postId: string) => Promise<void>;
}
