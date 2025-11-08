import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";


export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  // const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    toast.loading("Sending message...", { id: "mail" });

    emailjs
      .send(
        "service_yz0442f",  // service ID
        "template_42ikkmw",  // template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "EgLyuxCGEYbv2EOuj"   // public key
      )
      .then(() => {
        toast.success("Message Sent ✅", { id: "mail" });
        setFormData({ name: "", email: "", message: "" });   // clear inputs as msg sent !!
      })
      .catch(() => {
        toast.error("Failed to send ❌", { id: "mail" });
      });
  };


  return (
    <>
    {/* This renders the notification system — required for react-hot-toast to show messages on the screen. */}
      <Toaster position="top-center" />

      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-white to-pink-200 p-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8 text-pink-800"
        >
          Contact Us
        </motion.h2>

        <motion.form
          onSubmit={sendEmail}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg space-y-4 border border-pink-300"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-pink-900/80 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-pink-900/80 outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-pink-900/80 outline-none"
          ></textarea>

          <button
            type="submit"
            className="bg-pink-800 w-full text-white py-3 rounded-xl text-lg font-medium shadow-md hover:bg-pink-900/80 transition cursor-pointer"
          >
            Send Message
          </button>
{/* 
          {status && <p className="text-center mt-2 text-pink-700 font-medium">{status}</p>} */}
        </motion.form>
      </section>
    </>
  );
}
