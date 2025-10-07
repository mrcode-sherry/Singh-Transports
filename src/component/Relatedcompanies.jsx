"use client";
import React from "react";
import { motion } from "framer-motion";

const Relatedcompanies = () => {
  // Actual company images from the public/companies folder
  const companyImages = [
    "/companies/company1.png",
    "/companies/company2.png",
    "/companies/company3.png",
    "/companies/company4.png",
    "/companies/company5.png",
    "/companies/company6.png",
    "/companies/company9.png",
    "/companies/company8.png",
  ];

  return (
    <section className="md:px-24 mx-auto px-6 pt-10 pb-20 bg-gray-200 overflow-hidden">
      {/* Title */}
      <div className="flex items-center justify-center mb-10">
        <motion.div
          className="flex items-center w-full justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="flex-1 h-1 bg-yellow-400 rounded-full mr-3"
            style={{ maxWidth: "50px" }}
          ></div>
          <h1 className="text-3xl text-center md:text-4xl font-bold text-blue-900 uppercase tracking-wider mx-auto">
            Related Companies
          </h1>
          <div
            className="flex-1 h-1 bg-yellow-400 rounded-full ml-3"
            style={{ maxWidth: "50px" }}
          ></div>
        </motion.div>
      </div>

      {/* Slider */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8"
          initial={{ x: "0%" }}
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {/* Duplicate images for smooth infinite scroll */}
          {[...companyImages, ...companyImages].map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-1/4 md:w-1/5 flex justify-center"
            >
              <div className="h-20 w-40 flex items-center justify-center bg-white rounded-lg shadow-md p-4">
                <img
                  src={src}
                  alt={`Company ${i + 1}`}
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Relatedcompanies;