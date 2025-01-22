"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaPhoneAlt, FaClock, FaEnvelope } from "react-icons/fa";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

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
      <div className="bg-gray-100 border-b border-gray-200 py-1">
        <div
          className={`contact-info ${
            isScrolled ? "small" : ""
          } flex justify-between items-center mx-auto max-w-screen-xl px-4 md:px-20 py-3 transition-all duration-300`}
        >
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
          <span className="text-sm font-inter text-black font-normal space-x-4"></span>
        </div>
      </div>

      <nav
        className={`flex justify-between font-inter bg-white items-center shadow-s py-2 px-20 text-black transition-all duration-300 ${
          isScrolled ? "sticky shrink" : ""
        }`}
      >
        <Image
          src="/logo.png"
          alt="Logo"
          width={100} // Adjust logo size dynamically
          height={100}
          className="logo"
        />
        <div className="flex text-m font-inter space-x-10">
          <a
            href="#"
            className="border-transparent hover:border-blue-400 border-b-2 hover:border-b-2 hover:text-blue-400 transition-all duration-200"
          >
            Home
          </a>
          <a
            href="#"
            className="border-transparent hover:border-blue-400 border-b-2 hover:border-b-2 hover:text-blue-400 transition-all duration-200"
          >
            Services
          </a>
          <a
            href="#"
            className="border-transparent hover:border-blue-400 border-b-2 hover:border-b-2 hover:text-blue-400 transition-all duration-200"
          >
            Blog
          </a>
          <a
            href="#"
            className="border-transparent hover:border-blue-400 border-b-2 hover:border-b-2 hover:text-blue-400 transition-all duration-200"
          >
            About
          </a>
          <a
            href="#"
            className="border-transparent hover:border-blue-400 border-b-2 hover:border-b-2 hover:text-blue-400 transition-all duration-200"
          >
            Contact
          </a>
        </div>
        <div className="flex items-center space-x-1 font-inter text-m">
          <a
            href="#"
            className="px-5 py-3 text-sm font-bold text-blue-500 border border-gray-300 rounded-md hover:border-blue-500 hover:text-blue-500 transition-all duration-200 ease-in-out"
          >
            Book Online
          </a>
          <a
            href="#"
            className="px-5 py-3 text-sm font-bold text-white bg-blue-500 rounded-md hover:border-blue-500 transition-all duration-200 ease-in-out"
          >
            Login
          </a>
        </div>
      </nav>
    </>
  );
}
