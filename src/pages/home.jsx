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

      <section data-aos="fade-up">
        <About />
      </section>

      <section data-aos="fade-up">
        <Services />
      </section>

      <section data-aos="fade-up">
        <Guards />
      </section>

      <section data-aos="fade-up">
        <Contact />
      </section>

      <section data-aos="fade-up">
        <ClientSection />
      </section>
    </>
  );
};

export default Home;
