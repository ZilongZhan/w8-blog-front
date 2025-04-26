import { useEffect } from "react";
import usePosts from "../hooks/usePosts";
import "./PostsPage.css";
import PostsList from "../component/PostsList/PostsList";

const PostsPage: React.FC = () => {
  const { posts, postsTotal, loadPostsInfo } = usePosts();

  useEffect(() => {
    loadPostsInfo();
  }, [loadPostsInfo]);

  return (
    <>
      <h2 className="posts-title">All our recipies</h2>
      <span className="posts-info">
        {posts.length} out of {postsTotal} recipies
      </span>
      <PostsList posts={posts} />
    </>
  );
};

export default PostsPage;
