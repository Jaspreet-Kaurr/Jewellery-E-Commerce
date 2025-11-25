import React from "react";
import { ShoppingCart, User, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.auth.cart);

  const dispatch = useDispatch();


  return (
    <nav className="w-full bg-pink-900/80 backdrop-blur-md text-white fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-9xl mx-auto flex items-center justify-between px-2 py-4">
        {/* 🔷 Logo */}
        <h1 className="text-2xl font-semibold text-pink-300 tracking-wide  pl-5">
          Jass Jewels ✨
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

        {/* 🔸 Icons + Auth Buttons Section */}
        <div className="flex items-center gap-6">
          {/* <Search className="w-6 h-6 cursor-pointer hover:text-pink-300 transition" /> */}
          <User 
          onClick={() => navigate("/profile")}
          className="w-6 h-6 cursor-pointer hover:text-pink-300 transition" />




          {/* 🔹 Login & Signup Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/signup")}
              className="px-4 py-2 rounded-lg bg-pink-700 hover:bg-pink-600 text-white font-semibold transition cursor-pointer text-wrap"
            >
              Sign Up
            </button>
            <button
              onClick={() => navigate("/login")}
              className="px-4 py-2 rounded-lg bg-pink-700 hover:bg-pink-600 text-white font-medium transition cursor-pointer"
            >
              Login
            </button>


          </div>




          {/* 🛒 Cart */}
          <div 
          onClick={() => navigate("/cart")}
          className="relative flex items-center justify-between p-3 bg-pink-200 shadow-md rounded-xl cursor-pointer hover:shadow-lg transition">
            <h1 className="text-pink-900 text-2xl font-bold">My Store</h1>
            <div className="relative">
              <ShoppingCart
                // onClick={() => navigate("/cart")}
                className="w-8 h-8 text-pink-900 cursor-pointer transition"
              />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </div>
          </div>
          <button
            // onClick={() => dispatch(logout())}
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
            className="px-4 py-2 rounded-lg bg-pink-700 hover:bg-pink-600 text-white font-medium transition cursor-pointer mr-5">
            Logout
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
