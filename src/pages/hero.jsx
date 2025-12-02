// import React, { useState } from "react";
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
//       const result = await emailjs.send(
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

//       console.log(result.text);

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
//     } catch (err) {
//       console.error(err);
//       setLoading(false);
//       setStatus("❌ Something went wrong. Please try again later.");
//     }
//   }

//   return (
//     <div className="relative min-h-screen flex flex-col">
//       {/* Background */}
//       <div className="absolute inset-0 -z-10">
//         <img
//           src={heroBg}
//           alt="Hero background"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
//       </div>

//       {/* Hero Section */}
//       <section className="flex-1 flex items-center">
//         <div className="w-full max-w-6xl mx-auto px-4 pt-8 pb-12 md:pt-20 md:pb-20">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//             {/* Text */}
//             <div className="text-white">
//               <h1 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight">
//                 Your Safety
//                 <br />
//                 <span className="text-yellow-400">Our Responsibility</span>
//               </h1>
//               <p className="mt-6 text-gray-200 max-w-xl">
//                 “At Rakshak Command, we believe your peace of mind is priceless.
//                 Our highly trained security professionals are dedicated to
//                 protecting your people, property, and peace—24/7, without compromise.”
//               </p>

//               <div className="mt-8 flex flex-wrap gap-3">
//                 <a
//                   href="https://wa.me/918003001702?text=Hello%2C%20I%20want%20to%20get%20more%20information%20about%20your%20security%20guard%20services.%20Please%20share%20details."
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center px-6 py-3 bg-yellow-400 text-black font-semibold rounded-md shadow hover:bg-yellow-500 transition"
//                 >
//                   Chat on WhatsApp
//                 </a>

//                 <button
//                   type="button"
//                   onClick={openModal}
//                   className="inline-flex items-center px-6 py-3 bg-transparent border border-yellow-400 text-white font-semibold rounded-md hover:bg-yellow-500 hover:text-black transition"
//                 >
//                   Inquiry Form
//                 </button>
//               </div>
//             </div>

//             {/* Right side image area */}
//             <div className="hidden md:block">
//               <div className="w-full h-96 rounded-sm overflow-hidden shadow-lg">
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>


//       {/* 🔔 Scrolling Ticker Bar */}
//       <div className="bg-yellow-400 text-black font-extrabold py-3 overflow-hidden">
//         <div className="inline-block whitespace-nowrap animate-marquee">
//           🚨 We Are Hiring Security Guards | 📞 Contact: +91-8003001702 |
//           🛡️ Rakshak Command – Professional Security Services |
//         </div>
//       </div>


//       {/* Inquiry Modal */}
//       {isOpen && (
//         <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center">
//           <button onClick={closeModal} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
//           <div className="relative bg-white rounded-lg max-w-md w-full mx-4 p-6 z-10 shadow-xl">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-lg font-semibold">Inquiry Form</h3>
//               <button onClick={closeModal} className="text-gray-600 hover:text-gray-900">✕</button>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-3">
//               <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className="w-full border border-gray-200 rounded-md px-3 py-2" required />
//               <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" type="tel" className="w-full border border-gray-200 rounded-md px-3 py-2" required />
//               <input name="email" value={form.email} onChange={handleChange} placeholder="Email Address" type="email" className="w-full border border-gray-200 rounded-md px-3 py-2" required />

//               <select name="service" value={form.service} onChange={handleChange} required className="w-full border border-gray-200 rounded-md px-3 py-2">
//                 <option value="">Select Service</option>
//                 <option value="Residential Security">Residential Security</option>
//                 <option value="Commercial Security">Commercial Security</option>
//                 <option value="Event Security">Event Security</option>
//                 <option value="VIP Security">VIP Security</option>
//               </select>

//               <textarea name="user_message" value={form.user_message} onChange={handleChange} rows="3" placeholder="Your Message" className="w-full border border-gray-200 rounded-md px-3 py-2" />

//               <button type="submit" disabled={loading} className="w-full bg-yellow-400 text-black py-2 rounded-md font-semibold hover:bg-yellow-500 transition">
//                 {loading ? "Sending..." : "Submit Inquiry"}
//               </button>

//               {status && <p className="text-sm text-center text-gray-700 mt-2">{status}</p>}
//             </form>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import heroBg from "../assets/hero-bg.jpg";
import emailjs from "@emailjs/browser";

