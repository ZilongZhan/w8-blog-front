export interface Post {
  id: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  tags: string[];
  content: string;
  publishDate: Date;
}
export interface PostsInfo {
  posts: Post[];
  postsTotal: number;
}
