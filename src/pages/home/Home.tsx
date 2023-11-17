// Import React library and necessary components
import { useState } from "react";
import style from "./Home.module.css";
import NavBar from "../../Components/NavBar/NavBar";
import { blogText } from "../../Components/BlogPost/BlogText";
import BlogList from "../../Components/BlogPost/BlogList";
import SearchBar from "../../Components/NavBar/SearchBar";
import FooterSection from "../../Components/NavBar/Footer";

// Define the Home component as a functional component
const Home: React.FC = () => {
  // State for tracking loading status, error, and filtered blog text
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filteredBlogText, setFilteredBlogText] = useState(blogText);

  // Function to handle search based on the input search term
  const handleSearch = (searchTerm: string) => {
    try {
      // Set loading to true while performing the search
      setLoading(true);

      // Filter the blog posts based on the search term
      const filteredResults = blogText.filter((post) =>
        (post.content + " " + post.additionalContent)
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );

      // Set the filtered blog text state with the search results
      setFilteredBlogText(filteredResults);
    } catch (error) {
      // Handle errors during the search
      if (typeof error === "string") {
        setError(error);
      } else {
        console.error(error);
      }
    } finally {
      // Set loading to false after the search is complete
      setLoading(false);
    }
  };

  return (
    // Main container with Home styling
    <div className={style.Home}>
      {/* Navigation bar with search bar */}
      <NavBar>
        <SearchBar onSearch={handleSearch} />
      </NavBar>
      {/* Blog list component with filtered blog text, loading status, and error */}
      <BlogList blogText={filteredBlogText} loading={loading} error={error} />
      {/* Footer section */}
      <FooterSection />
    </div>
  );
};

export default Home;
