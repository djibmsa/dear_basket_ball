import { Link, useLoaderData } from "react-router-dom";

import FranchiseList from "../components/franchise/franchiseList";

function FranchiseDetails() {
  const player = useLoaderData();

  return (
    <>
      <h1>{player.name}</h1>
      <Link to={`/players/${player.id}/edit`}>Modifier</Link>
      <FranchiseList franchise={player.franchises} />
    </>
  );
}

export default FranchiseDetails;
