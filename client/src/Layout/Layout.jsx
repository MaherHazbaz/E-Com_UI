import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Product from "../Pages/Product";
import Category from "../Pages/Category";
import Contact from "../Pages/Contact";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <div className=" w-full">
      <Navbar />
      
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
