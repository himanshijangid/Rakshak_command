
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
      `}</style>
    </div>
  );
}

