import cafe1 from "../assets/cafe1.jpg";
import cafe2 from "../assets/cafe2.jpg";
import cafe3 from "../assets/cafe3.jpg";
import cafe4 from "../assets/cafe4.jpg";
import cafe5 from "../assets/cafe5.jpg";
import cafe6 from "../assets/cafe6.jpg";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Gallery() {
  const images = [
    { src: cafe1, alt: "Cafe Interior" },
    { src: cafe2, alt: "Coffee Cup" },
    { src: cafe3, alt: "Latte Art" },
    { src: cafe4, alt: "Cafe Ambience" },
    { src: cafe5, alt: "Desserts" },
    { src: cafe6, alt: "Coffee Beans" },
  ];

  return (
    <div className="bg-cream min-h-screen">
      <Navbar />
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-coffee text-center mb-4">
            Our Gallery
          </h2>
          <p className="text-gray-600 text-center mb-12">
            A glimpse of our coffee, space, and moments
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-lg group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
