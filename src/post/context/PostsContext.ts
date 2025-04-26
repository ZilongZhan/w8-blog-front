import { createContext } from "react";
import { PostsContextStructure } from "./types";

const PostsContext = createContext<PostsContextStructure | null>(null);

PostsContext.displayName = "PostsContext";

export default PostsContext;
