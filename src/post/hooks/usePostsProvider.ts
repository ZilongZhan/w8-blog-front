import { useContext } from "react";
import { PostsContextStructure } from "../context/types";
import PostsContext from "../context/PostsContext";

const usePostsProvider = (): PostsContextStructure => {
  const context = useContext(PostsContext);

  if (!context) {
    throw new Error("Missing context for posts provider");
  }

  return context;
};

export default usePostsProvider;
