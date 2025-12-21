import React from "react";
import { FaHome, FaBuilding, FaUsers } from "react-icons/fa";

const services = [
  {
    icon: <FaHome className="w-12 h-12 text-yellow-400" />,
    title: "Home Security",
    description:
      "We provide reliable security for your homes and gated communities. Our trained guards remain vigilant around the clock, ensuring the safety of your family and property through visitor management, gate control, and regular patrolling.",
    link: "#",
  },
  {
    icon: <FaBuilding className="w-12 h-12 text-yellow-400" />,
    title: "Industrial Security",
    description:
      "We secure your offices, factories, and warehouses with disciplined and alert guards who prevent unauthorized access. We ensure 24/7 safety through CCTV monitoring, patrol checks, and customized security plans suited to your business needs.",
    link: "#",
  },
  {
    icon: <FaUsers className="w-12 h-12 text-yellow-400" />,
    title: "Event Security",
    description:
      "We provide reliable security for your events and gatherings. Our trained guards remain vigilant around the clock, ensuring the safety of your guests and property through entry checks, crowd control, and regular patrolling throughout the event.",
    link: "#",
  },
];

const Services = () => {
  return (
    <section className=" bg-gray-800 py-16">
      <div className="mx-auto px-4 max-w-7xl">
        <div className="mb-12">
          <h2
            className="text-3xl font-bold uppercase relative inline-block pb-2 before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-10 before:h-1 before:rounded-full before:bg-yellow-400 text-white text-center mx-auto"
            style={{ display: "block" }}
          >
            Our Services
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-md-4 flex flex-col items-center bg-gray-50 p-8 rounded-lg shadow-lg text-center"
            >
              <div className=" mb-6 ">{service.icon}</div>
              <>
                <h6 className="text-xl font-semibold mb-3">{service.title}</h6>
                <p className="text-gray-700 mb-4 text-justify">{service.description}</p>
              </>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
