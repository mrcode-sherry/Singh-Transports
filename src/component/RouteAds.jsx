"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MapPin, Euro } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const RouteAds = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const routes = [
    {
      id: 1,
      title: "Puy du Fou",
      price: 130,
      description: "Experience the magic of France's most spectacular historical theme park. Witness breathtaking shows and immerse yourself in centuries of French history through incredible performances.",
      image: "/images/puy-du-fou.jpg"
    },
    {
      id: 2,
      title: "Mont Saint Michel",
      price: 99,
      description: "Visit the iconic medieval abbey perched on a rocky tidal island. Marvel at this UNESCO World Heritage site and one of France's most recognizable landmarks.",
      image: "/images/mont-saint-michel.jpg"
    },
    {
      id: 3,
      title: "Calais Ferry",
      price: 85,
      description: "Your gateway to the UK! Convenient ferry connections to Dover with comfortable transport to and from the terminal. Perfect for cross-channel travel.",
      image: "/images/calais-ferry.jpg"
    },
    {
      id: 4,
      title: "Dunkerque",
      price: 85,
      description: "Explore the historic port city known for its WWII history and beautiful beaches. Discover maritime heritage and enjoy the charming coastal atmosphere.",
      image: "/images/dunkerque.jpg"
    },
    {
      id: 5,
      title: "Le Havre",
      price: 70,
      description: "UNESCO World Heritage port city with stunning modern architecture. Experience unique urban planning and beautiful seaside views along the Normandy coast.",
      image: "/images/le-havre.jpg"
    },
    {
      id: 6,
      title: "Reims",
      price: 45,
      description: "The coronation city of French kings! Visit magnificent Gothic cathedral and world-famous Champagne houses in this historic and elegant city.",
      image: "/images/reims.jpg"
    },
    {
      id: 7,
      title: "Giverny",
      price: 30,
      description: "Step into Monet's world at his famous gardens and home. Experience the inspiration behind his masterpieces in this charming village of Impressionist art.",
      image: "/images/giverny.jpg"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % routes.length);
    }, 7000); // 7 seconds delay

    return () => clearInterval(interval);
  }, [routes.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % routes.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + routes.length) % routes.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleBookNow = () => {
    router.push('/reservation');
  };

  return (
    <div className="relative w-full h-[500px] bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden mt-20">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center"
        >
          <div className="container md:px-24 mx-auto px-6 h-full flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full w-full">
              
              {/* Left Content */}
              <div className="space-y-6 order-2 lg:order-1">
                <div className="flex items-center space-x-2 text-blue-600">
                  <MapPin size={24} />
                  <span className="text-sm font-medium tracking-wide uppercase">
                    Paris to
                  </span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
                  {routes[currentSlide].title}
                </h2>
                
                <div className="flex items-center space-x-2">
                  <Euro size={28} className="text-yellow-500" />
                  <span className="text-3xl font-bold text-yellow-500">
                    {routes[currentSlide].price}
                  </span>
                  <span className="text-lg text-gray-600">per person</span>
                </div>
                
                <p className="text-gray-700 text-lg leading-relaxed max-w-md">
                  {routes[currentSlide].description}
                </p>
                
                <motion.button
                  onClick={handleBookNow}
                  className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Now
                </motion.button>
              </div>
              
              {/* Right Image */}
              <div className="order-1 lg:order-2 h-full flex items-center justify-center">
                <div className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={routes[currentSlide].image}
                    alt={routes[currentSlide].title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=' + routes[currentSlide].title;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-blue-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-blue-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {routes.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-yellow-500 scale-125'
                : 'bg-white/60 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30">
        <motion.div
          className="h-full bg-yellow-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 7, ease: "linear" }}
          key={currentSlide}
        />
      </div>
    </div>
  );
};

export default RouteAds;