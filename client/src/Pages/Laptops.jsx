import React from "react";
import CustomCategoryComponent from "../components/CustomCategoryComponent";
import l1 from "../assets/Images/l1.jpg";
import l3 from "../assets/Images/l3.jpg";

import l4 from "../assets/Images/l4.jpg";
import l2 from "../assets/Images/l2.jpg";
import l5 from "../assets/Images/l5.jpg";
import Star from "../components/Star";

const Laptops = () => {
  const product = [
    {
      id: "1",
      name: " Microsoft Surface Laptop 4 AMD Ryzen 5",
      image: l1,
      price: "112999",
    },
    {
      id: "1",
      name: "HP Stream 14 Laptop, Intel Celeron N4000",
      image: l2,
      price: "114599",
    },
    {
      id: "1",
      name: "ASUS ROG Strix G15, AMD Ryzen 7 6800H",
      image: l3,
      price: "112499",
    },
    {
      id: "1",
      name: " MSI GL63 15.6 Gaming Laptop - Intel Core i7",
      image: l4,
      price: "118999",
    },
    {
      id: "1",
      name: " Lenovo IdeaPad 3i 14 Laptop, Intel Core i5 ",
      image: l5,
      price: "113499",
    },
  ];
  const data = [{ name: "Laptop" }];
  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-5 space-x-5">
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

export default Laptops;
