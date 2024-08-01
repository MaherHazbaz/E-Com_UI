import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosCart } from "react-icons/io";
import { CiHeart } from "react-icons/ci";

const Nav = () => {
  const [show, setShow] = useState(false);
  const tab = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Contact", path: "/contact" },
    { id: 3, name: "About", path: "/about" },
    { id: 4, name: "SignUp", path: "/signup" },
  ];

  return (
    <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={"/"}>
          <h1 className=" text-3xl text-white">Maher</h1>
        </Link>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className=" hidden md:block space-x-5 flex">
            <CiHeart className=" text-white text-3xl" />
            <IoIosCart className=" text-white text-3xl" />
          </div>
          <button
            onClick={() => setShow(!show)}
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        {show == true && (
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {tab.map((data) => (
                <Link
                  to={data.path}
                  class="block py-2 px-3 text-white  rounded md:bg-transparent "
                  aria-current="page"
                >
                  {data.name}
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
