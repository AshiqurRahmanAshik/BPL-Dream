import React from "react";
import AllPlayersDetails from "../AllPlayersDetails/AllPlayersDetails";
import { Suspense } from "react";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const fetchAllPlayersData = async () => {
  const res = await fetch("./AllPlayers.json");
  return res.json();
};

const AvailablePlayers = () => {
  const allPlayersData = fetchAllPlayersData();
  return (
    <div>
      <Suspense
        fallback={
          <div className="text-center">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        }
      >
        <AllPlayersDetails allPlayersData={allPlayersData}></AllPlayersDetails>
      </Suspense>
    </div>
  );
};

export default AvailablePlayers;
