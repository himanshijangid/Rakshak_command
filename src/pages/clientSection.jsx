import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ===== TESTIMONIAL DATA ===== */
const testimonials = [
  {
    img: "/assets/client_01.jpg",
    name: "— Amit Verma, Factory Owner",
    text: "Rakshak Command’s guards are professional and dependable. They handle visitors well, monitor the premises actively, and give us peace of mind for our business security.",
  },
  {
    img: "/assets/client_02.jpg",
    name: "— Priya Singh, Event Client",
    text: "We hired Rakshak Command for our wedding event, and their team managed everything smoothly. The security staff was alert, polite, and ensured a safe environment for all our guests.",
  },
  {
    img: "/assets/client_03.jpg",
    name: "— Rohan Sharma, Business Owner",
    text: "We hired Rakshak Command for our company premises, and their professionalism has impressed us. The guards are punctual, well-trained, and handle their duties with great responsibility.",
  },
];

/* ===== SLIDE ANIMATION ===== */
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    position: "absolute",
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "relative",
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    position: "absolute",
  }),
};

export default function ClientSection() {
  const [[current, direction], setCurrent] = useState([0, 0]);

  const paginate = (newDirection) => {
    setCurrent(([curr]) => {
      const nextIndex =
        newDirection === 1
          ? curr === testimonials.length - 1
            ? 0
            : curr + 1
          : curr === 0
          ? testimonials.length - 1
          : curr - 1;

      return [nextIndex, newDirection];
    });
  };

  return (
    <section className="w-full min-h-[400px] flex flex-col items-center justify-center py-16 bg-white">
      <div className="w-full max-w-5xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 tracking-tight uppercase"
          data-aos="fade-down"
        >
          What Our Clients Say
        </h2>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 md:-left-12 z-10 bg-yellow-400 hover:bg-yellow-500 transition p-2 rounded-full shadow"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Testimonial */}
          <div className="w-full overflow-hidden flex justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "tween", duration: 0.45 }}
                className="flex flex-col items-center w-full max-w-3xl"
              >
                <img
                  src={testimonials[current].img}
                  alt={testimonials[current].name}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-yellow-400"
                />

                <h4 className="font-semibold text-lg text-gray-800">
                  {testimonials[current].name}
                </h4>

                <p className="text-gray-600 mt-3 max-w-2xl text-center leading-relaxed">
                  “{testimonials[current].text}”
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 md:-right-12 z-10 bg-yellow-400 hover:bg-yellow-500 transition p-2 rounded-full shadow"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
