// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/home";
// import About from "./pages/about";
// import Contact from "./pages/contact";
// import MainLayout from "./layout/mainLayout";
// import Services from "./pages/services";
// import Guards from "./pages/guards";
// // import GalleryPage from "./pages/galleryPage";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route element={<MainLayout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/guards" element={<Guards />} />
//           {/* <Route path="/gallery" element={<Gallery />} /> */}

//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
        AOS.refresh(); // 🔥 MOST IMPORTANT FOR LIVE
  }, [location.pathname]); // 🔥 route change pe refresh
  ;

  return (
    <Router>
      <Header />   {/* ✅ HAR PAGE PE */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />   {/* ✅ HAR PAGE PE */}
    </Router>
  );
}

export default App;



