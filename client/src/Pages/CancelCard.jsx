import React from "react";
import { motion } from "framer-motion";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function CancelCard({ onHome = () => {} }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white w-80 sm:w-96 shadow-xl rounded-xl p-7 text-center"
      >
        {/* ICON */}
        <div className="flex justify-center">
          <AiOutlineCloseCircle className="text-red-600" size={60} />
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mt-4">
          Payment Canceled
        </h2>

        <p className="text-gray-500 mt-2">
          Your payment was canceled.
        </p>

        <button
          className="mt-6 w-full py-2 bg-red-600 hover:bg-red-700
                     text-white font-medium rounded-lg shadow-md transition"
          onClick={onHome}
        >
          Return to Home
        </button>
      </motion.div>
    </div>
  );
}
