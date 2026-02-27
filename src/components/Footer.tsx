import { Facebook, Instagram, Phone } from "lucide-react"; // Added Phone icon

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 mt-auto">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand / About Section */}
          <div>
            <h3 className="text-2xl font-bold text-[#D4AF77] mb-4">Milly's Premium Catering</h3>
            <p className="text-gray-400 mb-4">
              A Bite Above The Rest – Professional outside catering in Busia & Western Kenya since 2011.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-[#D4AF77] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-[#D4AF77] transition">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-[#D4AF77] transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/menu" className="text-gray-400 hover:text-[#D4AF77] transition">
                  Menu
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-gray-400 hover:text-[#D4AF77] transition">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-[#D4AF77] transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <p className="text-gray-400 mb-4">
              Busia, Western Kenya<br />
              Phone: +254-722-529-621<br />
              Email: director@millysoutsidecatering.co.ke
            </p>

            {/* Social Icons – Facebook & Instagram */}
            <div className="flex space-x-6 mt-4">
              <a
                href="https://web.facebook.com/MillysOutsideCateringAndEventManagementServices"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#D4AF77] transition"
                aria-label="Facebook"
              >
                <Facebook className="h-8 w-8" />
              </a>

              <a
                href="https://www.instagram.com/mill.yokina/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#D4AF77] transition"
                aria-label="Instagram"
              >
                <Instagram className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Milly's Premium Catering. All rights reserved.
        </div>
      </div>

      {/* Floating WhatsApp/Phone Button – restored as circular button */}
      <a
        href="https://wa.me/254722529621?text=Hello%20Milly's%20Catering!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition-all z-50"
        aria-label="Chat on WhatsApp"
      >
        <Phone className="h-7 w-7" /> {/* Using Phone icon; you can change to MessageCircle if preferred */}
      </a>
    </footer>
  );
}