import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { sendContactMessage } from "../utils/api";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { placeholder, value } = e.target;

    setFormData({
      ...formData,
      [placeholder.toLowerCase()]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await sendContactMessage(formData);

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

    } catch (error) {
      alert(error.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-cream min-h-screen">
      <Navbar />

      <section className="px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          {/* LEFT CARD */}
          <div className="group bg-gradient-to-br from-[#fff1e6] to-[#ffe3d1]
                          p-6 sm:p-8 rounded-2xl shadow-md
                          hover:shadow-2xl hover:-translate-y-2
                          transition-all duration-300">

            <h2 className="text-2xl sm:text-3xl font-serif text-coffee mb-2">
              Contact Information
            </h2>

            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
              We’d love to hear from you
            </p>

            <div className="space-y-5 text-gray-700 text-sm sm:text-base">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-coffee text-white shrink-0">
                  📍
                </div>
                <p>Connaught Place, New Delhi – 110001</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-coffee text-white shrink-0">
                  ✉️
                </div>
                <p className="break-all">
                  warehousecafe@firstfiddle.in
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-coffee text-white shrink-0">
                  📞
                </div>
                <p>+91 9999537128</p>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="group bg-white/70 backdrop-blur-md
                          p-6 sm:p-8 rounded-2xl shadow-md
                          hover:shadow-2xl hover:-translate-y-2
                          transition-all duration-300">

            <span className="text-xs text-gray-500 uppercase tracking-widest">
              Mail Us
            </span>

            <h2 className="text-2xl sm:text-3xl font-serif text-coffee mt-2 mb-6 sm:mb-8">
              Have a Question?
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-gray-300 px-3 py-2 rounded-md text-sm
                             outline-none focus:ring-2 focus:ring-coffee"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-300 px-3 py-2 rounded-md text-sm
                             outline-none focus:ring-2 focus:ring-coffee"
                />
              </div>

              <input
                type="text"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm
                           outline-none focus:ring-2 focus:ring-coffee"
              />

              <textarea
                rows="4"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm
                           outline-none focus:ring-2 focus:ring-coffee"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="mt-4 w-full sm:w-auto
                           bg-gradient-to-r from-coffee to-[#8b5a3c]
                           text-white px-10 py-3 rounded-full text-sm font-semibold
                           hover:scale-105 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;