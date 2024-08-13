import React, { useState } from "react";
import Card from "../components/Card.js";
import QrImg from "../assets/qr.png";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const unitPrice = 20;
  const [totalPrice, setTotalPrice] = useState(unitPrice * quantity);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const newValue = e.target.value;

    if (newValue >= 1 && newValue <= 50) {
      setQuantity(newValue);
      setTotalPrice(unitPrice * newValue);
    }
  };

  const handleProductDetail = () => {
    navigate("/products");
  };

  const handleCheckout = () => {
    // Generate a random order number
    const randomOrderNumber = `ORD-${Math.floor(Math.random() * 1000000)}`;
    setOrderNumber(randomOrderNumber);

    // Open the modal
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Card />
      <div className="container mx-auto p-6">
        <div className="border rounded-lg shadow-lg p-4">
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <h1 className="text-gray-300 text-3xl font-bold">Shopping Cart</h1>
          </div>
          <div className="grid grid-cols-4 gap-4 text-center">
            <div className="text-gray-400 text-xl font-bold">Product</div>
            <div className="text-gray-400 text-xl font-bold">Quantity</div>
            <div className="text-gray-400 text-xl font-bold">Unit price</div>
            <div className="text-gray-400 text-xl font-bold">Price</div>
          </div>

          <div className="grid grid-cols-4 gap-4 items-center text-center border-b py-4">
            <div>
              <img
                src="https://image.api.playstation.com/pr/bam-art/176/978/c5e7e0d7-0e08-45d8-a273-dbfee9b1e259.jpg?w=440&thumb=false"
                alt="Product Image"
                className="mx-auto rounded-2xl"
                onClick={handleProductDetail}
              />
              <h2 className="text-gray-700 text-lg font-semibold mt-2">
                Marvel's Spiderman 2
              </h2>
            </div>
            <div>
              <input
                type="number"
                className="border border-gray-300 rounded-lg text-center w-20 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={quantity}
                min="1"
                max="50"
                onChange={handleChange}
              />
            </div>
            <div className="text-gray-400 text-lg font-semibold">
              ${unitPrice}
            </div>
            <div className="text-gray-400 text-lg font-semibold">
              ${totalPrice}
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <div className="text-gray-400 text-2xl font-bold">
              ${totalPrice}
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <motion.div
              className="p-[clamp(20px,5vw,40px)] flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <button
                className="font-bold text-white shadow-lg shadow-gray-400 rounded-full text-lg border p-4 flex items-center justify-center transition-all duration-300 ease-in-out space-x-4"
                style={{
                  background:
                    "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2))",
                  border: "2px solid rgba(255, 255, 255, 0.5)",
                }}
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </motion.div>
          </div>

          {isModalOpen && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
              role="dialog"
              aria-labelledby="checkout-title"
            >
              <div className="relative w-full max-w-sm mx-4 sm:mx-0 bg-black p-6 rounded-xl shadow-xl">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600"
                  aria-label="Close"
                >
                  <XMarkIcon
                    aria-hidden="true"
                    className="h-6 w-6 text-gray-200"
                  />
                </button>
                <h1
                  id="checkout-title"
                  className="text-center text-2xl font-semibold text-gray-200"
                >
                  Order Summary
                </h1>

                <div className="mt-5">
                  <img
                    src={QrImg}
                    alt="QR Payment"
                    className="w-full mb-4 rounded-lg"
                  />
                  <p className="mb-2 text-gray-200">
                    <strong>Order Number:</strong> {orderNumber}
                  </p>
                  <p className="mb-4 text-gray-200">
                    <strong>Total Price:</strong> ${totalPrice}
                  </p>
                  <p className="text-gray-200">
                    <strong>Transfer content: </strong>
                  </p>
                  <p className="mb-6 text-gray-200">
                    'Your Username'-'Your OrderNumber'
                  </p>
                  <h1 className="mb-6 font-bold text-gray-200 text-xl">
                    Thank you for your purchase!
                  </h1>

                  <motion.div
                    className="p-[clamp(20px,5vw,40px)] flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <button
                      className="w-full font-bold shadow-lg shadow-gray-400 rounded-full text-lg border p-4 flex items-center justify-center transition-all duration-300 ease-in-out space-x-4"
                      style={{
                        background:
                          "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2))",
                        border: "2px solid rgba(255, 255, 255, 0.5)",
                      }}
                      onClick={handleCloseModal}
                    >
                      <span className="text-white text-[clamp(14px,2.5vw,18px)]">
                        Close
                      </span>
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart
