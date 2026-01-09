import { Link } from "react-router-dom";
import coffeeCup from "../assets/coffee-cup.jpg";

const WhyChoose = () => {
  return (
    <section className="w-full py-16">
      <div className="grid md:grid-cols-3 overflow-hidden rounded-2xl">
        
        {/* LEFT – Why Choose Us */}
        <div className="bg-[#3b2416] text-white p-10 pl-14 flex flex-col justify-center">

          <h2 className="text-3xl font-bold mb-4">
            Why Choose <br /> Us?
          </h2>

          <p className="text-gray-200 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates delectus vitae.
          </p>

          {/* Read More → About Page */}
          <Link to="/about">
            <button className="
              mt-6 w-fit bg-white text-[#3b2416] px-6 py-2 rounded-full font-medium
              transition-all duration-300
              hover:bg-gray-100
              hover:scale-105
              hover:shadow-lg
              active:scale-95
  ">
    Read More
  </button>
          </Link>
        </div>

        {/* CENTER – Coffee Image */}
        <div className="bg-[#3b2416] flex items-center justify-center p-6">
          <img
            src={coffeeCup}
            alt="Coffee"
            className="rounded-xl shadow-lg w-full h-auto max-h-[340px] object-contain"
          />
        </div>

        {/* RIGHT – Offer Section */}
        <div className="bg-[#f3e2cf] p-10 flex flex-col justify-center relative">
          <h4 className="text-1x1 font-bold mb-2">
            Coffee Happy Hour
          </h4>

          <h3 className="text-2xl font-bold text-[#3b2416]">
            200 off from 10 am
          </h3>

          <p className="text-sm text-gray-600 mt-2">
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </p>

          
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
