import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Home,
  Info,
  Briefcase,
  Users,
  MessageCircle,
  Image,
} from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/", icon: Home },
    { label: "About", path: "/about", icon: Info },
    { label: "Services", path: "/services", icon: Briefcase },
    { label: "Guards", path: "/guards", icon: Users },
    { label: "Contact Us", path: "/contact", icon: MessageCircle },
    { label: "Gallery", path: "/gallery", icon: Image },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Prevent background scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";
  }, [isSidebarOpen]);

  return (
    <header className="bg-[rgb(28,28,28)] text-white font-inter">
      {/* ===== TOP BAR ===== */}
      <div className="hidden sm:block bg-yellow-400 py-2">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-black font-medium">
            <a
              href="https://maps.app.goo.gl/gBeHbh42iuJtgXMy5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:scale-105 transition"
            >
              <MapPin className="h-4 w-4" />
              Jaipur
            </a>

            <a
              href="tel:+918003001702"
              className="flex items-center gap-2 hover:scale-105 transition"
            >
              <Phone className="h-4 w-4" />
              +91 8003001702
            </a>

            <a
              href="mailto:rakshakcommand@gmail.com"
              className="flex items-center gap-2 hover:scale-105 transition"
            >
              <Mail className="h-4 w-4" />
              rakshakcommand@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* ===== MAIN NAV ===== */}
      <div className="shadow-md">
        <div className="w-full px-2 sm:px-3 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src="/assets/logo.png"
                alt="Rakshak Command Logo"
                className="w-[50px] sm:w-[60px] md:w-[70px] lg:w-[75px]"
              />
              <span className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                RAKSHAK COMMAND
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-4">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.path}
                      className="text-gray-300 hover:text-yellow-400 px-2 py-2 font-medium transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleSidebar}
              className="md:hidden p-2 rounded-md text-yellow-400 hover:bg-slate-800"
            >
              {isSidebarOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* ===== MOBILE SIDEBAR ===== */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50"
          onClick={toggleSidebar}
        >
          <div
            className="fixed top-0 right-0 h-full w-64 bg-[rgb(28,28,28)] p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="mt-10">
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.path}
                      onClick={toggleSidebar}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800"
                    >
                      <item.icon className="h-5 w-5 text-yellow-400" />
                      <span className="text-lg">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
// hello

export default Header;
