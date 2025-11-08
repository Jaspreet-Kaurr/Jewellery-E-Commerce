// import React, { useState, useEffect } from "react";
// import Lottie from "lottie-react";
// import rings from "../assets/animations/rings.json";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import { useNavigate } from "react-router-dom";

// import { ChevronLeft, ChevronRight } from "lucide-react";

// import gold from "../assets/images/gold.jpg";
// import diamond from "../assets/images/Diamond.jpg";
// import goldElegance from "../assets/images/gold-jewellery.jpg";

// // ✅ Model Component
// function Model() {
//   const { scene } = useGLTF("/models/diamond_ring.glb");

//   useEffect(() => {
//     if (scene) {
//       scene.scale.set(1.8, 1.8, 1.8);
//       scene.position.set(0.6, -0.4, 0);
//       scene.rotation.set(0, -0.8, 0);
//     }
//   }, [scene]);

//   return <primitive object={scene} />;
// }





// // ✅ Replacing CircularGallery (use your previous image URLs here)
// const galleryImages = [
//   "https://img.freepik.com/free-photo/closeup-shot-golden-diamond-ring-with-dark-background_181624-34226.jpg",
//   "https://img.freepik.com/free-photo/close-up-luxury-diamond-necklace_1203-7015.jpg",
//   "https://img.freepik.com/free-photo/luxury-golden-bracelet_144627-5893.jpg",
//   "https://img.freepik.com/free-photo/closeup-shot-diamond-earrings_181624-21521.jpg",
//   "https://img.freepik.com/free-photo/fashionable-diamond-necklace_1203-7004.jpg",
// ];






// // ✅ Main Home Component
// const Home = () => {
//   const navigate = useNavigate();



//   // 🔹 Gallery Logic
//   const [galleryIndex, setGalleryIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(
//       () => setGalleryIndex((prev) => (prev + 1) % galleryImages.length),
//       3500
//     );
//     return () => clearInterval(interval);
//   }, []);

//   const prevSlide = () =>
//     setGalleryIndex(
//       galleryIndex === 0 ? galleryImages.length - 1 : galleryIndex - 1
//     );
//   const nextSlide = () =>
//     setGalleryIndex((galleryIndex + 1) % galleryImages.length);





//   // === HERO SLIDER ===
//   const slides = [
//     {
//       id: 1,
//       image: gold,
//       title: "Floral Bloom",
//       desc: "Inspired by nature’s grace, crafted to perfection.",
//     },
//     {
//       id: 2,
//       image: goldElegance,
//       title: "Gold Elegance",
//       desc: "Timeless gold jewellery for every occasion.",
//     },
//     {
//       id: 3,
//       image: diamond,
//       title: "Diamond Radiance",
//       desc: "Because every sparkle tells your story.",
//     },
//   ];

//   const [current, setCurrent] = useState(0);
//   const [direction, setDirection] = useState(0);

//   // const nextSlide = () => {
//   //   setDirection(1);
//   //   setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   // };

//   // const prevSlide = () => {
//   //   setDirection(-1);
//   //   setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
//   // };

//   // Smooth autoplay
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setDirection(1);
//       setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     }, 4000);
//     return () => clearInterval(timer);
//   }, []);

//   const slideVariants = {
//     enter: (dir) => ({
//       x: dir > 0 ? 80 : -80,
//       opacity: 0,
//       scale: 0.98,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       scale: 1,
//     },
//     exit: (dir) => ({
//       x: dir > 0 ? -80 : 80,
//       opacity: 0,
//       scale: 0.98,
//     }),
//   };

//   // === REPLACEMENT CAROUSEL (Instead of CircularGallery) ===
//   // const galleryImages = [
//   //   gold,
//   //   goldElegance,
//   //   diamond,
//   //   gold,
//   //   goldElegance,
//   //   diamond,
//   // ];

//   // const [galleryIndex, setGalleryIndex] = useState(0);

