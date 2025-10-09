"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const DashboardPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn");
    
    if (!isAdminLoggedIn) {
      // Redirect to login if not logged in
      setIsLoggedIn(false);
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    // Clear login status and redirect to login
    localStorage.removeItem("isAdminLoggedIn");
    setIsLoggedIn(false);
    router.push("/login");
  };

  // Don't render the dashboard if not logged in
  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-900 text-white shadow-lg">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-blue-900 mr-3">
                S
              </div>
              <h1 className="text-xl font-bold">SinghTransports Admin</h1>
            </div>
            <button
              onClick={handleLogout}
              className="bg-yellow-500 text-blue-900 font-semibold px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors duration-300"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-blue-900 mb-2">Admin Dashboard</h2>
            <p className="text-gray-600">Welcome to the administration panel</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Stats Cards */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-blue-100 mr-4">
                  <div className="w-6 h-6 bg-blue-900 rounded-full"></div>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Total Reservations</p>
                  <p className="text-2xl font-bold text-blue-900">24</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-yellow-100 mr-4">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Active Vehicles</p>
                  <p className="text-2xl font-bold text-blue-900">6</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-green-100 mr-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Customer Reviews</p>
                  <p className="text-2xl font-bold text-blue-900">18</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content Placeholder */}
          <div className="mt-10 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Dashboard Overview</h3>
            <p className="text-gray-600">
              This is the admin dashboard. Content will be added here later.
            </p>
            <div className="mt-6 h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Dashboard content area</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default DashboardPage;