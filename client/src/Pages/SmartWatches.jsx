import React from "react";
import CustomCategoryComponent from "../components/CustomCategoryComponent";
import s1 from "../assets/Images/s1.jpg";
import s3 from "../assets/Images/s3.jpg";

import s4 from "../assets/Images/s4.jpg";
import s2 from "../assets/Images/s2.jpg";
import s5 from "../assets/Images/s5.jpg";
import Star from "../components/Star";

const SmartWatches = () => {
  const product = [
    {
      id: "1",
      name: " Titan Smart 2 Watch Silicone Green Strap",
      image: s1,
      price: "112999",
    },
    {
      id: "1",
      name: "Fossil Gen 6 Smartwatch Digital Black ",
      image: s2,
      price: "114599",
    },
    {
      id: "1",
      name: "AXL Pulse LifeFit fit Smart Watch",
      image: s3,
      price: "112499",
    },
    {
      id: "1",
      name: " SYARA AWE_829_T55 Smart Watch ",
      image: s4,
      price: "118999",
    },
    {
      id: "1",
      name: " Titan Smart 2 Watch Silicone Green Strap ",
      image: s5,
      price: "113499",
    },
  ];
  return (
    <>
      <div className="">
        <div className="grid grid-cols-1  lg:grid-cols-5 space-x-5 ">
          {product.map((data) => (
            <div className="p-4 bg-white rounded-lg shadow- flex flex-col items-center">
              <div>
                <button>
                  <img style={{ height: 150, width: 150 }} src={data.image} />
                </button>
              </div>
              <div className="text-xl font-thin text-center">
                <h1>{data.name}</h1>
              </div>
              <div>
                <Star />
              </div>
              <div>
                <h2 className=" text-red-500 font-semibold">
                  Rs.{data.price}/-
                </h2>
              </div>

              <div>
                <button className="mt-4 px-4 py-2 bg-transparent hover:bg-red-400 text-red-500 hover:text-white font-semibold border border-red-400 rounded-lg transition duration-300 ease-in-out">
                  Add to Cart
                </button>
              </div>
              <div>
                <br />
              </div>
            </div>
          ))}
        </div>
        <div className="px-24">
          <CustomCategoryComponent />
        </div>
      </div>
    </>
  );
};

export default SmartWatches;
