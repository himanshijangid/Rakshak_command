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

import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const App = () => {
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
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSidebarOpen]);

  return (
    <header className="bg-[rgb(28,28,28)] text-white font-inter">
      {/* Top Header Section */}
      <div className="hidden sm:block bg-yellow-400 py-2">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Left Item */}
            <div className="flex items-center space-x-2 text-black font-medium">
              <a
                href="https://maps.app.goo.gl/gBeHbh42iuJtgXMy5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:scale-105 transition-transform"
              >
                <MapPin className="h-4 w-4" />
                <span>Jaipur</span>
              </a>
            </div>

            {/* Center Item */}
            <div className="flex items-center space-x-2 text-black font-medium">
              <a
                href="tel:+918003001702"
                className="flex items-center space-x-2 hover:scale-105 transition-transform"
              >
                <Phone className="h-4 w-4" />
                <span>Call : +91 8003001702</span>
              </a>
            </div>

            {/* Right Item */}
            <div className="flex items-center space-x-2 text-black font-medium">
              <a
                href="mailto:rakshakcommand@gmail.com"
                className="flex items-center space-x-2 hover:scale-105 transition-transform"
              >
                <Mail className="h-4 w-4" />
                <span>Rakshakcommand@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-[rgb(28,28,28)] shadow-md">
        <div className="w-full px-2 sm:px-3 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Rakshak Command Logo"
                className="w-[50px] sm:w-[60px] md:w-[70px] lg:w-[75px]"
              />
              <span className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                RAKSHAK COMMAND
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-4">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.path}
                      className="text-gray-300 hover:text-yellow-400 px-2 py-2 rounded-md font-medium transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-md text-yellow-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400"
                aria-controls="mobile-menu"
                aria-expanded={isSidebarOpen}
              >
                {!isSidebarOpen ? (
                  <Menu className="h-6 w-6" />
                ) : (
                  <X className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={toggleSidebar}
        >
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-[rgb(28,28,28)] shadow-xl p-6 transform transition-transform duration-300 ease-in-out ${
              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-md text-yellow-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Sidebar Nav */}
            <nav className="mt-8">
              <ul className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.path}
                      className="flex items-center space-x-3 px-4 py-3 text-white hover:bg-slate-800 rounded-lg transition-colors"
                      onClick={toggleSidebar}
                    >
                      <item.icon className="h-5 w-5 text-yellow-400" />
                      <span className="font-medium text-lg">{item.label}</span>
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

export default App;
