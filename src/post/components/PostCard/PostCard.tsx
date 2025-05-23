import Button from "../../../components/Button/Button";
import { Post } from "../../types";
import "./PostCard.css";

interface PostCardProps {
  post: Post;
  index: number;
}

const PostCard: React.FC<PostCardProps> = ({
  post: { title, publishDate, author, imageUrl, imageAlt, content, tags },
  index,
}) => {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(publishDate);

  const wordsLimit = 100;
  const contentPreview = content.split(" ").slice(0, wordsLimit).join(" ");

  const handleDelete = (): void => {};

  const loadingMode = index <= 3 ? "eager" : "lazy";

  return (
    <article className="post">
      <Button
        modifier="delete"
        action={handleDelete}
        children="✖"
        aria-label="Delete recipe"
      />
      <img
        className="post__image"
        src={imageUrl}
        alt={imageAlt}
        loading={loadingMode}
        width={400}
        height={400}
      />
      <div className="post-info">
        <h3 className="post__title">{title}</h3>
        <span>
          {formattedDate} by {author}
        </span>
        <p className="post__content post__content--preview">{contentPreview}</p>
        <ul className="post__tags-list">
          {tags.map((tag) => (
            <li key={tag}>
              <span className="post__tag">#{tag}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default PostCard;
