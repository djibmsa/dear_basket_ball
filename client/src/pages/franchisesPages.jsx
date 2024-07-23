import { useLoaderData } from "react-router-dom";

import FranchiseList from "../components/franchise/franchiseList";
import FranchiseForm from "../components/franchise/franchiseForm";

function Franchises() {
  const franchises = useLoaderData();

  return (
    <>
      <h1>Franchises</h1>
      <FranchiseForm />
      <FranchiseList franchises={franchises} />
    </>
  );
}

export default Franchises;