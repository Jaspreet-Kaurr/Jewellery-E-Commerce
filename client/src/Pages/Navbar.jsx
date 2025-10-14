import React from "react";
import { ShoppingCart, User, Gem, Sparkles, Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full bg-pink-900/80 backdrop-blur-md text-white fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* 🔷 Logo */}
        <h1 className="text-2xl font-semibold text-pink-300 tracking-wide">
          Jass Jewellers
        </h1>

        {/* 🔶 Nav Links */}
        <ul className="hidden md:flex items-center gap-10 text-lg font-medium">
          <li className="hover:text-pink-300 cursor-pointer transition">Explore</li>
          <li className="hover:text-pink-300 cursor-pointer transition">Gold</li>
          <li className="hover:text-pink-300 cursor-pointer transition">Diamond</li>
          <li className="hover:text-pink-300 cursor-pointer transition">Collections</li>
          <li className="hover:text-pink-300 cursor-pointer transition">Wedding</li>
        </ul>

        {/* 🔸 Icons Section */}
        <div className="flex items-center gap-6">
          <Search className="w-6 h-6 cursor-pointer hover:text-pink-300 transition" />
          <User className="w-6 h-6 cursor-pointer hover:text-pink-300 transition" />
          <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-pink-300 transition" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
