import React, { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/authSlice";

import { useNavigate } from "react-router-dom";

// Import diamond images
import diamond1 from "../assets/images/diamond1.jpg";
import diamond2 from "../assets/images/diamond2.jpg";
import diamond3 from "../assets/images/diamond3.jpg";
import diamond4 from "../assets/images/diamond4.jpg";
import diamond5 from "../assets/images/diamond5.jpg";
import diamond6 from "../assets/images/diamond6.jpg";
import diamond7 from "../assets/images/diamond7.jpg";
import diamond8 from "../assets/images/diamond8.jpg";
import diamond9 from "../assets/images/diamond9.jpg";
import diamond10 from "../assets/images/diamond10.jpg";

// Filter options
const priceOptions = ["₹25,000 - ₹50,000", "₹50,000 - ₹1,00,000", "Above ₹1,00,000"];
const genderOptions = ["Women", "Men"];
const typeOptions = ["Diamond Earrings", "Diamond Rings", "Diamond Necklaces"];

// Product Data
const allProducts = [
  { id: 13, title: "Regal Aura Solitaire Ring for Men", hero: diamond10, price: 245999, gender: "Men", type: "Diamond Rings" },
  { id: 14, title: "Modish Links Diamond Ring", hero: diamond1, price: 45999, gender: "Women", type: "Diamond Rings" },
  { id: 15, title: "Timeless Twists Diamond Stud Earrings", hero: diamond8, price: 185000, gender: "Women", type: "Diamond Earrings" },
  { id: 16, title: "Prism of Light Diamond Pendant", hero: diamond2, price: 74999, gender: "Women", type: "Diamond Rings" },
  { id: 17, title: "Scarlet Muse Diamond Stud Earrings", hero: diamond3, price: 135000, gender: "Women", type: "Diamond Earrings" },
  { id: 18, title: "Honey Luxe Diamond Necklace ", hero: diamond4, price: 412000, gender: "Women", type: "Diamond Necklaces" },
  { id: 19, title: "Regal Cluster Diamond Ring For Men", hero: diamond5, price: 212000, gender: "Men", type: "Diamond Rings" },
  { id: 20, title: "Flame Petal Diamond Ring", hero: diamond6, price: 154000, gender: "Women", type: "Diamond Rings" },
  { id: 21, title: "Modern Grid Diamond Hoop Earrings", hero: diamond7, price: 165000, gender: "Men", type: "Diamond Earrings" },
  { id: 22, title: "Elegant Allure Diamond Necklace", hero: diamond9, price: 285000, gender: "Men", type: "Diamond Necklaces" },
];

export default function Diamond() {
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [showFilters, setShowFilters] = useState(false); // MOBILE filter

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
          Diamond Collection
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

        {/* LEFT FILTER (DESKTOP) */}
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
            setSelectedPrices={setSelectedPrices}
            setSelectedGenders={setSelectedGenders}
            setSelectedTypes={setSelectedTypes}
            handleFilterChange={handleFilterChange}
          />
        </motion.div>

        {/* FILTERS MOBILE SLIDE-IN PANEL */}
        {showFilters && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/40 z-50 md:hidden">
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.3 }}
              className="w-72 h-full bg-white p-5 shadow-xl"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-gray-800">Filters</h2>
                <X
                  size={22}
                  className="cursor-pointer text-gray-700"
                  onClick={() => setShowFilters(false)}
                />
              </div>

              <Filters
                priceOptions={priceOptions}
                genderOptions={genderOptions}
                typeOptions={typeOptions}
                selectedPrices={selectedPrices}
                selectedGenders={selectedGenders}
                selectedTypes={selectedTypes}
                setSelectedPrices={setSelectedPrices}
                setSelectedGenders={setSelectedGenders}
                setSelectedTypes={setSelectedTypes}
                handleFilterChange={handleFilterChange}
              />
            </motion.div>
          </div>
        )}

        {/* RIGHT PRODUCT GRID */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-[82%] w-full px-4 mt-3"
        >
          {filteredProducts.length === 0 ? (
            <p className="text-center text-gray-500 mt-20 text-lg">No products found for selected filters.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
                      className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-all duration-300"
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

/* REUSABLE FILTER COMPONENT */
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
      {/* PRICE FILTER */}
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

      {/* GENDER FILTER */}
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

      {/* TYPE FILTER */}
      <div className="mb-6">
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
