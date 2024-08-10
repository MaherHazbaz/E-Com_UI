import React from "react";
import CustomProductComponent from "../components/CustomProductComponent";
import CustomCategoryComponent from "../components/CustomCategoryComponent";
import Product from "./Product";
import Category from "./Category";

const Index = () => {
  return (
    <>
      <Product />
      <div className="px-24 ">
        <Category />
      </div>
    </>
  );
};

export default Index;
