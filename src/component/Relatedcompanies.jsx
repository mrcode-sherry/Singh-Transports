"use client";
import React from "react";
import { motion } from "framer-motion";

const Relatedcompanies = () => {
  // Dummy payment method images (replace with real ones later)
  const paymentImages = [
    "https://via.placeholder.com/150x80?text=Visa",
    "https://via.placeholder.com/150x80?text=MasterCard",
    "https://via.placeholder.com/150x80?text=PayPal",
    "https://via.placeholder.com/150x80?text=Stripe",
    "https://via.placeholder.com/150x80?text=GooglePay",
    "https://via.placeholder.com/150x80?text=ApplePay",
    "https://via.placeholder.com/150x80?text=AmericanExpress",
    "https://via.placeholder.com/150x80?text=UnionPay",
    "https://via.placeholder.com/150x80?text=AliPay",
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
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 15,
            ease: "linear",
          }}
        >
          {/* Duplicate images for smooth infinite scroll */}
          {[...paymentImages, ...paymentImages].map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-1/4 md:w-1/5 flex justify-center"
            >
              <img
                src={src}
                alt={`Payment ${i}`}
                className="h-20 w-auto object-contain bg-white rounded-lg shadow-md p-4"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Relatedcompanies;
