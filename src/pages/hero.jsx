
// import React, { useState, useEffect } from "react";
// import heroBg from "../assets/hero-bg.jpg";
// import emailjs from "@emailjs/browser";

// export default function Hero() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [status, setStatus] = useState("");
//   const [loading, setLoading] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     service: "",
//     user_message: "",
//   });

//   function openModal() {
//     setStatus("");
//     setIsOpen(true);
//     document.body.style.overflow = "hidden";
//   }

//   function closeModal() {
//     setIsOpen(false);
//     document.body.style.overflow = "";
//   }

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setForm((f) => ({ ...f, [name]: value }));
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setStatus("");

//     if (!form.name || !form.phone || !form.email || !form.service) {
//       setStatus("Please fill all required fields.");
//       return;
//     }

//     try {
//       setLoading(true);
//       await emailjs.send(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID_INQUIRY_FORM,
//         {
//           name: form.name,
//           phone: form.phone,
//           email: form.email,
//           service: form.service,
//           user_message: form.user_message,
//         },
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY
//       );

//       setStatus("✅ Thank you! Your inquiry has been sent.");
//       setForm({
//         name: "",
//         phone: "",
//         email: "",
//         service: "",
//         user_message: "",
//       });

//       setTimeout(() => {
//         setLoading(false);
//         closeModal();
//       }, 1000);
//     } catch {
//       setLoading(false);
//       setStatus("❌ Something went wrong. Please try again later.");
//     }
//   }

//   return (
//     // <div className="relative min-h-screen flex flex-col">
//     <div className="relative h-[600px] flex flex-col">

      
//       {/* ================= BACKGROUND ================= */}
//       <div className="absolute inset-0 -z-10">
//         <img
//           src={heroBg}
//           alt="Hero background"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
//       </div>

//       {/* ================= HERO CONTENT ================= */}
//       <section className="flex-1 flex items-center">
//         <div className="w-full max-w-6xl mx-auto px-4 pt-8 pb-12 md:pt-20 md:pb-20">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

//             <div className="text-white">
//               <h1 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight">
//                 Your Safety <br />
//                 <span className="text-yellow-400">Our Responsibility</span>
//               </h1>

//               <p className="mt-6 text-gray-200 max-w-xl">
//                 At Rakshak Command, we deliver trained and verified guards to
//                 protect your people, property, and peace — 24/7 without
//                 compromise.
//               </p>

//               <div className="mt-8 flex flex-wrap gap-3">
//                 <a
//                   href="https://wa.me/918003001702"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-md shadow hover:bg-yellow-500 transition"
//                 >
//                   Chat on WhatsApp
//                 </a>

//                 <button
//                   type="button"
//                   onClick={openModal}
//                   className="px-6 py-3 border border-yellow-400 text-white font-semibold rounded-md hover:bg-yellow-500 hover:text-black transition"
//                 >
//                   Inquiry Form
//                 </button>
//               </div>
//             </div>

//             <div className="hidden md:block">
//               <div className="w-full h-96 rounded-sm overflow-hidden shadow-lg"></div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* ================= LIVE ALERT TICKER ================= */}
//       <div className="relative bg-yellow-400 overflow-hidden py-2">

//         {/* fade edges */}
//         <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-yellow-400 to-transparent z-10" />
//         <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-yellow-400 to-transparent z-10" />

//         {/* TRACK */}
//         <div
//           className="group flex w-max cursor-pointer hover:[animation-play-state:paused]"
//           style={{
//             animation: "slideRTL 25s linear infinite",
//             WebkitAnimationPlayState: "running",
//           }}
//           onTouchStart={(e) => {
//             e.currentTarget.style.animationPlayState = "paused";
//           }}
//           onTouchEnd={(e) => {
//             e.currentTarget.style.animationPlayState = "running";
//           }}
//           onTouchCancel={(e) => {
//             e.currentTarget.style.animationPlayState = "running";
//           }}
//         >
//           <TickerRow />
//           <TickerRow />
//         </div>