export default function Hero() {
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
        {
          name: form.name,
          phone: form.phone,
          email: form.email,
          service: form.service,
          user_message: form.user_message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("✅ Thank you! Your inquiry has been sent.");
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
      setStatus("❌ Something went wrong. Please try again later.");
    }
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      </div>

      {/* ================= HERO CONTENT ================= */}
      <section className="flex-1 flex items-center">
        <div className="w-full max-w-6xl mx-auto px-4 pt-8 pb-12 md:pt-20 md:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight">
                Your Safety <br />
                <span className="text-yellow-400">Our Responsibility</span>
              </h1>

              <p className="mt-6 text-gray-200 max-w-xl">
                At Rakshak Command, we deliver trained and verified guards to
                protect your people, property, and peace — 24/7 without
                compromise.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/918003001702"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-md shadow hover:bg-yellow-500 transition"
                >
                  Chat on WhatsApp
                </a>

                <button
                  type="button"
                  onClick={openModal}
                  className="px-6 py-3 border border-yellow-400 text-white font-semibold rounded-md hover:bg-yellow-500 hover:text-black transition"
                >
                  Inquiry Form
                </button>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="w-full h-96 rounded-sm overflow-hidden shadow-lg"></div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= LIVE ALERT TICKER ================= */}
      <div className="relative bg-yellow-400 overflow-hidden py-2">

        {/* fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-yellow-400 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-yellow-400 to-transparent z-10" />

        {/* TRACK */}
        <div
          className="group flex w-max cursor-pointer hover:[animation-play-state:paused]"
          style={{
            animation: "slideRTL 25s linear infinite",
            WebkitAnimationPlayState: "running",
          }}
          onTouchStart={(e) => {
            e.currentTarget.style.animationPlayState = "paused";
          }}
          onTouchEnd={(e) => {
            e.currentTarget.style.animationPlayState = "running";
          }}
          onTouchCancel={(e) => {
            e.currentTarget.style.animationPlayState = "running";
          }}
        >
          <TickerRow />
          <TickerRow />
        </div>

        {/* animation */}
        <style>{`
          @keyframes slideRTL {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      {/* ================= MODAL ================= */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <button
            onClick={closeModal}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <div className="relative bg-white rounded-lg max-w-md w-full mx-4 p-6 z-10 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Inquiry Form</h3>
              <button onClick={closeModal} className="text-gray-600">
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border px-3 py-2 rounded-md"
                required
              />

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border px-3 py-2 rounded-md"
                required
              />

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full border px-3 py-2 rounded-md"
                required
              />

              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
                required
              >
                <option value="">Select Service</option>
                <option value="Residential Security">Residential Security</option>
                <option value="Commercial Security">Commercial Security</option>
                <option value="Event Security">Event Security</option>
                <option value="VIP Security">VIP Security</option>
              </select>

              <textarea
                name="user_message"
                value={form.user_message}
                onChange={handleChange}
                rows="3"
                className="w-full border px-3 py-2 rounded-md"
                placeholder="Your Message"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-400 text-black py-2 rounded-md font-semibold hover:bg-yellow-500 transition"
              >
                {loading ? "Sending…" : "Submit Inquiry"}
              </button>

              {status && (
                <p className="text-center text-sm mt-2">{status}</p>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

/* ================= TICKER ROW ================= */
function TickerRow() {

  const alerts = [
    { text: "HIRING", color: "bg-red-600" },
    { text: "NOTICE", color: "bg-blue-600" },
    { text: "UPDATE", color: "bg-green-600" },
    { text: "VIP", color: "bg-purple-600" },
    { text: "SECURITY", color: "bg-black" },
  ];

  const [alertIndex, setAlertIndex] = useState(0);
  const [time, setTime] = useState("");

  // ALERT AUTO CHANGE
  useEffect(() => {
    const t = setInterval(() => {
      setAlertIndex((i) => (i + 1) % alerts.length);
    }, 2500);

    return () => clearInterval(t);
  }, []);

  // LIVE DATE + TIME
  useEffect(() => {
    const t = setInterval(() => {
      const now = new Date();
      setTime(
        now.toLocaleString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    }, 1000);

    return () => clearInterval(t);
  }, []);

  const current = alerts[alertIndex];

  return (
    <div className="flex items-center">

      {/* ALERT BADGE */}
      <span
        className={`mx-4 px-3 py-1 text-xs font-extrabold uppercase text-white rounded-full animate-pulse ${current.color}`}
      >
        {current.text}
      </span>

      {/* LIVE TIME */}
      <p className="mx-6 whitespace-nowrap text-black font-semibold">
        🕒 {time}
      </p>

      {/* CONTENT */}
      <p className="mx-6 whitespace-nowrap text-black font-bold">
        WE ARE HIRING SECURITY GUARDS
      </p>
      <p className="mx-6 whitespace-nowrap text-black font-bold">
        📞 CONTACT: +91-8003001702
      </p>
      <p className="mx-6 whitespace-nowrap text-black font-bold">
        🛡️ PROFESSIONAL SECURITY SERVICES 24×7
      </p>
    </div>
  );
}
