import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import AppRouter from "./router/AppRouter";
import PostsContextProvider from "./post/context/PostsContextProvider";
import "@fontsource-variable/roboto/index.css";
import "./styles/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PostsContextProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </PostsContextProvider>
  </StrictMode>,
);
