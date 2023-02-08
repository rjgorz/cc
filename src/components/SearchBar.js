import React from "react";

function SearchBar({ handleSearch }) {
  return (
    <div className="search">
      <input type="text" className="searchTerm" onChange={handleSearch} />
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
    </div>
  );
}

export default SearchBar;
