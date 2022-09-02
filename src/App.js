import "./App.css";
import React from "react";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import NavBar from "./components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Add from "./Pages/Addword/Add";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Help from "./Pages/Help/Help";
import BottomBar from "./components/BottomBar/BottomBar";
import Logo from "./components/Logo/Logo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <HeaderBar />
        <NavBar />
        <div>
          <Logo />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path="/add/*" element={<Add />} />
        </Routes>
      </div>
      <div>{<BottomBar />}</div>
    </BrowserRouter>
  );
}
