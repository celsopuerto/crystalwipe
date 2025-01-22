"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
      <div className="bg-gray-800 shadow-md">
        <div
          className={`contact-info ${
            isScrolled ? "small" : ""
          } flex justify-between items-center mx-auto max-w-screen-xl px-4 md:px-28 py-3 text-gray-700 transition-all duration-300`}
        >
          <span className="text-sm font-medium"></span>
          <span className="text-sm font-medium space-x-4">
            <a
              href="mailto:info@crystalwipe.com"
              className="hover:text-blue-600"
            >
              info@crystalwipe.com
            </a>
            <a href="tel:+1234567890" className="hover:text-blue-600">
              +1 (234) 567-890
            </a>
          </span>
        </div>
      </div>

      <nav
        className={`flex justify-between items-center py-9 px-28 bg-slate-950 text-white transition-all duration-300 ${
          isScrolled ? "sticky shrink" : ""
        }`}
      >
        <Image
          src="/logo.png"
          alt="Logo"
          width={isScrolled ? 50 : 100} // Adjust logo size dynamically
          height={isScrolled ? 50 : 100}
          className="logo"
        />
        <div className="flex text-m font-inter space-x-10">
          <a href="#" className="hover:text-blue-400">
            Home
          </a>
          <a href="#" className="hover:text-blue-400">
            About
          </a>
          <a href="#" className="hover:text-blue-400">
            Contact
          </a>
          <a href="#" className="hover:text-blue-400">
            Blog
          </a>
        </div>
      </nav>
    </>
  );
}
