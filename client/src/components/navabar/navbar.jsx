import LogoImage from "../../assets/images/ball.jpg"
import "./navbar.css"

function Navbar() {
    return(

        <header>
           <img
                className="logo"
                src={LogoImage}
                alt="logoDearBasketBall" />

<nav className="navbar">

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
    )
};

export default Navbar;