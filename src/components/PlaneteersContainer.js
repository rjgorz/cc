import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({ planeteers }) {
  const planeteerCards = planeteers.map(planeteer => {
    return (
      <Planeteer
        key={planeteer.id}
        id={planeteer.id}
        name={planeteer.name}
        fromUSA={planeteer.fromUSA}
        born={planeteer.born}
        bio={planeteer.bio}
        quote={planeteer.quote}
        pictureUrl={planeteer.pictureUrl}
        twitter={planeteer.twitter}
      />
    );
  });

  return (
    <ul className="cards">
      {planeteerCards}
    </ul>
  );
}

export default PlaneteersContainer;
