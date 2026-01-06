import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import AOS from "aos";


import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Guards from "./pages/guards";
import GalleryPage from "./pages/galleryPage";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
      easing: "ease-in-out",
    });

    // 🔥 GitHub Pages fix
    setTimeout(() => {
      AOS.refreshHard();
    }, 300);
  }, []);

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/guards" element={<Guards />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}
