import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import rings from "../assets/animations/rings.json";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CircularGallery from '../CircularGallery'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import gold from "../assets/images/gold.jpg";
import diamond from "../assets/images/Diamond.jpg";
import goldElegance from "../assets/images/gold-jewellery.jpg";



function Model() {
    const { scene } = useGLTF("/models/diamond_ring.glb");

    useEffect(() => {
        if (scene) {
            // Scale & position to match your preview look
            scene.scale.set(1.8, 1.8, 1.8); // Adjusted slightly larger
            scene.position.set(0.6, -0.4, 0); // Move right & slightly down
            scene.rotation.set(0, -0.8, 0); // Rotate a bit for better display angle
        }
    }, [scene]);

    return <primitive object={scene} />;
}


const Home = () => {
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



    const text = "Discover the Elegance of Fine Jewellery";
    const words = text.split(" ");
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
            nextSlide();
        }, 4000);

        return () => clearInterval(timer);
    }, []);




    const wordVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 }
        }
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.2 }
        }
    };



    const slideVariants = {
        enter: (dir) => ({
            x: dir > 0 ? 100 : -100,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (dir) => ({
            x: dir > 0 ? -100 : 100,
            opacity: 0
        })
    };






    return (

        <>
           
            <div className="relative bg-pink-800 min-h-screen overflow-hidden flex items-center justify-between px-16 py-20 pt-28 gap-10 ">
                {/* 💫 Left Section - Text */}
                {/* Optional logo animation */}
                {/* <div className="mb-6">
          <Lottie animationData={rings} loop={true} style={{ width: 160, height: 160 }} />
        </div> */}
                {/* 💫 Left Section - Text */}
                <div className="w-1/2 flex flex-col justify-center items-start space-y-6 overflow-hidden">
                    {/* <div className="max-w-full overflow-hidden"> */}
                    <motion.h1
                        className="text-5xl lg:text-6xl text-white font-bold leading-tight flex flex-wrap max-w-full"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: {
                                transition: { staggerChildren: 0.2 },
                            },
                        }}
                    >
                        {words.map((word, wordIndex) => (
                            <motion.span
                                key={wordIndex}
                                className="mr-3 flex"
                                variants={wordVariants}
                            >
                                {word.split(" ").map((char, charIndex) => (
                                    <motion.span
                                        key={charIndex}
                                        variants={letterVariants}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                        className="inline-block"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.span>
                        ))}
                    </motion.h1>

                    {/* </div> */}

                    <motion.p
                        className="text-xl text-pink-100 mt-4 max-w-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: words.length * 0.05 + 0.3, duration: 1 }}
                    >
                        Crafting Timeless Pieces for Every Occasion
                    </motion.p>

                    <motion.button
                        className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg mt-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.6 }}
                    >
                        Explore Collection
                    </motion.button>
                </div>


                {/* 🌸 Right Section - Carousel */}
                <div className="relative w-[45vw] h-[70vh] rounded-3xl overflow-hidden shadow-2xl">

                    <AnimatePresence custom={direction}>
                        <motion.div
                            key={slides[current].id}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="absolute inset-0 flex justify-center items-center overflow-hidden"
                        >
                            <img
                                src={slides[current].image}
                                alt={slides[current].title}
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-end pr-10 text-right">
                                <motion.p
                                    className="text-xl text-pink-100 mb-6 max-w-lg"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                >
                                    {slides[current].desc}
                                </motion.p>

                                <motion.button
                                    className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8, duration: 0.6 }}
                                >
                                    Shop Now
                                </motion.button>
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
                                className={`w-3 h-3 rounded-full transition-all ${current === index
                                    ? "bg-pink-500 scale-125"
                                    : "bg-white/70"
                                    }`}
                            />
                        ))}
                    </div>
                </div>





                {/* Circular Gallery  */}
            </div>
            <div style={{ height: '600px', position: 'relative', backgroundColor: '#fce4ec', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CircularGallery bend={3} textColor="black" borderRadius={0.05} scrollEase={0.02} />
            </div>




            {/* 3D model section  */}

            <div className="h-screen w-full bg-gradient-to-r from-pink-100 via-rose-50 to-gray-100 flex items-center justify-between px-16 overflow-hidden">
                {/* ===== Left Side Content ===== */}
                <div className="max-w-lg space-y-6">
                    <h1 className="text-5xl font-extrabold text-pink-800 leading-tight drop-shadow-md">
                        The Symbol of <br />
                        <span className="text-rose-600">Eternal Love</span>
                    </h1>

                    <p className="text-gray-700 text-lg leading-relaxed">
                        Crafted with precision and passion, our diamond rings capture timeless elegance.
                        Whether it’s a proposal, anniversary, or a gift of love, make your moments shine forever.
                    </p>

                    <div className="flex gap-4 pt-4">
                        <button className="bg-pink-700 text-white px-6 py-3 rounded-2xl text-lg font-semibold hover:bg-pink-800 transition-all shadow-md hover:shadow-lg">
                            Shop Now 💍
                        </button>
                        <button className="border-2 border-pink-700 text-pink-700 px-6 py-3 rounded-2xl text-lg font-semibold hover:bg-pink-700 hover:text-white transition-all shadow-md hover:shadow-lg">
                            View Collections →
                        </button>
                    </div>
                </div>

                {/* ===== Right Side 3D Model ===== */}
                <div className="w-[50%] h-full flex justify-end items-center">
                    <Canvas
                        camera={{
                            position: [1.5, 3.2, 4.6],   // ✅ higher & farther to see full box
                            // position: [0, 2 , 5.8], // Perfect first-view camera angle
                            fov: 40,
                        }}
                    >
                        {/* Lights for realistic look */}
                        <ambientLight intensity={1.2} />
                        <directionalLight position={[5, 5, 5]} intensity={1.2} />
                        <directionalLight position={[-5, 2, -5]} intensity={0.6} />

                        {/* Smooth and limited orbit control */}
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

        </>
    );
};

export default Home;
