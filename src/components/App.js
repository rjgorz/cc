import React, { useState, useEffect } from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {
  const [planeteers, setPlaneteers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:8003/planeteers')
    .then(r => r.json())
    .then(data => setPlaneteers(data));
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
  
  const planeteersToRender = planeteers.filter(planeteer => {
    return (
      (planeteer.name.toLowerCase().includes(search.toLowerCase())
        ||
      planeteer.bio.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <div>
      <Header />
      <SearchBar handleSearch={handleSearch} />
      <RandomButton />
      <PlaneteersContainer planeteers={planeteersToRender} />
    </div>
  );
}

export default App;
