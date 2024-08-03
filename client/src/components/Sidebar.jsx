import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

const Sidebar = () => {
  const sidebar = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Settings", path: "#", icon: <IoSettingsSharp /> },
  ];
  return (
    <>
      <div className="px bg-black h-screen space-y-5 px-16 py-6 text-white  font-medium">
        {sidebar.map((data) => (
          <div>
            <Link to={data.path}>
              <button className=" hover:underline flex ">
                {data.name} <div className="px-2 py-1">{data.icon}</div>
              </button>
            </Link>
          </div>
        ))}
        <div></div>
      </div>
      <div></div>
    </>
  );
};

export default Sidebar;
