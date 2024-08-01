import React from "react";
import CustomProductComponent from "../components/CustomProductComponent";

import { Outlet } from "react-router-dom";

const Product = () => {
  const product = [
    {
      id: "1",
      name: "Lavender Style 3 Headphones",
      image: lavender,
      price: "2999",
    },
    {
      id: "2",
      name: "Sony WH-CH520 Headphones ",
      image: pink,
      price: "4599",
    },
    {
      id: "3",
      name: "Skullcandy  ANC  Headphones-Black",
      image: scandy,
      price: "2499",
    },
    {
      id: "4",
      name: " E7000 Fenrir Xbox Gaming Headset",
      image: game,
      price: "8999",
    },
    {
      id: "5",
      name: " Macron Pods Max (White) ",
      image: white,
      price: "3499",
    },
  ];
  return (
    <>
      <div>
        <CustomProductComponent data={product} />
      </div>
    </>
  );
};

export default Product;
