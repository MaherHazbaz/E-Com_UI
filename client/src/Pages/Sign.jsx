import React from "react";
import CustomButton from "../components/CustomButton";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
const Sign = () => {
  return (
    <>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div> SignUp</div>
      </div>
    </>
  );
};

export default Sign;
