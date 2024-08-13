import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../Firebase/firebaseConfig.js";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function ModalLogin({
  isLoginOpen,
  onCloseLogin,
  onLoginSuccess,
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");


  const findUserEmailByUsername = async (username) => {
    const userDoc = await getDoc(doc(db, "usernames", username));
    if (userDoc.exists()) {
      return userDoc.data().email;
    } else {
      throw new Error("Account does not exist");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username || !password) {
      setMessage("* Please enter Username and Password *");
      return;
    }
    try {
      const email = await findUserEmailByUsername(username);
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("username", username);
      onLoginSuccess(username); // Sử dụng username
    } catch (error) {
      console.error("Login failed:", error);
      if (error.code === "auth/invalid-credential") {
        setMessage("Login failed: Invalid credentials. Please check your username and password.");
      } else {
        setMessage("Login failed: " + error.message);
      }
    }
  };

  const handleCloseLogin = () => {
    onCloseLogin();
    setUsername("");
    setPassword("");
    setMessage("");
  };

  if (!isLoginOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      role="dialog"
      aria-labelledby="login-title"
    >
      <div className="relative w-full max-w-sm mx-4 sm:mx-0 bg-black p-6 rounded-xl shadow-xl">
        <button
          type="button"
          onClick={handleCloseLogin}
          className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          <XMarkIcon aria-hidden="true" className="h-6 w-6 text-gray-200" />
        </button>
        <h1
          id="login-title"
          className="text-center text-2xl font-semibold text-gray-200"
        >
          Log in
        </h1>

        <div className="mt-5">
          <form onSubmit={handleSubmit} className="bg-black p-4">
            <div className="relative mt-6">
              <input
                type="text"
                className="peer w-full h-10 bg-black text-white border-b border-white placeholder-transparent focus:border-red-600"
                placeholder=" "
                value={username}
                onChange={(e) => setUsername(event.target.value)}
              />
              <label
                htmlFor="username"
                className="absolute left-0 ml-1 -translate-y-3 bg-black px-1 text-sm text-gray-300 duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-3 peer-focus:text-sm peer-focus:text-red-600"
              >
                Username
              </label>
            </div>
            <div className="relative mt-6">
              <input
                type="password"
                className="peer w-full h-10 bg-black text-white border-b border-white placeholder-transparent focus:border-red-600"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                htmlFor="password"
                className="absolute left-0 ml-1 -translate-y-3 bg-black px-1 text-sm text-gray-300 duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-3 peer-focus:text-sm peer-focus:text-red-600"
              >
                Password
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
                  Submit
                </span>
              </button>
            </motion.div>
          </form>
        </div>
      </div>
    </div>
  );
}
