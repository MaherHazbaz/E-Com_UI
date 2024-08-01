import { data } from "autoprefixer";
import React from "react";
import { RiSmartphoneLine } from "react-icons/ri";
import { IoIosTabletLandscape } from "react-icons/io";
import { MdOutlineWatch } from "react-icons/md";
import { FiHeadphones } from "react-icons/fi";
import { AiOutlineLaptop } from "react-icons/ai";
import { CiSpeaker } from "react-icons/ci";
const CustomCategoryComponent = ({ title }) => {
  const category = [
    {
      title: "Phones",
      image: <RiSmartphoneLine />,
    },
    {
      title: "Tablets",
      image: <IoIosTabletLandscape />,
    },
    {
      title: "SmartWatches",
      image: <MdOutlineWatch />,
    },
    {
      title: "Headphones",
      image: <FiHeadphones />,
    },
    {
      title: "Laptops",
      image: <AiOutlineLaptop />,
    },
    {
      title: "Speakers",
      image: <CiSpeaker />,
    },
  ];
  return (
    <>
      <div className="flex flex-wrap">
        {category.map((data) => (
          <div className="px-10">
            <button className="hover:bg-black py-5 px-4 hover:text-white hover:rounded flex">
              {data.title}
              <div className="px-2 py-1">{data.image}</div>
            </button>
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
