import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.js";
import About from "../pages/About.js";
import Products from "../pages/Products.js";
import Cart from "../pages/Cart.js";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}
export default AppRoutes
