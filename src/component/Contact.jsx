"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    gender: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: 'Thank you! Your message has been sent successfully.' });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobileNumber: "",
          gender: "",
          message: ""
        });
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An unexpected error occurred. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-20 mt-16 px-6 md:px-24">
      <div className="mx-auto grid lg:grid-cols-2 gap-10">
        {/* Left: Form */}
        <div>
          <div className="flex items-center justify-center mb-10">
            <motion.div
              className="flex items-center w-full justify-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div
                className="flex-1 h-1 bg-yellow-400 rounded-full mr-3"
                style={{ maxWidth: "50px" }}
              ></div>
              <h1 className="text-3xl text-center md:text-4xl font-bold text-blue-900 uppercase tracking-wider mx-auto">
                Contact Us
              </h1>
              <div
                className="flex-1 h-1 bg-yellow-400 rounded-full ml-3"
                style={{ maxWidth: "50px" }}
              ></div>
            </motion.div>
          </div>

          {message && (
            <motion.div
              className={`mb-6 p-4 rounded-lg ${
                message.type === 'success' 
                  ? 'bg-green-100 text-green-700 border border-green-200' 
                  : 'bg-red-100 text-red-700 border border-red-200'
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {message.text}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
            <motion.input
              type="text"
              name="firstName"
              placeholder="First Name*"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="border-b border-gray-300 focus:border-blue-900 outline-none py-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 * 0.1, duration: 0.5 }}
            />

            <motion.input
              type="text"
              name="lastName"
              placeholder="Last Name*"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="border-b border-gray-300 focus:border-blue-900 outline-none py-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 * 0.1, duration: 0.5 }}
            />

            <motion.input
              type="email"
              name="email"
              placeholder="Your Email*"
              required
              value={formData.email}
              onChange={handleChange}
              className="border-b border-gray-300 focus:border-blue-900 outline-none py-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 * 0.1, duration: 0.5 }}
            />

            <motion.input
              type="tel"
              name="mobileNumber"
              placeholder="Mobile Number*"
              required
              value={formData.mobileNumber}
              onChange={handleChange}
              className="border-b border-gray-300 focus:border-blue-900 outline-none py-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3 * 0.1, duration: 0.5 }}
            />

            <motion.select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="border-b border-gray-300 focus:border-blue-900 outline-none py-2 md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              required
            >
              <option value="">Select Gender*</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </motion.select>

            <motion.textarea
              name="message"
              placeholder="Tell us about you*"
              className="md:col-span-2 border-b border-gray-300 focus:border-blue-900 outline-none py-2"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              required
            ></motion.textarea>

            <motion.div
              className="md:col-span-2 flex justify-start mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <button 
                type="submit"
                disabled={loading}
                className={`bg-yellow-500 text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition-colors duration-300 cursor-pointer flex items-center ${
                  loading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Submit A Query'
                )}
              </button>
            </motion.div>
          </form>
        </div>

        {/* Right: Info Card */}
        <motion.div
          className="bg-blue-900 text-white p-8 rounded-lg flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-lg font-semibold mb-3">Say Hello!</h3>
          <p className="text-sm leading-relaxed mb-6">
            At Aptitude Counsel, we believe no student should feel lost about
            their future. Whether you are in Matric, Intermediate, or just
            starting to think about your career, we are here to guide you.
          </p>
          <img
            src="/contact/contact-image.png"
            alt="Contact"
            className="rounded-lg mb-6"
          />
          <div>
            <p className="font-semibold text-sm">24/7 Contact Support</p>
            <p className="text-sm">info@example.com</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;