import { ReactNode } from "react";

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
    </div>
  );
}
