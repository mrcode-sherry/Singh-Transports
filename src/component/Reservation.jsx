"use client";
import React, { useState } from "react";
import { User, Mail, Phone, Calendar, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";

const Reservation = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    route: "",
    passengers: 1,
  });

  const routes = [
    "Airport → Hostel A",
    "Airport → Hostel B",
    "Hostel A → Airport",
    "Hostel B → Airport",
    "Airport → City Center",
    "City Center → Hostel A",
    "Hostel B → City Center",
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const mailtoLink = `mailto:dummymail@example.com?subject=New Reservation&body=
  Name: ${form.name}%0D%0A
  Email: ${form.email}%0D%0A
  Phone: ${form.phone}%0D%0A
  Date: ${form.date}%0D%0A
  Route: ${form.route}%0D%0A
  Passengers: ${form.passengers}`;

  return (
    <div className="min-h-screen pt-28 bg-white"> {/* pt-28 to offset fixed navbar */}
      <motion.section
        className="max-w-3xl mx-auto px-6 py-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 text-center">
          Book Your Shuttle
        </h1>
        <p className="text-gray-700 mb-10 text-center">
          Fill out the form below to reserve your shuttle service. Your journey,
          our priority!
        </p>

        <motion.form
          className="bg-gray-100 p-8 rounded-lg shadow-lg space-y-6"
        >
          {/* Name */}
          <div className="flex items-center border-b border-gray-300 py-2">
            <User className="text-blue-900 mr-3" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full focus:outline-none text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Email */}
          <div className="flex items-center border-b border-gray-300 py-2">
            <Mail className="text-blue-900 mr-3" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full focus:outline-none text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Phone */}
          <div className="flex items-center border-b border-gray-300 py-2">
            <Phone className="text-blue-900 mr-3" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full focus:outline-none text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Pickup Date */}
          <div className="flex items-center border-b border-gray-300 py-2">
            <Calendar className="text-blue-900 mr-3" />
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full focus:outline-none text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Route */}
          <div className="flex items-center border-b border-gray-300 py-2">
            <MapPin className="text-blue-900 mr-3" />
            <select
              name="route"
              value={form.route}
              onChange={handleChange}
              className="w-full focus:outline-none text-gray-700"
            >
              <option value="">Select Route</option>
              {routes.map((r, i) => (
                <option key={i} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          {/* Passengers */}
          <div className="flex items-center border-b border-gray-300 py-2">
            <Users className="text-blue-900 mr-3" />
            <input
              type="number"
              name="passengers"
              value={form.passengers}
              onChange={handleChange}
              min={1}
              className="w-full focus:outline-none text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Submit */}
          <motion.a
            href={mailtoLink}
            className="block text-center bg-yellow-500 text-blue-900 font-semibold py-3 rounded-lg shadow hover:bg-yellow-400 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Submit Reservation
          </motion.a>
        </motion.form>
      </motion.section>
    </div>
  );
};

export default Reservation;
