"use client"
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';

const Ourservice = () => {
  const services = [
    {
      id: 1,
      image: "/ourservices/Mercedes.png",
      name: "Mercedes Vito",
      description: "Comfortable 8-seater van with ample luggage space, perfect for group travel."
    },
    {
      id: 2,
      image: "/ourservices/Sprinter.webp",
      name: "Mercedes Sprinter",
      description: "Spacious 15-seater minibus ideal for larger groups and airport transfers."
    },
    {
      id: 3,
      image: "/ourservices/Volkswagen.png",
      name: "Volkswagen Caravelle",
      description: "Reliable 7-seater vehicle with excellent fuel efficiency and comfort."
    },
    {
      id: 4,
      image: "/ourservices/Renault.webp",
      name: "Renault Traffic",
      description: "Versatile 9-seater van with modern amenities and smooth ride quality."
    },
    {
      id: 5,
      image: "/ourservices/bus.png",
      name: "Mini Bus",
      description: "Comfortable 20-seater bus perfect for larger groups and events."
    },
    {
      id: 6,
      image: "/ourservices/Mercedes.webp",
      name: "Mercedes Benz",
      description: "Luxury transportation option with premium comfort and style."
    }
  ];

  return (
    <section className="md:px-24 mx-auto px-6 pt-10 pb-20 bg-white">
      <div className="flex items-center justify-center mb-10">
        <motion.div
          className="flex items-center w-full justify-center"
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

      {/* Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={service.image} 
                alt={service.name}
                className="w-full h-full object-contain bg-gray-100"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2">{service.name}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <Link href="/reservation">
                <button className="bg-yellow-500 text-blue-900 font-semibold px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors duration-300">
                  Book Now
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Ourservice