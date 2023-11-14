import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { blogText } from "./Components/BlogPost/BlogText";
import BlogList from "./Components/BlogPost/BlogList";
import SearchBar from "./Components/NavBar/SearchBar";

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
    <div>
      <NavBar>
        <SearchBar onSearch={handleSearch} />
      </NavBar>
      <BlogList blogText={filteredBlogText} loading={loading} error={error} />

      <footer>
        <p>© Kodehode 2023</p>
      </footer>
    </div>
  );
}

export default App;
