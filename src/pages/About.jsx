import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import coffeeShopImage from "../assets/coffeeshop.jpg";
import brewingImage from "../assets/coffe.jpg";
import founderImage from "../assets/cappuccino.jpg";

const About = () => {
  return (
    <div className="bg-cream min-h-screen">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src={coffeeShopImage} 
                alt="Our Coffee Shop" 
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-coffee mb-6 font-serif">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Founded in 2020, our coffee shop has been dedicated to bringing the finest coffee experience to our customers. 
                Every cup is carefully crafted with passion and attention to detail.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We source our beans from sustainable farms around the world, ensuring both quality and ethical practices.
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={founderImage} 
                  alt="Founder" 
                  className="w-16 h-16 object-cover rounded-full border-2 border-brown"
                />
                <div>
                  <h3 className="font-bold text-coffee text-lg">John Doe</h3>
                  <p className="text-gray-600">Founder & Head Barista</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-coffee mb-4 font-serif">Our Mission</h2>
            <div className="w-24 h-1 bg-brown mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              To create a warm and welcoming environment where people can enjoy exceptional coffee and connect with one another.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">☕</div>
              <h3 className="text-xl font-bold text-coffee mb-3">Quality Coffee</h3>
              <p className="text-gray-600">We use only the finest beans sourced from ethical farms around the world.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-bold text-coffee mb-3">Community</h3>
              <p className="text-gray-600">Creating a space where people can connect and build meaningful relationships.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-coffee mb-3">Sustainability</h3>
              <p className="text-gray-600">Committed to environmentally responsible practices and fair trade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src={brewingImage} 
                alt="Coffee Brewing Process" 
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-coffee mb-6 font-serif">Our Values</h2>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <div className="bg-brown text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</div>
                  <span className="text-lg text-gray-700">Ethical sourcing of premium coffee beans</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-brown text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</div>
                  <span className="text-lg text-gray-700">Sustainable and eco-friendly practices</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-brown text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</div>
                  <span className="text-lg text-gray-700">Exceptional customer service</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-brown text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</div>
                  <span className="text-lg text-gray-700">Supporting local communities</span>
                </li>
              </ul>
              <button className="bg-brown text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;