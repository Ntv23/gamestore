import React, { useState } from "react";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { auth, db } from "../Firebase/firebaseConfig";

export default function ModalRegister({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("* Passwords do not match *");
      return;
    }
    if (!username || !email || !password || !confirmPassword) {
      setMessage("* Please fill in all fields *");
      return;
    }
    try {
      // Kiểm tra xem email đã tồn tại chưa
      const emailQuery = await getDoc(doc(db, "emails", email));
      if (emailQuery.exists()) {
        setMessage("Registration failed", "Email have been registered.");
        return;
      }

      // Kiểm tra xem username đã tồn tại chưa
      const usernameQuery = await getDoc(doc(db, "usernames", username));
      if (usernameQuery.exists()) {
        setMessage("Registration failed", "Username have been registered.");
        return;
      }

      // Tạo người dùng mới
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Lưu thông tin người dùng vào Firestore
      await setDoc(doc(db, "users", user.uid), {
        username: username,
        email: email,
      });

      // Lưu email để kiểm tra trùng lặp
      await setDoc(doc(db, "emails", email), {
        username: username,
      });

      // Lưu username để kiểm tra trùng lặp
      await setDoc(doc(db, "usernames", username), {
        email: email,
      });

      // Lưu thông tin người dùng vào localStorage
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);

      alert("Registration successful");
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setMessage("");
    } catch (error) {
      console.error("Registration error:", error);
      setMessage("Registration failed");
    }
    onClose();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      role="dialog"
      aria-labelledby="register-title"
    >
      <div className="relative w-full max-w-sm mx-4 sm:mx-0 bg-black p-6 rounded-xl shadow-xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          <XMarkIcon aria-hidden="true" className="h-6 w-6" />
        </button>
        <h1
          id="register-title"
          className="text-center text-2xl font-semibold text-gray-200"
        >
          Register
        </h1>

        <>
          <div className="mt-5">
            <form onSubmit={handleSubmitRegister} className="bg-black p-4">
              {/* Các input trường và nhãn như trước */}
              <div className="relative mt-6">
                <input
                  type="text"
                  className="peer w-full h-10 bg-black text-white border-b border-white placeholder-transparent focus:border-red-600"
                  placeholder=" "
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
              <div className="relative mt-6">
                <input
                  type="password"
                  className="peer w-full h-10 bg-black text-white border-b border-white placeholder-transparent focus:border-red-600"
                  placeholder=" "
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <label
                  htmlFor="confirm-password"
                  className="absolute left-0 ml-1 -translate-y-3 bg-black px-1 text-sm text-gray-300 duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-3 peer-focus:text-sm peer-focus:text-red-600"
                >
                  Confirm Password
                </label>
              </div>
              <p className="text-red-600 mt-5 text-center font-bold">
                {message}
              </p>

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
                    Register
                  </span>
                </button>
              </motion.div>
            </form>
          </div>
        </>
      </div>
    </div>
  );
}
