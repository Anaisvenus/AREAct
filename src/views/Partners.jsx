import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";
// import "./Partners.css";

function Partners() {
  return (
    <div className="Partners h-screen">
      <div className="flex justify-center items-center space-x-10">
        {/* Logo positioned within the grid */}
        <div>
          <img className="h-20 mx-auto" src={logo} alt="Logo" />
        </div>

        {/* Grid items with centered text */}
        <Link to="/" className="text-center hover:font-bold">Accueil</Link>

        <Link to="/" className="text-center hover:font-bold">A propos</Link>

        <Link to="/" className="text-center hover:font-bold">Nos Services</Link>

        <Link to="/" className="text-center hover:font-bold">Nos Références</Link>

        <Link to="/" className="text-center hover:font-bold">Contactez-nous</Link>
      </div>
    </div>
  );
}

export default Partners;
