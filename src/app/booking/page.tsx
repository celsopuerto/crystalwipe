"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";

const CleaningBookingPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedService, setSelectedService] = useState("");
  const [extras, setExtras] = useState<{ [key: string]: boolean }>({
    "Deep Cleaning": false,
    "Carpet Cleaning": false,
    "Window Cleaning": false,
  });

  const services = [
    { id: 1, name: "Standard Cleaning", price: 50 },
    { id: 2, name: "Premium Cleaning", price: 80 },
    { id: 3, name: "Move-in/Move-out Cleaning", price: 120 },
  ];

  const toggleExtra = (extra: string) => {
    setExtras((prev) => ({ ...prev, [extra]: !prev[extra] }));
  };

  const handleSubmit = () => {
    alert("Booking submitted successfully!");
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
                  Select Service
                </label>
                <Select onValueChange={setSelectedService}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.id} value={service.name}>
                        {service.name} - ${service.price}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Pick a Date
                </label>
                <Calendar
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  mode="single"
                  className="rounded-md border p-2 shadow-sm"
                />
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Add Extras
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {Object.keys(extras).map((extra) => (
                  <div key={extra} className="flex items-center space-x-2">
                    <Checkbox
                      id={extra}
                      checked={extras[extra]}
                      onCheckedChange={() => toggleExtra(extra)}
                    />
                    <label htmlFor={extra} className="text-sm text-gray-600">
                      {extra}
                    </label>
                  </div>
                ))}
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
