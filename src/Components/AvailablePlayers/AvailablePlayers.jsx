import React from "react";
import AllPlayersDetails from "../AllPlayersDetails/AllPlayersDetails";
import { Suspense } from "react";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const fetchAllPlayersData = async () => {
  const res = await fetch("./AllPlayers.json");
  return res.json();
};

const allPlayersData = fetchAllPlayersData();
const AvailablePlayers = ({
  coin,
  setCoin,
  purchasedPlayer,
  setPurchasedPlayer,
  selectedCount,
  setSelectedCount,
}) => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="text-center">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        }
      >
        <AllPlayersDetails
          coin={coin}
          setCoin={setCoin}
          purchasedPlayer={purchasedPlayer}
          setPurchasedPlayer={setPurchasedPlayer}
          allPlayersData={allPlayersData}
          selectedCount={selectedCount}
          setSelectedCount={setSelectedCount}
        ></AllPlayersDetails>
      </Suspense>
    </div>
  );
};

export default AvailablePlayers;
