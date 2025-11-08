import React from "react";
import { ShoppingCart, User, Gem, Sparkles, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Navbar = () => {
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);

  return (


    <nav className="w-full bg-pink-900/80 backdrop-blur-md text-white fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* 🔷 Logo */}
        <h1 className="text-2xl font-semibold text-pink-300 tracking-wide">
          Jass Jewels ✨
          {/* Flora -  symbolizes beauty, freshness, life, and natural eleganc  */}
          {/* “Fine Jewellers” communicates luxury, craftsmanship, and high-quality materials (like gold, diamond, and precious stones). */}
          {/* “Flora Fine Jewellers” together creates a perfect balance between nature-inspired beauty and luxurious craftsmanship. */}
        </h1>

        {/* 🔶 Nav Links */}
        <ul className="hidden md:flex items-center gap-10 text-lg font-medium">
          <li className="hover:text-pink-300 cursor-pointer transition">
            <Link to="/">Explore</Link>
          </li>

          <li className="hover:text-pink-300 cursor-pointer transition">
            <Link to="/gold">Gold</Link>
          </li>

          <li className="hover:text-pink-300 cursor-pointer transition">
            <Link to="/diamond">Diamond</Link>
          </li>

          <li className="hover:text-pink-300 cursor-pointer transition">
            <Link to="/collections">Collections</Link>
          </li>

          <li className="hover:text-pink-300 cursor-pointer transition">
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>


        {/* 🔸 Icons Section */}
        <div className="flex items-center gap-6">
          <Search className="w-6 h-6 cursor-pointer hover:text-pink-300 transition" />
          <User className="w-6 h-6 cursor-pointer hover:text-pink-300 transition" />
          {/* <ShoppingCart onClick={() => navigate('/cart')} className="w-6 h-6 cursor-pointer hover:text-pink-300 transition" /> */}

          <div className="relative flex items-center justify-between p-4 bg-pink-200 shadow-md rounded-2xl">
            <h1 className="text-pink-900 text-2xl font-bold">My Store</h1>

            <div className="relative">
              <ShoppingCart onClick={() => navigate('/cart')} className="w-8 h-8 text-pink-900 cursor-pointer transition" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </div>       
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
