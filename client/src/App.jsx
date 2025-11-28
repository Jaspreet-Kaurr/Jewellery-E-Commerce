import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Collections from "./pages/Collections.jsx";
import Gold from "./pages/Gold.jsx";
import Diamond from "./pages/Diamond.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./pages/Contact-us.jsx";
import Cart from "./pages/ShoppingCart.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Profile from "./pages/Profile.jsx";

import ProductDetails from "./components/ProductDetails.jsx";


import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "./redux/authSlice.js";
import { loadUserCart } from "./redux/authSlice.js";
import SuccessCard from "./pages/SuccessCard.jsx";
import CancelCard from "./pages/CancelCard.jsx";



export default function App() {

  const dispatch = useDispatch();
  
  
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(fetchCurrentUser());
    }
  }, []);
  
  const user = JSON.parse(localStorage.getItem("user"));

  
useEffect(() => {
  if (user) dispatch(loadUserCart());
}, [user]);




  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/gold" element={<Gold />} />
        <Route path="/diamond" element={<Diamond />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />


        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />


        <Route path="/product" element={<ProductDetails />} />

        <Route path="/payment-success" element={<SuccessCard />} />
        <Route path="/payment-cancel" element={<CancelCard />} />

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
