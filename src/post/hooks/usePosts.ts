import { useCallback, useMemo, useState } from "react";
import { PostsContextStructure } from "../context/types";
import { PostsInfo } from "../types";
import PostClient from "../client/PostClient";

const usePosts = (): PostsContextStructure => {
  const [postsInfo, setPosts] = useState<PostsInfo>({
    posts: [],
    postsTotal: 0,
  });

  const postClient = useMemo(() => new PostClient(), []);

  const loadPostsInfo = useCallback(
    async (pageNumber?: number): Promise<void> => {
      const apiPostsInfo = await postClient.getPostsInfo(pageNumber);

      setPosts(apiPostsInfo);
    },
    [postClient],
  );

  return { ...postsInfo, loadPostsInfo };
};

export default usePosts;
