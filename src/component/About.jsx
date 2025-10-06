"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="md:px-24 mx-auto px-6 mt-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Stylish Title with shorter lines */}
      <div className="flex items-center justify-center mb-10">
        <motion.div
          className="flex items-center w-full justify-center" // reduced max width
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex-1 h-1 bg-yellow-400 rounded-full mr-3" style={{ maxWidth: "50px" }}></div>
          <h1 className="text-3xl text-center md:text-4xl font-bold text-blue-900 uppercase tracking-wider mx-auto">
            About Us
          </h1>
          <div className="flex-1 h-1 bg-yellow-400 rounded-full ml-3" style={{ maxWidth: "50px" }}></div>
        </motion.div>
      </div>

      {/* Paragraphs */}
      <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
        <p>
          <strong>SinghTransports</strong> is your trusted shuttle service for
          reliable and comfortable transportation. Our <strong>mission</strong> is
          to provide seamless travel experiences for all our passengers.
        </p>

        <p>
          We specialize in <strong>airport transfers</strong> and city commuting,
          offering well-maintained <strong>Mercedes vans</strong> that guarantee
          safety and comfort. Our trained drivers ensure a smooth journey every time.
        </p>

        <p>
          Our commitment to <strong>customer satisfaction</strong> sets us apart.
          Whether you are traveling solo, with family, or in a group, we provide
          tailored services to meet your unique <strong>travel needs</strong>.
        </p>

        <p>
          At <strong>SinghTransports</strong>, we combine punctuality,
          professionalism, and reliability. Book with us today and experience
          <strong> hassle-free travel</strong> from the airport to your hostel or
          city destination.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
