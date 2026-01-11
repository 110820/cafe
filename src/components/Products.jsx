import { Link } from "react-router-dom";

// images
import coffee1 from "../assets/expreeso.jpg";
import coffee2 from "../assets/latte.jpg";
import coffee3 from "../assets/mocha.jpg";
import coffee4 from "../assets/cappuccino.jpg";

const products = [
  { name: "Espresso", img: coffee1, description: "Rich and smooth" },
  { name: "Latte", img: coffee2, description: "Rich and smooth" },
  { name: "Cappuccino", img: coffee3, description: "Rich and smooth" },
  { name: "Mocha", img: coffee4 },
];

const Products = () => {
  return (
    <section className="bg-[#f6efe6] py-20">
      <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">☕</span>
            <p className="text-lg font-medium text-black-800">
              Coffeehouse Specials
            </p>
          </div>

          <h2 className="text-4xl font-bold text-[#3b2a1a] mb-4">
            Morning Happy -
          </h2>

          <p className="text-gray-600 max-w-md leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore.
          </p>

          <div className="mt-8 flex gap-4">
            {/* Book Table Button → Reservation Page */}
            <Link
              to="/reservation"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})}
              className="px-6 py-3 rounded-full border border-[#3b2a1a] text-[#3b2a1a] hover:bg-[#3b2a1a] hover:text-white transition inline-block"
            >
              Book a Table
            </Link>

            {/* Visit Us Button (unchanged) */}
            {/* Visit Us → Coffee Menu */}
            <Link
              to="/coffee-menu"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})}
              className="px-6 py-3 rounded-full bg-[#3b2a1a]
                         text-white hover:bg-[#2a1a10]
                         transition inline-block"
            >
              Visit Us
            </Link>
          </div>
        </div>

        {/* RIGHT PRODUCTS */}
        <div>
          <h3 className="text-2xl font-bold text-[#3b2a1a] mb-8 text-center md:text-left">
            Visit Us TODAY
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((item, index) => (
  <div
    key={index}
    className="text-center group transition-all duration-300"
  >
    <div className="overflow-hidden rounded-xl shadow-md
                    transition-all duration-300
                    group-hover:shadow-xl
                    group-hover:-translate-y-1">
      <img
        src={item.img}
        alt={item.name}
        className="w-full h-[140px] object-cover
                   transition-transform duration-500
                   group-hover:scale-110"
      />
    </div>

    <h4 className="font-semibold text-[#3b2a1a] mt-3
                   transition-colors duration-300
                   group-hover:text-[#6f3f25]">
      {item.name}
    </h4>

    <p className="text-sm text-gray-500">
      Rich & Smooth
    </p>
  </div>
))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Products;
