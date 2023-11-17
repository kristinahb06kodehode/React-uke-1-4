import style from "./Layout.module.css";
import GithubIcon from "../../Components/GithubIcon";
import SearchBar from "../../Components/NavBar/SearchBar";
import { blogText } from "../../Components/BlogPost/BlogText";
import { Outlet, Link } from "react-router-dom";

// Define the Layout component as a functional component
export default function Layout() {
  return (
    // Main container for the layout
    <div>
      {/* Header section with styling */}
      <header className={style.headerLayout}>
        {/* Navigation section */}
        <nav className={style.navLayout}>
          <ul>
            {/* Navigation links for Home and About pages */}
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        {/* SearchBar component with an example onSearch function and spread blogText props */}
        <SearchBar
          onSearch={(searchTerm) => console.log(searchTerm)}
          {...blogText}
        />
      </header>

      {/* Outlet for rendering nested routes */}
      <Outlet />

      <footer>
        <p>© Kodehode 2023</p>
        <GithubIcon />
      </footer>
    </div>
  );
}
