import React, { use } from "react";
import Player from "../Player/Player";

const AllPlayersDetails = ({ allPlayersData }) => {
  const players = use(allPlayersData);

  return (
    
    <div className="grid grid-cols-1 md:grid-cols-3 w-11/12 mx-auto gap-5">
      {players.map((player) => (
        <Player key={player.id} player={player}></Player>
      ))}
    </div>
  );
};

export default AllPlayersDetails;
