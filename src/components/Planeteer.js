import React, { useState } from "react";

function Planeteer({ id, name, fromUSA, born, bio, quote, pictureUrl, twitter }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(isClicked => !isClicked);
  }

  const year = new Date().getFullYear();

  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={pictureUrl}
          alt={name}
          className="card__image"
          onClick={handleClick}
        />
        <div className="card__content">
          <div className="card__title">{name}</div>
          <p className="card__text">{isClicked ? quote : bio}</p>
          <div className="card__detail">
            <p>{twitter}</p>
            <p>Age: {year - born}</p>
            <p>{fromUSA ? "USA-based" : "Working overseas"}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
