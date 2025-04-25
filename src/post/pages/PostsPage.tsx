import "./PostsPage.css";

const PostsPage: React.FC = () => {
  return (
    <div className="posts-container">
      <h2 className="posts-title">All our recipies</h2>
      <div className="page-info">
        <span>Page 1</span>
        <span>5 out of 66 recipies</span>
      </div>
    </div>
  );
};

export default PostsPage;
