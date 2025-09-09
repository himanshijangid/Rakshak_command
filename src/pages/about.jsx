import React from "react";
import aboutImg from "../assets/about-img.jpg";

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Left Image */}
          <div className="md:w-1/2">
            <div className="w-full h-full">
              <img
                src={aboutImg}
                alt="About Rakshak Command"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 flex flex-col justify-center bg-white p-8 md:p-12">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold uppercase relative pb-2">
                Who Are We?
                <span className="absolute left-0 bottom-0 w-12 h-1 bg-yellow-400 rounded-full"></span>
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Rakshak Command is a professional security services company
              committed to protecting what matters most to you. With a team of
              highly trained, disciplined, and alert guards, we provide
              round-the-clock security for your homes, businesses, and events.
              We believe safety is not just a service but a responsibility—and
              we stand ready, every day, to ensure your peace of mind.
            </p>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
