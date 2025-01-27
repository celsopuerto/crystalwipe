"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const CleaningBookingPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedService, setSelectedService] = useState("");

  const services = [
    { id: 1, name: "Standard Cleaning", price: 50 },
    { id: 2, name: "Premium Cleaning", price: 80 },
    { id: 3, name: "Move-in/Move-out Cleaning", price: 120 },
  ];

  const handleSubmit = () => {
    if (!selectedService || !selectedDate) {
      alert("Please select a service and date.");
      return;
    }
    alert(
      `Booking submitted for ${selectedService} on ${selectedDate?.toLocaleDateString()}`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 py-10 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl font-extrabold text-center text-blue-700 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Book Your Cleaning Service
        </motion.h1>

        <Card className="shadow-xl">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Pick a Date
                </label>
                <Calendar
                  selected={selectedDate || undefined}
                  onSelect={(date) => {
                    if (date) {
                      setSelectedDate(date);
                    }
                  }}
                  mode="single"
                  className="rounded-md border p-2 shadow-sm"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-4">
                  Select Service
                </h3>
                <RadioGroup
                  value={selectedService}
                  onValueChange={setSelectedService}
                  className="space-y-4"
                >
                  {services.map((service) => (
                    <label
                      key={service.id}
                      htmlFor={`service-${service.id}`}
                      className="flex items-center space-x-4 p-4 border rounded-lg shadow-sm hover:bg-blue-50 transition cursor-pointer"
                    >
                      <RadioGroupItem
                        id={`service-${service.id}`}
                        value={service.name}
                        className="h-5 w-5"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-800">
                          {service.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          ${service.price}
                        </span>
                      </div>
                    </label>
                  ))}
                </RadioGroup>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Additional Notes (optional)
              </label>
              <Input
                type="text"
                placeholder="Any special instructions?"
                className="w-full border rounded-lg p-3 shadow-sm"
              />
            </div>

            <div className="mt-8 flex justify-center">
              <Button onClick={handleSubmit} className="px-6 py-3 text-lg">
                Confirm Booking
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CleaningBookingPage;
