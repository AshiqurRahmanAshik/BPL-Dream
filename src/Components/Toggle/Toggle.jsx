import React, { useState } from "react";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";
import AvailablePlayers from "./../AvailablePlayers/AvailablePlayers";

const Toggle = ({ coin, setCoin }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <div className="flex justify-between w-11/12 mx-auto">
        <p className="text-xl font-bold">Available Players</p>
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
            Selected (<span>0</span>)
          </button>
        </div>
      </div>
      {toggle === true ? (
        <AvailablePlayers coin={coin} setCoin={setCoin}></AvailablePlayers>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </div>
  );
};

export default Toggle;
