
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-cream">
      <h1 className="text-2xl font-bold text-coffee"> BrewCafe</h1>

      <ul className="hidden md:flex gap-8 text-coffee font-medium">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/reservation">Reservation</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/gallery">Ambiance</Link></li>
        

      </ul>

      <button className="bg-brown text-white px-5 py-2 rounded-full">
        Order Now
      </button>
    </nav>
  );
};

export default Navbar;

