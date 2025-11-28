import React, { useState } from "react";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
// import { API_URL } from "../config";


const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.auth.cart);

  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-pink-900/80 backdrop-blur-md text-white fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-9xl mx-auto flex items-center justify-between px-4 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-semibold text-pink-300 tracking-wide">
          Jass Jewels ✨
        </h1>

        {/* 🔥 Hamburger menu (< 1200px) */}
        <button
          className="xl:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* Desktop Nav Links (≥ 1200px) */}
        <ul className="hidden xl:flex items-center gap-10 text-lg font-medium">
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

        {/* Desktop Icons */}
        <div className="hidden xl:flex items-center gap-6">
          <User
            onClick={() => navigate("/profile")}
            className="w-6 h-6 cursor-pointer hover:text-pink-300 transition"
          />

          <button
            onClick={() => navigate("/signup")}
            className="px-4 py-2 rounded-lg bg-pink-700 hover:bg-pink-600 text-white font-semibold transition"
          >
            Sign Up
          </button>

          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 rounded-lg bg-pink-700 hover:bg-pink-600 text-white font-medium transition"
          >
            Login
          </button>

          <div
            onClick={() => navigate("/cart")}
            className="relative flex items-center gap-3 p-3 bg-pink-200 shadow-md rounded-xl cursor-pointer hover:shadow-lg transition"
          >
            <h1 className="text-pink-900 text-xl font-bold">My Store</h1>
            <div className="relative">
              <ShoppingCart className="w-8 h-8 text-pink-900 cursor-pointer" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </div>
          </div>

          <button
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
            className="px-4 py-2 rounded-lg bg-pink-700 hover:bg-pink-600 text-white font-medium transition mr-5"
          >
            Logout
          </button>
        </div>
      </div>

      {/* 📱 Mobile Menu (< 1200px only) */}
      {open && (
        <div className="xl:hidden bg-pink-900/95 px-6 pb-5 pt-3 space-y-5 text-lg font-medium">

          <Link to="/" onClick={() => setOpen(false)} className="block hover:text-pink-300">Explore</Link>
          <Link to="/gold" onClick={() => setOpen(false)} className="block hover:text-pink-300">Gold</Link>
          <Link to="/diamond" onClick={() => setOpen(false)} className="block hover:text-pink-300">Diamond</Link>
          <Link to="/collections" onClick={() => setOpen(false)} className="block hover:text-pink-300">Collections</Link>
          <Link to="/contact-us" onClick={() => setOpen(false)} className="block hover:text-pink-300">Contact Us</Link>

          <div className="flex items-center justify-between pt-4">
            <User
              onClick={() => {
                navigate("/profile");
                setOpen(false);
              }}
              className="w-7 h-7 hover:text-pink-300 cursor-pointer"
            />

            <div
              onClick={() => {
                navigate("/cart");
                setOpen(false);
              }}
              className="relative bg-pink-200 flex items-center gap-3 p-2 rounded-lg shadow cursor-pointer"
            >
              <ShoppingCart className="w-7 h-7 text-pink-900" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <button
              onClick={() => {
                navigate("/signup");
                setOpen(false);
              }}
              className="px-4 py-2 rounded-lg bg-pink-700 hover:bg-pink-600 text-white font-semibold transition"
            >
              Sign Up
            </button>

            <button
              onClick={() => {
                navigate("/login");
                setOpen(false);
              }}
              className="px-4 py-2 rounded-lg bg-pink-700 hover:bg-pink-600 text-white font-medium transition"
            >
              Login
            </button>

            <button
              onClick={() => {
                dispatch(logout());
                navigate("/");
                setOpen(false);
              }}
              className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-medium transition"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
