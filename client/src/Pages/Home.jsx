// Home.jsx
import React, { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html, useProgress } from "@react-three/drei";
import { useNavigate } from "react-router-dom";

import gold from "../assets/images/gold.jpg";
import diamond from "../assets/images/Diamond.jpg";
import goldElegance from "../assets/images/gold-jewellery.jpg";

import ring from "../assets/images/Ring.jpg";
import chain from "../assets/images/Chain.jpg";
import necklace from "../assets/images/Necklace.jpg";
import ringInHand from "../assets/images/RingInHand.jpg";
import earing from "../assets/images/Earings.jpg";
import multiRing from "../assets/images/MultiRings.jpg";
import faceLook from "../assets/images/FaceEaring.jpg";

import gold5 from "../assets/images/gold5.jpg";
import diamond2 from "../assets/images/diamond2.jpg";
import necklaceSet from "../assets/images/img6.jpg";

// Simple Loader component for suspense fallback
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="bg-white/90 text-gray-800 p-4 rounded-md shadow-lg">
        Loading 3D model... {Math.round(progress)}%
      </div>
    </Html>
  );
}

// Model component that safely uses useGLTF
function Model() {
  // Ensure the GLB path is correct (public/models/diamond_ring.glb)
  // If your model is stored elsewhere, update the path accordingly.
  const gltf = useGLTF("/models/diamond_ring.glb");

  // Guard: if no scene yet, return null (Suspense will handle loader)
  if (!gltf || !gltf.scene) return null;

  // Apply transforms once scene exists
  useEffect(() => {
    try {
      const scene = gltf.scene;
      scene.scale.set(1.8, 1.8, 1.8);
      scene.position.set(0.6, -0.4, 0);
      scene.rotation.set(0, -0.8, 0);
    } catch (err) {
      // swallow transform errors to avoid crashing the render
      // console.warn("Model transform failed", err);
    }
  }, [gltf]);

  // return primitive and prevent automatic dispose (helps some bundlers)
  return <primitive object={gltf.scene} dispose={null} />;
}

const galleryImages = [
  ring,
  chain,
  necklace,
  ringInHand,
  earing,
  multiRing,
  faceLook,
];

