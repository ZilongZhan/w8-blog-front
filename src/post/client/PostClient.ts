import { mapPostsDtoToPosts } from "../dto/mappers";
import { PostDto } from "../dto/types";
import { PostsInfo } from "../types";
import { PostClientStructure } from "./types";

class PostClient implements PostClientStructure {
  private apiUrl = import.meta.env.VITE_API_URL;

  getPostsInfo = async (pageNumber = 1): Promise<PostsInfo> => {
    const response = await fetch(
      `${this.apiUrl}/posts?pageNumber=${pageNumber}`,
    );

    const { posts: postsDto, postsTotal } = (await response.json()) as {
      posts: PostDto[];
      postsTotal: number;
    };

    const posts = mapPostsDtoToPosts(postsDto);

    return {
      posts,
      postsTotal,
    };
  };
}

export default PostClient;
