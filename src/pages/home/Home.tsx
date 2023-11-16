import { useState } from "react";
import style from "./Home.module.css";
import NavBar from "../../Components/NavBar/NavBar";
import { blogText } from "../../Components/BlogPost/BlogText";
import BlogList from "../../Components/BlogPost/BlogList";
import SearchBar from "../../Components/NavBar/SearchBar";
import FooterSection from "../../Components/NavBar/Footer";

const Home: React.FC = () => {
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
    <div className={style.Home}>
      <NavBar>
        <SearchBar onSearch={handleSearch} />
      </NavBar>
      <BlogList blogText={filteredBlogText} loading={loading} error={error} />
      <FooterSection />
    </div>
  );
};

export default Home;
