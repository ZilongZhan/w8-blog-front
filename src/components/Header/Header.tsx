import Navigator from "../Navigator/Navigator";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="title-container">
        <h1 className="app-title">Rice Cooking</h1>
        <img
          className="app-logo"
          src="/ricecooker.svg"
          alt="Rice cooker"
          height={60}
          width={60}
        />
      </div>
      <Navigator />
    </header>
  );
};

export default Header;
