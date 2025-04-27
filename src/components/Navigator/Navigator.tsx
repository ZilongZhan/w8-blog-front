import { NavLink } from "react-router";
import "./Navigator.css";

const Navigator: React.FC = () => {
  return (
    <nav className="navigator">
      <ul className="navigator__list">
        <li>
          <NavLink className="navigator__link" to="/posts">
            😋Posts
          </NavLink>
        </li>
        <li>
          <NavLink className="navigator__link" to="/add-post">
            📝Add Post
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;
