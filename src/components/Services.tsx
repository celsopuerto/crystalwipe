"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaBuilding, FaBroom } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Residential Cleaning",
      description:
        "Experience a spotless home with our comprehensive residential cleaning services. From kitchens to bedrooms, we ensure every corner shines.",
      icon: <FaHome className="text-4xl text-indigo-500" />,
    },
    {
      title: "Office Cleaning",
      description:
        "Maintain a productive workspace with our professional office cleaning services. We keep your office environment clean and welcoming.",
      icon: <FaBuilding className="text-4xl text-green-500" />,
    },
    {
      title: "Deep Cleaning",
      description:
        "Our deep cleaning service tackles the toughest dirt and grime, leaving your space refreshed and revitalized from top to bottom.",
      icon: <FaBroom className="text-4xl text-red-500" />,
    },
  ];

  return (
    <motion.div
      id="services"
      className="min-h-screen pt-28 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-extrabold text-center text-gray-800 mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 border-t-4 border-indigo-500"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
                {service.title}
              </h2>
              <p className="text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
