import "./App.css";
import NavBar from "./Components/NavBar.tsx";
import SearchBar from "./Components/SearchBar.tsx";
import UserDetails from "./Components/UserDetails.tsx";
import TextContent from "./Components/TextContent.tsx";
import GithubIcon from "./Components/GithubIcon.tsx";
import { details } from "./Card.ts";

function App() {
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
            <UserDetails data={parameter} />
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
}

export default App;
