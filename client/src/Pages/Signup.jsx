import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../redux/authSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let temp = {};
    if (!formData.firstName.trim()) temp.firstName = "First name is required";
    if (!formData.lastName.trim()) temp.lastName = "Last name is required";
    if (!formData.email.trim()) temp.email = "Email is required";
    if (!formData.password.trim()) temp.password = "Password is required";

    if (!formData.mobile.trim()) temp.mobile = "Mobile number is required";
    else if (!/^[0-9]{10}$/.test(formData.mobile.trim()))
      temp.mobile = "Mobile must be 10 digits";

    if (!formData.address.trim()) temp.address = "Address is required";

    return temp;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tempErrors = validate();
    setErrors(tempErrors);

    if (Object.keys(tempErrors).length !== 0) return;
    else {
      dispatch(signupUser(formData))
        .unwrap()
        .then(() => {
          toast.success("Signup Successful!");
          navigate("/login");
        })
        .catch((err) => toast.error(err));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300 pt-20 pb-12 px-4 sm:px-6   mt-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/90 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl w-full max-w-sm sm:max-w-md"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl sm:text-3xl font-bold text-center text-pink-800 mb-6 sm:mb-8"
        >
          Welcome to Jass Jewels ✨
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          <div>
            <label className="block text-pink-800 font-semibold mb-1">
              First Name *
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 border border-pink-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm sm:text-base"
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label className="block text-pink-800 font-semibold mb-1">
              Last Name *
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 border border-pink-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm sm:text-base"
              placeholder="Enter your last name"
            />
            {errors.lastName && (
              <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>

          <div>
            <label className="block text-pink-800 font-semibold mb-1">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-pink-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm sm:text-base"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-pink-800 font-semibold mb-1">
              Password *
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-pink-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm sm:text-base"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-600 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div>
            <label className="block text-pink-800 font-semibold mb-1">
              Mobile *
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full p-3 border border-pink-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm sm:text-base"
              placeholder="Enter your mobile number"
            />
            {errors.mobile && (
              <p className="text-red-600 text-sm mt-1">{errors.mobile}</p>
            )}
          </div>

          <div>
            <label className="block text-pink-800 font-semibold mb-1">
              Address *
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 border border-pink-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm sm:text-base"
              placeholder="Enter your address"
            />
            {errors.address && (
              <p className="text-red-600 text-sm mt-1">{errors.address}</p>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-pink-700 hover:bg-pink-600 text-white py-3 rounded-xl font-semibold text-lg transition"
          >
            Sign Up
          </motion.button>
        </form>

        <p className="text-center text-pink-800 mt-5 sm:mt-6 text-sm">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-pink-600 font-semibold cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
