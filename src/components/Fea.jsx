const data = [
  { title: "Espresso" },
  { title: "Latte" },
  { title: "Latte" },
  { title: "Cold Brew" },
];

const Features = () => {
  return (
    <section className="bg-[#f6efe6] py-16">
      <h2 className="text-3xl font-bold text-center text-[#3b2a1a] mb-14">
        Featurress
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 px-10">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center px-6 relative ${
              index !== data.length - 1
                ? "md:border-r md:border-[#d6c2aa]"
                : ""
            }`}
          >
            {/* Coffee Icon */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#d39c63] to-[#8b5a2b] flex items-center justify-center shadow-md mb-4">
              <div className="w-8 h-8 rounded-full bg-[#3b2a1a] flex items-center justify-center">
                <span className="text-white text-xs">☕</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="font-semibold text-lg text-[#3b2a1a]">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 mt-2 max-w-[180px]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