const Home = () => {
  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      image: gold,
      title: "Floral Bloom",
      desc: "Inspired by nature’s grace, crafted to perfection.",
    },
    {
      id: 2,
      image: goldElegance,
      title: "Gold Elegance",
      desc: "Timeless gold jewellery for every occasion.",
    },
    {
      id: 3,
      image: diamond,
      title: "Diamond Radiance",
      desc: "Because every sparkle tells your story.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.98,
    }),
  };




  const collections = [
    {
      img: gold5,
      title: "The Gold Charm",
      desc: "Discover timeless gold jewellery crafted to shine forever.",
      route: "/gold",
    },
    {
      img: diamond2,
      title: "Royal Elegance",
      desc: "Experience unmatched beauty in every sparkling detail.",
      route: "/diamond",
    },
    {
      img: necklaceSet,
      title: "Diamond Necklace Set",
      desc: "Explore diamond brilliance designed to capture hearts.",
      route: "/collections",
    },
  ];



  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <div className="relative bg-pink-800 min-h-[90vh] lg:min-h-screen overflow-hidden flex flex-col lg:flex-row items-center justify-between px-4 md:px-12 lg:px-16 py-20 pt-32 gap-10">
        {/* Left */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6 text-center lg:text-left">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl text-white font-bold leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Discover the Elegance of Fine Jewellery
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-pink-100 mt-2 max-w-md mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Crafting timeless pieces that capture beauty, grace, and everlasting
            elegance.
          </motion.p>

          <motion.button
            onClick={() => navigate("/gold")}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 sm:px-8 py-3 rounded-full text-lg font-semibold shadow-lg mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            Let's Explore .....
          </motion.button>
        </div>

        {/* Right - Slider */}
        <div className="relative w-full lg:w-[45vw] h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[75vh] rounded-3xl overflow-hidden shadow-2xl">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={slides[current].id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 flex justify-center items-center"
            >
              <img
                src={slides[current].image}
                alt={slides[current].title}
                className="w-full h-full object-cover brightness-90"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end pb-10 items-center text-center px-4">
                <motion.p
                  className="text-sm sm:text-base md:text-lg text-pink-100 mb-2 max-w-lg"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {slides[current].desc}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg"
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg"
          >
            <FaArrowRight />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${current === index ? "bg-pink-500 scale-125" : "bg-white/70"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ===== AUTO-PLAYING FEATURED GALLERY ===== */}
      <section className="relative w-full py-16 sm:py-20 bg-gradient-to-b from-white to-pink-50 overflow-hidden">
        <div className="flex justify-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-800">
            Our Signature Designs
          </h2>
        </div>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-4 sm:gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
          >
            {[...galleryImages, ...galleryImages].map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt={`gallery-${i}`}
                className="w-40 h-56 sm:w-52 sm:h-72 md:w-64 md:h-80 rounded-2xl object-cover shadow-xl hover:scale-105 transition-transform duration-500"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== 3D MODEL SECTION ===== */}
      <div className="w-full bg-gradient-to-r from-pink-900/30 via-rose-50 to-pink-900/30 flex flex-col lg:flex-row items-center justify-between px-4 md:px-12 lg:px-16 py-16 gap-12">
        {/* Left */}
        <div className="max-w-lg space-y-4 sm:space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-pink-800 leading-tight">
            The Symbol of <br />
            <span className="text-rose-600">Eternal Love</span>
          </h1>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Crafted with precision and passion, our diamond rings capture timeless elegance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <button
              onClick={() => navigate("/diamond")}
              className="bg-pink-700 text-white px-6 py-3 rounded-2xl text-lg font-semibold hover:bg-pink-800 transition-all shadow-md"
            >
              Shop Now 💍
            </button>
            <button
              onClick={() => navigate("/collections")}
              className="border-2 border-pink-700 text-pink-700 px-6 py-3 rounded-2xl text-lg font-semibold hover:bg-pink-700 hover:text-white transition-all shadow-md cursor-pointer"
            >
              View Collections →
            </button>
          </div>
        </div>

        {/* Right - Canvas container must have non-zero height for WebGL context */}
        <div className="w-full lg:w-[50%] h-[320px] sm:h-[380px] md:h-[480px] lg:h-[580px] flex justify-center items-center rounded-xl overflow-hidden bg-gradient-to-r from-rose-50 via-rose-50 to-pink-800/5">
          <Canvas
            dpr={[1, 2]}
            shadows
            gl={{ antialias: true, alpha: true }}
            onCreated={({ gl }) => {
              // make sure the canvas has a solid clear color to avoid flicker
              gl.setClearColor(0xffffff, 0);
            }}
            style={{ width: "100%", height: "100%" }}
            camera={{ position: [1.5, 3.2, 4.6], fov: 40 }}
          >
            <ambientLight intensity={1.2} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />
            <directionalLight position={[-5, 2, -5]} intensity={0.6} />
            <OrbitControls
              enableDamping
              dampingFactor={0.1}
              minDistance={2.5}
              maxDistance={8}
              maxPolarAngle={Math.PI / 2.2}
              minPolarAngle={Math.PI / 4}
              enablePan={false}
            />

            {/* Suspense + Loader to prevent WebGL errors while model loads */}
            <Suspense fallback={<Loader />}>
              <Model />
            </Suspense>
          </Canvas>
        </div>
      </div>

      {/* ===== ABOUT SECTION ===== */}
      <section className="bg-white py-16 sm:py-20 px-4 md:px-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-pink-800 mb-6">
          About Our Craftsmanship
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
          Every piece of jewellery we create reflects our passion for excellence and attention to detail.
        </p>
      </section>

      {/* ===== FEATURED COLLECTIONS ===== */}
      <section className="bg-rose-50 py-16 sm:py-20 px-4 md:px-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-pink-800 mb-10">
          Featured Collections
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {collections.map((item, i) => (
            <div
              key={i}
              onClick={() => navigate(item.route)}
              className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500 bg-white cursor-pointer"
            >
              <img
                src={item.img}
                alt="collection"
                className="w-full h-64 sm:h-72 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-pink-700 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-gradient-to-r from-rose-50 via-rose-50 to-pink-50 py-16 sm:py-20 px-4 md:px-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-pink-800 mb-10">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Payal Sharma",
              review: "Absolutely loved the quality! The craftsmanship is so fine, and the finish looks premium. Totally worth it!"
            },

            {
              name: "Sourav Kumar",
              review: "Elegant, classy, and stunning! The jewellery looks even better in real life. Super impressed with the design."
            },

            {
              name: "Lovepreet",
              review: "Brilliant service and exquisite jewellery. The detailing and shine are perfect. Highly recommended!"
            },
            {
              name: "Aman Verma",
              review: "Fast delivery, great packaging, and excellent product quality. The polish and shine are unmatched."
            },

            {
              name: "Simran Kaur",
              review: "Loved the collection! The pieces are lightweight, comfortable, and look absolutely gorgeous."
            },
            {
              name: "Rahul Mehta",
              review: "Perfect gift item. The elegance and finish show how much attention is given to detail. Totally satisfied!"
            },

          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all">
              <p className="text-gray-700 italic mb-4">“{item.review}”</p>
              <h4 className="font-semibold text-pink-700">{item.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-pink-900 text-white py-8 text-center">
        <p className="text-lg">© {new Date().getFullYear()} JassJewels. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;
