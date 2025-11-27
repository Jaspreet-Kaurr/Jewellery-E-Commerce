import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "../redux/authSlice";
import { motion } from "framer-motion";

const Profile = () => {
  const dispatch = useDispatch();
  const { user, loading, cart } = useSelector((state) => state.auth);

  // Fetch user when profile loads
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  // Loading state
  if (loading) {
    return (
      <h2 className="text-center mt-40 text-xl font-semibold text-pink-600">
        Loading Profile...
      </h2>
    );
  }

  // When no user found
  if (!user) {
    return (
      <h2 className="text-center mt-40 mb-20 text-xl font-bold text-pink-600">
        No user data found. Please log in.
      </h2>
    );
  }

  return (
    <div className="flex justify-center px-4 py-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-3xl bg-gradient-to-br from-pink-100 to-pink-200 
                   p-8 rounded-3xl shadow-xl mt-28"
      >
        <h2 className="text-3xl font-bold text-center text-pink-700 mb-6">
          My Profile
        </h2>

        {/* User Details */}
        <div className="mt-4 text-[17px] leading-relaxed">
          <p>
            <strong>Name:</strong> {user?.firstName + " " + user.lastName}
          </p>
          <p>
            <strong>Email:</strong> {user?.email}
          </p>
          <p>
            <strong>Mobile:</strong> {user?.mobile || "Not added"}
          </p>
          <p>
            <strong>Address:</strong> {user?.address || "Not added"}
          </p>
        </div>

        <hr className="my-8 border-pink-300" />

        <h3 className="text-2xl font-semibold text-pink-700 mb-4">
          Selected Products
        </h3>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <p className="text-gray-700 text-lg">No items purchased yet.</p>
        ) : (
          cart.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-xl shadow-md p-4 mb-4"
            >
              <p>
                <strong>Product:</strong> {item.title}
              </p>
              <p>
                <strong>Qty:</strong> {item.qty}
              </p>
              <p>
                <strong>Price:</strong> ₹{item.price}
              </p>
            </motion.div>
          ))
        )}
      </motion.div>
    </div>
  );
};

export default Profile;
