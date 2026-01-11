import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// background images
import coffee1 from "../assets/bgc.jpg";
import coffee2 from "../assets/bg2.jpg";
import coffee3 from "../assets/bg3.jpg";
import coffee4 from "../assets/bg4.jpg";
import coffee5 from "../assets/bg5.jpg";
import coffee6 from "../assets/bg6.jpg";
// import coffee7 from "../assets/bg7.jpg";
// import coffee8 from "../assets/bg8.jpg";
// import coffee9 from "../assets/bg9.jpg";

const images = [
  coffee1,
  coffee2,
  coffee3,
  coffee4,
  coffee5,
  coffee6,
  // coffee7,
  // coffee8,
  // coffee9,
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      
      {/* Background Slider */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",           // cover entire section
            backgroundRepeat: "no-repeat",     // prevent tiling
            backgroundPosition: "center center", // center perfectly
          }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 px-10 md:px-20 max-w-xl">
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          Savor the <br /> Perfect Brew!
        </h1>

        <p className="mt-4 text-gray-200">
          Freshly brewed coffee made with love and premium beans.
        </p>

        <div className="mt-6 flex gap-4">
          {/* Order Now Button as Link */}
          <Link
            to="/menu"
            className="bg-[#c08a5c] text-white px-8 py-3 rounded-full hover:bg-[#a9744f] transition inline-block"
          >
            Order Now
          </Link>

          <Link
            to="/about"
            className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
