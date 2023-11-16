import { ReactNode } from "react";
import { Link } from "react-router-dom";

type NavBarProps = {
  children: ReactNode;
};

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  return (
    <div>
      <header>
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
