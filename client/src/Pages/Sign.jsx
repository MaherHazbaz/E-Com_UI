import React from "react";
import CustomButton from "../components/CustomButton";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import CustomInput from "../components/CustomInput";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
const Sign = () => {
  return (
    <>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div className=" px-[20%] py-3 space-y-">
          <div className="text-2xl px-44 w-full">
            <p>Hi Welcome Back!</p>
          </div>
          <div className="px-20">
            <div className="w-96 space-y-5 py-16">
              <CustomInput type={"text"} label={"E-Mail"} />

              <CustomInput type={"password"} label={"Password"} />
              <div className="text-xs px-9 space-x-3 flex">
                Remember Me
                <div className="px-2  flex space-x-16">
                  <input type="checkbox"></input>
                  <div className="text-red-700 font-semibold">
                    <button>Forgot Password?</button>
                  </div>
                </div>
              </div>
              <div className="px- py-5 ">
                <button
                  class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 w-96 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="button"
                >
                  Login
                </button>
              </div>
              <div className="px-32">
                <p>Or SignUp using</p>
              </div>
              <div className="text-3xl space-x-4 px-32">
                <a href="https://accounts.google.co.in">
                  <button>
                    <FcGoogle />
                  </button>
                </a>
                <a href="https://www.facebook.com">
                  <button className="text-blue-600">
                    <FaFacebookSquare />
                  </button>
                </a>

                <a href="https://x.com/i/flow/login">
                  <button className="text-blue-400">
                    <AiFillTwitterCircle />
                  </button>
                </a>
              </div>
              <div className="font-semibold">
                New Here? Register with your Gmail.
              </div>
              <div className="space-y-5">
                <CustomInput type={"text"} label={"Gmail"} />
                <CustomInput type={"password"} label={"Create Password"} />
                <CustomInput
                  type={"password"}
                  label={"Confirm Password"}
                  placeholder={"Re-Enter your Password"}
                />
              </div>
              <div>
                <button
                  class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 w-96 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="button"
                >
                  register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sign;
