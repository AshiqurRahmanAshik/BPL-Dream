import React, { useState } from "react";
import AvailablePlayers from "./../AvailablePlayers/AvailablePlayers";

const Player = ({ player, coin, setCoin }) => {
  // console.log(player);
  const handleCoin = (playerPrice) => {
    if (playerPrice > coin) {
      alert("Not Enough Coin to Buy player");
    }
    const availablePrice = coin - playerPrice;
    setCoin(availablePrice);
  };
  const {
    playerImage,
    playerName,
    playerCountry,
    playingRole,
    battingStyle,
    bowlingStyle,
    price,
    rating,
  } = player;
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div className="card bg-base-100 shadow-sm p-2 border space-y-2 flex flex-col justify-between">
      <figure>
        <img className="w-full" src={playerImage} alt="playerImage" />
      </figure>
      <div className="space-y-2">
        <h2 className="card-title">{playerName}</h2>
        <div className="flex justify-between">
          <p>{playerCountry}</p>
          <p>{playingRole}</p>
        </div>
        <hr />
        <div>
          <p className="font-bold">Rating {rating}</p>
          <div className="flex justify-between">
            <p>{battingStyle}</p>
            <p>{bowlingStyle}</p>
          </div>
          <div className="flex justify-between">
            <p>Price:${price}</p>
            <button
              disabled={isSelected}
              onClick={() => {
                setIsSelected(true);
                handleCoin(price);
              }}
              className="btn btn-primary px-2  rounded border"
            >
              {isSelected === true ? "Selected" : "Choose a Player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