//   // useEffect(() => {
//   //   const timer = setInterval(() => {
//   //     setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
//   //   }, 3000);
//   //   return () => clearInterval(timer);
//   // }, []);

//   return (
//     <>
//       {/* ===== HERO SECTION ===== */}
//       <div className="relative bg-pink-800 min-h-screen overflow-hidden flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-20 pt-32 gap-10">
//         {/* 💫 Left Section */}
//         <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
//           <motion.h1
//             className="text-5xl md:text-6xl text-white font-bold leading-tight"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             Discover the Elegance of Fine Jewellery
//           </motion.h1>

//           <motion.p
//             className="text-lg md:text-xl text-pink-100 mt-4 max-w-md"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6, duration: 1 }}
//           >
//             Crafting timeless pieces that capture beauty, grace, and everlasting
//             elegance.
//           </motion.p>

//           <motion.button
//             onClick={() => navigate("/diamond")}
//             className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg mt-6 cursor-pointer"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.2, duration: 0.6 }}
//           >
//             Let's Explore .....
//           </motion.button>
//         </div>

//         {/* 🌸 Right Section - Smooth Carousel */}
//         <div className="relative w-full lg:w-[45vw] h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden shadow-2xl">
//           <AnimatePresence custom={direction} mode="wait">
//             <motion.div
//               key={slides[current].id}
//               custom={direction}
//               variants={slideVariants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               transition={{ duration: 0.8, ease: "easeInOut" }}
//               className="absolute inset-0 flex justify-center items-center"
//             >
//               <img
//                 src={slides[current].image}
//                 alt={slides[current].title}
//                 className="w-full h-full object-cover brightness-90"
//               />
//               <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
//                 <motion.p
//                   className="text-lg md:text-xl text-pink-100 mb-4 max-w-lg"
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.4, duration: 0.6 }}
//                 >
//                   {slides[current].desc}
//                 </motion.p>
//               </div>
//             </motion.div>
//           </AnimatePresence>

//           {/* Buttons */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg"
//           >
//             <FaArrowLeft />
//           </button>

//           <button
//             onClick={nextSlide}
//             className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg"
//           >
//             <FaArrowRight />
//           </button>

//           {/* Dots */}
//           <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
//             {slides.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrent(index)}
//                 className={`w-3 h-3 rounded-full transition-all ${
//                   current === index ? "bg-pink-500 scale-125" : "bg-white/70"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//        {/* 💎 FEATURED COLLAGE GALLERY (Replaced CircularGallery) */}
//       <section className="relative w-full py-16 bg-gradient-to-b from-white to-pink-50 overflow-hidden">
//         <div className="flex justify-center mb-10">
//           <h2 className="text-4xl md:text-5xl font-bold text-pink-800">
//             Our Signature Designs
//           </h2>
//         </div>

//         <div className="relative flex justify-center items-center">
//           {/* Left Arrow */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-5 z-10 bg-white/80 hover:bg-pink-100 p-3 rounded-full shadow-lg"
//           >
//             <ChevronLeft size={28} className="text-pink-700" />
//           </button>

//           {/* Center Focus Gallery */}
//           <div className="flex justify-center items-center gap-6 w-full px-8">
//             {galleryImages.map((img, index) => {
//               const isActive = index === galleryIndex;
//               const prev =
//                 (galleryIndex - 1 + galleryImages.length) %
//                 galleryImages.length;
//               const next = (galleryIndex + 1) % galleryImages.length;

//               let sizeClass = "w-0 h-0 opacity-0 scale-0";
//               if (index === prev || index === next)
//                 sizeClass = "w-48 h-64 opacity-60 scale-90";
//               if (isActive)
//                 sizeClass = "w-72 h-96 opacity-100 scale-100 shadow-2xl";

//               return (
//                 <motion.img
//                   key={index}
//                   src={img}
//                   alt={`gallery-${index}`}
//                   className={`rounded-2xl object-cover transition-all duration-700 ${sizeClass}`}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                 />
//               );
//             })}
//           </div>

