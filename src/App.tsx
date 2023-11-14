// App.tsx
import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
import DataLoader from "./Components/DataLoader";
import LoadingStatus from "./Components/LoadingStatus";
import ErrorDisplay from "./Components/ErrorDisplay";
import DataDisplay from "./Components/DataDisplay";
import UserDetails from "./Components/UserDetails";
import TextContent from "./Components/TextContent";
import Button from "./Components/Button";
import GithubIcon from "./Components/svg/GithubIcon";
import FilterableList from "./Components/FilterableList/FilterableList"; // Legg til FilterableList
import { details } from "./Card";
import { ErrorDisplayProps } from "./Components/ErrorDisplay";

const App: React.FC = () => {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<ErrorDisplayProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://http.cat/[status_code]");
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError({
          error: {
            name: "AxiosError",
            message: "Feil oppsto",
            isAxiosError: true,
            toJSON: () => ({}),
          },
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Tomt array som dependency, slik at useEffect kjører kun ved mount.

  return (
    <div className="app">
      <NavBar />
      <main>
        <h1>Kitty Central</h1>
        <SearchBar />
        <DataLoader />
        <FilterableList /> {/* Legg til FilterableList her */}
      </main>
      {loading && <LoadingStatus />} {/* Vis LoadingStatus når data lastes */}
      {error && <ErrorDisplay error={error} />}{" "}
      {data && <DataDisplay data={data} />}{" "}
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
