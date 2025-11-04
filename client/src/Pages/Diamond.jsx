import React, { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import diamond1 from "../assets/images/diamond1.jpg";
import diamond2 from "../assets/images/diamond2.jpg";
import diamond3 from "../assets/images/diamond3.jpg";
import { useNavigate } from "react-router-dom";

const priceOptions = ["₹25,000 - ₹50,000", "₹50,000 - ₹1,00,000", "Above ₹1,00,000"];
const genderOptions = ["Women", "Men"];
const typeOptions = ["Diamond Earrings", "Diamond Rings", "Diamond Chains", "Diamond Bracelets"];

const products = [
  { id: 1, name: "Modish Links Diamond Ring", image: diamond1, price: "₹32,499", description: "A stunning diamond ring featuring modish link design, perfect for adding a touch of elegance to any outfit." },
  { id: 2, name: "Prism of Light Diamond Pendant", image: diamond2, price: "₹42,990" },
  { id: 3, name: "Scarlet Muse Diamond Stud Earrings", image: diamond3, price: "₹29,850" },
  { id: 4, name: "Elegant Diamond Drop Earrings", image: diamond1, price: "₹32,499" },
  { id: 5, name: "Floral Diamond Diamond Earrings", image: diamond2, price: "₹42,990" },
  { id: 6, name: "Modern Square Diamond Earrings", image: diamond1, price: "₹29,850" },
  { id: 7, name: "Elegant Diamond Drop Earrings", image: diamond1, price: "₹32,499" },
  { id: 8, name: "Floral Diamond Diamond Earrings", image: diamond2, price: "₹42,990" },
  { id: 9, name: "Modern Square Diamond Earrings", image: diamond3, price: "₹29,850" },
  { id: 10, name: "Elegant Diamond Drop Earrings", image: diamond1, price: "₹32,499" },
];

export default function Diamond() {

  const navigate = useNavigate();

  return (
    <div className="px-6 md:px-20 py-8 bg-rose-50 min-h-screen pt-40 pb-28">

      {/* Fixed Top Section (Breadcrumb + Title) */}
      <div className="fixed top-16 left-0 w-full bg-rose-50 z-40 px-4 md:px-20 py-4 ml-6">
        <p className="text-gray-500 text-sm mb-1">
          <span onClick={() => navigate('/')} className="cursor-pointer">Home /</span>
          <span className="text-gray-900 font-medium">Diamond</span>
        </p>
        <h1 className="text-3xl md:text-3xl font-bold text-pink-900 mt-4 text-center">Diamond</h1>
      </div>



      <div className="flex gap-10">

        {/* LEFT FILTER SIDEBAR */}
        <div className="w-[15%] hidden md:block sticky top-48 h-[80vh] overflow-y-auto p-4 bg-rose-50 z-30">


          {/* Title */}
          <div className="flex items-center gap-2 mb-4">
            <SlidersHorizontal size={18} className="text-gray-700" />
            <h2 className="font-semibold text-gray-800">Filters</h2>
          </div>

          {/* Price Filter */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-2">Price</h3>
            {priceOptions.map((p, i) => (
              <label key={i} className="block text-sm text-gray-600 mb-2 cursor-pointer">
                <input type="checkbox" className="mr-2" /> {p}
              </label>
            ))}
          </div>

          {/* Gender Filter */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-2">Gender</h3>
            {genderOptions.map((g, i) => (
              <label key={i} className="block text-sm text-gray-600 mb-2 cursor-pointer">
                <input type="checkbox" className="mr-2" /> {g}
              </label>
            ))}
          </div>

          {/* Type Filter */}
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Jewellery Type</h3>
            {typeOptions.map((t, i) => (
              <label key={i} className="block text-sm text-gray-600 mb-2 cursor-pointer">
                <input type="checkbox" className="mr-2" /> {t}
              </label>
            ))}
          </div>
        </div>

        {/* RIGHT PRODUCT GRID AREA */}
        {/* Your right section should start after the 15% filter width: */}
        <div className="md:w-[82%] w-full px-4 mt-3">


          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="shadow-sm rounded-xl p-4 hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => navigate("/product", { state: product })}
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-all duration-300"
                  />
                </div>
                <h3 className="mt-4 text-gray-800 font-medium group-hover:text-pink-700">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{product.price}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
