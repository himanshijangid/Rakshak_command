import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Import your images (example)
import res1 from "../assets/res01.jpg";
import res2 from "../assets/res02.jpg";
// import res3 from "../assets/t3.jpg";
import com1 from "../assets/com01.jpg";
import com2 from "../assets/com02.jpg";
// import com3 from "../assets/t6.jpg";
import eve1 from "../assets/eve01.jpg";
import eve2 from "../assets/eve02.jpg";
// import eve3 from "../assets/t6.jpg";

// JSON Data
const guardData = [
  {
    title: "Residential Security Team",
    images: [res1, res2],
  },
  {
    title: "Commercial Security Team",
    images: [com1, com2],
  },
  {
    title: "Event Security Team",
    images: [eve1, eve2],
  },
];
const Slider = ({ title, images }) => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full md:w-1/3 p-4">
      <div className="bg-white/90 rounded-lg shadow-lg overflow-hidden relative">
        <div className="relative flex items-center justify-center min-h-[270px] bg-gray-50">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              alt={`${title} ${index}`}
              className="max-h-60 w-auto object-contain mx-auto transition"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ maxWidth: "100%" }}
              
            />
          </AnimatePresence>
          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-yellow-400 p-2 rounded-full hover:bg-yellow-500"
          >
            <ChevronLeft className="text-white w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-yellow-400 p-2 rounded-full hover:bg-yellow-500"
          >
            <ChevronRight className="text-white w-5 h-5" />
          </button>
        </div>
        <div className="p-4 text-center bg-[rgb(28,28,28)] border-b">
          <h3 className="text-lg font-semibold   text-white">{title}</h3>
        </div>
      </div>
    </div>
  );
};
const Guards = () => {
  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl uppercase font-bold text-gray-900">
            Our Guards
          </h2>
          <p className="mt-4 text-gray-600 max-w-6xl mx-auto">
            At Rakshak Command, our guards are the backbone of our promise to
            protect you. Each guard is carefully selected, background-verified,
            and trained to handle every security challenge with discipline and
            alertness.
          </p>
        </div>

        {/* Sliders Row */}
        <div className="flex flex-col  md:flex-row">
          {guardData.map((guard, i) => (
            <Slider key={i} title={guard.title} images={guard.images} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guards;
