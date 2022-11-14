import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "./pages/header/Header";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import AboutMe from "./pages/aboutMe/AboutMe";
import Portofolio from "./pages/portofolio/Portofolio";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/portofolio" element={<Portofolio />}></Route>
        <Route path="/about-me" element={<AboutMe />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
};

export default App;