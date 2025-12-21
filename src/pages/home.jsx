import React from "react";
import Hero from "./hero";
import About from "./about";
import Services from "./services";
import Guards from "./guards";
import Contact from "./contact";
import ClientSection from "./clientSection";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Guards />
      <Contact />
      <ClientSection />
    </>
  );
};

export default Home;

