// Import the useState hook from React
import { useState } from "react";
// Import the external styles for the component
import "../../App.css";

// Define the props for the SearchBar component
type SearchBarProps = {
  onSearch: (searchTerm: string) => void;
};

// Define the SearchBar component with React functional component syntax
export default function SearchBar({ onSearch }: SearchBarProps) {
  // State to track the input value for search
  const [searchInput, setSearchInput] = useState("");

  // Function to handle the search button click
  const handleSearch = () => {
    // Call the onSearch prop with the current search input value
    onSearch(searchInput);
  };

  // Function to handle the "Enter" key press in the search input
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Check if the pressed key is "Enter"
    if (event.key === "Enter") {
      // Call the handleSearch function when "Enter" is pressed
      handleSearch();
    }
  };

  return (
    // Search bar container
    <div className="search-bar">
      {/* Input field for searching */}
      <input
        type="text"
        placeholder="Search"
        value={searchInput}
        // Update the searchInput state on input change
        onChange={(event) => setSearchInput(event.target.value)}
        // Call handleKeyDown on "Enter" key press
        onKeyDown={handleKeyDown}
      />
      {/* Search button */}
      <button className="search-btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
