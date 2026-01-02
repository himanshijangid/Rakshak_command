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
      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <section data-aos="fade-up">
        <About />
      </section>

      {/* SERVICES */}
      <section data-aos="fade-up">
        <Services />
      </section>

      {/* GUARDS */}
      <section data-aos="fade-up">
        <Guards />
      </section>

      {/* CONTACT */}
      <section data-aos="fade-up">
        <Contact />
      </section>

      {/* CLIENTS */}
      <section data-aos="fade-up">
        <ClientSection />
      </section>
    </>
  );
};

export default Home;
