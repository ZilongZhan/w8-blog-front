import { useNavigate } from "react-router";
import "./Paginator.css";

interface PaginatorProps {
  pageNumber: number;
  postsTotal: number;
}

const Paginator: React.FC<PaginatorProps> = ({ pageNumber, postsTotal }) => {
  const navigate = useNavigate();

  const pagesTotal = Math.ceil(postsTotal / 5);
  const previousPage = pageNumber - 1;
  const nextPage = pageNumber + 1;
  const isFirstPage = pageNumber === 1;
  const isLastPage = pageNumber === pagesTotal;

  const goToPage = (pageNumber: number): void => {
    navigate(`/posts/${pageNumber}`);
  };

  return (
    <div className="paginator">
      {!isFirstPage && (
        <button
          className="button--paginator"
          onClick={() => goToPage(previousPage)}
          aria-label="Previous page"
        >
          {"<"}
        </button>
      )}
      <ul className="page-indicators-list">
        {!isFirstPage && <span className="page-indicator">{previousPage}</span>}
        <span className="page-indicator page-indicator--current">
          {pageNumber}
        </span>
        {!isLastPage && <span className="page-indicator">{nextPage}</span>}
      </ul>
      {!isLastPage && (
        <button
          className="button--paginator"
          onClick={() => goToPage(nextPage)}
          aria-label="Next page"
        >
          {">"}
        </button>
      )}
    </div>
  );
};

export default Paginator;
