import { Post } from "../types";
import { PostDto } from "./types";

export const mapPostsDtoToPosts = (postsDto: PostDto[]): Post[] => {
  return postsDto.map<Post>(({ publishDate, ...postsDto }) => ({
    ...postsDto,
    publishDate: new Date(publishDate),
  }));
};
