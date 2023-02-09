import React, { useState } from "react";

function Planeteer({ id, name, fromUSA, born, bio, quote, pictureUrl, twitter }) {
  //set up state to track whether or not the image has been clicked
  //to conditionally render bio vs. quote
  const [isClicked, setIsClicked] = useState(false);

  //handler function to toggle clicked state
  const handleClick = () => {
    setIsClicked(isClicked => !isClicked);
  }

  //get current year to calculate age
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
          <p className="card__text">{isClicked ? quote : bio}</p> {/*conditional to toggle bio/quote when clicked*/}
          <div className="card__detail">
            <p>{twitter}</p>
            <p>Age: {year - born}</p>                             {/*display age based on current year minus year born*/}
            <p>{fromUSA ? "USA-based" : "Working overseas"}</p>   {/*conditional to display location based on fromUSA boolean*/}
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
