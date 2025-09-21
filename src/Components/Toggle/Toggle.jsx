import React, { useState } from "react";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";
import AvailablePlayers from "./../AvailablePlayers/AvailablePlayers";

const Toggle = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      {toggle === true ? (
        <AvailablePlayers></AvailablePlayers>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </div>
  );
};

export default Toggle;
