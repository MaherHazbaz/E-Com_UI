import React from "react";
import CustomCategoryComponent from "../components/CustomCategoryComponent";
import t1 from "../assets/Images/t1.jpg";
import t3 from "../assets/Images/t3.jpg";

import t4 from "../assets/Images/t4.jpg";
import t2 from "../assets/Images/t2.jpg";
import t5 from "../assets/Images/t5.jpg";

const Tablets = () => {
  const product = [
    {
      id: "1",
      name: " Tablet Moto G70 com 64 GB",
      image: t1,
      price: "112999",
    },
    {
      id: "1",
      name: "Samsung Galaxy Tab A9+ ",
      image: t2,
      price: "114599",
    },
    {
      id: "1",
      name: "Samsung Galaxy Tab A7",
      image: t3,
      price: "112499",
    },
    {
      id: "1",
      name: " E7000 Fenrir Xbox Gaming Tab",
      image: t4,
      price: "118999",
    },
    {
      id: "1",
      name: " Lenovo Tab P12 Pro (White) ",
      image: t5,
      price: "113499",
    },
  ];
  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-5 space-x-5  ">
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
              <br />
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

export default Tablets;
