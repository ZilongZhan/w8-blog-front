import "./NotFoundPage.css";

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found">
      <img
        className="not-found__image"
        src="/images/notfound-big.webp"
        alt="An empty plate with a sad face"
        width={675}
        height={729}
      />
      <span className="not-found__message">
        Oops! The page you're looking for doesn't exist
      </span>
    </div>
  );
};

export default NotFoundPage;
