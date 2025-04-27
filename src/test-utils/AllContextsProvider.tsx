import { MemoryRouter } from "react-router";
import { PropsWithChildren } from "react";
import PostsContextProvider from "../post/context/PostsContextProvider";

const AllContextsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <PostsContextProvider>
      <MemoryRouter>{children}</MemoryRouter>
    </PostsContextProvider>
  );
};

export default AllContextsProvider;
