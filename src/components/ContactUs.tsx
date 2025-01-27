"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });
  const [validationErrors, setValidationErrors] = useState({ number: false });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "number") {
      const numberWithoutSpaces = value.replace(/\s+/g, "");
      const phoneRegex = /^\+971\d{9}$/;
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        number: !phoneRegex.test(numberWithoutSpaces) && value !== "",
      }));
    }

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const processedFormData = {
      ...formData,
      number: formData.number.replace(/\s+/g, ""),
    };

    if (validationErrors.number) {
      toast.error("Please correct the phone number format before submitting.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(processedFormData),
      });

      if (!res.ok) {
        const errorText = await res.text();
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
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-r from-blue-50 via-indigo-100 to-pink-50 p-6"
    >
      <div className="mt-10 max-w-7xl mx-auto py-16">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Form Section */}
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
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="Your phone number (+971 56 587 8198)"
              className={`w-full p-3 rounded-md border ${
                validationErrors.number
                  ? "border-red-500"
                  : "border-gray-300 focus:border-transparent"
              }`}
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

          {/* Design Section */}
          <div className="flex flex-col items-center justify-center text-center space-y-6">
            <img
              src="contact-illustration.png"
              alt="Contact Illustration"
              className="w-3/4 mx-auto"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Get in Touch
              </h3>
              <p className="text-gray-600">
                Reach out to us through email or phone. We’re here to help and
                answer any questions you might have.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="text-gray-700">
                <span className="font-bold">Email:</span>{" "}
                crystalwipecs@gmail.com
              </div>
              <div className="text-gray-700">
                <span className="font-bold">Phone:</span> +971 56 587 8198
              </div>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
