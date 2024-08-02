import React from "react";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Product from "./Pages/Product";
import Index from "./Pages/Index";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/product" element={<Index />} />
      </Route>
    </Routes>
  );
};

export default App;
