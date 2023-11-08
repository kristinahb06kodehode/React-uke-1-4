import "./App.css";
import NavBar from "./Components/NavBar.tsx";
import UserDetails from "./Components/UserDetails.tsx";
import TextContent from "./Components/TextContent.tsx";
import GithubIcon from "./Components/svg/GithubIcon.tsx";
import { details } from "./Card.ts";
import SearchBar from "./Components/SearchBar.tsx";
import Button from "./Components/Button.tsx";

const App = () => {
  return (
    <div className="app">
      <NavBar />

      <main>
        <h1>Kitty Central</h1>
        <SearchBar />
      </main>

      {details.map((parameter) => {
        return (
          <section>
            <div className="user-descrip">
              <UserDetails data={parameter} />
              <Button />
            </div>
            <TextContent data={parameter} />
          </section>
        );
      })}

      <footer>
        <p>Modul D</p>
        <GithubIcon />
      </footer>
    </div>
  );
};

export default App;
