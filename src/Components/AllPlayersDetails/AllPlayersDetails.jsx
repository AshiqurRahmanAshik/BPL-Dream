import React, { use } from "react";

const AllPlayersDetails = ({ allPlayersData }) => {
  const players = use(allPlayersData);
  return (
    <div>
      <h1>{players.length}</h1>
    </div>
  );
};

export default AllPlayersDetails;
