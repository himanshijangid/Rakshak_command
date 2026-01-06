import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Guards from "./pages/guards";
import GalleryPage from "./pages/galleryPage";

function AOSInitializer() {
  const location = useLocation();

  useEffect(() => {
    // Initialize AOS only once on app start
    AOS.init({
      duration: 1000,
      offset: 120,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    // After each page change, refresh AOS
    setTimeout(() => {
      AOS.refreshHard(); 
    }, 200);
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <AOSInitializer />
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
