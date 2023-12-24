import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//pages
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Blogs from "./Pages/Blogs";
import Blog from "./Pages/Blog";
import Error from "./Pages/Error";

import "./controlling.css";
import Navbar from "./Navbar";

const Controlling = () => {
  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/blogs/:title" element={<Blog />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Controlling;
