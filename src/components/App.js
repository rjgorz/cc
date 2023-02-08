import React, { useState, useEffect } from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {
  const [planeteers, setPlaneteers] = useState([]);
  const [search, setSearch] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8003/planeteers')
    .then(r => r.json())
    .then(data => setPlaneteers(data));
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
  const handleCheck = () => {
    setIsChecked(isChecked => !isChecked);
  }

  //bubble sort algorithm to arrange from youngest to oldest
  const bubbleSort = (arr) => {
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < ( arr.length - i -1 ); j++){
        if(arr[j].born < arr[j+1].born){
          let temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j+1] = temp
        }
      }
    }
    return arr;
  }
  
  //
  let planeteersToRender = planeteers.filter(planeteer => {
    return (
      (planeteer.name.toLowerCase().includes(search.toLowerCase())
        ||
      planeteer.bio.toLowerCase().includes(search.toLowerCase()))
    );
  });

  if(isChecked)
    planeteersToRender = bubbleSort(planeteersToRender);

  return (
    <div>
      <Header />
      <SearchBar handleSearch={handleSearch} handleCheck={handleCheck} isChecked={isChecked} />
      <RandomButton />
      <PlaneteersContainer planeteers={planeteersToRender} />
    </div>
  );
}

export default App;
