import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// background images
import coffee1 from "../assets/bgc.jpg";
import coffee2 from "../assets/bg2.jpg";
import coffee3 from "../assets/bg3.jpg";
import coffee4 from "../assets/bg4.jpg";
import coffee5 from "../assets/bg5.jpg";
import coffee6 from "../assets/bg6.jpg";

const images = [coffee1, coffee2, coffee3, coffee4, coffee5, coffee6];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
  // Preload images
  images.forEach((img) => {
    const image = new Image();
    image.src = img;
  });

  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, 3000);

  return () => clearInterval(interval);
}, []);

   

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
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-16 lg:px-20 max-w-3xl text-center md:text-left">
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Savor the <br className="hidden sm:block" /> Perfect Brew!
        </h1>

        <p className="mt-4 text-gray-200 text-sm sm:text-base md:text-lg max-w-xl mx-auto md:mx-0">
          Freshly brewed coffee made with love and premium beans.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          
          <Link
            to="/menu"
            className="bg-[#c08a5c] text-white px-7 py-3 rounded-full hover:bg-[#a9744f] transition text-center"
          >
            Order Now
          </Link>

          <Link
            to="/about"
            className="border border-white text-white px-7 py-3 rounded-full hover:bg-white hover:text-black transition text-center"
          >
            Learn More
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Hero;
