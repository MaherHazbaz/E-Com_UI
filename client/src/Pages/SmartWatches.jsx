import React from "react";
import CustomCategoryComponent from "../components/CustomCategoryComponent";
import s1 from "../assets/Images/s1.jpg";
import s3 from "../assets/Images/s3.jpg";

import s4 from "../assets/Images/s4.jpg";
import s2 from "../assets/Images/s2.jpg";
import s5 from "../assets/Images/s5.jpg";

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
      name: "AXL Pulse LifeFit Smart Watch",
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
        <div className="flex  space-x-20 px-10 py-3 ">
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
                <h2 className=" text-red-500 font-semibold">
                  Rs.{data.price}/-
                </h2>
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
        <div className="px-24">
          <CustomCategoryComponent />
        </div>
      </div>
    </>
  );
};

export default SmartWatches;
