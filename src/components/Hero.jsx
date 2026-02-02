import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// background images
import coffee1 from "../assets/bgc.jpg";

import coffee3 from "../assets/bg3.jpg";
import coffee4 from "../assets/bg4.jpg";
import coffee5 from "../assets/bg5.jpg";
import coffee6 from "../assets/bg6.jpg";

const images = [coffee1,  coffee3, coffee4, coffee5, coffee6];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const [showHeading, setShowHeading] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  // 🔁 Background slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 🎬 Staggered content animation
  useEffect(() => {
    setShowHeading(false);
    setShowText(false);
    setShowButtons(false);

    const h = setTimeout(() => setShowHeading(true), 150);
    const t = setTimeout(() => setShowText(true), 350);
    const b = setTimeout(() => setShowButtons(true), 550);

    return () => {
      clearTimeout(h);
      clearTimeout(t);
      clearTimeout(b);
    };
  }, [current]);

  // ✅ RETURN MUST BE INSIDE THE FUNCTION
  return (
    <section className="relative w-full min-h-[100vh] flex items-center overflow-hidden">

      {/* Background Slider */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl px-4 sm:px-8 md:px-16 lg:px-20 text-center md:text-left">

        {/* Heading */}
        {/* Heading – word by word animation */}
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight flex flex-wrap gap-x-3">
  {["Savor", "the", "Perfect", "Brew!"].map((word, index) => (
    <span
      key={index}
      className={`
        inline-block transition-all duration-700 ease-out
        ${showHeading ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {word}
    </span>
  ))}
</h1>


        {/* Text */}
        <p
          className={`mt-4 text-gray-200 text-sm sm:text-base md:text-lg max-w-xl mx-auto md:mx-0
            transition-all duration-700
            ${showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          Freshly brewed coffee made with love and premium beans.
        </p>

        {/* Buttons */}
        <div
          className={`mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start
            transition-all duration-700
            ${showButtons ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          <Link
            to="/menu"
            className="bg-[#c08a5c] text-white px-7 py-3 rounded-full hover:bg-[#a9744f] transition"
          >
            Order Now
          </Link>

          <Link
            to="/about"
            className="border border-white text-white px-7 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            get More
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Hero;
