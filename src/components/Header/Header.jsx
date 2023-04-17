import React from "react";
import SearchBar from "../SearchBar/SearchBar";

function Header() {
  return (
    <div className="header">
      <h1 className="header--h">
        <strong>BooksData</strong> Search App
      </h1>
      <div className="main-head">
        <SearchBar />
      </div>
    </div>
  );
}

export default Header;
