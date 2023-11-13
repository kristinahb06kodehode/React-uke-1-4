// ./Components/NavBar.tsx

import React from "react";

const NavBar: React.FC = () => {
  return (
    <div className="header">
      <header className="navbar">
        <div className="logoCircle"></div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/trending">Trending</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
