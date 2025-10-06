"use client";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="bg-white py-16 mt-28 px-6 md:px-24">
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

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { type: "text", placeholder: "First Name*" },
              { type: "text", placeholder: "Last Name*" },
              { type: "email", placeholder: "Your Email*" },
              { type: "tel", placeholder: "Mobile Number*" },
            ].map((input, index) => (
              <motion.input
                key={index}
                type={input.type}
                placeholder={input.placeholder}
                required
                className="border-b border-gray-300 focus:border-blue-900 outline-none py-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              />
            ))}

            <motion.select
              className="border-b border-gray-300 focus:border-blue-900 outline-none py-2"
              defaultValue="Single"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </motion.select>

            <motion.textarea
              placeholder="Tell us about you"
              className="md:col-span-2 border-b border-gray-300 focus:border-blue-900 outline-none py-2"
              rows="3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            ></motion.textarea>

            <motion.div
              className="md:col-span-2 flex justify-start mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <button className="bg-yellow-500 text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition-colors duration-300 cursor-pointer">
                Submit A Query
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
