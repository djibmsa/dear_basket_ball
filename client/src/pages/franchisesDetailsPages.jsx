import { Link, useLoaderData } from "react-router-dom";

import PlayerList from "../components/player/playerList";

function FranchiseDetails() {
  const franchise = useLoaderData();

  return (
    <>
      <h1>{franchise.name}</h1>
      <Link to={`/franchises/${franchise.id}/edit`}>Modifier</Link>
      <PlayerList player={franchise.players} />
    </>
  );
}

export default FranchiseDetails;
