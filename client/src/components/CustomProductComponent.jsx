import React from "react";
import CustomButton from "./CustomButton";
import scandy from "../assets/Images/scandy.jpg";
import lavender from "../assets/Images/lavender.jpg";
import game from "../assets/Images/game.jpg";
import pink from "../assets/Images/pink.jpg";
import white from "../assets/Images/white.jpg";
import igreen from "../assets/Images/igreen.jpg";
import iphone from "../assets/Images/iphone.jpg";
import igrey from "../assets/Images/i grey.jpg";
import ipink from "../assets/Images/ipink.jpg";
import iphonee from "../assets/Images/iphonee.jpg";

const CustomProductComponent = () => {
  const product = [
    {
      id: "1",
      name: "Lavender Style 3 bluetooth Headphones",
      image: lavender,
      price: "2999",
    },
    {
      id: "1",
      name: "Sony WH-CH520 Headphones ",
      image: pink,
      price: "4599",
    },
    {
      id: "1",
      name: "Skullcandy  ANC  Headphones-Black",
      image: scandy,
      price: "2499",
    },
    {
      id: "1",
      name: " E7000 Fenrir Xbox Gaming Headset",
      image: game,
      price: "8999",
    },
    {
      id: "1",
      name: " Apple Macron Pods Max (White) ",
      image: white,
      price: "3499",
    },
  ];

  return (
    <div className=" grid grid-cols-1  lg:grid-cols-5 space-x-5">
      {product.map((data) => (
        <div className="bg-white p-4  rounded-lg shadow- flex flex-col items-center">
          <div>
            <button>
              <img style={{ height: 150, width: 160 }} src={data.image} />
            </button>
          </div>
          <div className="text-xl font-thin text-center">
            <h1>{data.name}</h1>
          </div>
          <div>
            <h2 className=" text-red-500 font-semibold py-3">
              Rs.{data.price}/-
            </h2>
          </div>

          <div>
            <button className="mt-4 px-4 py-2 bg-transparent hover:bg-red-400 text-red-500 hover:text-white font-semibold border border-red-400 rounded-lg transition duration-300 ease-in-out">
              Add to Cart
            </button>
          </div>
          <div></div>
        </div>
      ))} 
    </div>
    
  );
};

export default CustomProductComponent;
