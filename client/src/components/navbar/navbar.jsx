import { useState } from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../assets/images/ball.jpg";
import "./navbar.css";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowlinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <header className="headerNav">
      <nav className="navbar">
        <img className="logo" src={LogoImage} alt="logoDearBasketBall" />

        <h1 className="dear">DEAR BASKETBALL</h1>
        <ul className="menu">
          <li className="road">
            <Link to="/" className="roady" onClick={handleShowlinks}>
              Acceuil
            </Link>
          </li>
          <li className="road">
            <Link to="/alltime" className="roady" onClick={handleShowlinks}>
              All time
            </Link>
          </li>
          <li className="road">
            <Link to="/goat" className="roady" onClick={handleShowlinks}>
              Goat
            </Link>
          </li>
          <li className="road">
            <Link to="/news" className="roady" onClick={handleShowlinks}>
              News
            </Link>
          </li>
          <li className="road">
            <Link to="/connexion" className="roady" onClick={handleShowlinks}>
              Connexion
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
