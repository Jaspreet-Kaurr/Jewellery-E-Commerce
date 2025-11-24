import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

// Load token from localStorage on app start
const token = localStorage.getItem("token");
const user = JSON.parse(localStorage.getItem("user"));

// ---------------- ASYNC THUNKS -----------------

// Signup
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) return rejectWithValue(data.message);
      return data;
    } catch (err) {
      return rejectWithValue("Signup failed : ", err);
    }
  }
);

// Login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) return rejectWithValue(data.message);
      return data;
    } catch (err) {
      return rejectWithValue("Login failed");
    }
  }
);

// ---------------- SLICE -----------------

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: user || null,
    token: token || null,
    loading: false,
    error: null,
    isAuthenticated: !!token,
    cart: JSON.parse(localStorage.getItem("cart")) || [],
  },


  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.cart = [];
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      toast.success("Logged out successfully");
    },

    addToCart(state, action) {
      const product = action.payload;

      // check if exists
      const exists = state.cart.find((item) => item.id === product.id);

      if (exists) {
        toast.error("This product is already in your cart!");
        return;
      }


      state.cart.push({ ...product, qty: 1 });
      toast.success("Added to cart!");

      if (state.user) {
        localStorage.setItem(
          `cart_${state.user.email}`,
          JSON.stringify(state.cart)
        );
      }
    },


    removeFromCart(state, action) {
      state.cart = state.cart.filter(i => i.id !== action.payload);

      if (state.user) {
        localStorage.setItem(
          `cart_${state.user.email}`,
          JSON.stringify(state.cart)
        );
      }
    },
  


  updateQuantity(state, action) {
    const { id, type } = action.payload;
    const item = state.cart.find((item) => item.id === id);

    if (!item) return;

    if (type === "inc") item.qty++;

    else if (type === "dec" && item.qty > 1) item.qty--;

    if (state.user) {
      localStorage.setItem(
        `cart_${state.user.email}`,
        JSON.stringify(state.cart)
      );
    }
  },



  loadUserCart(state) {
    if (state.user) {
      const loadingCart = JSON.parse(
        localStorage.getItem(`cart_${state.user.email}`)
      );
      state.cart = loadingCart || [];
    }
  },

  clearCart(state) {
    state.cart = [];
  },

},





  extraReducers: (builder) => {
    builder
      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isAuthenticated = true;

        // Save token + user in storage
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("user", JSON.stringify(action.payload.user));

        // Load user cart
        const savedCart = JSON.parse(
          localStorage.getItem(`cart_${action.payload.user.email}`)
        );
        state.cart = savedCart || [];

      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // SIGNUP
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, addToCart, loadUserCart, clearCart, removeFromCart, updateQuantity } = authSlice.actions;
export default authSlice.reducer;
