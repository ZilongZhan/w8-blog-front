import "./NotFoundPage.css";

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found">
      <img
        className="not-found__image"
        src="/images/notfound-small.webp"
        srcSet="/images/notfound-small.webp 350w, /images/notfound-big.webp 675w"
        sizes="(max-width: 700px) 350px, 675px"
      />
      <span className="not-found__message">
        Oops! The page you're looking for doesn't exist
      </span>
    </div>
  );
};

export default NotFoundPage;
