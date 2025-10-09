"use client";
import React, { useState } from "react";
import { User, Mail, Phone, Calendar, MapPin, Users, Loader2, CheckCircle } from "lucide-react";
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setIsSuccess(false);

    try {
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage("Reservation submitted successfully! We'll contact you shortly.");
        setIsSuccess(true);
        // Reset form
        setForm({
          name: "",
          email: "",
          phone: "",
          date: "",
          route: "",
          passengers: 1,
        });
      } else {
        setSubmitMessage(`Error: ${data.error || 'Failed to submit reservation'}`);
        setIsSuccess(false);
      }
    } catch (error) {
      setSubmitMessage(`Error: ${error.message}`);
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

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
          onSubmit={handleSubmit}
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
              required
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
              required
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
              required
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
              required
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
              required
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
              required
            />
          </div>

          {/* Submit Message */}
          {submitMessage && (
            <motion.div 
              className={`p-4 rounded-lg flex items-center ${isSuccess ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isSuccess ? (
                <>
                  <CheckCircle className="mr-2" size={20} />
                  <span className="font-medium">{submitMessage}</span>
                </>
              ) : (
                <span>{submitMessage}</span>
              )}
            </motion.div>
          )}

          {/* Submit */}
          <motion.button
            type="submit"
            className={`w-full text-center font-semibold py-3 rounded-lg shadow transition-colors duration-300 flex items-center justify-center ${
              isSubmitting 
                ? 'bg-blue-900 text-white cursor-not-allowed' 
                : 'bg-yellow-500 text-blue-900 hover:bg-yellow-400'
            }`}
            whileHover={!isSubmitting ? { scale: 1.05 } : {}}
            whileTap={!isSubmitting ? { scale: 0.95 } : {}}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 animate-spin" size={20} />
                Processing...
              </>
            ) : (
              "Submit Reservation"
            )}
          </motion.button>
        </motion.form>
      </motion.section>
    </div>
  );
};

export default Reservation;
