import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import client1 from "../assets/client_01.jpg";
import client2 from "../assets/client_02.jpg";
import client3 from "../assets/client_03.jpg";

// Testimonials array remains the same
const testimonials = [
  {
    img: client1,
    name: "— Amit Verma, Factory Owner",
    text: "Rakshak Command’s guards are professional and dependable. They handle visitors well, monitor the premises actively, and give us peace of mind for our business security.",
  },
  {
    img: client2,
    name: "— Priya Singh, Event Client",
    text: "We hired Rakshak Command for our wedding event, and their team managed everything smoothly. The security staff was alert, polite, and ensured a safe environment for all our guests.",
  },
  {
    img: client3,
    name: "— Rohan Sharma, Business Owner",
    text: "We hired Rakshak Command for our company premises, and their professionalism has impressed us. The guards are punctual, well-trained, and handle their duties with great responsibility.",
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    position: "absolute",
  }),
  center: { x: 0, opacity: 1, position: "relative" },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    position: "absolute",
  }),
};

const ClientSection = () => {
  const [[current, direction], setCurrent] = useState([0, 0]);

  const paginate = (newDirection) => {
    setCurrent(([curr]) => {
      let newIndex;
      if (newDirection === 1) {
        newIndex = curr === testimonials.length - 1 ? 0 : curr + 1;
      } else {
        newIndex = curr === 0 ? testimonials.length - 1 : curr - 1;
      }
      return [newIndex, newDirection];
    });
  };

  return (
    <section className="w-full min-h-[400px] flex flex-col mb-3 mt-3 items-center justify-center py-16 bg-white">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 tracking-tight">
          WHAT OUR CLIENTS SAY
        </h2>

        <div className="relative flex items-center w-full max-w-4xl mx-auto">
          {/* Left arrow */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-2 md:left-0 z-10 bg-yellow-400 hover:bg-yellow-500 transition p-2 rounded-full shadow"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <div className="w-full overflow-hidden flex justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "tween", duration: 0.5 }}
                className="flex flex-col items-center w-full mt-4 mb-4"
              >
                <img
                  src={testimonials[current].img}
                  alt={testimonials[current].name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h4 className="font-semibold text-lg text-gray-800">
                  {testimonials[current].name}
                </h4>
                <p className="text-gray-600 mt-3 max-w-2xl text-center">
                  "{testimonials[current].text}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Right arrow */}
          <button
            onClick={() => paginate(1)}
            className="absolute right-2 md:right-0 z-10 bg-yellow-400 hover:bg-yellow-500 transition p-2 rounded-full shadow"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
