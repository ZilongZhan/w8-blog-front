import { Post } from "../types";
import { PostDto } from "./types";

export const mapPostsDtoToPosts = (postsDto: PostDto[]): Post[] => {
  return postsDto.map<Post>((postDto) => mapPostDtoToPost(postDto));
};

export const mapPostDtoToPost = (postDto: PostDto): Post => {
  return {
    ...postDto,
    id: postDto._id,
    publishDate: new Date(postDto.publishDate),
  };
};
