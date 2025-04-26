export interface Post {
  id: string;
  publishDate: Date;
  title: string;
  imageUrl: string;
  imageAlt: string;
  tags: string[];
  content: string;
}

export interface PostsInfo {
  posts: Post[];
  postsTotal: number;
}
