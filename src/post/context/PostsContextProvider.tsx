import { PropsWithChildren } from "react";
import PostsContext from "./PostsContext";
import usePosts from "../hooks/usePosts";

const PostsContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const postsContextValue = usePosts();

  return (
    <PostsContext.Provider value={postsContextValue}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
