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
        <div className="flex  space-x-20 px-4 py-3 ">
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

export default Tablets;
