import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({ planeteers }) {
  //map over array of planeteers, creating components to render cards
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
      {planeteerCards}      {/*display all planeteer cards created from map above*/}
    </ul>
  );
}

export default PlaneteersContainer;
