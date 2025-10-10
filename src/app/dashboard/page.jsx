"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const DashboardPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [activeTab, setActiveTab] = useState("reservations");
  const [reservations, setReservations] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn");
    
    if (!isAdminLoggedIn) {
      setIsLoggedIn(false);
      router.push("/login");
    } else {
      fetchData();
    }
  }, [router]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const reservationRes = await fetch("/api/reservations", {
        headers: {
          "Authorization": "Bearer your-secret-token"
        }
      });
      const reservationData = await reservationRes.json();
      setReservations(reservationData.reservations || []);

      const contactRes = await fetch("/api/contacts", {
        headers: {
          "Authorization": "Bearer your-secret-token"
        }
      });
      const contactData = await contactRes.json();
      setContacts(contactData.contacts || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    setIsLoggedIn(false);
    router.push("/");
  };

  if (!isLoggedIn) {
    return null; // Or a loading spinner
  }

  // Common Reservation and Contact Card components to reduce repetition
  const ReservationCard = ({ reservation }) => (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold text-blue-900">{reservation.name}</h3>
          <p className="text-gray-600 truncate">{reservation.email}</p>
          <p className="text-gray-600">{reservation.phone}</p>
        </div>
        <div className="text-sm sm:text-base">
          <p className="text-gray-700"><span className="font-medium">Date:</span> {new Date(reservation.date).toLocaleDateString()}</p>
          <p className="text-gray-700"><span className="font-medium">Route:</span> {reservation.route}</p>
          <p className="text-gray-700"><span className="font-medium">Passengers:</span> {reservation.passengers}</p>
        </div>
      </div>
      <div className="mt-4 pt-3 border-t text-xs text-gray-500 text-right">
        Booked on: {new Date(reservation.createdAt).toLocaleString()}
      </div>
    </div>
  );

  const ContactCard = ({ contact }) => (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-blue-900">{contact.firstName} {contact.lastName}</h3>
          <p className="text-gray-600 truncate">{contact.email}</p>
          <p className="text-gray-600">{contact.mobileNumber}</p>
          <p className="text-gray-600 mt-2 capitalize">{contact.gender}</p>
        </div>
        <div className="text-xs text-gray-500 text-right shrink-0 ml-2">
          {new Date(contact.createdAt).toLocaleString()}
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-700 font-medium">Message:</p>
        <p className="mt-2 text-gray-600 bg-gray-50 p-3 rounded-md">{contact.message}</p>
      </div>
    </div>
  );

  const TabContent = ({ children, title, subtitle }) => (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">{title}</h2>
        <p className="text-gray-600">{subtitle}</p>
      </div>
      {children}
    </div>
  );

  const LoadingOrEmptyState = ({ isLoading, data, type }) => {
    if (isLoading) {
      return (
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <p>Loading {type}...</p>
        </div>
      );
    }
    if (data.length === 0) {
      return (
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <p className="text-gray-500">No {type} found</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Sidebar (Desktop Only) */}
      <div className="w-64 bg-blue-900 text-white flex-col justify-between hidden md:flex">
        <div>
          <div className="p-4 border-b border-blue-800">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-blue-900 mr-3">
                S
              </div>
              <h1 className="text-xl font-bold">SinghTransports</h1>
            </div>
          </div>
          
          <div className="p-4">
            <nav>
              <button
                onClick={() => setActiveTab("reservations")}
                className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition-colors duration-200 flex items-center ${activeTab === "reservations" ? "bg-yellow-500 text-blue-900 font-semibold" : "hover:bg-blue-800"}`}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                Reservations
              </button>
              
              <button
                onClick={() => setActiveTab("contacts")}
                className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition-colors duration-200 flex items-center ${activeTab === "contacts" ? "bg-yellow-500 text-blue-900 font-semibold" : "hover:bg-blue-800"}`}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                Contacts
              </button>
            </nav>
          </div>
        </div>
        
        <div className="p-4 border-t border-blue-800">
          <button
            onClick={handleLogout}
            className="w-full bg-yellow-500 text-blue-900 font-semibold px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors duration-300 flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile header */}
        <header className="bg-blue-900 text-white shadow-lg md:hidden sticky top-0 z-10">
          <div className="px-4 py-3 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-blue-900 mr-2">
                S
              </div>
              <h1 className="text-lg font-bold">Admin</h1>
            </div>
            <button
              onClick={handleLogout}
              className="bg-yellow-500 text-blue-900 font-semibold px-3 py-1 rounded-lg hover:bg-yellow-400 transition-colors duration-300 text-sm flex items-center"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
              Logout
            </button>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto pb-24 md:pb-6">
          <motion.div
            key={activeTab} // Add key to re-trigger animation on tab change
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {activeTab === "reservations" && (
              <TabContent title="Reservations" subtitle="Manage all reservation requests">
                <LoadingOrEmptyState isLoading={loading} data={reservations} type="reservations" />
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                  {reservations.map((reservation) => (
                    <ReservationCard key={reservation._id} reservation={reservation} />
                  ))}
                </div>
              </TabContent>
            )}

            {activeTab === "contacts" && (
              <TabContent title="Contacts" subtitle="Manage all contact messages">
                <LoadingOrEmptyState isLoading={loading} data={contacts} type="contacts" />
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                  {contacts.map((contact) => (
                    <ContactCard key={contact._id} contact={contact} />
                  ))}
                </div>
              </TabContent>
            )}
          </motion.div>
        </main>
      </div>
      
      {/* Bottom Navigation (Mobile Only) */}
      <div className="fixed bottom-0 left-0 right-0 bg-blue-900 border-t border-blue-800 p-2 flex justify-around items-center md:hidden z-20">
        <button
          onClick={() => setActiveTab("reservations")}
          className={`flex flex-col items-center justify-center w-full rounded-md py-1 transition-colors duration-200 ${activeTab === 'reservations' ? 'text-yellow-500' : 'text-gray-300 hover:text-white'}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          <span className="text-xs mt-1">Reservations</span>
        </button>
        <button
          onClick={() => setActiveTab("contacts")}
          className={`flex flex-col items-center justify-center w-full rounded-md py-1 transition-colors duration-200 ${activeTab === 'contacts' ? 'text-yellow-500' : 'text-gray-300 hover:text-white'}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          <span className="text-xs mt-1">Contacts</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;