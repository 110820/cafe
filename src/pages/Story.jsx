import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import table1 from "../assets/table1.jpg";
import table2 from "../assets/table2.jpg";
import table3 from "../assets/table3.jpg";
import table4 from "../assets/table4.jpg";
import table5 from "../assets/table5.jpg";
import table6 from "../assets/table6.jpg";
import table7 from "../assets/table7.jpg";
import table8 from "../assets/table8.jpg";
import table9 from "../assets/table9.jpg";

function Story() {
  const [selectedTable, setSelectedTable] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const tables = [
    { id: 1, name: "Table 1", image: table1 },
    { id: 2, name: "Table 2", image: table2 },
    { id: 3, name: "Table 3", image: table3 },
    { id: 4, name: "Table 4", image: table4 },
    { id: 5, name: "Table 5", image: table5 },
    { id: 6, name: "Table 6", image: table6 },
    { id: 7, name: "Table 7", image: table7 },
    { id: 8, name: "Table 8", image: table8 },
    { id: 9, name: "Table 9", image: table9 },
  ];

  return (
    <div className="bg-cream min-h-screen">
      <Navbar />

      {/* Reservation Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-white to-[#fff3eb] rounded-3xl shadow-lg 
                          p-6 sm:p-10 md:p-16">

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-coffee 
                           mb-4 text-center">
              Reserve a Table
            </h1>

            <p className="text-center text-gray-600 mb-10 text-sm sm:text-base md:text-lg">
              Book your cozy spot and enjoy great coffee ☕
            </p>

            {/* TABLE GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
              {tables.map((table) => (
                <div
                  key={table.id}
                  className="group rounded-3xl overflow-hidden bg-white border
                             transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                >
                  <div className="overflow-hidden">
                    <img
                      src={table.image}
                      alt={table.name}
                      className="h-52 sm:h-56 md:h-64 w-full object-cover 
                                 transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-5 text-center">
                    <p className="text-base sm:text-lg font-semibold text-coffee mb-4">
                      {table.name}
                    </p>

                    <button
                      onClick={() => {
                        setSelectedTable(table.id);
                        setShowForm(true);
                      }}
                      className="bg-coffee text-white px-8 py-3 rounded-full text-sm font-medium
                                 transition-all duration-300 hover:scale-110"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* BOOKING MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center 
                        px-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 
                          w-full max-w-md relative">

            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-xl sm:text-2xl font-serif text-coffee mb-6 text-center">
              Book Table #{selectedTable}
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border rounded-lg px-4 py-3 text-sm 
                           focus:ring-2 focus:ring-coffee"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-lg px-4 py-3 text-sm 
                           focus:ring-2 focus:ring-coffee"
              />

              <input
                type="date"
                className="w-full border rounded-lg px-4 py-3 text-sm 
                           focus:ring-2 focus:ring-coffee"
              />

              <input
                type="time"
                className="w-full border rounded-lg px-4 py-3 text-sm 
                           focus:ring-2 focus:ring-coffee"
              />

              <input
                type="text"
                value={`Table ${selectedTable}`}
                readOnly
                className="w-full border bg-gray-100 rounded-lg px-4 py-3 text-sm"
              />

              <button
                type="submit"
                className="w-full mt-4 bg-gradient-to-r from-coffee to-[#8b5a3c]
                           text-white py-3 rounded-full font-semibold 
                           hover:scale-105 transition"
              >
                Book Table
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Story;
