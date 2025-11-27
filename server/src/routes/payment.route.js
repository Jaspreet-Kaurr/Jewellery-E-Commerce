import express from "express";
// // import { auth as authMiddleware } from "../middlewares/auth.middleware.js";
import Stripe from "stripe";    

const router = express.Router();

// const stripe = new Stripe(process.env.STRIPE_SECRET);  // Initialize Stripe with secret key

// console.log(stripe)


// // Checkout Stripe Payment API
// router.post("/create-checkout-session",  async (req, res) => {
//   try {
//     const { products } = req.body;      

//     // lineItems
//     const lineItems = products.map((item) => ({
//       price_data: {
//         currency: "inr",
//         product_data: {
//             name: item.title,       
//             images: [item.hero],  
//         },
//         // unit_amount: Math.round(parseFloat(String(item.price).replace(/[^0-9]/g, "")) * 100),  
//         unit_amount: (String(item.price).replace(/[^0-9]/g, "")),  
//       },
//       quantity: item.qty,
//     }));


//     //checkout session
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: lineItems,    
//         mode: "payment",
//         success_url: "http://localhost:3000/payment-success",
//         cancel_url: "http://localhost:3000/payment-cancel",
//     });

//     // sending session id as response to frontend to trigger payment successs if everything went right
//     res.json({ id: session.id });

//   } catch (err) {
//     console.error("Error creating checkout session:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// export default router;





// filepath: 
// ...existing code...
// ...existing code...
// Remove top-level init and instead init inside handler or check for env
// ...existing code...





router.post("/create-checkout-session",  async (req, res) => {
  try {
    // init stripe now to ensure env var is loaded
    if (!process.env.STRIPE_SECRET) {
      console.error("Missing STRIPE_SECRET — please set it in  or env provider");
      return res.status(500).json({ message: "Server misconfiguration: Stripe secret missing" });
    }
    const stripe = new Stripe(process.env.STRIPE_SECRET, { apiVersion: "2022-11-15" });

    const { products } = req.body;

    // lineItems
    const lineItems = products.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.title,
        //   images: [item.hero],
        },
        unit_amount: Math.round(
          parseFloat(String(item.price).replace(/[^0-9.]/g, "")) * 100
        ), // integer in paise (cents)
      },
      quantity: item.qty,
    }));

    //checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:5173/payment-success",
      cancel_url: "http://localhost:5173/payment-cancel",
    });

    // sending session id as response
    // res.json({ id: session.id });
    res.json({ url: session.url });
  } catch (err) {
    console.error("Error creating checkout session:", err);
    res.status(500).json({ message: "Server error" });
  }
});


export default router;