//         {/* animation */}
//         <style>{`
//           @keyframes slideRTL {
//             0%   { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }
//         `}</style>
//       </div>

//       {/* ================= MODAL ================= */}
//       {isOpen && (
//         <div
//           role="dialog"
//           aria-modal="true"
//           className="fixed inset-0 z-50 flex items-center justify-center"
//         >
//           <button
//             onClick={closeModal}
//             className="absolute inset-0 bg-black/60 backdrop-blur-sm"
//           />

//           <div className="relative bg-white rounded-lg max-w-md w-full mx-4 p-6 z-10 shadow-xl">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-lg font-semibold">Inquiry Form</h3>
//               <button onClick={closeModal} className="text-gray-600">
//                 ✕
//               </button>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-3">
//               <input
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 placeholder="Your Name"
//                 className="w-full border px-3 py-2 rounded-md"
//                 required
//               />

//               <input
//                 name="phone"
//                 value={form.phone}
//                 onChange={handleChange}
//                 placeholder="Phone Number"
//                 className="w-full border px-3 py-2 rounded-md"
//                 required
//               />

//               <input
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 placeholder="Email Address"
//                 className="w-full border px-3 py-2 rounded-md"
//                 required
//               />

//               <select
//                 name="service"
//                 value={form.service}
//                 onChange={handleChange}
//                 className="w-full border px-3 py-2 rounded-md"
//                 required
//               >
//                 <option value="">Select Service</option>
//                 <option value="Residential Security">Residential Security</option>
//                 <option value="Commercial Security">Commercial Security</option>
//                 <option value="Event Security">Event Security</option>
//                 <option value="VIP Security">VIP Security</option>
//               </select>

//               <textarea
//                 name="user_message"
//                 value={form.user_message}
//                 onChange={handleChange}
//                 rows="3"
//                 className="w-full border px-3 py-2 rounded-md"
//                 placeholder="Your Message"
//               />

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-yellow-400 text-black py-2 rounded-md font-semibold hover:bg-yellow-500 transition"
//               >
//                 {loading ? "Sending…" : "Submit Inquiry"}
//               </button>

//               {status && (
//                 <p className="text-center text-sm mt-2">{status}</p>
//               )}
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// /* ================= TICKER ROW ================= */
// function TickerRow() {

//   const alerts = [
//     { text: "HIRING", color: "bg-red-600" },
//     { text: "NOTICE", color: "bg-blue-600" },
//     { text: "UPDATE", color: "bg-green-600" },
//     { text: "VIP", color: "bg-purple-600" },
//     { text: "SECURITY", color: "bg-black" },
//   ];

//   const [alertIndex, setAlertIndex] = useState(0);
//   const [time, setTime] = useState("");

//   // ALERT AUTO CHANGE
//   useEffect(() => {
//     const t = setInterval(() => {
//       setAlertIndex((i) => (i + 1) % alerts.length);
//     }, 2500);

//     return () => clearInterval(t);
//   }, []);

//   // LIVE DATE + TIME
//   useEffect(() => {
//     const t = setInterval(() => {
//       const now = new Date();
//       setTime(
//         now.toLocaleString("en-IN", {
//           day: "2-digit",
//           month: "short",
//           year: "numeric",
//           hour: "2-digit",
//           minute: "2-digit",
//           hour12: true,
//         })
//       );
//     }, 1000);

//     return () => clearInterval(t);
//   }, []);

//   const current = alerts[alertIndex];

//   return (
//     <div className="flex items-center">

//       {/* ALERT BADGE */}
//       <span
//         className={`mx-4 px-3 py-1 text-xs font-extrabold uppercase text-white rounded-full animate-pulse ${current.color}`}
//       >
//         {current.text}
//       </span>

//       {/* LIVE TIME */}
//       <p className="mx-6 whitespace-nowrap text-black font-semibold">
//         🕒 {time}
//       </p>

