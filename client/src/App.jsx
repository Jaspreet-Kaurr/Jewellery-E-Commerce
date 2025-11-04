import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import Gold from "./pages/Gold";
import Diamond from "./pages/Diamond";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact-us";

import ProductDetails from "./components/ProductDetails";



export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/gold" element={<Gold />} />
        <Route path="/diamond" element={<Diamond />} />
        <Route path="/contact-us" element={<Contact />} />


        <Route path="/product" element={<ProductDetails />} />


      </Routes>
      
      <Footer />
    </>
  );
}




// import React from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import Home from './Pages/Home'
// import Navbar from './Pages/Navbar'

// function Model() {
//   const { scene } = useGLTF("/models/diamond_ring.glb");
//   return <primitive object={scene} />;
// }

// export default function App() {
//   return (
//     <>
//       <Navbar />
//       <Home />
//       <Canvas camera={{ position: [0, 2, 5] }}>
//         <ambientLight intensity={0.7} />
//         <directionalLight position={[10, 10, 10]} />
//         <OrbitControls />
//         <Model />
//       </Canvas>
//     </>
//   );
// }
