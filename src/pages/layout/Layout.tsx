import style from "./Layout.module.css";
import React from "react";
import GithubIcon from "../../Components/GithubIcon";
type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#" className={style.navItem}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className={style.navItem}>
                About
              </a>
            </li>
          </ul>
        </nav>
        <div className="search-bar">{children}</div>
      </header>
      <footer>
        <p>© Kodehode 2023</p>
        <GithubIcon />
      </footer>
    </div>
  );
}
