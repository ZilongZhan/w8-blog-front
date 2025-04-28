import { useEffect } from "react";
import { useParams } from "react-router";
import usePosts from "../../hooks/usePosts";
import PostsList from "../../components/PostsList/PostsList";
import Paginator from "../../../components/Paginator/Paginator";
import "./PostsPage.css";

const PostsPage: React.FC = () => {
  const { posts, postsTotal, loadPostsInfo } = usePosts();
  const { currentPage } = useParams();

  const pageNumber = Number(currentPage ?? 1);

  useEffect(() => {
    loadPostsInfo(pageNumber);
  }, [loadPostsInfo, pageNumber]);

  return (
    <>
      <h2 className="page-title">All our recipies</h2>
      <span className="posts-info">
        {posts.length} out of {postsTotal} recipies
      </span>
      <PostsList posts={posts} />
      <Paginator pageNumber={pageNumber} postsTotal={postsTotal} />
    </>
  );
};

export default PostsPage;
