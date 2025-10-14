



//     const loopItems = [...jewelryItems, ...jewelryItems];


//     return (
//         <>
//             <div className="relative h-screen bg-pink-950 overflow-hidden">
//                 {/* 💍 Ring Box (Right Middle) */}
//                 {/* <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
//         <Lottie
//           animationData={ringAnimation}
//           loop={true}
//           style={{ width: 500, height: 500 }}
//         />

//       </div> */}



//                <div className="relative min-h-screen bg-pink-800 flex items-center justify-end px-20">
//   {/* 💫 Logo Section - Top Left */}
//   <div className="absolute top-5 left-5 flex flex-col items-center">
//     <Lottie
//       animationData={rings}
//       loop={true}
//       style={{ width: 120, height: 120 }}
//     />
//     <h1 className="text-2xl text-pink-300 font-semibold mt-2">Jass Jewellers</h1>
//   </div>

//   {/* ✨ Main Content - Right Middle */}
//   <div className="max-w-lg text-right">
//     <h1 className="text-5xl text-white font-bold leading-tight">
//       Discover the Elegance of Fine Jewelry
//     </h1>
//     <p className="text-xl text-pink-100 mt-4">
//       Crafting Timeless Pieces for Every Occasion
//     </p>
//   </div>
// </div>



//                 {/* Carousel  */}
//                 <div className="w-full overflow-hidden bg-transparent py-6 mt-80">
//                     <motion.div
//                         className="flex gap-6"
//                         animate={{ x: ["0%", "-50%"] }}
//                         transition={{
//                             repeat: Infinity,
//                             ease: "linear",
//                             duration: 25, // adjust speed
//                         }}
//                     >
//                         {loopItems.map((item, index) => (
//                             <div
//                                 key={index}
//                                 className="w-48 h-64 flex-shrink-0 text-center bg-white shadow-md rounded-xl overflow-hidden"
//                             >
//                                 <img
//                                     src={item.image}
//                                     alt={item.name}
//                                     className="w-full h-full object-cover"
//                                 />
//                             </div>
//                         ))}
//                     </motion.div>
//                 </div>




//             </div>




//         </>

//     );
// };




import React from "react";
import Lottie from "lottie-react";
import rings from "../assets/animations/Rings.json";
import { motion } from "framer-motion";
import ring from "../assets/images/Ring.jpg";
import chain from "../assets/images/Chain.jpg";
import necklace from "../assets/images/Necklace.jpg";
import ringInHand from "../assets/images/RingInHand.jpg";
import earing from "../assets/images/Earings.jpg";
import multiRing from "../assets/images/MultiRings.jpg";
import faceLook from "../assets/images/FaceEaring.jpg";
import { useState, useEffect } from "react  ";

const Home = () => {
    const jewelryItems = [
        { name: "Earrings", image: earing },
        { name: "Finger Rings", image: multiRing },
        { name: "Pendants", image: necklace },
        { name: "Mangalsutra", image: chain },
        { name: "Bracelets", image: ringInHand },
        { name: "Bangles", image: ring },
        { name: "FaceLook", image: faceLook },
    ];

    const loopItems = [...jewelryItems, ...jewelryItems];


    const text = "Discover the Elegance of Fine Jewellery";
    const letters = text.split("");

    // Variants for each letter
    const letterVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 },
    };



    return (





        <div className="relative bg-pink-800 min-h-screen overflow-hidden flex flex-col justify-center px-20 py-10 pt-28">
            {/* 💫 Logo Section - Top Left */}
            <div className="absolute top-8 left-5 flex flex-col items-center">
                <Lottie animationData={rings} loop={true} style={{ width: 200, height: 200 }} />
                {/* <h1 className="text-2xl text-pink-300 font-semibold mt-2">Jass Jewellers</h1> */}
            </div>

            {/* ✨ Heading + Paragraph */}
            <div className="text-right self-end max-w-xl">
                <motion.h1
                    className="text-5xl text-white font-bold leading-tight"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.05, // controls speed of letters
                            },
                        },
                    }}
                >
                    {letters.map((letter, index) => (
                        <motion.span
                            key={index}
                            variants={letterVariants}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="inline-block"
                        >
                            {letter === " " ? "\u00A0" : letter} {/* preserve spaces */}
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.p
                    className="text-xl text-pink-100 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: letters.length * 0.05 + 0.3, duration: 1 }}
                >
                    Crafting Timeless Pieces for Every Occasion
                </motion.p>
            </div>


            {/* 💍 Carousel - Directly Below Heading */}
            <div className="w-full overflow-hidden bg-transparent py-10 mt-10">
                <motion.div
                    className="flex gap-6"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 25,
                    }}
                >
                    {loopItems.map((item, index) => (
                        <div
                            key={index}
                            className="w-48 h-64 flex-shrink-0 text-center bg-white shadow-md rounded-xl overflow-hidden"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