//           {/* Right Arrow */}
//           <button
//             onClick={nextSlide}
//             className="absolute right-5 z-10 bg-white/80 hover:bg-pink-100 p-3 rounded-full shadow-lg"
//           >
//             <ChevronRight size={28} className="text-pink-700" />
//           </button>
//         </div>
//       </section>

//       {/* ===== 3D MODEL SECTION ===== */}
//       <div className="h-screen w-full bg-gradient-to-r from-pink-100 via-rose-50 to-gray-100 flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 overflow-hidden">
//         {/* Left */}
//         <div className="max-w-lg space-y-6 text-center lg:text-left">
//           <h1 className="text-5xl font-extrabold text-pink-800 leading-tight drop-shadow-md">
//             The Symbol of <br />
//             <span className="text-rose-600">Eternal Love</span>
//           </h1>

//           <p className="text-gray-700 text-lg leading-relaxed">
//             Crafted with precision and passion, our diamond rings capture
//             timeless elegance. Whether it’s a proposal, anniversary, or a gift
//             of love, make your moments shine forever.
//           </p>

//           <div className="flex gap-4 justify-center lg:justify-start pt-4">
//             <button className="bg-pink-700 text-white px-6 py-3 rounded-2xl text-lg font-semibold hover:bg-pink-800 transition-all shadow-md hover:shadow-lg">
//               Shop Now 💍
//             </button>
//             <button
//               onClick={() => navigate("/collections")}
//               className="border-2 border-pink-700 text-pink-700 px-6 py-3 rounded-2xl text-lg font-semibold hover:bg-pink-700 hover:text-white transition-all shadow-md hover:shadow-lg cursor-pointer"
//             >
//               View Collections →
//             </button>
//           </div>
//         </div>

//         {/* Right - 3D Model */}
//         <div className="w-full lg:w-[50%] h-[400px] lg:h-full flex justify-center lg:justify-end items-center">
//           <Canvas
//             camera={{
//               position: [1.5, 3.2, 4.6],
//               fov: 40,
//             }}
//           >
//             <ambientLight intensity={1.2} />
//             <directionalLight position={[5, 5, 5]} intensity={1.2} />
//             <directionalLight position={[-5, 2, -5]} intensity={0.6} />
//             <OrbitControls
//               enableDamping
//               dampingFactor={0.1}
//               minDistance={2.5}
//               maxDistance={8}
//               maxPolarAngle={Math.PI / 2.2}
//               minPolarAngle={Math.PI / 4}
//               enablePan={false}
//             />
//             <Model />
//           </Canvas>
//         </div>
//       </div>

//       {/* ===== ABOUT SECTION ===== */}
//       <section className="bg-white py-20 px-6 md:px-12 text-center">
//         <h2 className="text-4xl font-bold text-pink-800 mb-6">
//           About Our Craftsmanship
//         </h2>
//         <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
//           Every piece of jewellery we create reflects our passion for excellence
//           and attention to detail. From sketch to sparkle, our artisans combine
//           modern design with timeless traditions to bring your dreams to life.
//         </p>
//       </section>

