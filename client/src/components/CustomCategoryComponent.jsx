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
      <div className="flex py-3 ">
        {category.map((data) => (
          <div className="px-10">
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
