
// // Making it async as we need to listen for promises
//   const makePayment = async () => {
//     // loading stripe module
//     // loadStripe("publishable_key_here");
//     const stripe = await loadStripe("pk_test_51SXgRGJeIGbQzkVEBKg5vragArUTBFRdKa5UqdeVSzNcfkPCf0qzsuRj0Qbh5wxoLp0kyNKFcUnyB5gcXIGYVQvz00hEnHsdIe");

//     const body = {
//        products: cartItems
//     }

//     const headers = {
//       "Content-Type": "application/json",
//     }


//     // call backend /server to create a checkout session
//     const response = await fetch("http://localhost:5000/api/create-checkout-session", {
//       method: "POST",
//       headers: headers,
//       body: JSON.stringify(body),   // as server only understand json data
//     });

//     // wait for server response in the form of session id
//     const session = await response.json();

//     // redirect user to checkout , if payment goes successful
//     // storing sesson id in  sessionId variable
//     const result = await stripe.redirectToCheckout({
//       sessionId: session.id,
//     });


//     if (result.error) {
//       console.log(result.error);
//     }

//   }


import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import { removeFromCart, updateQuantity } from "../redux/authSlice";

export default function ShoppingCart() {
  const cartItems = useSelector((state) => state.auth.cart);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => {
    const price = Number(String(item.price).replace(/[^0-9]/g, ""));
    return sum + price * item.qty;
  }, 0);

  const handleCheckout = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ products: cartItems }),
      });

      const data = await res.json();
      window.location.href = data.url;
    } catch (err) {
      console.log(err);
      alert("Checkout failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300 p-6 pt-34 pb-20">

      <h1 className="text-4xl font-bold text-pink-900 text-center mb-10">
        🛍️ Your Shopping Cart
      </h1>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT : CART ITEMS */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.length === 0 ? (
            <p className="text-center text-pink-700 text-xl font-medium">
              Your cart is empty 💔
            </p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white/60 backdrop-blur-md p-4 rounded-2xl flex items-center gap-6 shadow-lg"
              >
                <img
                  src={item.hero}
                  alt={item.title}
                  className="w-32 h-32 object-contain rounded-xl shadow-sm"
                />

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-pink-900">
                    {item.title}
                  </h3>
                  <p className="text-pink-700 font-medium mt-1">{item.price}</p>

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

                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-pink-700 hover:text-red-600 transition"
                >
                  <Trash2 size={22} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* RIGHT : STICKY ORDER SUMMARY */}
        <div className="lg:col-span-1">
          <div className="
            bg-white/80 backdrop-blur-md p-6 
            rounded-3xl shadow-xl 
            sticky top-32
            w-full
          ">
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
              <span className="text-pink-800">Tax:</span>
              <span className="text-pink-900 font-medium">0</span>
            </div>

            <div className="flex justify-between text-xl font-semibold text-pink-900 mt-4">
              <span>Total:</span>
              <span>₹{total.toLocaleString()}</span>
            </div>

            <button
              onClick={handleCheckout}
              className="mt-6 bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-2xl shadow-md w-full"
            >
              Pay ₹{total.toLocaleString()}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
