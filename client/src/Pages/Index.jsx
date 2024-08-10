import React from "react";
import CustomProductComponent from "../components/CustomProductComponent";
import CustomCategoryComponent from "../components/CustomCategoryComponent";
import Product from "./Product";
import Category from "./Category";

const Index = () => {
  return (
    <div className="px-20 ">
      <Product />
      <Category/>
    </div>
  );
};

export default Index;
