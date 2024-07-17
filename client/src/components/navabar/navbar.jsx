import LogoImage from "../../assets/images/ball.jpg";
import "./navbar.css";

function Navbar() {
  return (
    <header className="headerNav">
      <nav className="navbar">
        <img className="logo" src={LogoImage} alt="logoDearBasketBall" />

        <h1 className="dear">DEAR BASKETBALL</h1>
        <ul className="menu">
          <li className="road">Acceuil</li>
          <li className="road">All time</li>
          <li className="road">Goat</li>
          <li className="road">News</li>
          <li className="road">Connexion</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
