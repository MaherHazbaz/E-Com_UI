import { data } from "autoprefixer";
import React from "react";
import { RiSmartphoneLine } from "react-icons/ri";
import { IoIosTabletLandscape } from "react-icons/io";
import { MdOutlineWatch } from "react-icons/md";
import { FiHeadphones } from "react-icons/fi";
import { AiOutlineLaptop } from "react-icons/ai";
import { CiSpeaker } from "react-icons/ci";
import Phones from "../Pages/Phones";
import { Link } from "react-router-dom";
const CustomCategoryComponent = ({ title }) => {
  const category = [
    {
      title: "Phones",
      image: <RiSmartphoneLine />,
      path: "/phones",
    },
    {
      title: "Tablets",
      image: <IoIosTabletLandscape />,
      path: "/tablets",
    },
    {
      title: "SmartWatches",
      image: <MdOutlineWatch />,
      path: "/smartwatches",
    },
    {
      title: "Headphones",
      image: <FiHeadphones />,
      path: "/headphones",
    },
    {
      title: "Laptops",
      image: <AiOutlineLaptop />,
      path: "/laptops",
    },
    {
      title: "Speakers",
      image: <CiSpeaker />,
      path: "/speakers",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  xl:grid-cols-6 ">
        {category.map((data) => (
          <div className="">
            <Link to={data.path}>
              <button className="hover:bg-black py-5 px-4 hover:text-white hover:rounded flex">
                {data.title}
                <div className="px-2 py-1">{data.image}</div>
              </button>
            </Link>
            <div>
              <br />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CustomCategoryComponent;
