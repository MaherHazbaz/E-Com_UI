import React from "react";
import CustomButton from "./CustomButton";
import scandy from "../assets/Images/scandy.jpg";
import lavender from "../assets/Images/lavender.jpg";
import game from "../assets/Images/game.jpg";
import pink from "../assets/Images/pink.jpg";
import white from "../assets/Images/white.jpg";
const CustomProductComponent = () => {
  const product = [
    {
      id: "1",
      name: "Lavender Style 3 Headphones",
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
      name: " Macron Pods Max (White) ",
      image: white,
      price: "3499",
    },
  ];
  
  return (
    <div className="flex  space-x-12 py-3 w-full">
      {product.map((data) => (
        <div>
          <div>
            <button>
              <img style={{ height: 150, width: 150 }} src={data.image} />
            </button>
          </div>
          <div className="text-xl font-thin">
            <h1>{data.name}</h1>
          </div>
          <div>
            <h2 className=" text-red-500 font-semibold">Rs.{data.price}/-</h2>
          </div>

          <div>
            <button className=" px-2 py-2 hover:bg-red-400 hover:text-white hover:rounded-lg">
              Add to Cart
            </button>
          </div>
          <div>
            <br />
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default CustomProductComponent;
