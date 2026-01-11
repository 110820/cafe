import storyImg from "../assets/storyimg.jpg";

const Products = () => {
  return (
    <section className="bg-[#f3e2cf] py-16 sm:py-20 md:py-24">

      {/* TOP INFO SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mb-16 md:mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">

          {/* Locate Us */}
          <div className="group flex gap-4 items-start p-5 sm:p-6 rounded-xl
                          transition hover:-translate-y-2 hover:shadow-xl">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full
                            bg-[#2f1d13] text-white flex items-center justify-center text-lg
                            transition group-hover:scale-110 group-hover:bg-[#3b2a1a]">
              📍
            </div>
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-1 text-[#2f1d13]">
                Locate Us
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                D-19/20, D Block, 1st floor, Inner Circle <br />
                Near Rajiv Chowk Metro Station Gate 3 <br />
                Connaught Place, New Delhi, 110001
              </p>
            </div>
          </div>

          {/* Open Hours */}
          <div className="group flex gap-4 items-start p-5 sm:p-6 rounded-xl
                          transition hover:-translate-y-2 hover:shadow-xl">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full
                            bg-[#2f1d13] text-white flex items-center justify-center text-lg
                            transition group-hover:scale-110 group-hover:bg-[#3b2a1a]">
              ⏰
            </div>
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-1 text-[#2f1d13]">
                Open Hours
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Everyday from 12:00 NOON – 1:00 AM
              </p>
            </div>
          </div>

          {/* Reservation */}
          <div className="group flex gap-4 items-start p-5 sm:p-6 rounded-xl
                          transition hover:-translate-y-2 hover:shadow-xl">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full
                            bg-[#2f1d13] text-white flex items-center justify-center text-lg
                            transition group-hover:scale-110 group-hover:bg-[#3b2a1a]">
              ☎
            </div>
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-1 text-[#2f1d13]">
                Reservation
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                +91 99995 37128
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* STORY SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10
                      grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="group relative overflow-hidden rounded-xl shadow-lg">
          <img
            src={storyImg}
            alt="Cafe Interior"
            className="w-full h-[260px] sm:h-[360px] md:h-[520px]
                       object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 opacity-0
                          group-hover:opacity-100 transition" />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif
                         text-[#2f1d13] mb-4 sm:mb-6">
            Quality and Tradition....
          </h2>

          <p className="text-sm sm:text-base text-black-800
                        leading-relaxed mb-6">
            Our coffee house is a paradise for those who cherish rich flavors
            and soulful music. A place where taste meets tradition and
            moments turn into memories. The BrewCafe is located in the 
            Nagpur. It is a heaven for all the food and music lovers.
             When you visit us don't forget to try our Pizza. Our nights are always fun with the different artist performing LIVE. The bar menu is filled with some of the most exotic drinks and the have some of the most exquisite flavour options. We also serve a wide range of snacks and light meals to satisfy your cravings.

          </p>

          <p className="text-sm sm:text-base text-black-800
                        leading-relaxed mb-6">
            From signature brews to handcrafted delights, every detail
            reflects our passion for excellence.
          </p>

          <p className="italic text-[#3b2a1a] mb-4
                        transition hover:translate-x-1">
            “Coffee is not just a drink, it’s an experience.”
          </p>

          <h4 className="font-semibold text-base sm:text-lg text-[#2f1d13]">
            BrewCafe Founder
          </h4>

          <p className="text-2xl sm:text-3xl mt-2 text-[#2f1d13]
                        font-serif tracking-wide">
            BrewCafe
          </p>
        </div>

      </div>
    </section>
  );
};

export default Products;
