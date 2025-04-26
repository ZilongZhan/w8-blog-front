import { PropsWithChildren } from "react";
import PostsContext from "./PostsContext";
import usePosts from "../hooks/usePosts";

const PostsContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const postsContext = usePosts();

  return (
    <PostsContext.Provider value={postsContext}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
