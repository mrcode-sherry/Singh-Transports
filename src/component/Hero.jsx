"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import Link from "next/link";

const Hero = () => {
  const typedRef = useRef(null); // make sure to use this ref

  useEffect(() => {
    const typed = new Typed(typedRef.current, { // use typedRef here
      strings: [
        "Reliable Shuttle<br/>Services",
        "Reliable Airport<br/>Transfers",
      ],
      typeSpeed: 60,       
      backSpeed: 60,       
      backDelay: 5000,     
      startDelay: 500,     
      loop: true,
      smartBackspace: true,
      showCursor: true,
      contentType: 'html',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-white flex items-center">
      <div className="md:px-24 mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 md:mt-0 mt-24">
        {/* Text Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold leading-snug md:leading-tight md:w-[500px] md:h-36">
            <span ref={typedRef} className="text-blue-900"></span>
          </h1>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-6 md:mb-8">
            Book your ride with <strong>SinghTransports</strong> for a safe,
            comfortable, and hassle-free journey. Punctuality and professionalism
            guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
             <Link href="/reservation">
             <button className="bg-yellow-500 text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition-colors duration-300 cursor-pointer w-full sm:w-auto">
              Book Now
            </button>
            </Link>
            <Link href="/contact">
            <button className="bg-transparent border-2 border-yellow-500 text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 hover:text-blue-900 transition-all cursor-pointer duration-300 w-full sm:w-auto">
              Contact Us
            </button>
            </Link>
          </div>
        </motion.div>

        {/* Decorative Placeholder for Image or Vehicle */}
        <motion.div
          className="flex-1 flex md:w-0 w-full justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-sm h-48 sm:h-56 md:h-64 bg-blue-100 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-blue-400 font-bold text-sm sm:text-base">Your Vehicle Image Here</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;