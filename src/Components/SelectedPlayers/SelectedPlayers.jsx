import React from "react";

const SelectedPlayers = ({ purchasedPlayer }) => {
  console.log(purchasedPlayer);

  return (
    <div className="w-11/12 mx-auto">
      {purchasedPlayer.map((player) => (
        <div className="border rounded-2xl p-2 m-1" key={player.id}>
          <div className="flex items-center justify-between">
            <div>
              <img src={player.playerImage} className="w-20" alt="" />
              {player.playerName}
            </div>
            <div>
              <img src="https://i.ibb.co.com/PvbXfTpz/cancel.png" alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectedPlayers;
