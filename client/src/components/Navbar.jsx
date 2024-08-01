import React from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { FaHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
const Navbar = () => {
  return (
    <>
      <div className="bg-s py-9 flex justify-center ">
        <div className="px-[10%] text-3xl font-bold">Exclusive</div>
        <div className="flex space-x-6  px-[15%]">
          <CustomButton button={"Home"} />
          <CustomButton button={"Contact"} />
          <CustomButton button={"About"} />
          <CustomButton button={"SignUp"} />

          <div className="px-[20%] w-[100%] flex space-x-5">
            <CustomInput
              type={"text"}
              label={"Search"}
              placeholder={"What are you looking for?"}
            />
            <div className="px-10 py-3 flex space-x-3 text-xl">
              <button className="text-red-600">
                <FaHeart />
              </button>
              <button>
                <FiShoppingCart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
