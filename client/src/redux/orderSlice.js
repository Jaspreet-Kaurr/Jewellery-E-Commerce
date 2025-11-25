import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchOrders = createAsyncThunk("orders/list", async () => {
  const token = localStorage.getItem("token");

  const res = await axios.get("http://localhost:5000/api/user/orders", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return res.data;
});


const orderSlice = createSlice({
  name: "orders",
  initialState: {
    list: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  }
});

export default orderSlice.reducer;
