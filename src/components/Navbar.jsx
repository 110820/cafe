import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-cream px-6 md:px-10 py-5 relative">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl md:text-2xl font-bold text-coffee">
          BrewCafe
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-coffee font-semibold">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservation">Reservation</Link></li>
          <li><Link to="/gallery">Ambiance</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Hamburger Button (Mobile & Tablet) */}
        <button
          className="md:hidden text-coffee text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden mt-6 flex flex-col gap-4 text-coffee font-semibold bg-cream shadow-lg rounded-xl p-6 absolute left-6 right-6 z-50">
          <li onClick={() => setOpen(false)}><Link to="/">Home</Link></li>
          <li onClick={() => setOpen(false)}><Link to="/about">About</Link></li>
          <li onClick={() => setOpen(false)}><Link to="/menu">Menu</Link></li>
          <li onClick={() => setOpen(false)}><Link to="/reservation">Reservation</Link></li>
          <li onClick={() => setOpen(false)}><Link to="/gallery">Ambiance</Link></li>
          <li onClick={() => setOpen(false)}><Link to="/contact">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
