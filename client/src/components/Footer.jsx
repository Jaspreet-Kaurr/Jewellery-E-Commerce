import { Heart, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-pink-100 text-pink-900 py-8 px-6 border-t border-pink-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        
        {/* Left Section - Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-pink-700">Jass Jewels</h2>
          <p className="mt-2 text-sm max-w-xs">
            Timeless beauty, crafted with love. Discover elegant pieces that make every moment shine.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a
              href="https://www.instagram.com/jass_kaurr_r"
              target="_blank"
              className="p-2 bg-white rounded-full shadow hover:shadow-md hover:text-pink-600 transition"
            >
              <Instagram size={20} />
            </a>

            <a
              href="mailto:kaurjass9091@gmail.com"
              className="p-2 bg-white rounded-full shadow hover:shadow-md hover:text-pink-600 transition"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Right Section - Quick Links */}
        <div className="text-center md:text-right">
          <h3 className="font-semibold text-lg text-pink-700 mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:text-pink-600 transition">Home</a></li>
            <li><a href="/diamond" className="hover:text-pink-600 transition">Shop</a></li>
            <li><a href="/collections" className="hover:text-pink-600 transition">Collections</a></li>
            <li><a href="/contact-us" className="hover:text-pink-600 transition">Contact Us</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-6 text-center text-sm text-pink-700">
        © {new Date().getFullYear()} Jass Jewels — Made with{" "}
        <Heart size={14} className="inline fill-red-600" /> elegance.
      </div>
    </footer>
  );
}
