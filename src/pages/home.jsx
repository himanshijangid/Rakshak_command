import React from "react";
import ClientSection from "./clientSection";
import ContactSection from "./contact";
import Guards from "./guards";
import Services from "./services";
import About from "./about";
import Hero from "./hero";
const Home = () => {
  return (
    <>
      <Hero/>
      <About/>
      <Services />
      <Guards />
      <ContactSection />
      <ClientSection />
    </>
  );
};
export default Home;
