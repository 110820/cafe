import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// coffee images
import coffee1 from "../assets/expreeso.jpg";
import coffee2 from "../assets/latte.jpg";
import coffee3 from "../assets/mocha.jpg";
import coffee4 from "../assets/cappuccino.jpg";

const coffeeMenu = [
  { name: "Espresso", price: "₹120", img: coffee1 },
  { name: "Latte", price: "₹180", img: coffee2 },
  { name: "Mocha", price: "₹200", img: coffee3 },
  { name: "Cappuccino", price: "₹170", img: coffee4 },
];

function CoffeeMenu() {
  return (
    <div className="bg-[#FFF7F0] min-h-screen">
      <Navbar />

      {/* Heading */}
      <section className="py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-coffee mb-3">
          Coffee Menu
        </h1>
        <p className="text-gray-600">
          Freshly brewed happiness in every cup ☕
        </p>
      </section>

      {/* Coffee Cards */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {coffeeMenu.map((coffee, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden
                         transition-all duration-300
                         hover:shadow-xl hover:-translate-y-2"
            >
              <img
                src={coffee.img}
                alt={coffee.name}
                className="w-full h-44 object-cover"
              />

              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-coffee">
                  {coffee.name}
                </h3>
                <p className="text-gray-500 mt-1">
                  Rich & Smooth
                </p>
                <p className="mt-2 font-bold text-[#8b5a3c]">
                  {coffee.price}
                </p>

                <button
                  className="mt-4 px-5 py-2 rounded-full
                             bg-coffee text-white text-sm
                             hover:bg-[#6f3f25] transition"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default CoffeeMenu;
