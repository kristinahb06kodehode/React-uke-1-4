import { ReactNode } from "react";
import { Link } from "react-router-dom";
import style from "../../pages/layout/Layout.module.css";
type NavBarProps = {
  children: ReactNode;
};

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  return (
    <div>
      <header className={style.navbarbar}>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <div className="search-bar">{children}</div>
      </header>
    </div>
  );
};

export default NavBar;
