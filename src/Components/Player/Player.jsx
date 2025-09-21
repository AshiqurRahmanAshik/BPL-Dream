import React from "react";

const Player = ({ player }) => {
  console.log(player);
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
            <p>{battingStyle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
