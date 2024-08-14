import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import spider from "../assets/3a.png";
import bg from "../assets/bg4.jpg";
import spiderlogo from "../assets/8a.png";
import { useNavigate } from "react-router-dom";

export default function Card() {
  const navigate = useNavigate();

  const handleToProducts = () => {
    navigate("/products");
  };

  return (
    <div
      className="flex justify-center items-center mt-5 w-full"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-row justify-between items-center w-3/4">
        <div className="flex flex-col justify-center items-center">
          <div className="w-3/4 mt-5">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 10, // speed
                repeat: Infinity,
                ease: "easeInOut", // easing smooting animation
              }}
            >
              <img src={spiderlogo} className="w-full mb-4" />
            </motion.div>
          </div>
          <div className="flex justify-center items-center">
            <motion.div
              className="bg-transparent shadow-xl shadow-gray-900 p-6 border border-gray-600 rounded-2xl text-gray-300 max-w-md hidden md:block"
              style={{ backgroundColor: "rgba(128, 128, 128, 0.5)" }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-xl mb-2">New release</h2>
              <p>
                Spider-Man 2 for PlayStation lets you swing through New York
                City as both Peter Parker and Miles Morales. With stunning
                visuals and thrilling gameplay, this sequel offers an epic
                superhero experience, facing new villains and challenges in an
                expanded open world.
              </p>
            </motion.div>
          </div>
          <motion.div
            className="p-[clamp(20px,5vw,40px)] flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <button
              className="font-bold shadow-lg shadow-black rounded-full text-lg border p-4 flex items-center justify-center transition-all duration-300 ease-in-out space-x-4"
              onClick={handleToProducts}
              style={{
                background:
                  "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2))",
                border: "2px solid rgba(255, 255, 255, 0.5)",
              }}
            >
              <span className="text-white text-[clamp(14px,2.5vw,18px)]">
                NEW RELEASE
              </span>
            </button>
          </motion.div>
        </div>

        <motion.div
          animate={{
            y: [0, -20, 0], // moving up 20px, after that turn to start point
            scale: [1, 1.15, 1], // scale để to smooting animation
          }}
          transition={{
            duration: 4, // time for animation
            repeat: Infinity, // repeat
            ease: "easeInOut", // easing smooting animation
          }}
        >
          <img src={spider} className="w-full mt-10" />
        </motion.div>
      </div>
    </div>
  );
}
