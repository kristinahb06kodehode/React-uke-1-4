import { useState } from "react";
import "./App.css";
import NavBar from "./layout/Layout/NavBar.tsx";
import { blogText } from "./Components/BlogPost/BlogText";
import BlogList from "./Components/BlogPost/BlogList";
import SearchBar from "./Components/SearchBar.tsx";
import GithubIcon from "./Components/GithubIcon.tsx";
import { Layout } from "./pages/layout/Layout.tsx";
import { LandingPage } from "./pages/landing/LandingPage.tsx";
import NotFound from "./pages/notfound/NotFound.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filteredBlogText, setFilteredBlogText] = useState(blogText);

  const handleSearch = (searchTerm: string) => {
    try {
      setLoading(true);

      const filteredResults = blogText.filter((post) =>
        (post.content + " " + post.additionalContent)
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );

      setFilteredBlogText(filteredResults);
    } catch (error) {
      if (typeof error === "string") {
        setError(error);
      } else {
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="src\pages\layout\Layout.tsx" element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/NotFound" element={<NotFound />} />
        </Route>
        <div>
          <NavBar>
            <SearchBar onSearch={handleSearch} />
          </NavBar>
          <BlogList
            blogText={filteredBlogText}
            loading={loading}
            error={error}
          />

          <footer>
            <p>© Kodehode 2023</p>
            <GithubIcon />
          </footer>
        </div>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
