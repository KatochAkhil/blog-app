import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./common/Footer/Footer";
import Navbar from "./common/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import Home from "./pages/Home/index";
import Aboout from "./pages/about";
import Blogs from "./pages/Allblogs";
import Contact from "./pages/contact";
import Profile from "./pages/profile";
import MainProfile from "./pages/profile/MainProfile";
import Write from "./pages/Write/Write";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboout />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/author" element={<MainProfile />} />
        <Route path="/create" element={<Write />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
