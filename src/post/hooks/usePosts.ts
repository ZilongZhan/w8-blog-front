import { useState } from "react";
import { PostsContextStructure } from "../context/types";
import { PostsInfo } from "../types";

const usePosts = (): PostsContextStructure => {
  const [postsInfo] = useState<PostsInfo>({
    posts: [],
    postsTotal: 0,
  });

  return { ...postsInfo };
};

export default usePosts;
