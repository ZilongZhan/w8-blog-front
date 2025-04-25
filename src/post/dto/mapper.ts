import { Post } from "../types";
import { PostDto } from "./types";

export const mapPostsDtoToPosts = (postsDto: PostDto[]): Post[] => {
  return postsDto.map<Post>(({ publishDate, _id, ...postsDto }) => ({
    ...postsDto,
    id: _id,
    publishDate: new Date(publishDate),
  }));
};
