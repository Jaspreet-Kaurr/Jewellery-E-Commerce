  // import React from "react";
  // import { motion } from "framer-motion";

  // // ✅ Replace these with your own assets
  import heroImg from "../assets/images/heroImg.png";
  import img1 from "../assets/images/img1.jpg";
  import img2 from "../assets/images/img2.jpg";
  import img3 from "../assets/images/img3.jpg";

  // const fadeUp = {
  //   hidden: { opacity: 0, y: 40 },
  //   show: { opacity: 1, y: 0 }
  // };

  // export default function Collections() {
  //   const products = [img1, img2, img3];

  //   return (
  //     <div className="w-full bg-white font-sans">


  //       {/* ✅ Hero Section - Sticky feel */}
  //       <motion.section
  //         initial={{ opacity: 0 }}
  //         animate={{ opacity: 1 }}
  //         transition={{ duration: 1 }}
  //         className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden"
  //       >
  //         <img
  //           src={heroImg}
  //           alt="Collection Hero"
  //           className="w-full h-full object-contain object-center mx-auto mt-16 rounded-3xl shadow-xl"
  //         />



  //         {/* Hero Text */}
  //         <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
  //           <motion.h1
  //             initial={{ opacity: 0, y: -20 }}
  //             animate={{ opacity: 1, y: 0 }}
  //             transition={{ duration: 0.8 }}
  //             className="text-4xl md:text-6xl font-bold drop-shadow-md"
  //           >
  //             Sparkling Avenues 
  //           </motion.h1>
  //           <motion.p
  //             initial={{ opacity: 0, y: 20 }}
  //             animate={{ opacity: 1, y: 0 }}
  //             transition={{ duration: 0.8, delay: 0.3 }}
  //             className="mt-3 text-lg md:text-2xl drop-shadow-sm"
  //           >
  //             Explore our exclusive collections of fine jewellery
  //           </motion.p>
  //         </div>
  //       </motion.section>


  //       {/* ✅ Product Grid Section */}
  //       <div className="max-w-6xl mx-auto py-20">
  //         {/* Grid */}
  //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
  //           {products.map((img, i) => (
  //             <motion.div
  //               key={i}
  //               variants={fadeUp}
  //               initial="hidden"
  //               whileInView="show"
  //               transition={{ duration: 0.6, delay: i * 0.1 }}
  //               viewport={{ once: true }}
  //               className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition p-3"
  //             >
  //               <img src={img} alt="Jewelry" className="w-full h-80 object-cover rounded-xl" />
  //               <div className="mt-4 text-center">
  //                 <p className="text-lg font-medium text-gray-700">Elegant Diamond Piece</p>
  //                 <p className="text-sm text-gray-500 mt-1">Gold · Diamond · Premium</p>
  //               </div>
  //             </motion.div>
  //           ))}
  //         </div>
  //       </div>


  //       {/* ✅ Footer CTA */}
  //       <motion.div
  //         initial={{ opacity: 0, y: 30 }}
  //         whileInView={{ opacity: 1, y: 0 }}
  //         viewport={{ once: true }}
  //         className="bg-black text-white py-20 text-center"
  //       >
  //         <h3 className="text-2xl md:text-4xl font-semibold mb-4">Visit Our Store</h3>
  //         <p className="text-gray-300 text-lg max-w-xl mx-auto">
  //           Discover timeless pieces crafted with elegance and perfection.
  //         </p>
  //       </motion.div>
  //     </div>
  //   );
  // }








  import React from "react";
import { motion } from "framer-motion";

// ✅ Replace these with your own assets
// import heroImg from "../assets/images/collection-hero.jpg";
// import img1 from "../assets/images/col-1.jpg";
// import img2 from "../assets/images/col-2.jpg";
// import img3 from "../assets/images/col-3.jpg";
// import img4 from "../assets/images/col-4.jpg";
// import img5 from "../assets/images/col-5.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

export default function Collections() {
  // Multiple sections each with hero + products
  const sections = [
    {
      hero: heroImg,
      products: [img1, img2, img3]
    },
    {
      hero: img2, // replace with heroImg2
      products: [img3, img1, img2]
    },
    {
      hero: img3, // replace with heroImg3
      products: [img2, img3, img1]
    }
  ];

  return (
    <div className="w-full bg-white font-sans">
      {sections.map((section, idx) => (
        <div key={idx}>
          {/* ✅ Hero Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden"
          >
            <img
              src={section.hero}
              alt="Collection Hero"
              className="w-[80vw] h-full object-contain object-center mx-auto mt-16 rounded-3xl shadow-xl"
            />

            {/* Hero Text */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold drop-shadow-md"
              >
                Sparkling Avenues ✨
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-3 text-lg md:text-2xl drop-shadow-sm"
              >
                Explore our exclusive collections of fine jewellery
              </motion.p>
            </div>
          </motion.section>

          {/* ✅ Product Grid */}
          <div className="max-w-6xl mx-auto py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
              {section.products.map((img, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition p-3"
                >
                  <img src={img} alt="Jewelry" className="w-full h-80 object-cover rounded-xl" />
                  <div className="mt-4 text-center">
                    <p className="text-lg font-medium text-gray-700">Elegant Diamond Piece</p>
                    <p className="text-sm text-gray-500 mt-1">Gold · Diamond · Premium</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* ✅ Footer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-black text-white py-20 text-center"
      >
        <h3 className="text-2xl md:text-4xl font-semibold mb-4">Visit Our Store</h3>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">
          Discover timeless pieces crafted with elegance and perfection.
        </p>
      </motion.div>
    </div>
  );
}
