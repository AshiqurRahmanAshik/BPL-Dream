import React from "react";

const SelectedPlayers = ({ purchasedPlayer, removePlayer }) => {
  return (
    <div className="w-11/12 mx-auto">
      {purchasedPlayer.map((player) => (
        <div className="border rounded-2xl p-2 m-1" key={player.id}>
          <div className="flex items-center justify-between">
            <div>
              <img src={player.playerImage} className="w-20" alt="" />
              <p>{player.playerName}</p>
              <p> {player.playingRole}</p>
            </div>
            <div>
              <img
                onClick={() => {
                  removePlayer(player);
                }}
                src="https://i.ibb.co.com/PvbXfTpz/cancel.png"
                alt="logo"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectedPlayers;
