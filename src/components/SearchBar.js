import React from "react";

function SearchBar({ handleSearch, handleCheck, isChecked, search }) {
  return (
    <div className="search">
      <input value={search} type="text" className="searchTerm" onChange={handleSearch} />
      {/*Created controlled checkbox to toggle sorting by age */}
      <label>Sort by Age: </label>
      <input type="checkbox" checked={isChecked} onChange={handleCheck} />
    </div>
  );
}

export default SearchBar;
