const Footer = () => {
  return (
    <footer className="bg-coffee text-white">
      
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 text-left">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">BrewCafe</h2>
          <p className="text-sm text-gray-200 leading-relaxed">
            Brewing happiness one cup at a time.
            <br />
            Fresh coffee, cozy vibes, and warm moments.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Menu</li>
            <li className="hover:text-white cursor-pointer">Our Specials</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>Mon – Fri: 9:00 AM – 9:00 PM</li>
            <li>Saturday: 10:00 AM – 11:00 PM</li>
            <li>Sunday: 10:00 AM – 8:00 PM</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-200">
            <li className="flex items-center gap-2">📍 Nagpur, India</li>
            <li className="flex items-center gap-2">📞 +91 98765 43210</li>
            <li className="flex items-center gap-2">✉️ brewcafe@gmail.com</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 text-center py-4 text-sm text-gray-200">
        © 2026 BrewCafe. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
