import React from "react";
import CustomProductComponent from "../components/CustomProductComponent";
import igreen from "../assets/Images/igreen.jpg";
import iphone from "../assets/Images/iphone.jpg";
import igrey from "../assets/Images/i grey.jpg";
import ipink from "../assets/Images/ipink.jpg";
import iphonee from "../assets/Images/iphonee.jpg";

import { Outlet } from "react-router-dom";

const Product = () => {
  const product = [
    {
      id: "1",
      name: "Lavender Style 3 Headphones",
      image: "lavender",
      price: "2999",
    },
    {
      id: "1",
      name: "Sony WH-CH520 Headphones ",
      image: "pink",
      price: "4599",
    },
    {
      id: "1",
      name: "Skullcandy  ANC  Headphones-Black",
      image: "scandy",
      price: "2499",
    },
    {
      id: "1",
      name: " E7000 Fenrir Xbox Gaming Headset",
      image: "game",
      price: "8999",
    },
    {
      id: "",
      name: " Macron Pods Max (White) ",
      image: "white",
      price: "3499",
    },
  ];
  
  return (
    <>
      <div className="flex-wrap">
        <CustomProductComponent data={product} />
      </div>
      
      
    </>
  );
};

export default Product;
