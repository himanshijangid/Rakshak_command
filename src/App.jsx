import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

/* ===== Layout Components ===== */
import Header from "./components/Header";
import Footer from "./components/Footer";

/* ===== Pages ===== */
import Home from "./pages/Home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";

/* ===== AOS Handler Component ===== */
function AOSWrapper() {
  const location = useLocation();

  // Init AOS only once
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 120,
    });
  }, []);

  // Refresh AOS on every route change
  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.refreshHard();
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
}

function AppLayout() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AOSWrapper />
      <AppLayout />
    </Router>
  );
}