//       {/* CONTENT */}
//       <p className="mx-6 whitespace-nowrap text-black font-bold">
//         WE ARE HIRING SECURITY GUARDS
//       </p>
//       <p className="mx-6 whitespace-nowrap text-black font-bold">
//         📞 CONTACT: +91-8003001702
//       </p>
//       <p className="mx-6 whitespace-nowrap text-black font-bold">
//         🛡️ PROFESSIONAL SECURITY SERVICES 24×7
//       </p>
//     </div>
//   );
// }







// import React, { useState, useEffect } from "react";
// import hero1 from "../assets/hero-bg.jpg";
// import hero2 from "../assets/hero-bg.jpg";
// import hero3 from "../assets/hero-bg.jpg";
// import emailjs from "@emailjs/browser";

// export default function Hero() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [status, setStatus] = useState("");
//   const [loading, setLoading] = useState(false);

//   /* ===== HERO SLIDER ===== */
//   const heroImages = [hero1, hero2, hero3];
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const t = setInterval(() => {
//       setCurrentSlide((i) => (i + 1) % heroImages.length);
//     }, 4000);
//     return () => clearInterval(t);
//   }, []);

//   const nextSlide = () =>
//     setCurrentSlide((i) => (i + 1) % heroImages.length);

//   const prevSlide = () =>
//     setCurrentSlide((i) => (i - 1 + heroImages.length) % heroImages.length);

//   /* ===== FORM ===== */
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     service: "",
//     user_message: "",
//   });

//   function openModal() {
//     setStatus("");
//     setIsOpen(true);
//     document.body.style.overflow = "hidden";
//   }

//   function closeModal() {
//     setIsOpen(false);
//     document.body.style.overflow = "";
//   }

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setForm((f) => ({ ...f, [name]: value }));
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setStatus("");

//     if (!form.name || !form.phone || !form.email || !form.service) {
//       setStatus("Please fill all required fields.");
//       return;
//     }

//     try {
//       setLoading(true);
//       await emailjs.send(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID_INQUIRY_FORM,
//         form,
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY
//       );

//       setStatus("✅ Inquiry sent successfully");
//       setForm({
//         name: "",
//         phone: "",
//         email: "",
//         service: "",
//         user_message: "",
//       });

//       setTimeout(() => {
//         setLoading(false);
//         closeModal();
//       }, 1000);
//     } catch {
//       setLoading(false);
//       setStatus("❌ Something went wrong");
//     }
//   }

//   return (
//     <div className="relative h-[600px] flex flex-col">

//       {/* ================= BACKGROUND SLIDER ================= */}
//       <div className="absolute inset-0 -z-10 overflow-hidden">
//         <div
//           className="flex h-full transition-transform duration-1000 ease-in-out"
//           style={{
//             width: `${heroImages.length * 100}%`,
//             transform: `translateX(-${currentSlide * (100 / heroImages.length)}%)`,

//           }}
//         >
//           {heroImages.map((img, i) => (
//             <img
//               key={i}
//               src={img}
//               alt=""
//               className="w-full h-full object-cover flex-shrink-0"
//             />
//           ))}
//         </div>

//         {/* DARK OVERLAY */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />

//         {/* LEFT ARROW */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full z-10"
//         >
//           ❮
//         </button>

//         {/* RIGHT ARROW */}
//         <button
//           onClick={nextSlide}
//           className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full z-10"
//         >
//           ❯
//         </button>
//       </div>

//       {/* ================= HERO CONTENT ================= */}
//       <section className="flex-1 flex items-center">
//         <div className="w-full max-w-6xl mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-8 items-center text-white">

//             <div>
//               <h1 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight">
//                 Your Safety <br />
//                 <span className="text-yellow-400">
//                   Our Responsibility
//                 </span>
//               </h1>

//               <p className="mt-6 max-w-xl text-gray-200">
//                 Jaipur’s No.1 Security Services — trained, verified &
//                 trusted guards available 24×7.
//               </p>

//               <div className="mt-8 flex gap-3">
//                 <a
//                   href="https://wa.me/918003001702"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500 transition"
//                 >
//                   Chat on WhatsApp
//                 </a>

//                 <button
//                   onClick={openModal}
//                   className="px-6 py-3 border border-yellow-400 rounded-md hover:bg-yellow-500 hover:text-black transition"
//                 >
//                   Inquiry Form
//                 </button>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* ================= YELLOW TICKER ================= */}
//       <TickerRow />

//       {/* ================= MODAL ================= */}
//       {isOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
//           <div
//             onClick={closeModal}
//             className="absolute inset-0 bg-black/60"
//           />
//           <div className="bg-white p-6 rounded-md z-10 w-full max-w-md">
//             <form onSubmit={handleSubmit} className="space-y-3">
//               <input name="name" onChange={handleChange} placeholder="Name" className="w-full border p-2" />
//               <input name="phone" onChange={handleChange} placeholder="Phone" className="w-full border p-2" />
//               <input name="email" onChange={handleChange} placeholder="Email" className="w-full border p-2" />
//               <select name="service" onChange={handleChange} className="w-full border p-2">
//                 <option value="">Select Service</option>
//                 <option>Residential</option>
//                 <option>Commercial</option>
//                 <option>Event</option>
//                 <option>VIP</option>
//               </select>
//               <textarea name="user_message" onChange={handleChange} className="w-full border p-2" />
//               <button className="w-full bg-yellow-400 py-2 font-semibold">
//                 {loading ? "Sending..." : "Submit"}
//               </button>
//               {status && <p className="text-center">{status}</p>}
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// /* ================= TICKER ================= */
// function TickerRow() {
//   return (
//     <div className="bg-yellow-400 py-2 text-black font-bold text-center">
//       🛡️ PROFESSIONAL SECURITY SERVICES 24×7 | 📞 +91-8003001702
//     </div>
//   );
// }




import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

/* ===== DESKTOP HERO IMAGES ===== */
import hero1 from "../assets/hero-1.jpg";
import hero2 from "../assets/hero-2.jpg";
import hero3 from "../assets/hero-3.jpg";

/* ===== MOBILE HERO IMAGES ===== */
import heroM1 from "../assets/hero-mob-1.jpg";
import heroM2 from "../assets/hero-mob-2.jpg";
import heroM3 from "../assets/hero-mob-3.jpg";

export default function Hero() {
  /* ================= HERO SLIDER ================= */
  const desktopImages = [hero1, hero2, hero3];
  const mobileImages = [heroM1, heroM2, heroM3];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrentSlide((i) => (i + 1) % desktopImages.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((i) => (i + 1) % desktopImages.length);

  const prevSlide = () =>
    setCurrentSlide((i) => (i - 1 + desktopImages.length) % desktopImages.length);

  /* ================= MODAL + FORM ================= */
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    user_message: "",
  });

  function openModal() {
    setStatus("");
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = "";
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("");

    if (!form.name || !form.phone || !form.email || !form.service) {
      setStatus("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_INQUIRY_FORM,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("✅ Inquiry sent successfully");
      setForm({
        name: "",
        phone: "",
        email: "",
        service: "",
        user_message: "",
      });

      setTimeout(() => {
        setLoading(false);
        closeModal();
      }, 1000);
    } catch {
      setLoading(false);
      setStatus("❌ Something went wrong");
    }
  }

  return (
    <div className="relative flex flex-col h-[calc(100vh-110px)] md:h-[600px]">
      {/* ================= BACKGROUND SLIDER ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* DESKTOP SLIDES */}
          {desktopImages.map((img, i) => (
            <div key={`d-${i}`} className="w-full h-full flex-shrink-0 hidden md:block">
              <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
          ))}

          {/* MOBILE SLIDES */}
          {mobileImages.map((img, i) => (
            <div key={`m-${i}`} className="w-full h-full flex-shrink-0 block md:hidden">
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full z-10"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full z-10"
        >
          ❯
        </button>
      </div>

      {/* ================= HERO CONTENT ================= */}
      <section className="flex-1 flex items-center">
        <div className="w-full max-w-6xl mx-auto px-4 text-white">
          <h1 className="text-3xl md:text-5xl font-extrabold uppercase leading-tight">
            Your Safety <br />
            <span className="text-yellow-400">Our Responsibility</span>
          </h1>

          <p className="mt-4 md:mt-6 max-w-xl text-gray-200">
            Jaipur’s No.1 Security Services — trained, verified & trusted guards
            available 24×7.
          </p>

          <div className="mt-6 md:mt-8 flex gap-3 flex-wrap">
            <a
              href="https://wa.me/918003001702"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-md"
            >
              Chat on WhatsApp
            </a>

            <button
              onClick={openModal}
              className="px-6 py-3 border border-yellow-400 rounded-md cursor-pointer transition hover:bg-yellow-400 hover:text-black font-semibold"

            >
              
              Inquiry Form
            </button>
          </div>
        </div>
      </section>

      {/* ================= YELLOW TICKER ================= */}
      <LiveTicker />

      {/* ================= MODAL ================= */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div onClick={closeModal} className="absolute inset-0 bg-black/60" />
          <div className="bg-white p-6 rounded-md z-10 w-full max-w-md">
            <form onSubmit={handleSubmit} className="space-y-3">
              <input name="name" onChange={handleChange} placeholder="Name" className="w-full border p-2" />
              <input name="phone" onChange={handleChange} placeholder="Phone" className="w-full border p-2" />
              <input name="email" onChange={handleChange} placeholder="Email" className="w-full border p-2" />
              <select name="service" onChange={handleChange} className="w-full border p-2">
                <option value="">Select Service</option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Event</option>
                <option>VIP</option>
              </select>
              <textarea name="user_message" onChange={handleChange} className="w-full border p-2" />
              <button className="w-full bg-yellow-400 py-2 font-semibold">
                {loading ? "Sending..." : "Submit"}
              </button>
              {status && <p className="text-center">{status}</p>}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

/* ================= LIVE TICKER ================= */
function LiveTicker() {
  return (
    <div className="bg-yellow-400 py-2 overflow-hidden">
      <div className="ticker-track flex w-max">
        <div className="flex items-center">
          <p className="mx-6 font-bold whitespace-nowrap">🛡️ PROFESSIONAL SECURITY SERVICES 24×7</p>
          <p className="mx-6 font-bold whitespace-nowrap">📞 CONTACT: +91-8003001702</p>
          <p className="mx-6 font-bold whitespace-nowrap">WE ARE HIRING SECURITY GUARDS</p>
        </div>
        <div className="flex items-center">
          <p className="mx-6 font-bold whitespace-nowrap">🛡️ PROFESSIONAL SECURITY SERVICES 24×7</p>
          <p className="mx-6 font-bold whitespace-nowrap">📞 CONTACT: +91-8003001702</p>
          <p className="mx-6 font-bold whitespace-nowrap">WE ARE HIRING SECURITY GUARDS</p>
        </div>
      </div>

      <style>{`
        .ticker-track {
          animation: ticker 25s linear infinite;
        }
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
          .alert {
          padding: 5px 12px;
          margin: 0 6px;
          color: #fff;
          border-radius: 4px;
          animation: pop 0.5s ease;
        }
        .hiring { background: #16a34a; }
        .vip { background: linear-gradient(135deg, #facc15, #a16207); color: #000; }
        .update { background: #2563eb; }
        .urgent { background: #dc2626; animation: blink 1s infinite, pop 0.5s ease; }

        @keyframes pop {
          from { transform: scale(0.7); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes blink {
          0%,100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 640px) {
          .max-w-7xl { flex-direction: column; gap: 4px; }
        }
      `}
      `</style>
    </div>
  );
}

