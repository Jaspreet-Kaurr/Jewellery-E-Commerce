import { Heart, Instagram, Facebook, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-pink-100 text-pink-900 pt-10 pb-6 px-6  border-t border-pink-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-pink-700">Flora Fine Jewellers</h2>
          <p className="mt-3 text-sm">
            Timeless beauty, crafted with love. Discover elegant pieces that make every moment shine.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="hover:text-pink-600"><Instagram size={20} /></a>
            <a href="#" className="hover:text-pink-600"><Facebook size={20} /></a>
            <a href="#" className="hover:text-pink-600"><Twitter size={20} /></a>
            <a href="#" className="hover:text-pink-600"><Mail size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-pink-700 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-pink-600">Home</a></li>
            <li><a href="#" className="hover:text-pink-600">Shop</a></li>
            <li><a href="#" className="hover:text-pink-600">Collections</a></li>
            <li><a href="#" className="hover:text-pink-600">About Us</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-pink-700 mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-pink-600">FAQs</a></li>
            <li><a href="#" className="hover:text-pink-600">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-pink-600">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-pink-600">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-pink-700 mb-3">Join Our Newsletter</h3>
          <p className="text-sm mb-3">Get exclusive offers & the latest updates on new collections.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 rounded-l-lg border border-pink-300 focus:outline-none focus:border-pink-500"
            />
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white px-4 rounded-r-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-pink-200 pt-4 text-center text-sm text-pink-700">
        © {new Date().getFullYear()} Flora Fine Jewellers — Made with <Heart size={14} className="inline text-pink-500" /> and elegance.
      </div>
    </footer>
  );
}
