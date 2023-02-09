import React from "react";
import { getRandomPlaneteer } from "../data/planeteers";

function RandomButton({ setPlaneteers, planeteers }) {
  //get random planeteer and post to db.json
  const handleClick = () => {
    const randomPlaneteer = getRandomPlaneteer();
    fetch('http://localhost:8003/planeteers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(randomPlaneteer),
    })
    .then(r => r.json())
    //pessimistically render new random planeteer
    .then(newPlaneteer => setPlaneteers([...planeteers, newPlaneteer]))
  }

  return (
    <div className="centered">
      <button onClick={handleClick} id="random-planeteer">
        Click to Add a Random Planeteer
      </button>
    </div>
  );
}

export default RandomButton;
