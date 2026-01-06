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

function AOSWrapper() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    // 🔥 ROUTE + GITHUB PAGES FIX
    setTimeout(() => {
      AOS.refreshHard();
    }, 300);
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <AOSWrapper />

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

