import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import { removeFromCart, updateQuantity } from "../redux/authSlice";


export default function ShoppingCart() {
  const cartItems = useSelector((state) => state.auth.cart);
  const dispatch = useDispatch();

  // ✅ Calculate total correctly (price is a string like "₹1,50,000", so we must clean it)
  const total = cartItems.reduce((sum, item) => {
   const price = Number(String(item.price).replace(/[^0-9]/g, ""));  // remove ₹ and commas
    return sum + price * item.qty;
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300 p-6 md:p-12 mt-20 pb-18">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-pink-900 text-center mb-10"
      >
        🛍️ Your Shopping Cart
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Left - Items list */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-2 space-y-6 min-h-screen pr-3"
        >
          {cartItems.length === 0 ? (
            <p className="text-center text-pink-700 text-xl font-medium">
              Your cart is empty 💔
            </p>
          ) : (
            cartItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white/60 backdrop-blur-md p-4 rounded-2xl flex items-center gap-16 shadow-lg"
                style={{ height: "180px" }}
              >
                {/* 🖼️ Image */}
                <img
                  src={item.hero}
                  alt={item.title}
                  className="w-56 h-full object-contain rounded-xl shadow-sm"
                />

                {/* 📝 Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-pink-900">
                    {item.title}
                  </h3>
                  <p className="text-pink-700 font-medium mt-1">
                    {item.price}
                  </p>

                  {/* ➕➖ Quantity */}
                  <div className="flex items-center mt-3 space-x-3">
                    <button
                      onClick={() =>
                        dispatch(updateQuantity({ id: item.id, type: "dec" }))
                      }
                      className="bg-pink-400 hover:bg-pink-500 text-white rounded-full px-3 py-1"
                    >
                      −
                    </button>
                    <span className="text-lg font-semibold">{item.qty}</span>
                    <button
                      onClick={() =>
                        dispatch(updateQuantity({ id: item.id, type: "inc" }))
                      }
                      className="bg-pink-400 hover:bg-pink-500 text-white rounded-full px-3 py-1"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* 🗑️ Delete */}
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-pink-700 hover:text-red-600 transition"
                >
                  <Trash2 size={22} />
                </button>
              </motion.div>
            ))
          )}
        </motion.div>

        {/* Right - Summary */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/70 backdrop-blur-lg p-6 rounded-3xl shadow-xl flex flex-col justify-between fixed right-12 top-32 w-[320px] md:w-[360px]"
        >
          <div>
            <h2 className="text-2xl font-semibold text-pink-900 mb-4">
              Order Summary
            </h2>
            <div className="flex justify-between text-lg mb-2">
              <span className="text-pink-800">Subtotal:</span>
              <span className="text-pink-900 font-medium">
                ₹{total.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between text-lg mb-2">
              <span className="text-pink-800">Delivery:</span>
              <span className="text-pink-900 font-medium">₹500</span>
            </div>
            <div className="flex justify-between text-xl font-semibold text-pink-900 mt-4">
              <span>Total:</span>
              <span>₹{(total + 0 + 500).toLocaleString()}</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-2xl shadow-md"
          >
            Proceed to Checkout
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}



// import { useSelector } from "react-redux";

// export default function ShoppingCart() {
//   const items = useSelector((state) => state.cart.items);

//   return (
//     <div className="min-h-screen bg-rose-50 p-10">
//       <h1 className="text-5xl font-bold text-pink-900 text-center mb-8">
//         Your Shopping Cart
//       </h1>

//       {items.length === 0 ? (
//         <p className="text-center text-gray-500">Your cart is empty 🛍️</p>
//       ) : (
//         <div className="grid gap-6">
//           {items.map((item, i) => (
//             <div
//               key={i}
//               className="flex justify-between items-center bg-white shadow-md rounded-2xl p-4"
//             >
//               <img
//                 src={item.hero}
//                 alt={item.title}
//                 className="w-32 h-32 object-cover rounded-xl"
//               />
//               <div>
//                 <h3 className="text-2xl font-semibold text-pink-900">
//                   {item.title}
//                 </h3>
//                 <p className="text-lg text-gray-600">{item.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

