import React from "react";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Product from "./Pages/Product";
import Index from "./Pages/Index";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Sign from "./Pages/Sign";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Index />} />
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
