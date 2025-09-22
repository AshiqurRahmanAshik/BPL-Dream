import React, { useState } from "react";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";
import AvailablePlayers from "./../AvailablePlayers/AvailablePlayers";

const Toggle = ({ coin, setCoin }) => {
  const [toggle, setToggle] = useState(true);
  const [purchasedPlayer, setPurchasedPlayer] = useState([]);
  const [selectedCount, setSelectedCount] = useState(0);
  const removePlayer = (p) => {
    console.log(p);
    const filteredData = purchasedPlayer.filter((player) => player.id !== p.id);
    setPurchasedPlayer(filteredData);
    setSelectedCount(selectedCount - 1);
    setCoin(coin - p.price);
  };

  return (
    <div>
      <div className="flex justify-between w-11/12 mx-auto">
        <p className="text-xl font-bold">
          {toggle
            ? "Available Players"
            : `Selected Players(${purchasedPlayer.length}/6)`}
        </p>
        <div className="space-x-0.5">
          <button
            onClick={() => {
              setToggle(true);
            }}
            className={`border px-2 py-1 rounded font-semibold ${
              toggle === true ? "bg-yellow-200" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => {
              setToggle(false);
            }}
            className={`border px-2 py-1 rounded font-semibold ${
              toggle === false ? "bg-yellow-200" : ""
            }`}
          >
            Selected (<span>{selectedCount}/6</span>)
          </button>
        </div>
      </div>
      {toggle === true ? (
        <AvailablePlayers
          coin={coin}
          setCoin={setCoin}
          purchasedPlayer={purchasedPlayer}
          setPurchasedPlayer={setPurchasedPlayer}
          selectedCount={selectedCount}
          setSelectedCount={setSelectedCount}
        ></AvailablePlayers>
      ) : (
        <SelectedPlayers
          purchasedPlayer={purchasedPlayer}
          setPurchasedPlayer={setPurchasedPlayer}
          selectedCount={selectedCount}
          setSelectedCount={setSelectedCount}
          removePlayer={removePlayer}
        ></SelectedPlayers>
      )}
    </div>
  );
};

export default Toggle;
