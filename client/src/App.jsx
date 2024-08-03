import React from "react";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Product from "./Pages/Product";
import Index from "./Pages/Index";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Sign from "./Pages/Sign";
import Phones from "./Pages/Phones";
import Tablets from "./Pages/Tablets";
import SmartWatches from "./Pages/SmartWatches";
import Headphones from "./Pages/Headphones";
import Laptops from "./Pages/Laptops";
import Speakers from "./Pages/Speakers";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Index />} />
        <Route path="phones" element={<Phones/>} />
        <Route path="tablets" element={<Tablets/>} />
        <Route path="smartwatches" element={<SmartWatches/>} />
        <Route path="headphones" element={<Headphones/>} />
        <Route path="laptops" element={<Laptops/>} />
        <Route path="speakers" element={<Speakers/>} />
        
      </Route>
      <Route>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signup" element={<Sign />} />
        <Route path="/" element={<Index />} />
      </Route>
    </Routes>
  );
};

export default App;
