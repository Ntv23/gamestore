import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import RatingStars from "../components/RatingStars";

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully");
  };

  return (
    <div className="container mx-auto px-4 py-10 mt-10">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-10">
        {/* Left Column */}
        <motion.div
          className="flex flex-col items-center w-full md:w-1/2 p-6 rounded-lg shadow-lg"
          style={{ backgroundColor: "rgba(128, 128, 128, 0.2)" }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-gray-400 text-[clamp(20px,2.5vw,30px)] font-bold mb-4">
            Welcome to My GameStore Web App
          </h1>
          <p className="text-gray-300 font-mono text-[clamp(16px,2.5vw,22px)] text-center">
            This project is a web application designed for selling CDs and
            games, created to enhance my learning and experience with modern
            programming technologies. It serves as a practical tool to explore
            advanced development skills and implement cutting-edge web
            technologies. Through this project, I aim to gain hands-on
            experience while delivering a seamless and engaging user experience.
            Dive in and explore a curated selection of games and CDs, all while
            witnessing the power of contemporary web development practices.
          </p>
        </motion.div>
        
        {/* Right Column */}

        <motion.div
          className="flex flex-col items-center w-full md:w-1/2 p-6 rounded-lg shadow-lg"
          style={{ backgroundColor: "rgba(128, 128, 128, 0.2)" }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-gray-400 text-[clamp(20px,2.5vw,30px)] font-bold mb-4">
            Contact me
          </h1>

          <div className="flex items-center space-x-2 mb-4">
            <MdAttachEmail className="text-gray-400 h-6 w-6" />
            <span className="text-gray-300 font-mono">
              ngthaovy23@gmail.com
            </span>
          </div>

          <div className="flex items-center space-x-2 mb-4">
            <FaPhoneSquareAlt className="text-gray-400 h-6 w-6" />
            <span className="text-gray-300 font-mono">+84 919 904 939</span>
          </div>

          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 bg-gray-700 text-white"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 bg-gray-700 text-white"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 bg-gray-700 text-white"
              rows="4"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors"
            >
              Send Message
            </button>
          </form>
          <h3 className="text-gray-400 text-[clamp(20px,2.5vw,30px)] font-bold mb-4 mt-10">
            Rate my services here :
          </h3>
          <RatingStars />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
