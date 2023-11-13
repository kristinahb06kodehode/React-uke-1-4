// App.tsx
import "./App.css";
import React from "react";
import NavBar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
import DataLoader from "./Components/DataLoader";
import LoadingStatus from "./Components/LoadingStatus";
import ErrorDisplay, { ErrorDisplayProps } from "./Components/ErrorDisplay";
import DataDisplay, { Data } from "./Components/DataDisplay";
import UserDetails from "./Components/UserDetails";
import TextContent from "./Components/TextContent";
import Button from "./Components/Button";
import GithubIcon from "./Components/svg/GithubIcon";
import { details } from "./Card";

const App: React.FC = () => {
  const data: Data | null = null; // Replace null with your data
  const error: ErrorDisplayProps | null = null; // Replace null with your error

  return (
    <div className="app">
      <NavBar />

      <main>
        <h1>Kitty Central</h1>
        <SearchBar />
      </main>

      <DataLoader />
      <LoadingStatus />
      <DataDisplay data={data} />
      <ErrorDisplay error={error} />
      {details.map((parameter, index) => (
        <section key={index}>
          <div className="user-descrip">
            <UserDetails data={parameter} />
            <Button />
          </div>
          <TextContent data={parameter} />
        </section>
      ))}

      <footer>
        <p>Modul D</p>
        <GithubIcon />
      </footer>
    </div>
  );
};

export default App;
