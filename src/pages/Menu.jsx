import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// gallery images
import dish1 from "../assets/dish1.jpg";
import dish2 from "../assets/dish2.jpg";
import dish3 from "../assets/dish3.jpg";
import dish4 from "../assets/dish4.jpg";
import dish5 from "../assets/dish5.jpg";
import dish6 from "../assets/dish6.jpg";
import dish7 from "../assets/dish7.jpg";
import dish8 from "../assets/dish8.jpg";
import dish9 from "../assets/dish9.jpg";
import dish10 from "../assets/dish10.jpg";
import dish11 from "../assets/dish11.jpg";
import dish12 from "../assets/dish12.jpg";

const galleryImages = [
  dish1, dish2, dish3, dish4, dish5, dish6,
  dish7, dish8, dish9, dish10, dish11, dish12,
];

function Menu() {
  return (
    <div className="bg-[#FFF7F0] min-h-screen">
      <Navbar />

      <section className="py-24 px-6">
        <h1 className="text-4xl md:text-5xl font-serif text-coffee text-center mb-4">
          Our Menu
        </h1>
        <p className="text-center text-gray-600 mb-14">
          Explore our delicious handcrafted dishes
        </p>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <img
                  src={img}
                  alt={`menu-${index}`}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold tracking-wide">
                    View Dish
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Menu;
