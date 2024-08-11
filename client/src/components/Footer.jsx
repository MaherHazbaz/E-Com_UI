import React from "react";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className=" bg-black  w-full text-white  ">
        <div className="  text-xl py-10 w-[100%] font-thin grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:-grid-cols-4 lg:grid-cols-5  space-x-10 ">
          <div>
            <button className="font-thin  text-2xl px-10">Support</button>
            <div>
              <div className="py-1 px]">
                <div className=" py-3 space-y-2"></div>
              </div>
            </div>
          </div>
          <div className="w-[100%]space-y-2 hover:underline text-2xl ">
            <button>Account</button>
            <div className="text-base px-2 py-3 space-y-1 font-extralight items-center">
              <button>MyAccount</button>
              <br />
              <button>Login/Register</button>

              <button>Cart</button>
              <br />
              <button>WishList</button>
              <br />
              <button>Shop</button>
            </div>
          </div>
          <div className="text-2xl">
            <button> QuickLink</button>
            <div className="text-sm px-2 py-3 space-y-1 font-extralight w-[100%] ">
              <button>PrivacyPolicy</button>
              <br />
              <button>Terms ofUse</button>
              <br />

              <button>FAQ</button>
              <br />
              <button>Contact</button>
              <br />
            </div>
          </div>
          <div className="text-2xl">
            <button>DownloadApp</button>
            <div className="">Get app from App store!</div>
          </div>
          <div className="text-2xl">
            <button>Subscribe</button>
            <div className="py-2 px-1 flex space-x-2">
              <FaYoutube />
              <FaFacebook />
              <FaTwitter />
            </div>

            <div></div>
          </div>
        </div>
        <div className="py-1"></div>

        <div></div>
      </div>
    </>
  );
};

export default Footer;