//       {/* ===== FEATURED COLLECTIONS ===== */}
//       <section className="bg-rose-50 py-20 px-6 md:px-12 text-center">
//         <h2 className="text-4xl font-bold text-pink-800 mb-10">
//           Featured Collections
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//           {[gold, goldElegance, diamond].map((img, i) => (
//             <div
//               key={i}
//               className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500 bg-white"
//             >
//               <img
//                 src={img}
//                 alt="collection"
//                 className="w-full h-80 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-pink-700 mb-2">
//                   {i === 0
//                     ? "The Gold Charm"
//                     : i === 1
//                     ? "Royal Elegance"
//                     : "Diamond Bliss"}
//                 </h3>
//                 <p className="text-gray-600">
//                   Explore our signature designs crafted to perfection for every
//                   occasion.
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ===== TESTIMONIAL SECTION ===== */}
//       <section className="bg-gradient-to-r from-pink-100 via-rose-50 to-pink-50 py-20 px-6 md:px-12 text-center">
//         <h2 className="text-4xl font-bold text-pink-800 mb-10">
//           What Our Customers Say
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//           {[
//             {
//               name: "Payal Sharma",
//               review:
//                 "Absolutely loved the craftsmanship! My ring is breathtakingly beautiful.",
//             },
//             {
//               name: "Sourav Kumar",
//               review:
//                 "The gold necklace I bought exceeded expectations. Elegant, classy, and stunning!",
//             },
//             {
//               name: "Lovepreet",
//               review:
//                 "Brilliant service and truly exquisite jewellery. Worth every penny!",
//             },
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all"
//             >
//               <p className="text-gray-700 italic mb-4">“{item.review}”</p>
//               <h4 className="font-semibold text-pink-700">{item.name}</h4>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ===== FOOTER ===== */}
//       <footer className="bg-pink-900 text-white py-8 text-center">
//         <p className="text-lg">
//           © {new Date().getFullYear()} JewelVista. All rights reserved.
//         </p>
//       </footer>
//     </>
//   );
// };

// export default Home;




