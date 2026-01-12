import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import coffeeShopImage from "../assets/coffeeshop.jpg";
import brewingImage from "../assets/coffe.jpg";
import founderImage from "../assets/cappuccino.jpg";
import chefImage from "../assets/chef.jpg";
import aboutBg from "../assets/abbg.jpg";

const About = () => {
  return (
    <div className="bg-[#f3e2cf] min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cream to-brown/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-coffee mb-6 font-serif">
              About <span className="text-brown">Our Story</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              We serve handcrafted coffee made from premium beans, delivering comfort and warmth in every cup.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

      {/* Image */}
<div className="w-full lg:w-1/2">
  <img
    src={coffeeShopImage}
    alt="Our Coffee Shop"

    /* 🔥 Performance Boost */
    loading="eager"          // load immediately
    fetchpriority="high"     // highest priority
    decoding="async"         // non-blocking decode

    className="
      w-full 
      h-64 sm:h-80 md:h-96
      object-cover 
      rounded-xl 
      shadow-lg
    "
  />
</div>


      {/* Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-coffee mb-6 font-serif">
          Our Story
        </h2>

        <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
          Founded in 2020, our coffee shop has been dedicated to bringing the finest coffee experience to our customers.
          Every cup is carefully crafted with passion and attention to detail.
        </p>

        <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
          We source our beans from sustainable farms around the world, ensuring both quality and ethical practices.
        </p>

        {/* Founder */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 justify-center lg:justify-start">
          <img
            src={founderImage}
            alt="Founder"
            className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-full border-2 border-brown"
          />
          <div>
            <h3 className="font-bold text-coffee text-lg">
              John Doe
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Founder & Head Barista
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* Our Mission – Image Style Section */}
      <section className="relative w-full py-20 bg-coffee text-white text-8xl font-bold flex items-center justify-center"
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      {/* Background Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
      
      


      {/* Item 1 */}
      <div className="px-6 md:border-r md:border-cream/30">
        <div className="text-4xl mb-4">☕</div>
        <h3 className="text-2xl font-serif font-semibold mb-2">
          Quality Coffee
        </h3>
        <p className="text-lg text-white/90 leading-relaxed">
          Crafted with premium beans for a rich and unforgettable taste.
        </p>
      </div>

      {/* Item 2 */}
      <div className="px-6 md:border-r md:border-cream/30">
        <div className="text-4xl mb-4">🍸</div>
        <h3 className="text-2xl font-serif font-semibold mb-2">
          Crafted Beverages
        </h3>
        <p className="text-lg text-white/90 leading-relaxed">
          Signature drinks designed to delight every sip.
        </p>
      </div>

      {/* Item 3 */}
      <div className="px-6 md:border-r md:border-cream/30">
        <div className="text-4xl mb-4">🏡</div>
        <h3 className="text-2xl font-serif font-semibold mb-2">
          Rustic Ambience
        </h3>
        <p className="text-lg text-white/90 leading-relaxed">
          A cozy space perfect for brunches, meetings, and celebrations.
        </p>
      </div>

      {/* Item 4 */}
      <div className="px-6">
        <div className="text-4xl mb-4">🎶</div>
        <h3 className="text-2xl font-serif font-semibold mb-2">
          High-Energy Vibes
        </h3>
        <p className="text-lg text-white/90 leading-relaxed">
          Lively atmosphere with music, laughter, and great moments.
        </p>
      </div>

    </div>
  </div>
</section>
{/* Our Chefs Section */}
<section className="py-24 bg-cream">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

    {/* LEFT – Text Content */}
    <div>
      {/* <h2 className="text-4xl font-serif text-[#2f1d13] mb-6">
        Our Chefs
      </h2> */}

      <h2 className="mt-4 text-4xl md:text-5xl font-bold text-center mb-6 text-coffee leading-tight">
        Our Chefs
      </h2>

      <p className="mt-6 text-black-500 leading-relaxed text-lg max-w-xl">
        At BrewCafe, our head chefs, Sunil Bisen and Krishnam Rathi, with
        years of experience in the industry, curate our menu with carefully
        selected dishes offering a unique blend of flavors and textures.
        Sourcing fresh ingredients from local markets, their passion for
        cooking reflects in every dish, ensuring each customer's memorable
        dining experience. With their expertise and creativity, they bring a
        fresh perspective to the culinary world, and we are proud to have them
        lead our kitchen.
      </p>
    </div>

    {/* RIGHT – Image */}
    <div className="relative">
      <img
        src={chefImage}  // replace with your chef image path
        alt="Our Chef"
        className="w-full h-[520px] object-cover"
      />
    </div>

  </div>
</section>



      {/* Values Section */}
<section className="py-12 md:py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
    <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-14">

      {/* Image */}
      <div className="w-full lg:w-1/2">
        <img
          src={brewingImage}
          alt="Coffee Brewing Process"
          className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-coffee mb-6 font-serif">
          Our Values
        </h2>

        <ul className="space-y-4 max-w-xl mx-auto lg:mx-0">
          {[
            "Ethical sourcing of premium coffee beans",
            "Sustainable and eco-friendly practices",
            "Exceptional customer service",
            "Supporting local communities",
          ].map((text, index) => (
            <li key={index} className="flex items-start text-left">
              <div className="bg-brown text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                ✓
              </div>
              <span className="text-base sm:text-lg text-gray-700">
                {text}
              </span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  </div>
</section>


      <Footer />
    </div>
  );
};

export default About;