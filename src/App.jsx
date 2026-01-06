import React, { useEffect } from "react";
import {
  HashRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

/* ===== LAYOUT ===== */
import Header from "./components/Header";
import Footer from "./components/Footer";

/* ===== PAGES ===== */
import Home from "./pages/Home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Guards from "./pages/guards";
import GalleryPage from "./pages/galleryPage";

/* ===== AOS INIT COMPONENT ===== */
function AOSInitializer() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    // refresh animations on route change
    setTimeout(() => {
      AOS.refreshHard();
    }, 200);
  }, [location.pathname]);

  return null;
}

/* ===== APP ===== */
export default function App() {
  return (
    <HashRouter>
      <AOSInitializer />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/guards" element={<Guards />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}

