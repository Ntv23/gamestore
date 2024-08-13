import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../components/Card";
import ProductSlider from "../components/ProductSlider";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Card />
      <div className="container mx-auto justify-center items-center mt-10 mb-20">
        <div className="p-1">
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-2xl mt-10 font-Orbitron text-white">
              Top 10 Games
            </h1>
          </motion.div>
        </div>
        <ProductSlider />
        <div className="p-1">
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-2xl font-Orbitron text-white">Pre-Orders</h1>
          </motion.div>
        </div>
        <ProductSlider />
        <div className="p-1">
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 2, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-2xl font-Orbitron text-white">New Release</h1>
          </motion.div>
        </div>
        <ProductSlider />
      </div>
    </>
  );
};

export default Home;
