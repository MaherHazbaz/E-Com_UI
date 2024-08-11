import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import Loginbar from "../components/Loginbar";
import ecom from "../assets/Images/ecom.png";

const CustomInput = ({ type, label, placeholder }) => (
  <div className="relative z-0 w-full mb-6 group">
    <input
      type={type}
      placeholder=" "
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      required
    />
    <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
      {label}
    </label>
  </div>
);

const LoginForm = () => (
  <div className="w-full max-w-sm mx-auto space-y-5 py-4  rounded-lg ">
    <p className="text-lg font-semibold text-center text-gray-700">
      Already a User? Login with your Email.
    </p>
    <div className="space-y-4">
      <CustomInput
        type="text"
        label="Email Address"
        placeholder="Enter Your Mail Id"
      />
      <CustomInput type="password" label="Password" placeholder={"Password"} />
    </div>
    <div className="text-sm flex justify-between items-center">
      <label className="flex items-center">
        <input
          type="checkbox"
          className="form-checkbox h-4 w-4 text-blue-600"
        />
        <span className="ml-2 text-gray-600">Remember Me</span>
      </label>
      <button className="text-blue-600 hover:underline">
        Forgot Password?
      </button>
    </div>
    <div className="pt-4">
      <button
        className="w-full py-3 text-sm font-bold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        type="button"
      >
        Login
      </button>
    </div>
    <div className="text-center text-gray-600 font-semibold">
      <p>Or Sign Up using</p>
    </div>
    <div className="flex justify-center space-x-6 text-3xl">
      <a href="https://accounts.google.com/signin">
        <FcGoogle />
      </a>
      <a href="https://www.facebook.com" className="text-blue-600">
        <FaFacebookSquare />
      </a>
      <a href="https://x.com/i/flow/login" className="text-blue-400">
        <AiFillTwitterCircle />
      </a>
    </div>
  </div>
);

const SignupForm = () => (
  <div className="w-full max-w-sm mx-auto space-y-5 py-4 rounded-lg ">
    <p className="text-lg font-semibold text-center ">
      New Here? Register with your Gmail.
    </p>
    <div className="space-y-4">
      <CustomInput type="text" label="Gmail" placeholder={"abc@gmail.com"} />
      <CustomInput
        type="password"
        label="Create Password"
        placeholder={"Enter a valid Password"}
      />
      <CustomInput
        type="password"
        label="Confirm Password"
        placeholder="Re-Enter your Password"
      />
    </div>

    <div className="pt-4">
      <button
        className="w-full py-3 text-sm font-bold text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        type="button"
      >
        Register
      </button>
    </div>
    <div className="text-center text-gray-600 font-semibold">
      <p>Or Sign Up using</p>
    </div>
    <div className="flex justify-center space-x-6 text-3xl">
      <a href="https://accounts.google.com/signin">
        <FcGoogle />
      </a>
      <a href="https://www.facebook.com" className="text-blue-600">
        <FaFacebookSquare />
      </a>
      <a href="https://x.com/i/flow/login" className="text-blue-400">
        <AiFillTwitterCircle />
      </a>
    </div>
  </div>
);

const Sign = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${ecom})` }}
    >
      <div className="w-full max-w-2xl px-6 py-8 bg-white bg-opacity-90 rounded-lg shadow-xl">
        <div className="text-3xl font-bold text-center mb-6 text-gray-800">
          <p>{isLogin ? "Hi Welcome Back!" : "Join Us Now!"}</p>
        </div>
        <div className="relative">
          {isLogin ? <LoginForm /> : <SignupForm />}
          <div className="text-center mt-6">
            <button
              className="text-blue-600 font-semibold hover:underline"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "New User? Sign Up" : "Already a User? Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
