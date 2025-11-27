import React, { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { motion } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/authSlice";

import { useNavigate } from "react-router-dom";

import gold1 from "../assets/images/gold1.jpg";
import gold2 from "../assets/images/gold2.jpg";
import gold3 from "../assets/images/gold3.jpg";
import gold4 from "../assets/images/gold4.jpg";
import gold5 from "../assets/images/gold5.jpg";
import gold6 from "../assets/images/gold6.jpg";
import gold7 from "../assets/images/gold7.jpg";
import gold8 from "../assets/images/gold8.jpg";
import gold9 from "../assets/images/gold9.jpg";

import toast from "react-hot-toast";

// Filter options
const priceOptions = ["₹25,000 - ₹50,000", "₹50,000 - ₹1,00,000", "Above ₹1,00,000"];
const genderOptions = ["Women", "Men"];
const typeOptions = ["Gold Earrings", "Gold Rings", "Gold Chains"];

// Product Data
const allProducts = [
  { id: 4, title: "Elegant Gold Drop Earrings", hero: gold1, price: 32499, gender: "Women", type: "Gold Earrings" },
  { id: 5, title: "Abstract Graceful Ring", hero: gold5, price: 54999, gender: "Women", type: "Gold Rings" },
  { id: 6, title: "Classic Cable Gold Chain", hero: gold7, price: 120000, gender: "Women", type: "Gold Chains" },
  { id: 7, title: "Regal Broad Chain for Men", hero: gold8, price: 345000, gender: "Men", type: "Gold Chains" },
  { id: 8, title: "Floral Diamond Gold Earrings", hero: gold2, price: 42990, gender: "Women", type: "Gold Earrings" },
  { id: 9, title: "Modern Square Gold Earrings", hero: gold3, price: 29850, gender: "Women", type: "Gold Earrings" },
  { id: 10, title: "Gold Ring for Men", hero: gold4, price: 122900, gender: "Men", type: "Gold Rings" },
  { id: 11, title: "Opulent Geometric Ring", hero: gold6, price: 120000, gender: "Men", type: "Gold Rings" },
  { id: 12, title: "Sleek Artistic Bead Gold Chain", hero: gold9, price: 245000, gender: "Women", type: "Gold Chains" },
];

export default function Gold() {
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [showFilters, setShowFilters] = useState(false); // MOBILE FILTER

  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  // Handle Checkbox selection
  const handleFilterChange = (value, selectedList, setSelectedList) => {
    if (selectedList.includes(value)) {
      setSelectedList(selectedList.filter((item) => item !== value));
    } else {
      setSelectedList([...selectedList, value]);
    }
  };

  // Filter logic
  const filteredProducts = allProducts.filter((product) => {
    const matchPrice =
      selectedPrices.length === 0 ||
      selectedPrices.some((range) => {
        if (range === "₹25,000 - ₹50,000") return product.price >= 25000 && product.price <= 50000;
        if (range === "₹50,000 - ₹1,00,000") return product.price > 50000 && product.price <= 100000;
        if (range === "Above ₹1,00,000") return product.price > 100000;
        return true;
      });

    const matchGender = selectedGenders.length === 0 || selectedGenders.includes(product.gender);
    const matchType = selectedTypes.length === 0 || selectedTypes.includes(product.type);

    return matchPrice && matchGender && matchType;
  });

  return (
    <div className="px-6 md:px-20 py-8 bg-rose-50 min-h-screen pt-40 pb-28">

      {/* Fixed Header */}
      <div className="fixed top-20 left-0 w-full bg-rose-50 z-40 px-4 md:px-20 py-4 ml-2">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-3xl font-bold text-pink-900 mt-4 text-center"
        >
          Gold Collection
        </motion.h1>

        {/* MOBILE FILTER BUTTON */}
        <button
          className="md:hidden mt-4 flex items-center gap-2 bg-pink-900 text-white px-4 py-2 rounded-lg mx-auto"
          onClick={() => setShowFilters(true)}
        >
          <SlidersHorizontal size={18} /> Filters
        </button>
      </div>

      <div className="flex gap-10 mt-4">

        {/* LEFT FILTER (DESKTOP ONLY) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-[18%] hidden md:block sticky top-48 h-[80vh] overflow-y-auto p-4 bg-rose-50 z-30"
        >
          <Filters
            priceOptions={priceOptions}
            genderOptions={genderOptions}
            typeOptions={typeOptions}
            selectedPrices={selectedPrices}
            selectedGenders={selectedGenders}
            selectedTypes={selectedTypes}
            handleFilterChange={handleFilterChange}
            setSelectedPrices={setSelectedPrices}
            setSelectedGenders={setSelectedGenders}
            setSelectedTypes={setSelectedTypes}
          />
        </motion.div>

        {/* MOBILE FILTER PANEL */}
        {showFilters && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            className="fixed top-0 left-0 w-3/4 h-full bg-white shadow-xl p-6 z-50 md:hidden overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button onClick={() => setShowFilters(false)}>
                <X size={24} />
              </button>
            </div>

            <Filters
              priceOptions={priceOptions}
              genderOptions={genderOptions}
              typeOptions={typeOptions}
              selectedPrices={selectedPrices}
              selectedGenders={selectedGenders}
              selectedTypes={selectedTypes}
              handleFilterChange={handleFilterChange}
              setSelectedPrices={setSelectedPrices}
              setSelectedGenders={setSelectedGenders}
              setSelectedTypes={setSelectedTypes}
            />
          </motion.div>
        )}

        {/* RIGHT PRODUCT GRID */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-[82%] w-full px-2 sm:px-4 mt-3"
        >
          {filteredProducts.length === 0 ? (
            <p className="text-center text-gray-500 mt-20 text-lg">No products found for selected filters.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  whileHover={{ scale: 1.03 }}
                  className="shadow-sm rounded-xl p-4 hover:shadow-lg transition-all duration-300 cursor-pointer bg-white"
                >
                  <div
                    className="overflow-hidden rounded-lg"
                    onClick={() => navigate("/product", { state: product })}
                  >
                    <img
                      src={product.hero}
                      alt={product.title}
                      className="w-full h-56 sm:h-64 object-cover rounded-lg hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <h3 className="mt-4 text-gray-800 font-medium">{product.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">₹{product.price.toLocaleString()}</p>

                  <button
                    onClick={() => {
                      if (!isAuthenticated) {
                        toast.error("Please login first to add items to cart");
                        navigate("/login");
                        return;
                      }

                      dispatch(addToCart(product));
                    }}
                    className="bg-pink-900/70 text-white font-semibold mt-3 py-2 px-4 rounded-xl w-full hover:bg-pink-900 transition-all duration-300"
                  >
                    Add to Cart
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

/* FILTER COMPONENT (Reusable for mobile & desktop) */
function Filters({
  priceOptions,
  genderOptions,
  typeOptions,
  selectedPrices,
  selectedGenders,
  selectedTypes,
  handleFilterChange,
  setSelectedPrices,
  setSelectedGenders,
  setSelectedTypes,
}) {
  return (
    <div>
      {/* PRICE */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-900 mb-2">Price</h3>
        {priceOptions.map((price, i) => (
          <label key={i} className="block text-sm text-gray-600 mb-2 cursor-pointer">
            <input
              type="checkbox"
              className="mr-2 accent-pink-700"
              checked={selectedPrices.includes(price)}
              onChange={() => handleFilterChange(price, selectedPrices, setSelectedPrices)}
            />
            {price}
          </label>
        ))}
      </div>

      {/* GENDER */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-900 mb-2">Gender</h3>
        {genderOptions.map((gender, i) => (
          <label key={i} className="block text-sm text-gray-600 mb-2 cursor-pointer">
            <input
              type="checkbox"
              className="mr-2 accent-pink-700"
              checked={selectedGenders.includes(gender)}
              onChange={() => handleFilterChange(gender, selectedGenders, setSelectedGenders)}
            />
            {gender}
          </label>
        ))}
      </div>

      {/* TYPE */}
      <div>
        <h3 className="font-medium text-gray-900 mb-2">Jewellery Type</h3>
        {typeOptions.map((type, i) => (
          <label key={i} className="block text-sm text-gray-600 mb-2 cursor-pointer">
            <input
              type="checkbox"
              className="mr-2 accent-pink-700"
              checked={selectedTypes.includes(type)}
              onChange={() => handleFilterChange(type, selectedTypes, setSelectedTypes)}
            />
            {type}
          </label>
        ))}
      </div>
    </div>
  );
}
