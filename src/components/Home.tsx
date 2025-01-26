"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center -mt-14 overflow-hidden"
      style={{ backgroundImage: "url(/furniture-img.jpg)" }}
    >
      {/* Overlay for text visibility */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
        {/* Welcome Text Animation */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, type: "spring", stiffness: 80 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            WELCOME TO <span className="text-teal-500">CRYSTALWIPE</span>{" "}
            CLEANING SERVICES
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            The Reliable Solution to all your Residential and Commercial
            Cleaning needs.
          </p>
          <p className="text-md sm:text-lg mb-6">
            For Maid Service
            <br />
            <span className="font-bold text-xl">+971 55 495 8317</span>
          </p>

          {/* Explore Our Services Button */}
          <motion.a
            href="#services"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 1,
              duration: 1,
              type: "spring",
              stiffness: 120,
            }}
          >
            EXPLORE OUR SERVICES
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
