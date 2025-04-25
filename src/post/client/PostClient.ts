import { mapPostsDtoToPosts } from "../dto/mapper";
import { PostDto } from "../dto/types";
import { PostClientStructure, PostInfo } from "./types";

class PostClient implements PostClientStructure {
  private apiUrl = import.meta.env.VITE_API_URL;

  getPostsInfo = async (pageNumber = 1): Promise<PostInfo> => {
    const response = await fetch(
      `${this.apiUrl}/posts?pageNumber=${pageNumber}`,
    );

    const postsInfo = (await response.json()) as {
      posts: PostDto[];
      postsTotal: number;
    };

    const posts = mapPostsDtoToPosts(postsInfo.posts);

    return {
      posts: posts,
      postsTotal: postsInfo.postsTotal,
    };
  };
}

export default PostClient;
