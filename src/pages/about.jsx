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
            <p className="text-gray-700 text-justify leading-relaxed mb-6">
              <b>Rakshak Command </b> is a professional security services company led by Ex-Servicemen <b>Bhuvanesh Sharma</b> and <b>Hitesh Sharma</b>. With 25 years of <b>Army service</b> and over <b>18 years of experience</b> in the <b>Security Industry</b>, we bring military discipline, integrity, and precision to every operation.<br></br><br></br>

Our highly trained and alert guards follow strict duty protocols and time discipline to deliver round-the-clock protection for your homes, businesses, and events. <b>At Rakshak Command, safety isn’t just a service—it’s our responsibility</b>.
            </p>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
