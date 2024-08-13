import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import bg from "../assets/bg.png";
import cd2 from "../assets/cd1.png";
import ProductSlider from "../components/ProductSlider.js";
import { FaPlaystation } from "react-icons/fa6";
import { IoGameController } from "react-icons/io5";
import { MdContactSupport } from "react-icons/md";
import { SiStreamlabs } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const Section = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-300px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
};

const Products = () => {
  const navigate = useNavigate();

  const handleAddtoCart = () => {
    alert("Added to cart!");
    navigate("/cart")
  }

  return (
    <>
      <div
        className="flex justify-center items-center min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,

          paddingTop: "100px",
        }}
      >
        {/* on smaller screens (flex-col) and row on larger screens (md:flex-row) */}
        <div className="container flex flex-col md:flex-row items-center w-full max-h-screen p-1">
          <div className="flex flex-col items-center justify-center w-2/3 md:w-2/3 relative">
            <motion.div
              className="p-[clamp(20px,5vw,40px)] flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <button
                className="font-bold shadow-lg shadow-black rounded-full text-lg border p-4 flex items-center justify-center transition-all duration-300 ease-in-out space-x-4"
                style={{
                  background:
                    "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2))",
                  border: "2px solid rgba(255, 255, 255, 0.5)",
                }}
              >
                <span 
                className="text-white text-[clamp(14px,2.5vw,18px)]"
                onClick={handleAddtoCart}
                >
                  Add to cart
                </span>
                <span className="text-white text-[clamp(14px,2.5vw,18px)]">
                  |
                </span>

                <span className="text-white text-[clamp(14px,2.5vw,18px)]">
                  20$
                </span>
              </button>
            </motion.div>
            <motion.div
              className="bg-transparent shadow-xl shadow-gray-900 p-6 border border-gray-600 rounded-2xl text-gray-300 max-w-full relative"
              style={{ backgroundColor: "rgba(128, 128, 128, 0.70)" }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              {/* min size 16px, 4% of viewport, max size 28px. scale along viewport */}
              <h3 className="text-[clamp(16px,4vw,28px)] mb-2 font-bold">
                Marvel’s Spider-Man 2 (Simplified Chinese, English, Korean,
                Thai, Traditional Chinese)
              </h3>
              <h1 className="text-[clamp(14px,4vw,24px)] text-gray-900 text-center font-bold">
                Sony Interactive Entertainment
              </h1>
              <div className="flex justify-center flex-row space-x-2">
                <motion.button
                  className="p-1 rounded-lg font-mono text-black cursor-not-allowed"
                  style={{
                    backgroundColor: "#6b6b6b",
                    border: "none",
                  }}
                  disabled
                  animate={{
                    backgroundColor: ["#6b6b6b", "#a2a2a2", "#6b6b6b"],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >
                  STANDARD EDITION
                </motion.button>
                <motion.button
                  className="p-1 rounded-lg font-mono text-black cursor-not-allowed"
                  style={{
                    backgroundColor: "#6b6b6b",
                    border: "none",
                  }}
                  disabled
                  animate={{
                    backgroundColor: ["#6b6b6b", "#a2a2a2", "#6b6b6b"],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >
                  PS5
                </motion.button>
              </div>
              {/* hidden when screen scale md:block */}
              <p className="hidden md:block">
                Spider-Man 2 for PlayStation lets you swing through New York
                City as both Peter Parker and Miles Morales. With stunning
                visuals and thrilling gameplay, this sequel offers an epic
                superhero experience, facing new villains and challenges in an
                expanded open world.
              </p>
              <div className="w-full mt-4 rounded-xl shadow-lg border-1 overflow-hidden hidden md:block">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/bFXMHYKzLRw?start=0&end=40&controls=0&mute=1&autoplay=1&loop=1&playlist=bFXMHYKzLRw"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
              <div className="flex justify-center flex-row space-x-2 mt-5">
                <div className="flex flex-col items-center text-white border-gray-800 text-center">
                  <FaPlaystation size={32} color="#000" />
                  <span className="text-[clamp(12px,2.5vw,18px)]">
                    1 Player
                  </span>
                </div>

                <div className="flex flex-col items-center text-white border-gray-800 text-center">
                  <IoGameController size={32} color="#000" />
                  <span className="text-[clamp(12px,2.5vw,18px)]">
                    Vibration function and trigger effect supported (DualSense
                    wireless controller)
                  </span>
                </div>

                <div className="flex flex-col items-center text-white border-gray-800 text-center">
                  <SiStreamlabs size={32} color="#000" />
                  <span className="text-[clamp(12px,2.5vw,18px)]">
                    PS5 game streaming is only possible with a Premium
                    subscription
                  </span>
                </div>

                <div className="flex flex-col items-center text-white border-gray-800 text-center">
                  <MdContactSupport size={32} color="#000" />
                  <span className="text-[clamp(12px,2.5vw,18px)]">
                    Game Help Supported
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-row justify-between items-center w-1/2 hidden md:block">
            <motion.img
              src={cd2}
              className="w-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10 mb-20">
        <Section>
          <h1 className="text-2xl font-Orbitron text-white">Recommend</h1>
        </Section>

        <ProductSlider />
      </div>
    </>
  );
};

export default Products;