import React, { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import rings from "../assets/animations/rings.json";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import gold from "../assets/images/gold.jpg";
import diamond from "../assets/images/Diamond.jpg";
import goldElegance from "../assets/images/gold-jewellery.jpg";
import { useInView } from "react-intersection-observer";


import ring from "../assets/images/Ring.jpg";
import chain from "../assets/images/Chain.jpg";
import necklace from "../assets/images/Necklace.jpg";
import ringInHand from "../assets/images/RingInHand.jpg";
import earing from "../assets/images/Earings.jpg";
import multiRing from "../assets/images/MultiRings.jpg";
import faceLook from "../assets/images/FaceEaring.jpg";

// ✅ Model Component
function Model() {
  const { scene } = useGLTF("/models/diamond_ring.glb");

  useEffect(() => {
    if (scene) {
      scene.scale.set(1.8, 1.8, 1.8);
      scene.position.set(0.6, -0.4, 0);
      scene.rotation.set(0, -0.8, 0);
    }
  }, [scene]);

  return <primitive object={scene} />;
}

// ✅ Gallery Images (replace with yours)
const galleryImages = [
  ring,
  chain,
  necklace,
  ringInHand,
  earing,
  multiRing,
  faceLook,
];



  
// const slideVariants = {
//     enter: (dir) => ({
//       x: dir > 0 ? 80 : -80,
//       opacity: 0,
//       scale: 0.98,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       scale: 1,
//     },
//     exit: (dir) => ({
//       x: dir > 0 ? -80 : 80,
//       opacity: 0,
//       scale: 0.98,
//     }),
//   };



const Home = () => {


  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const navigate = useNavigate();

  // === HERO SLIDER ===
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

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <div className="relative bg-pink-800 min-h-screen overflow-hidden flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-20 pt-32 gap-10">
        {/* 💫 Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
          <motion.h1
            className="text-5xl md:text-6xl text-white font-bold leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Discover the Elegance of Fine Jewellery
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-pink-100 mt-4 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Crafting timeless pieces that capture beauty, grace, and everlasting
            elegance.
          </motion.p>

          <motion.button
            onClick={() => navigate("/diamond")}
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg mt-6 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            Let's Explore .....
          </motion.button>
        </div>

        {/* 🌸 Right Section - Smooth Carousel */}
         <div className="relative w-full lg:w-[45vw] h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden shadow-2xl">
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
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
                <motion.p
                  className="text-lg md:text-xl text-pink-100 mb-4 max-w-lg"
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
            className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg"
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg"
          >
            <FaArrowRight />
          </button>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === index ? "bg-pink-500 scale-125" : "bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      

      {/* 💎 AUTO-PLAYING FEATURED GALLERY */}
      <section className="relative w-full py-20 bg-gradient-to-b from-white to-pink-50 overflow-hidden">
        <div className="flex justify-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-pink-800">
            Our Signature Designs
          </h2>
        </div>

        <motion.div
          className="flex gap-6 justify-center items-center"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {[...galleryImages, ...galleryImages].map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`gallery-${i}`}
              className="w-64 h-80 rounded-2xl object-cover shadow-xl hover:scale-105 transition-transform duration-500"
            />
          ))}
        </motion.div>
      </section>

      {/* ===== 3D MODEL SECTION ===== */}
      <div className="h-screen w-full bg-gradient-to-r from-pink-100 via-rose-50 to-gray-100 flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 overflow-hidden">
        {/* Left */}
        <div className="max-w-lg space-y-6 text-center lg:text-left">
          <h1 className="text-5xl font-extrabold text-pink-800 leading-tight drop-shadow-md">
            The Symbol of <br />
            <span className="text-rose-600">Eternal Love</span>
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed">
            Crafted with precision and passion, our diamond rings capture
            timeless elegance. Whether it’s a proposal, anniversary, or a gift
            of love, make your moments shine forever.
          </p>

          <div className="flex gap-4 justify-center lg:justify-start pt-4">
            <button className="bg-pink-700 text-white px-6 py-3 rounded-2xl text-lg font-semibold hover:bg-pink-800 transition-all shadow-md hover:shadow-lg">
              Shop Now 💍
            </button>
            <button
              onClick={() => navigate("/collections")}
              className="border-2 border-pink-700 text-pink-700 px-6 py-3 rounded-2xl text-lg font-semibold hover:bg-pink-700 hover:text-white transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              View Collections →
            </button>
          </div>
        </div>

        {/* Right - 3D Model */}
        <div className="w-full lg:w-[50%] h-[400px] lg:h-full flex justify-center lg:justify-end items-center">
          <Canvas
            camera={{
              position: [1.5, 3.2, 4.6],
              fov: 40,
            }}
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
            <Model />
          </Canvas>
        </div>
      </div>

      {/* ===== ABOUT SECTION ===== */}
      <section className="bg-white py-20 px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-pink-800 mb-6">
          About Our Craftsmanship
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
          Every piece of jewellery we create reflects our passion for excellence
          and attention to detail. From sketch to sparkle, our artisans combine
          modern design with timeless traditions to bring your dreams to life.
        </p>
      </section>

      {/* ===== FEATURED COLLECTIONS ===== */}
      <section className="bg-rose-50 py-20 px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-pink-800 mb-10">
          Featured Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[gold, goldElegance, diamond].map((img, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500 bg-white"
            >
              <img
                src={img}
                alt="collection"
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-pink-700 mb-2">
                  {i === 0
                    ? "The Gold Charm"
                    : i === 1
                    ? "Royal Elegance"
                    : "Diamond Bliss"}
                </h3>
                <p className="text-gray-600">
                  Explore our signature designs crafted to perfection for every
                  occasion.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TESTIMONIAL SECTION ===== */}
      <section className="bg-gradient-to-r from-pink-100 via-rose-50 to-pink-50 py-20 px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-pink-800 mb-10">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              name: "Payal Sharma",
              review:
                "Absolutely loved the craftsmanship! My ring is breathtakingly beautiful.",
            },
            {
              name: "Sourav Kumar",
              review:
                "The gold necklace I bought exceeded expectations. Elegant, classy, and stunning!",
            },
            {
              name: "Lovepreet",
              review:
                "Brilliant service and truly exquisite jewellery. Worth every penny!",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all"
            >
              <p className="text-gray-700 italic mb-4">“{item.review}”</p>
              <h4 className="font-semibold text-pink-700">{item.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-pink-900 text-white py-8 text-center">
        <p className="text-lg">
          © {new Date().getFullYear()} JewelVista. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Home;