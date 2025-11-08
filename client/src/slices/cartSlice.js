// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   items: JSON.parse(localStorage.getItem("cartItems")) || [],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const product = action.payload;
//       const existing = state.items.find((item) => item.id === product.id);

//       if (existing) {
//         existing.qty += 1;
//       } else {
//         state.items.push({ ...product, qty: 1 });
//       }

//       localStorage.setItem("cartItems", JSON.stringify(state.items));
//     },

//     removeFromCart: (state, action) => {
//       state.items = state.items.filter((item) => item.id !== action.payload);
//       localStorage.setItem("cartItems", JSON.stringify(state.items));
//     },

//     updateQuantity: (state, action) => {
//       const { id, type } = action.payload;
//       const item = state.items.find((item) => item.id === id);
//       if (item) {
//         if (type === "inc") item.qty += 1;
//         else if (type === "dec" && item.qty > 1) item.qty -= 1;
//       }
//       localStorage.setItem("cartItems", JSON.stringify(state.items));
//     },
//   },
// });

// export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
// export default cartSlice.reducer;





import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast"; // ✅ To show messages

// ✅ Load cart from localStorage
const initialState = {
  items: JSON.parse(localStorage.getItem("cartItems")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ✅ Add to Cart
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);

      if (existing) {
        toast.error("This product is already in your cart!");
      } else {
        state.items.push({ ...product, qty: 1 });
        toast.success("Added to cart!");
      }

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    // ✅ Remove Item
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
      toast.success("Item removed from cart!");
    },

    // ✅ Update Quantity (+ / -)
    updateQuantity: (state, action) => {
      const { id, type } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        if (type === "inc") {
          item.qty += 1;
        } else if (type === "dec" && item.qty > 1) {
          item.qty -= 1;
        } else if (type === "dec" && item.qty === 1) {
          toast.error("Quantity cannot be less than 1!");
        }
      }

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
