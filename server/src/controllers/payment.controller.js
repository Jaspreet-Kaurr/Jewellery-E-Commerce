// controllers/payment.controller.js
import Stripe from "stripe";

export const createCheckoutSession = async (req, res) => {
  try {
    // init stripe now to ensure env var is loaded
    if (!process.env.STRIPE_SECRET) {
      console.error("Missing STRIPE_SECRET — please set it in env");
      return res
        .status(500)
        .json({ message: "Server misconfiguration: Stripe secret missing" });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET, {
      apiVersion: "2022-11-15",
    });

    const { products } = req.body;

    // lineItems
    const lineItems = products.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.title,
          // images: [item.hero],
        },
        unit_amount: Math.round(
          parseFloat(String(item.price).replace(/[^0-9.]/g, "")) * 100
        ),  // integer in paise (cents)
      },
      quantity: item.qty,
    }));

    // checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "https://jewellery-e-commerce-g6o8.vercel.app/payment-success",
      cancel_url: "https://jewellery-e-commerce-g6o8.vercel.app/payment-cancel",
    });

     // sending session id as response
    // res.json({ id: session.id });
    res.json({ url: session.url });
  } catch (err) {
    console.error("Error creating checkout session:", err);
    res.status(500).json({ message: "Server error" });
  }
};
