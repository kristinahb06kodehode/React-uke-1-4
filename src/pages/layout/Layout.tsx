import style from "./Layout.module.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import { ReactNode } from "react";
import GithubIcon from "../../Components/GithubIcon";
type NavBarProps = {
  children: ReactNode;
};

export default function NavBar({ children }: NavBarProps) {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
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
