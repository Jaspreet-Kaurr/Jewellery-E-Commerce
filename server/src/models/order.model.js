import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [
    {
      productName: String,
      price: Number,
      quantity: Number,
    }
  ],
  purchaseDate: { type: Date, default: Date.now }
});

export default mongoose.model("Order", orderSchema);
