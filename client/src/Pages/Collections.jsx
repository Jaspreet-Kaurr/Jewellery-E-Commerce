import React from "react";
import { motion } from "framer-motion";


import heroImg2 from "../assets/images/heroImg.png";
import heroImg3 from "../assets/images/heroImg2.png";
import heroImg1 from "../assets/images/heroImg3.png";

import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";

import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";

import img7 from "../assets/images/img7.jpg";
import img8 from "../assets/images/img8.jpg";
import img9 from "../assets/images/img9.jpg";


import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

export default function Collections() {


  // Multiple sections each with heading + hero + products + price
  const collections = [
    {
      title: "Colour Charms",
      hero: heroImg1,
      products: [img4, img5, img6],
      price: "₹1,50,000",
    },
    {
      title: "Sparkling Avenues",
      hero: heroImg2,
      products: [img3, img1, img2],
      price: "₹1,75,000",
    },
    {
      title: "Into Eternity",
      hero: heroImg3,
      products: [img7, img8, img9],
      price: "₹2,20,000",
    },
  ];



  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  return (
    <div className="w-full font-sans bg-rose-50 pt-8">
      <h1 className="text-center text-6xl font-bold text-pink-900/80 mt-20">Our Collections</h1>
      <div>
        <div className="h-2 w-[22vw] bg-pink-900/80 mt-4 mx-auto mb-8"></div>
      </div>

      {collections.map((collection, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center my-28 w-[70vw] mx-auto 
      bg-gradient-to-br from-pink-900/80 to-rose-200/70 p-10 rounded-3xl shadow-2xl border-2 border-white/50"
        >
          {/* ✅ Section Heading */}
          <h2 className="text-5xl text-white font-bold mb-10 drop-shadow-lg text-center">
            {collection.title}
          </h2>

          {/* ✅ Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <img
              src={collection.hero}
              alt={`${collection.title} Hero`}
              className="w-full h-[300px] object-cover rounded-2xl shadow-lg border border-white/30"
            />
          </motion.div>

          {/* ✅ Price + Button */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
            <p className="text-3xl font-bold text-white">{collection.price}</p>
            {/* <button className="bg-white/20 hover:bg-white/40 border border-white text-white font-semibold text-lg px-8 py-3 rounded-2xl transition-all duration-300 hover:scale-105">
              Add to Cart
            </button> */}
            <button
              onClick={() => {
                if (!isAuthenticated) {
                  toast.error("Please login first to add items to cart");
                  navigate("/login");
                  return;
                }

                dispatch(addToCart(collection));
              }}

              className="bg-white/20 hover:bg-white/40 border border-white text-white font-semibold text-lg px-8 py-3 rounded-2xl transition-all duration-300 hover:scale-105"
            >
              Add to Cart
            </button>

          </div>

          {/* ✅ Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full">
            {collection.products.map((img, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-sm shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] p-3"
              >
                <img src={img} alt="Jewelry" className="w-full h-64 object-cover rounded-xl" />
                <div className="mt-3 text-center">
                  <p className="text-base font-medium text-gray-800">Elegant Diamond Piece</p>
                  <p className="text-sm text-gray-500">Gold · Diamond · Premium</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}



      {/* ✅ Footer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="border-white/90 border-4 text-white py-20 text-center m-20 rounded-4xl bg-gradient-to-br from-pink-800/80 to-rose-200/70 shadow-lg"
      >
        <h3 className="text-2xl md:text-4xl font-semibold mb-4">Visit Our Store</h3>
        <p className="text-white text-lg max-w-xl mx-auto">
          Discover timeless pieces crafted with elegance and perfection.
          <br />
          194/1-GF Tilak Nagar, New Delhi - 110018
        </p>
      </motion.div>
    </div>
  );

}
