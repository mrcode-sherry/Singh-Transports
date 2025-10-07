"use client"
import React from 'react'
import { motion } from "framer-motion";

const Ourservice = () => {
  return (
    <section className="md:px-24 mx-auto px-6 pt-10 pb-20 bg-white">
<div className="flex items-center justify-center mb-10">
        <motion.div
          className="flex items-center w-full justify-center" // reduced max width
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex-1 h-1 bg-yellow-400 rounded-full mr-3" style={{ maxWidth: "50px" }}></div>
          <h1 className="text-3xl text-center md:text-4xl font-bold text-blue-900 uppercase tracking-wider mx-auto">
            Our Services
          </h1>
          <div className="flex-1 h-1 bg-yellow-400 rounded-full ml-3" style={{ maxWidth: "50px" }}></div>
        </motion.div>
      </div>    
      <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
        <p>
          <strong>SinghTransports</strong> is your trusted shuttle service for
          reliable and comfortable transportation. Our <strong>mission</strong> is
          to provide seamless travel experiences for all our passengers.
        </p>
      </div>

      <div className='flex justify-between mt-16 md:flex-row flex-col '>
        <div className='border border-black'>1</div>
        <div className='border border-black'>2</div>
        <div className='border border-black'>3</div>
      </div>
      </section>
  )

}

export default Ourservice
