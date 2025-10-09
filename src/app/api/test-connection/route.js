// src/app/api/test-connection/route.js

import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
// Ensure this import points directly to the model file
import Reservation from '@/models/Reservation';

export async function GET() {
  try {
    // Test database connection
    await connectToDatabase();
    
    // Test creating a reservation
    const testReservation = new Reservation({
      name: "Test User",
      email: `test-${Date.now()}@example.com`, // Use unique email for testing
      phone: "+1234567890",
      date: new Date(),
      route: "Airport → Hostel A",
      passengers: 2
    });
    
    await testReservation.save();
    
    // Fetch the reservation to confirm it was saved
    const savedReservation = await Reservation.findById(testReservation._id);
    
    // Clean up - delete the test reservation
    await Reservation.findByIdAndDelete(testReservation._id);
    
    return NextResponse.json({
      success: true,
      message: "Database connection and operations working correctly",
      testReservation: savedReservation
    });
  } catch (error) {
    console.error('Database test error:', error);
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}