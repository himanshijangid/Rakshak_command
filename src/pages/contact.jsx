import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT_US,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("❌ Failed to send message. Please try again.");
    }

    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section className="relative py-16">
      {/* ===== BACKGROUND IMAGE ===== */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/assets/contact-bg.jpg"
          alt="Contact Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="w-full max-w-4xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl uppercase font-bold text-white drop-shadow">
            Get In Touch
          </h2>
        </div>

        {/* Contact Form */}
        <div className="rounded-lg shadow-lg p-8 md:p-10 max-w-2xl mx-auto bg-white/80 backdrop-blur-sm">
          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full text-black bg-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-4 py-2 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full px-4 py-2 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="4"
                required
                className="w-full px-4 py-2 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-8 rounded-md transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>

          {status && (
            <p className="mt-4 text-center font-medium text-green-600">
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
