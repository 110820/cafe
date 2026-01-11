import { Link } from "react-router-dom";
import coffeeCup from "../assets/coffee-cup.jpg";

const WhyChoose = () => {
  return (
    <section className="w-full py-16 px-4 md:px-10">
      <div
        className="
          grid grid-cols-1 md:grid-cols-3
          rounded-2xl overflow-hidden
          shadow-xl
          group
        "
      >
        
        {/* LEFT – Why Choose Us */}
        <div
          className="
            bg-[#3b2416] text-white
            p-10 md:pl-14
            flex flex-col justify-center
            transition-all duration-500
            hover:bg-[#2e1b12]
          "
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Why Choose <br /> Us?
          </h2>

          <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-sm">
            Experience premium coffee, cozy ambience, and unforgettable flavors
            crafted with passion.
          </p>

          {/* Read More */}
          <Link
            to="/about"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="
              mt-6 w-fit bg-white text-[#3b2416]
              px-6 py-2 rounded-full font-medium
              transition-all duration-300
              hover:bg-[#f3e2cf]
              hover:scale-105
              hover:shadow-lg
              active:scale-95
            "
          >
            Read More →
          </Link>
        </div>

        {/* CENTER – Coffee Image */}
        <div
          className="
            bg-[#3b2416]
            flex items-center justify-center
            p-6
            transition-all duration-500
          "
        >
          <img
            src={coffeeCup}
            alt="Coffee"
            className="rounded-xl shadow-lg w-full h-auto max-h-[340px] 
                       object-contain
                       transition-transform duration-500
                       hover:scale-110 hover:-translate-y-2"
          />
        </div>

        {/* RIGHT – Offer Section */}
        <div
          className="bg-[#f3e2cf] p-10 flex flex-col justify-center relative
                        transition-all duration-500 hover:scale-[1.02]"
        >
          <span className="text-xs tracking-widest text-[#3b2416] uppercase mb-2">
            Special Offer
          </span>

          <h4 className="text-lg font-semibold text-gray-800">
            Coffee Happy Hour
          </h4>

          <h3 className="text-3xl font-bold text-[#3b2416] mt-1">
            ₹200 OFF
          </h3>

          <p className="text-sm text-gray-600 mt-2">
            Every day from <strong>10 AM – 12 PM</strong>. Don’t miss out!
          </p>

          
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
