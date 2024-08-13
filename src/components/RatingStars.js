import React, { useState } from "react";
import { motion } from "framer-motion";

export default function RatingStars() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  const handleMouseEnter = (index) => setHover(index);
  const handleMouseLeave = () => setHover(null);
  const handleClick = (index) => setRating(index);

  const stars = [1, 2, 3, 4, 5]; // 5 stars

  return (
    <ul className="flex justify-center">
      {stars.map((star, index) => (
        <li key={index}>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={star <= (hover || rating) ? "#FFD700" : "none"} // Vàng (Gold) khi hover hoặc được chọn
            stroke="#FFD700" // Viền vàng
            strokeWidth="2"
            className="mr-2 h-8 w-8 cursor-pointer" // Làm cho ngôi sao lớn hơn
            onMouseEnter={() => handleMouseEnter(star)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(star)}
            whileHover={{ scale: 1.2 }} // Hiệu ứng phóng to khi hover
            transition={{ type: "spring", stiffness: 300 }} // Hiệu ứng mượt mà
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </motion.svg>
        </li>
      ))}
    </ul>
  );
}
