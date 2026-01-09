import coffeeBg from "../assets/coffmug.jpg";

const Testimonials = () => {
  return (
    <section
      className="relative py-20 text-center"
      style={{
        backgroundImage: `url(${coffeeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          What Our Customers Say
        </h2>

        <p className="text-gray-200 text-lg italic">
          “Best coffee experience ever! Cozy place and amazing taste.”
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
