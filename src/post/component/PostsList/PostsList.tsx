import { Post } from "../../types";
import "./PostsList.css";

interface PostsListProps {
  posts: Post[];
}

const PostsList: React.FC<PostsListProps> = ({ posts }) => {
  return (
    <div className="posts-container">
      <ul className="posts">
        {posts.map((post) => (
          <li key={post.id}>
            <article className="post">
              <h3 className="post__title">{post.title}</h3>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
