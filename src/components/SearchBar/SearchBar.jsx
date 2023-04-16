import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useBooks } from "../../context/BooksContext";

function SearchBar() {
  const { setSearch, search, getBookData } = useBooks();

  const handleSubmit = (e) => {
    e.preventDefault();
    getBookData(search);
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
    clearInterval();
  };

  return (
    <div className="search-bar">
      <form className="search-bar--form" onSubmit={handleSubmit}>
        <input
          className="search-bar--input"
          type="search"
          placeholder="Search for a book..."
          value={search}
          onChange={handleChange}
        />
        <button type="submit" className="search-bar--button">
          <SearchIcon sx={{ fontSize: "30px" }}></SearchIcon>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
