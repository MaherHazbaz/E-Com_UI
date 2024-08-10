import React from "react";
import CustomCategoryComponent from "../components/CustomCategoryComponent";
import igreen from "../assets/Images/igreen.jpg";
import iphone from "../assets/Images/iphone.jpg";
import igrey from "../assets/Images/i grey.jpg";
import ipink from "../assets/Images/ipink.jpg";
import iphonee from "../assets/Images/iphonee.jpg";

const Phones = () => {
  const productphone = [
    {
      id: "1",
      name: "Apple iPhone 15 - 128 GB - Blue",
      image: iphone,
      price: "12999",
    },
    {
      id: "1",
      name: "Apple iPhone 13 (128GB) - Pink  ",
      image: ipink,
      price: "14599",
    },
    {
      id: "1",
      name: "Apple iPhone 15 - 128 GB - Green",
      image: igreen,
      price: "12499",
    },
    {
      id: "1",
      name: " Apple iPhone 15 Pro Max (256GB,Titanium)",
      image: igrey,
      price: "18999",
    },
    {
      id: "1",
      name: " Apple iPhone 15-128 GB  OliveGreen ",
      image: iphonee,
      price: "13499",
    },
  ];
  return (
    <>
      
      <div className="flex  space-x-16 px-16 py-3 ">
        {productphone.map((data) => (
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
      <div className="px-24">
        <CustomCategoryComponent />
      </div>
    </>
  );
};

export default Phones;
