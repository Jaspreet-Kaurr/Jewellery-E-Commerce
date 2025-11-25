import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProfile = createAsyncThunk("user/profile", async () => {
  const token = localStorage.getItem("token");

  const res = await axios.get("http://localhost:5000/api/user/profile", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return res.data;
});


export const updateProfile = createAsyncThunk("user/update", async (data) => {
  const res = await axios.put("/api/user/update", data);
  return res.data;
});

const userSlice = createSlice({
  name: "user",
  initialState: { details: {}, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.details = action.payload;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.details = action.payload;
      });
  }
});

export default userSlice.reducer;
