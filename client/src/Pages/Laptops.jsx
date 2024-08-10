import React from "react";
import CustomCategoryComponent from "../components/CustomCategoryComponent";
import l1 from "../assets/Images/l1.jpg";
import l3 from "../assets/Images/l3.jpg";

import l4 from "../assets/Images/l4.jpg";
import l2 from "../assets/Images/l2.jpg";
import l5 from "../assets/Images/l5.jpg";

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

export default Laptops;
