"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaClock,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Top Contact Info */}
      <div className="bg-gray-100 border-b border-gray-200 py-2 hidden md:block">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl px-4 md:px-20">
          <span className="flex text-xs font-inter text-black font-normal space-x-4">
            <a
              href="tel:+1234567890"
              className="hover:text-blue-600 transition-all duration-300 flex items-center"
            >
              <FaPhoneAlt className="mr-2 text-blue-600" />
              +1 (234) 567-890
            </a>
            <span className="flex items-center hover:text-blue-600 transition-all duration-200">
              <FaClock className="mr-2 text-blue-600" />
              Mon - Sat: 8:00 AM - 8:00 PM
            </span>
            <a
              href="mailto:info@crystalwipe.com"
              className="hover:text-blue-600 transition-all duration-300 flex items-center"
            >
              <FaEnvelope className="mr-2 text-blue-600" />
              info@crystalwipe.com
            </a>
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="flex justify-between items-center mx-auto max-w-screen-xl px-4 md:px-20 py-3">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="transition-transform duration-300 ease-in-out"
          />
          {/* Desktop Menu */}
          <div className="hidden md:flex text-sm font-inter space-x-10">
            {[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
              { name: "Blog", href: "/blog" },
              { name: "About", href: "/about" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="border-transparent hover:border-blue-400 border-b-2 hover:text-blue-400 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Buttons (Book Online & Login) */}
          <div className="hidden md:flex items-center space-x-3 font-inter">
            <a
              href="/register"
              className="px-5 py-2 text-sm font-bold text-blue-500 border border-gray-300 rounded-md hover:border-blue-500 hover:text-blue-500 transition-all duration-200"
            >
              Book Online
            </a>
            <a
              href="/login"
              className="px-5 py-2 text-sm font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-all duration-200"
            >
              Login
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-600 focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-50 z-40">
          <div className="flex justify-between p-6">
            {/* Close Icon */}
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-3xl"
            >
              <FaTimes />
            </button>
          </div>
          <div className="flex flex-col items-center bg-white py-6 space-y-4">
            {["Home", "Services", "Blog", "About", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-lg text-gray-800 hover:text-blue-600 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
            <div className="mt-6 flex flex-col items-center space-y-4">
              <a
                href="#"
                className="px-5 py-2 text-sm font-bold text-blue-500 border border-gray-300 rounded-md hover:border-blue-500 hover:text-blue-500 transition-all duration-200"
              >
                Book Online
              </a>
              <a
                href="#"
                className="px-5 py-2 text-sm font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-all duration-200"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
