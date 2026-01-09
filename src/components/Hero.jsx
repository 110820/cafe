import { Link } from "react-router-dom";
import coffee from "../assets/bgc.jpg";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-[80vh] flex items-center"
      style={{
        backgroundImage: `url(${coffee})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 px-10 md:px-20 max-w-xl">
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          Savor the <br /> Perfect Brew!
        </h1>

        <p className="mt-4 text-gray-200">
          Freshly brewed coffee made with love and premium beans.
        </p>

        <div className="mt-6 flex gap-4">
          {/* ORDER NOW */}
          <Link
            to="/menu"
            className="bg-[#c08a5c] text-white px-8 py-3 rounded-full hover:bg-[#a9744f] transition inline-block"
          >
            Order Now
          </Link>

          <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
