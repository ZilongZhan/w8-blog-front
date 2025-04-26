export interface PostBasic {
  title: string;
  imageUrl: string;
  imageAlt: string;
  tags: string[];
  content: string;
}

export interface Post extends PostBasic {
  id: string;
  publishDate: Date;
}

export interface PostsInfo {
  posts: Post[];
  postsTotal: number;
}
