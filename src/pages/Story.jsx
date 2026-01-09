import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Story() {
  return (
    <div className="bg-cream min-h-screen">
      <Navbar />

      {/* Reservation Section */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto">

          {/* Card */}
          <div className="group bg-gradient-to-br from-white to-[#fff3eb] rounded-2xl shadow-lg p-10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">

            <h1 className="text-4xl font-serif text-coffee mb-3 text-center">
              Reserve a Table
            </h1>

            <p className="text-center text-gray-600 mb-10">
              Book your cozy spot and enjoy great coffee ☕
            </p>

            <form className="space-y-6">
              {/* Name */}
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-coffee focus:border-transparent transition"
              />

              {/* Date */}
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-coffee focus:border-transparent transition"
              />

              {/* Guests */}
              <input
                type="number"
                placeholder="Guests"
                min="1"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-coffee focus:border-transparent transition"
              />

              {/* Button */}
              <button
                type="submit"
                className="w-full mt-6 bg-gradient-to-r from-coffee to-[#8b5a3c] text-white py-3 rounded-full font-semibold tracking-wide hover:scale-105 transition duration-300"
              >
                Book Now
              </button>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Story;
