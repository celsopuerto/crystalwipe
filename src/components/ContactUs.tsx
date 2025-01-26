"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Ensure formData has the expected fields
      });

      if (!res.ok) {
        const errorText = await res.text(); // Read error as text to debug
        throw new Error(`Server responded with: ${res.status} ${errorText}`);
      }

      const data = await res.json();
      if (data.success) {
        toast.success("Message sent successfully!");
      } else {
        toast.error(data.error || "Failed to send the message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        "An unexpected error occurred. Check the console for details."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-50 via-indigo-100 to-pink-50 p-6">
      <div className="max-w-7xl mx-auto py-16">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-lg p-8 space-y-6"
          >
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              Send us a Message
            </h2>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full p-3 border rounded-md"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full p-3 border rounded-md"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows={4}
              className="w-full p-3 border rounded-md"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className={`w-full p-3 rounded-md font-semibold ${
                loading ? "bg-indigo-300" : "bg-indigo-600 hover:bg-indigo-700"
              } text-white`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
