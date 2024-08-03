import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Sidebar = () => {
  const sidebar = [{ name: "Home", path: "/", icon: <FaHome /> }];
  return (
    <>
      <div className="px bg-black h-screen  px-16 py-6 text-white  font-bold">
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
