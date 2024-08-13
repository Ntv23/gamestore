import React, { useState } from "react";
import { motion } from "framer-motion";
import ModalRegister from "./ModalRegister.js";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openRegisterModal = () => {
    setIsRegisterOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterOpen(false);
  };

  return (
    <footer className="relative text-center text-gray-400 bg-black border-t border-gray-400">
      <div className="container mx-auto flex justify-between items-center p-6">
        {/* Left collumn */}
        <div className="flex items-center space-x-4">
          <h1 className="text-gray-400 font-bold">Follow Us</h1>
          <a
            href="https://facebook.com"
            className="text-gray-300 hover:text-white"
          >
            <FaFacebook className="text-3xl" />
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-300 hover:text-white"
          >
            <FaTwitter className="text-3xl" />
          </a>
          <a
            href="https://instagram.com"
            className="text-gray-300 hover:text-white"
          >
            <FaInstagram className="text-3xl" />
          </a>
        </div>

        {/* Right collumn */}
        <div className="flex flex-col items-center">
          <span className="flex items-center justify-center w-full">
            <motion.div
              className="p-[clamp(20px,5vw,40px)] flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <button
                className="font-bold shadow-lg shadow-gray-400 rounded-full text-lg border p-4 flex items-center justify-center transition-all duration-300 ease-in-out space-x-4"
                onClick={openRegisterModal}
                style={{
                  background:
                    "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2))",
                  border: "2px solid rgba(255, 255, 255, 0.5)",
                }}
              >
                <span className="text-white text-[clamp(14px,2.5vw,18px)]">
                  Register For Free
                </span>
              </button>
            </motion.div>
          </span>
          <div className="p-4 text-center bg-black bg-opacity-20 mt-4">
            © 2023 Copyright:
            <a className="text-white" href="#">
              NGUYEN THAO VY
            </a>
          </div>
        </div>
      </div>

      <ModalRegister isOpen={isRegisterOpen} onClose={closeRegisterModal} />
    </footer>
  );
}
