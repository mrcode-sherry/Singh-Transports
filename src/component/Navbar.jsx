"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    // Check if admin is logged in
    const loggedIn = localStorage.getItem("isAdminLoggedIn") === "true";
    setIsAdminLoggedIn(loggedIn);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Reservation", href: "/reservation" },
    { name: "Contact", href: "/contact" },
  ];

  // Add dashboard link if admin is logged in
  if (isAdminLoggedIn) {
    navLinks.push({ name: "Dashboard", href: "/dashboard" });
  }

  return (
    <nav className="bg-blue-900 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="mx-auto md:px-24 px-6 py-6 flex justify-between items-center">
        {/* Logo + Name */}
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-blue-900">
            S
          </div>
          <span className="text-xl font-semibold tracking-wide">
            SinghTransports
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative group text-white hover:text-yellow-400 transition-colors duration-300"
            >
              {link.name}
              <span
                className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-500 group-hover:w-full group-hover:left-0"
                style={{
                  transformOrigin: "left",
                }}
              ></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide In */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-64 h-screen bg-gray-900 text-white flex flex-col p-6 space-y-6 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-9 h-9 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-blue-900">
                  S
                </div>
                <span className="text-lg font-semibold">
                  SinghTransports
                </span>
              </div>
              <button onClick={toggleMenu}>
                <X size={26} />
              </button>
            </div>

            <div className="mt-8 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="relative group hover:text-yellow-400 transition-colors duration-300 text-lg"
                >
                  {link.name}
                  <span
                    className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full group-hover:left-0"
                    style={{
                      transformOrigin: "left",
                    }}
                  ></span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
