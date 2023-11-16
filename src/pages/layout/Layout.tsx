import style from "./Layout.module.css";
import GithubIcon from "../../Components/GithubIcon";
import SearchBar from "../../Components/NavBar/SearchBar";
import { blogText } from "../../Components/BlogPost/BlogText";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header className={style.headerLayout}>
        <nav className={style.navLayout}>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <SearchBar
          onSearch={(searchTerm) => console.log(searchTerm)}
          {...blogText}
        />
      </header>

      <Outlet />

      <footer>
        <p>© Kodehode 2023</p>
        <GithubIcon />
      </footer>
    </div>
  );
}
