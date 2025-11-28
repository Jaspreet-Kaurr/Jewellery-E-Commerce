import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser, updateProfile } from "../redux/authSlice";
import { motion } from "framer-motion";

const Profile = () => {
  const dispatch = useDispatch();
  const { user, loading, cart } = useSelector((state) => state.auth);

  // Local state for edit mode
  const [isEditing, setIsEditing] = useState(false);
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  // Fetch user when page loads
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  // When user updates fetched, fill fields
  useEffect(() => {
    if (user) {
      setMobile(user.mobile || "");
      setAddress(user.address || "");
    }
  }, [user]);

  // Loading state
  if (loading) {
    return (
      <h2 className="text-center mt-40 text-xl font-semibold text-pink-600">
        Loading Profile...
      </h2>
    );
  }

  // User not logged in
  if (!user) {
    return (
      <h2 className="text-center mt-40 mb-20 text-xl font-bold text-pink-600">
        No user data found. Please log in.
      </h2>
    );
  }

  // Submit update request
  const handleUpdate = async () => {
    await dispatch(updateProfile({ mobile, address }));
    dispatch(fetchCurrentUser());
    setIsEditing(false);
  };

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

        {/* USER DETAILS */}
        <div className="mt-4 text-[17px] leading-relaxed">
          <p>
            <strong>Name:</strong> {user?.firstName + " " + user?.lastName}
          </p>
          <p>
            <strong>Email:</strong> {user?.email}
          </p>

          {/* Editable Fields */}
          <div className="mt-4 flex flex-col gap-3">
            {/* MOBILE */}
            <div>
              <strong>Mobile:</strong>
              {isEditing ? (
                <input
                  type="text"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="mt-1 w-full border border-pink-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-pink-400"
                  placeholder="Enter mobile"
                />
              ) : (
                <span className="ml-1">{mobile || "Not added"}</span>
              )}
            </div>

            {/* ADDRESS */}
            <div>
              <strong>Address:</strong>
              {isEditing ? (
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="mt-1 w-full border border-pink-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-pink-400"
                  placeholder="Enter address"
                ></textarea>
              ) : (
                <span className="ml-1">{address || "Not added"}</span>
              )}
            </div>
          </div>
        </div>

        {/* EDIT BUTTONS */}
        <div className="mt-6 flex gap-3 justify-center">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
            >
              Edit Profile
            </button>
          ) : (
            <>
              <button
                onClick={handleUpdate}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
            </>
          )}
        </div>

        <hr className="my-8 border-pink-300" />

        <h3 className="text-2xl font-semibold text-pink-700 mb-4">
          Selected Products
        </h3>

        {/* CART ITEMS */}
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
