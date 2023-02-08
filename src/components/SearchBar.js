import React from "react";

function SearchBar({ handleSearch, handleCheck, isChecked }) {
  return (
    <div className="search">
      <input type="text" className="searchTerm" onChange={handleSearch} />
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
      <label>Sort by Age: </label>
      <input type="checkbox" checked={isChecked} onChange={handleCheck} />
    </div>
  );
}

export default SearchBar;
