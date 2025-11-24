// import React, { useState } from "react";
// import { SlidersHorizontal } from "lucide-react";
// import diamond1 from "../assets/images/diamond1.jpg";
// import diamond2 from "../assets/images/diamond2.jpg";
// import diamond3 from "../assets/images/diamond3.jpg";
// import { useNavigate } from "react-router-dom";

// import { useDispatch } from "react-redux";
// import { addToCart } from "../slices/cartSlice";

// const priceOptions = ["₹25,000 - ₹50,000", "₹50,000 - ₹1,00,000", "Above ₹1,00,000"];
// const genderOptions = ["Women", "Men"];
// const typeOptions = ["Diamond Earrings", "Diamond Rings", "Diamond Chains", "Diamond Bracelets"];

// const products = [
//   { id: 10, name: "Modish Links Diamond Ring", image: diamond1, price: "₹32,499", description: "A stunning diamond ring featuring modish link design, perfect for adding a touch of elegance to any outfit." },
//   { id: 11, name: "Prism of Light Diamond Pendant", image: diamond2, price: "₹42,990" },
//   { id: 12, name: "Scarlet Muse Diamond Stud Earrings", image: diamond3, price: "₹29,850" },
//   { id: 13, name: "Elegant Diamond Drop Earrings", image: diamond1, price: "₹32,499" },
//   { id: 14, name: "Floral Diamond Diamond Earrings", image: diamond2, price: "₹42,990" },
//   { id: 15, name: "Modern Square Diamond Earrings", image: diamond1, price: "₹29,850" },
//   { id: 16, name: "Elegant Diamond Drop Earrings", image: diamond1, price: "₹32,499" },
//   { id: 17, name: "Floral Diamond Diamond Earrings", image: diamond2, price: "₹42,990" },
//   { id: 18, name: "Modern Square Diamond Earrings", image: diamond3, price: "₹29,850" },
//   { id: 19, name: "Elegant Diamond Drop Earrings", image: diamond1, price: "₹32,499" },
// ];

// export default function Diamond() {

//   const navigate = useNavigate();

//   return (
//     <div className="px-6 md:px-20 py-8 bg-rose-50 min-h-screen pt-40 pb-28">

//       {/* Fixed Top Section (Breadcrumb + Title) */}
//       <div className="fixed top-16 left-0 w-full bg-rose-50 z-40 px-4 md:px-20 py-4 ml-6">
//         <p className="text-gray-500 text-sm mb-1">
//           <span onClick={() => navigate('/')} className="cursor-pointer">Home /</span>
//           <span className="text-gray-900 font-medium">Diamond</span>
//         </p>
//         <h1 className="text-3xl md:text-3xl font-bold text-pink-900 mt-4 text-center">Diamond</h1>
//       </div>



//       <div className="flex gap-10">

//         {/* LEFT FILTER SIDEBAR */}
//         <div className="w-[15%] hidden md:block sticky top-48 h-[80vh] overflow-y-auto p-4 bg-rose-50 z-30">


//           {/* Title */}
//           <div className="flex items-center gap-2 mb-4">
//             <SlidersHorizontal size={18} className="text-gray-700" />
//             <h2 className="font-semibold text-gray-800">Filters</h2>
//           </div>

//           {/* Price Filter */}
//           <div className="mb-6">
//             <h3 className="font-medium text-gray-900 mb-2">Price</h3>
//             {priceOptions.map((p, i) => (
//               <label key={i} className="block text-sm text-gray-600 mb-2 cursor-pointer">
//                 <input type="checkbox" className="mr-2" /> {p}
//               </label>
//             ))}
//           </div>

//           {/* Gender Filter */}
//           <div className="mb-6">
//             <h3 className="font-medium text-gray-900 mb-2">Gender</h3>
//             {genderOptions.map((g, i) => (
//               <label key={i} className="block text-sm text-gray-600 mb-2 cursor-pointer">
//                 <input type="checkbox" className="mr-2" /> {g}
//               </label>
//             ))}
//           </div>

//           {/* Type Filter */}
//           <div>
//             <h3 className="font-medium text-gray-900 mb-2">Jewellery Type</h3>
//             {typeOptions.map((t, i) => (
//               <label key={i} className="block text-sm text-gray-600 mb-2 cursor-pointer">
//                 <input type="checkbox" className="mr-2" /> {t}
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT PRODUCT GRID AREA */}
//         {/* Your right section should start after the 15% filter width: */}
//         <div className="md:w-[82%] w-full px-4 mt-3">


//           {/* Product Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {products.map((product) => (
//               <div
//                 key={product.id}
//                 className="shadow-sm rounded-xl p-4 hover:shadow-lg transition-all duration-300 cursor-pointer"
//                 onClick={() => navigate("/product", { state: product })}
//               >
//                 <div className="overflow-hidden rounded-lg">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-all duration-300"
//                   />
//                 </div>
//                 <h3 className="mt-4 text-gray-800 font-medium group-hover:text-pink-700">
//                   {product.name}
//                 </h3>
//                 <p className="text-gray-600 text-sm mt-1">{product.price}</p>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/authSlice";

import { useNavigate } from "react-router-dom";

// Import diamond images
import diamond1 from "../assets/images/diamond1.jpg";
import diamond2 from "../assets/images/diamond2.jpg";
import diamond3 from "../assets/images/diamond3.jpg";

// Filter options
const priceOptions = ["₹25,000 - ₹50,000", "₹50,000 - ₹1,00,000", "Above ₹1,00,000"];
const genderOptions = ["Women", "Men"];
const typeOptions = ["Diamond Earrings", "Diamond Rings", "Diamond Necklaces", "Diamond Bracelets"];

// Product Data
const allProducts = [
  { id: 10, title: "Modish Links Diamond Ring", hero: diamond1, price: 45999, gender: "Women", type: "Diamond Earrings" },
  { id: 11, title: "Prism of Light Diamond Pendant", hero: diamond2, price: 74999, gender: "Women", type: "Diamond Rings" },
  { id: 12, title: "Scarlet Muse Diamond Stud Earrings", hero: diamond3, price: 135000, gender: "Women", type: "Diamond Necklaces" },
  { id: 13, title: "Modish Links Diamond Ring", hero: diamond1, price: 62000, gender: "Men", type: "Diamond Rings" },
  { id: 14, title: "Prism of Light Diamond Pendant", hero: diamond2, price: 112000, gender: "Women", type: "Diamond Bracelets" },
  { id: 15, title: "Scarlet Muse Diamond Stud Earrings", hero: diamond3, price: 98000, gender: "Men", type: "Diamond Necklaces" },
];

export default function Diamond() {
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
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
      <div className="fixed top-20 left-0 w-full bg-rose-50 z-40 px-4 md:px-20 py-4 ml-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-3xl font-bold text-pink-900 mt-4 text-center"
        >
          Diamond Collection
        </motion.h1>
      </div>

      <div className="flex gap-10">
        {/* LEFT FILTER SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-[15%] hidden md:block sticky top-48 h-[80vh] overflow-y-auto p-4 bg-rose-50 z-30"
        >
          <div className="flex items-center gap-2 mb-4">
            <SlidersHorizontal size={18} className="text-gray-700" />
            <h2 className="font-semibold text-gray-800">Filters</h2>
          </div>

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
        </motion.div>

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

