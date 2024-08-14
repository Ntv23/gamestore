import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const products = [
  {
    name: "All Of Us Are Dead",
    price: "$10",
    img: "https://image.api.playstation.com/pr/bam-art/179/712/00be3da3-5dee-40cd-93b6-68ec59c7fc22.jpg?w=440&thumb=false",
  },
  {
    name: "Grand Theft Auto V",
    price: "$20",
    img: "https://image.api.playstation.com/vulcan/ap/rnd/202202/2816/K6mmm89oNII1iI1aqaClO0wh.png?w=440&thumb=false",
  },
  {
    name: "7 Ways To Dies",
    price: "$30",
    img: "https://image.api.playstation.com/vulcan/ap/rnd/202406/1216/9023747aeb28e119f8a8fe3272a67ae5f5e19ba0f658aacd.png?w=440&thumb=false",
  },
  {
    name: "CoD BLACK OPS 6",
    price: "$10",
    img: "https://image.api.playstation.com/vulcan/ap/rnd/202405/2921/06729cc29ca090abfb0aaeacaef0feb2391f91ead6429113.png?w=440&thumb=false",
  },
  {
    name: "CoD BLACK OPS 6",
    price: "$10",
    img: "https://image.api.playstation.com/vulcan/ap/rnd/202405/3000/102ec953002cb6b09f84ed630a5d3154600b87f894c46ca0.png?w=440&thumb=false",
  },
  {
    name: "Goman",
    price: "$10",
    img: "https://image.api.playstation.com/vulcan/ap/rnd/202406/2707/77c0e0ed3f080ab28f2457a01ea41a63c78d194da98e7c33.png?w=440&thumb=false",
  },
];

export default function ProductSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {products.map((product, index) => (
        <div key={index} className="p-2">
          <div className="w-full max-w-lg shadow-lg bg-transparent">
            <Link to="/products">
              <img
                className="rounded-2xl w-full transition-all duration-300 transform hover:scale-90 hover:border-4 hover:border-gray-300"
                src={product.img}
                alt={product.name}
              />
            </Link>
          </div>
          <div className="p-2">
            <Link to="/products">
              <h5 className="text-lg font-kanit font-light tracking-tight text-gray-300 transition-transform duration-300 transform hover:scale-105 hover:text-gray-100">
                {product.name}
              </h5>
            </Link>
            <p className="text-md font-kanit font-medium text-gray-200 transition-transform duration-300 transform hover:scale-105 hover:text-gray-50">
              {product.price}
            </p>
          </div>
        </div>
      ))}
    </Slider>
  )
}
