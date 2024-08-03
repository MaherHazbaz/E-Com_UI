import React from "react";
import CustomButton from "../components/CustomButton";
import { Link } from "react-router-dom";
const Sign = () => {
  return (
    <>
      <div className="px-6 py-6 font-bold">
        <Link to={"/"}>
          <CustomButton button={"Home"} onclick={onclick} />
        </Link>
      </div>
      <div className="px-[25%]">SignUp</div>
    </>
  );
};

export default Sign;
