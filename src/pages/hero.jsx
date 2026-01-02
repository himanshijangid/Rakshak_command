


import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Hero() {
  const desktopImages = [
    "/assets/hero-1.jpg",
    "/assets/hero-2.jpg",
    "/assets/hero-3.jpg",
  ];

  const mobileImages = [
    "/assets/hero-mob-1.jpg",
    "/assets/hero-mob-2.jpg",
    "/assets/hero-mob-3.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setCurrentSlide((i) => (i + 1) % desktopImages.length),
      4000
    );
    return () => clearInterval(t);
  }, []);

  /* ================= MODAL ================= */
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
      setTimeout(() => {
        setLoading(false);
        closeModal();
      }, 1200);
    } catch {
      setLoading(false);
      setStatus("❌ Something went wrong");
    }
  }

  return (
    <div className="relative flex flex-col h-[calc(100vh-110px)] md:h-[600px]">
      {/* ===== BACKGROUND SLIDER ===== */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="flex h-full transition-transform duration-1000"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {desktopImages.map((img, i) => (
            <div key={i} className="hidden md:block w-full h-full flex-shrink-0">
              <img src={img} className="w-full h-full object-cover" />
            </div>
          ))}
          {mobileImages.map((img, i) => (
            <div key={i} className="block md:hidden w-full h-full flex-shrink-0">
              <img src={img} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* ===== HERO CONTENT ===== */}
      <section className="flex-1 flex items-center">
        <div className="w-full max-w-6xl mx-auto px-4 pt-8 pb-12 md:pt-20 md:pb-20 text-white">
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl md:text-5xl font-extrabold uppercase"
          >
            Your Safety <br />
            <span className="text-yellow-400">Our Responsibility</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-5 max-w-xl text-gray-200"
          >
            Jaipur’s No.1 Security Services — Trusted & Verified Guards 24×7
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="mt-7 flex gap-3 flex-wrap"
          >
            <a
              href="https://wa.me/918003001702"
              target="_blank"
              className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-md hover:scale-105 transition"
            >
              Chat on WhatsApp
            </a>

            <button
              onClick={openModal}
              className="px-6 py-3 border border-yellow-400 rounded-md hover:bg-yellow-400 hover:text-black font-semibold transition"
            >
              Inquiry Form
            </button>
          </div>
        </div>
      </section>

      {/* ===== LIVE TICKER ===== */}
      <LiveTicker />

      {/* ===== MODAL ===== */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div onClick={closeModal} className="absolute inset-0 bg-black/60" />
          <div className="bg-white p-6 rounded-md z-10 w-full max-w-md">
            <form onSubmit={handleSubmit} className="space-y-3">
              <input name="name" onChange={handleChange} className="w-full border p-2" placeholder="Name" />
              <input name="phone" onChange={handleChange} className="w-full border p-2" placeholder="Phone" />
              <input name="email" onChange={handleChange} className="w-full border p-2" placeholder="Email" />
              <select name="service" onChange={handleChange} className="w-full border p-2">
                <option value="">Select Service</option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Event</option>
                <option>VIP</option>
              </select>
              <textarea name="user_message" className="w-full border p-2" placeholder="Message" />
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
  const badges = [
    { text: "HIRING", cls: "hiring" },
    { text: "VIP SECURITY", cls: "vip" },
    { text: "UPDATE", cls: "update" },
    { text: "URGENT", cls: "urgent" },
  ];

  const [index, setIndex] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    const b = setInterval(() => setIndex((i) => (i + 1) % badges.length), 2500);
    return () => clearInterval(b);
  }, []);

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

  return (
    <div className="relative bg-yellow-400 overflow-hidden py-2">
      <div className="ticker-track flex w-max" style={{ animation: "slideRTL 25s linear infinite" }}>
        <TickerRow badges={badges} index={index} time={time} />
        <TickerRow badges={badges} index={index} time={time} />
      </div>

      <style>{`
        @keyframes slideRTL {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .badge {
          min-width: 120px;
          text-align: center;
          box-shadow: 0 0 14px rgba(0,0,0,0.4);
          animation: blink 1.2s infinite;
        }
        .hiring { background:#16a34a; box-shadow:0 0 16px #16a34a; }
        .vip { background:linear-gradient(135deg,#facc15,#a16207); color:#000; }
        .update { background:#2563eb; box-shadow:0 0 16px #2563eb; }
        .urgent { background:#dc2626; box-shadow:0 0 18px #dc2626; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.5} }
      `}</style>
    </div>
  );
}

function TickerRow({ badges, index, time }) {
  return (
    <div className="flex items-center">
      <span className={`mx-3 px-4 py-1 text-xs font-extrabold rounded-full text-white badge ${badges[index].cls}`}>
        {badges[index].text}
      </span>
      <p className="mx-6 font-semibold">🕒 {time}</p>
      <p className="mx-6 font-bold">WE ARE HIRING SECURITY GUARDS – JAIPUR</p>
      <p className="mx-6 font-bold">📞 CONTACT: +91-8003001702</p>
      <p className="mx-6 font-bold">🛡️ PROFESSIONAL SECURITY SERVICES 24×7</p>
    </div>
  );
}

