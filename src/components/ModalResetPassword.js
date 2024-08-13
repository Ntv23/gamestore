import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig.js";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function ResetModal({ isResetOpen, onResetClose }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleResetPassword = async (event) => {
    event.preventDefault();

    if (!email) {
      setMessage("* Please enter your email *");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent! Please check your email box!");
    } catch (error) {
      console.error("Password reset failed:", error);
      setMessage("Password reset failed: " + error.message);
    }
  };

  const handleCloseReset = () => {
    onResetClose();
    setEmail("");
    setMessage("");
  };

  if (!isResetOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      role="dialog"
      aria-labelledby="reset-title"
    >
      <div className="relative w-full max-w-sm mx-4 sm:mx-0 bg-black p-6 rounded-xl shadow-xl">
        <button
          type="button"
          onClick={handleCloseReset}
          className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          <XMarkIcon aria-hidden="true" className="h-6 w-6 text-gray-200" />
        </button>
        <h1
          id="reset-title"
          className="text-center text-2xl font-semibold text-gray-200"
        >
          Reset Password
        </h1>

        <div className="mt-5">
          <form onSubmit={handleResetPassword} className="bg-black p-4">
            <div className="relative mt-6">
              <input
                type="email"
                className="peer w-full h-10 bg-black text-white border-b border-white placeholder-transparent focus:border-red-600"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                htmlFor="email"
                className="absolute left-0 ml-1 -translate-y-3 bg-black px-1 text-sm text-gray-300 duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-3 peer-focus:text-sm peer-focus:text-red-600"
              >
                Email
              </label>
            </div>
            <p className="text-red-600 mt-5 text-center font-bold">{message}</p>

            <motion.div
              className="p-[clamp(20px,5vw,40px)] flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <button
                type="submit"
                className="w-full font-bold shadow-lg shadow-gray-400 rounded-full text-lg border p-4 flex items-center justify-center transition-all duration-300 ease-in-out space-x-4"
                style={{
                  background:
                    "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2))",
                  border: "2px solid rgba(255, 255, 255, 0.5)",
                }}
              >
                <span className="text-white text-[clamp(14px,2.5vw,18px)]">
                  Reset Password
                </span>
              </button>
            </motion.div>
          </form>
        </div>
      </div>
    </div>
  );
}
