import React from "react";
import { FaHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import CustomInput from "./CustomInput";
import { data } from "autoprefixer";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  const [show, setShow] = React.useState(false);

  const arr = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },

    { name: "SignUp", path: "/signup" },
  ];

  console.log(show);

  return (
    <>
      <nav className="bg-white border-gray-200 w-full  position-fixed ">
        <div className="max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   flex-wrap items-center  justify-between mx-auto p-4">
          <span className="self-center text-3xl font- whitespace-nowrap font-bold  space-x- ">
            Exclusive
            <button
              onClick={() => setShow(!show)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-self-end text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded={show}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </span>

          <div
            className={`${
              show ? "block" : "hidden"
            } w-full md:block md:w-auto `}
          >
            <ul className="font-medium flex flex-col p-4  border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white text ">
              {arr.map((data) => (
                <div className="">
                  <Link
                    className="block py-2 tex hover:underline font-bold  "
                    aria-current="page"
                    to={data.path}
                  >
                    {data.name}
                  </Link>
                </div>
              ))}
            </ul>
          </div>
          <div className="flex space-x-3 w-[%] justify-items-center">
            <CustomInput
              type={"text"}
              label={"Search "}
              placeholder={"What are you looking for?"}
            />
            <div className="space-x-3 text-xl flex">
              <button className="text-red-600">
                <FaHeart />
              </button>
              <button>
                <FiShoppingCart />
              </button>
            </div>
          </div>
        </div>
        <br />
      </nav>
    </>
  );
};

export default Navbar;
