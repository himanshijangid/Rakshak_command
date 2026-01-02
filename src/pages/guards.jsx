import React from "react";

/* ===== GUARDS DATA ===== */
const guardData = [
  {
    title: "Residential Security Team",
    image: "/assets/res01.jpg",
  },
  {
    title: "Commercial Security Team",
    image: "/assets/com01.jpg",
  },
  {
    title: "Event Security Team",
    image: "/assets/eve01.jpg",
  },
];

const Guards = () => {
  return (
    <section className="w-full py-16 bg-gray-100" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl uppercase font-bold text-gray-900">
            Our Guards
          </h2>
          <p className="mt-4 text-gray-600 max-w-6xl mx-auto leading-relaxed">
            At Rakshak Command, our guards are the backbone of our promise to
            protect you. Each guard is carefully selected, background-verified,
            and trained to handle every security challenge with discipline and
            alertness.
          </p>
        </div>

        {/* GUARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guardData.map((guard, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="bg-white/90 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-[260px] md:h-[320px] overflow-hidden">
                <img
                  src={guard.image}
                  alt={guard.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-4 text-center bg-[rgb(28,28,28)]">
                <h3 className="text-lg font-semibold text-white">
                  {guard.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Guards;
