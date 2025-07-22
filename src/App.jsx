import { useState } from "react";
import Header from "./components/header";
import Landing from "./pages/landing";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router";
import { NavLink } from "react-router";
import Menu from "./pages/Menu_page";
import Chef from "./pages/chef_page";
import Blog from "./pages/blog_page";
import Contact from "./pages/contact";
import Booking from "./pages/booking";

function App() {

  return (
    <>
     
        <Header />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Chef" element={<Chef />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
        <Footer />
      
    </>
  );
}

export default App;
