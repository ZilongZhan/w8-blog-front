import { mapPostDtoToPost, mapPostsDtoToPosts } from "../dto/mappers";
import { PostDto, PostsInfoDto } from "../dto/types";
import { Post, PostFormData, PostsInfo } from "../types";
import { PostClientStructure } from "./types";

class PostClient implements PostClientStructure {
  private apiUrl = import.meta.env.VITE_API_URL;

  public getPostsInfo = async (pageNumber = 1): Promise<PostsInfo> => {
    const response = await fetch(
      `${this.apiUrl}/posts?pageNumber=${pageNumber}`,
    );

    const { posts: postsDto, postsTotal } =
      (await response.json()) as PostsInfoDto;

    const posts = mapPostsDtoToPosts(postsDto);

    return {
      posts,
      postsTotal,
    };
  };

  public addPost = async (postFormData: PostFormData): Promise<Post> => {
    const response = await fetch(`${this.apiUrl}/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postFormData),
    });

    if (!response.ok) {
      throw new Error("Error adding post");
    }

    const newPostDto = (await response.json()) as PostDto;

    return mapPostDtoToPost(newPostDto);
  };

  public deletePost = async (postId: string): Promise<Post> => {
    const response = await fetch(`${this.apiUrl}/posts/${postId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Error deleting post");
    }

    const postDto = (await response.json()) as PostDto;

    return mapPostDtoToPost(postDto);
  };
}

export default PostClient;
