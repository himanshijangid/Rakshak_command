import React, { useState } from "react";
import heroBg from "../assets/hero-bg.jpg"; // adjust path if needed
import emailjs from "@emailjs/browser";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState(""); // success / error messages
  const [loading, setLoading] = useState(false);

  // form state
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
    // prevent background scroll
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

      // ✅ EmailJS send with new SDK
      const result = await emailjs.send(
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

      console.log(result.text);

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
    } catch (err) {
      console.error(err);
      setLoading(false);
      setStatus("❌ Something went wrong. Please try again later.");
    }
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      </div>

      {/* (Optional) Header area or nav could go here */}
      {/* Slider / Hero content */}
      <section className="flex-1 flex items-center">
        <div className="w-full max-w-6xl mx-auto px-4 pt-8 pb-12 md:pt-20 md:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left column (text) */}
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight">
                Your Safety
                <br />
                <span className="text-yellow-400">Our Responsibility</span>
              </h1>
              <p className="mt-6 text-gray-200 max-w-xl">
                “At Rakshak Command, we believe your peace of mind is priceless.
                Our highly trained security professionals are dedicated to
                protecting your people, property, and peace—24/7, without
                compromise.”
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/918003001702?text=Hello%2C%20I%20want%20to%20get%20more%20information%20about%20your%20security%20guard%20services.%20Please%20share%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-yellow-400 text-black font-semibold rounded-md shadow hover:bg-yellow-500 transition"
                >
                  Chat on WhatsApp
                </a>

                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex items-center px-6 py-3 bg-transparent border border-yellow-400 text-white font-semibold rounded-md hover:bg-yellow-500 hover:text-black transition"
                >
                  Inquiry Form
                </button>
              </div>
            </div>

            {/* Right column */}
            <div className="hidden md:block">
              <div className="w-full h-96 rounded-sm overflow-hidden shadow-lg">
                {/* Image/slider can be placed here */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal (Inquiry form) */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* overlay */}
          <button
            aria-label="Close modal"
            onClick={closeModal}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          {/* modal panel */}
          <div
            className="relative bg-white rounded-lg max-w-md w-full mx-4 p-6 z-10 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Inquiry Form</h3>
              <button
                onClick={closeModal}
                className="text-gray-600 hover:text-gray-900"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                type="tel"
                className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                type="email"
                className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />

              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <option value="">Select Service</option>
                <option value="Residential Security">
                  Residential Security
                </option>
                <option value="Commercial Security">Commercial Security</option>
                <option value="Event Security">Event Security</option>
                <option value="VIP Security">VIP Security</option>
              </select>

              <textarea
                name="user_message"
                value={form.user_message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="3"
                className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center px-4 py-2 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500 transition disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Submit Inquiry"}
                </button>

                <button
                  type="button"
                  onClick={closeModal}
                  className="text-sm text-gray-600 hover:underline"
                >
                  Cancel
                </button>
              </div>

              {status && (
                <p className="text-sm text-center text-gray-700 mt-2">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
