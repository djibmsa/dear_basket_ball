import { useLoaderData } from "react-router-dom";

import PlayerList from "../components/player/playerList";
import PlayerForm from "../components/player/playerForm";

function Players() {
  const players = useLoaderData();

  return (
    <>
      <h1>Franchises</h1>
      <PlayerForm />
      <PlayerList players={players} />
    </>
  );
}

export default Players;
