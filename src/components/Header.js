import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../../src/assets/logo.png";
import ModalLogin from "./ModalLogin.js";
import ModalResetPassword from "./ModalResetPassword.js";
import { getAuth, signOut } from "firebase/auth";

const navigation = [
  { name: "Home", href: "/home" },
  { name: "Genre", href: "#" },
  { name: "About", href: "/about" },
];

export default function Header({ username }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);
  const openChangePassword = () => setIsChangePasswordOpen(true);
  const closeChangePassword = () => setIsChangePasswordOpen(false);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Sign out successful");
      })
      .catch((error) => {
        console.error("Sign out error", error);
      });
  };

  const handleLoginSuccess = (username) => {
    console.log(`Login successful for ${username}`);
    closeLogin();
  };

  return (
    <div className="bg-black">
      <header className="fixed inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-4 lg:px-8 bg-black shadow-md shadow-gray-50"
        >
          <div className="flex lg:flex-1">
            <a href="/home" className="-m-1.5 p-1.5">
              <img alt="Logo" src={logo} className="h-12 w-auto" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            >
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <motion.a
                whileHover={{
                  scale: 1.1,
                  color: "gray",
                  boxShadow: "0 0 10px rgba(255, 255, 224, 0.8)", // Hiệu ứng phát sáng
                }}
                transition={{ type: "spring", stiffness: 300 }} //hiệu ứng chuyển tiếp
                key={item.name}
                href={item.href}
                className="p-4 text-lg font-Orbitron leading-6 text-gray-400 rounded-full"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {username ? (
              <div className="flex items-center space-x-4">
                <FaShoppingCart className="text-gray-500" />
                <a
                  href="/cart"
                  className="text-lg font-Orbitron leading-6 text-gray-400 hover:text-gray-300"
                >
                  Cart |
                </a>
                <span
                  className="text-lg font-Orbitron leading-6 text-red-700"
                  onClick={openChangePassword}
                >
                  Hello! {username}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-lg font-kanit leading-6 text-gray-400 hover:text-gray-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <a
                href="#"
                className="text-lg font-kanit leading-6 text-gray-400"
                onClick={openLogin}
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            )}
          </div>
        </nav>

        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-offset-white">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img alt="Logo" src={logo} className="h-20 w-auto" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5"
              >
                <XMarkIcon
                  aria-hidden="true"
                  className="h-6 w-6 text-gray-400"
                />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-Orbitron leading-7 text-gray-400 hover:bg-gray-400 hover:text-black"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  {username ? (
                    <div className="space-y-2">
                      <span
                        className="text-lg font-Orbitron leading-6 text-red-700"
                        onClick={openChangePassword}
                      >
                        Hello! {username}
                      </span>
                      <a
                        href="/cart"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-Orbitron leading-7 text-gray-400 hover:bg-gray-400 hover:text-black flex justify-between items-center"
                      >
                        <span>Cart</span>
                      </a>
                      <button
                        onClick={handleLogout}
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-Orbitron leading-7 text-gray-400 hover:bg-gray-400 hover:text-black"
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-Orbitron leading-7 text-gray-400 hover:bg-gray-400 hover:text-black"
                      onClick={() => {
                        setIsLoginOpen(true);
                        setMobileMenuOpen(false);
                      }}
                    >
                      Log in
                    </a>
                  )}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate pt-14">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>
      </div>
      <ModalLogin
        isLoginOpen={isLoginOpen}
        onCloseLogin={closeLogin}
        onLoginSuccess={handleLoginSuccess}
      />
      <ModalResetPassword
        isResetOpen={isChangePasswordOpen}
        onResetClose={closeChangePassword}
      />
    </div>
  );
}
