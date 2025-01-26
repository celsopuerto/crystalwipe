"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-r from-teal-500 via-cyan-400 to-teal-500 py-16 px-6 text-white"
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Title Animation */}
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-6 tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, type: "spring", stiffness: 80 }}
        >
          About Crystal Wipe
        </motion.h1>

        {/* Paragraph Animation */}
        <motion.p
          className="text-lg sm:text-xl mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Crystal Wipe offers top-notch residential and commercial cleaning
          solutions designed to leave your space spotless and refreshing. With a
          team of skilled professionals and eco-friendly cleaning products, we
          deliver thorough and customized cleaning services to fit your needs.
          Whether you require a one-time deep clean, regular maintenance, or
          specialized services such as carpet cleaning or window washing, we’ve
          got you covered. Our attention to detail and commitment to customer
          satisfaction ensures that every job is done right. At Crystal Wipe, we
          believe in creating a clean, healthy environment for you, your family,
          or your business—every time!
        </motion.p>

        {/* Button Animations */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <motion.button
            className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-full text-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
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
            Learn More
          </motion.button>

          <motion.button
            className="bg-transparent border-2 border-white hover:bg-white hover:text-teal-700 text-white px-6 py-3 rounded-full text-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 1.2,
              duration: 1,
              type: "spring",
              stiffness: 120,
            }}
          >
            Contact Us
          </motion.button>
        </div>
      </div>
    </section>
  );
}
