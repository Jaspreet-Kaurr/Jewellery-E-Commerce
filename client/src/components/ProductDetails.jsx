import { useLocation, useNavigate } from "react-router-dom";
import { FaStar, FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";

const ProductDetails = () => {
  const { state: product } = useLocation();
  const navigate = useNavigate();

  if (!product) return <h2>No product data found</h2>;

  return (
    <div className="p-6 max-w-6xl mx-auto mt-24">

      {/* Back button */}
      <button 
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-rose-100 rounded text-rose-800 hover:bg-rose-200"
      >
        ← Back
      </button>

      <div className="grid md:grid-cols-2 gap-10 bg-rose-50 shadow-lg rounded-2xl p-8">

        {/* Product Image */}
        <div className="flex justify-center">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-80 h-80 object-contain rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{product.name}</h1>
          
          {/* Price + Sale Badge */}
          <div className="flex items-center gap-3 mb-2">
            <p className="text-3xl font-semibold text-pink-700">{product.price}</p>
            <span className="bg-rose-200 text-rose-700 text-xs px-2 py-1 rounded-md font-bold">
              SALE
            </span>
          </div>

          {/* Rating Stars */}
          <div className="flex items-center gap-1 text-yellow-500 text-xl mb-4">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            <span className="text-sm text-gray-500 ml-2">(4.9 Reviews)</span>
          </div>

          {/* Description */}
          <h2 className="font-semibold text-gray-700 mb-2 text-lg">Product Details</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            {product.description}
          </p>

          {/* Stock */}
          <p className="text-sm text-gray-600 mb-4">
            ✅ In stock: <span className="font-bold">12 available</span>
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mb-6">
            <button className="bg-pink-700 text-white px-6 py-3 rounded-lg hover:bg-pink-800 transition">
              Buy Now
            </button>
            <button className="border border-pink-700 text-pink-700 px-6 py-3 rounded-lg hover:bg-pink-50 transition">
              Add to Cart
            </button>
          </div>

          {/* Social Share */}
          {/* <p className="text-gray-600 mb-2">Share with friends:</p>
          <div className="flex gap-4 text-lg">
            <FaFacebookF className="text-blue-600 cursor-pointer hover:scale-110 transition" />
            <FaTwitter className="text-blue-400 cursor-pointer hover:scale-110 transition" />
            <FaPinterestP className="text-red-500 cursor-pointer hover:scale-110 transition" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
