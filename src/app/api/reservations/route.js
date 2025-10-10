// src/app/api/reservations/route.js

import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Reservation from '@/models/Reservation';
import { validateReservationData } from '@/utils/reservationValidator';

// Authentication middleware
const authenticate = (request) => {
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return false;
  }
  
  const token = authHeader.substring(7);
  // In a real application, you would verify the JWT token here
  // For now, we'll use a simple check
  return token === 'your-secret-token'; // Replace with proper JWT verification
};

export async function POST(request) {
  console.log("--- New POST Request Received ---");
  try {
    // 1. Connect to the database
    await connectToDatabase();
    console.log("1. Database connection successful.");
    
    // 2. Parse the request body
    const body = await request.json();
    console.log("2. Request body parsed:", body);
    
    // 3. Validate the data with your custom validator
    const { isValid, errors } = validateReservationData(body);
    console.log("3. Custom validation result:", { isValid, errors });
    
    if (!isValid) {
      console.log("-> Validation failed (custom validator). Returning 400.");
      return NextResponse.json(
        { message: 'Validation failed', details: errors },
        { status: 400 }
      );
    }
    
    // 4. Create and save the reservation (this is where Mongoose validation runs)
    console.log("4. Creating new Reservation document.");
    const reservation = new Reservation(body);
    await reservation.save();
    console.log("5. Reservation saved successfully to DB.");
    
    // 5. Return success response
    console.log("-> Success. Returning 201.");
    return NextResponse.json(
      { message: 'Reservation created successfully', reservation },
      { status: 201 }
    );

  } catch (error) {
    console.error("!!! ERROR CAUGHT IN CATCH BLOCK !!!");
    console.error("Error Type:", error.name);
    console.error("Error Message:", error.message);
    
    // Check if it's a Mongoose validation error
    if (error.name === 'ValidationError') {
      let errorDetails = {};
      // Extract the error messages for each failed field
      for (const field in error.errors) {
        errorDetails[field] = error.errors[field].message;
      }
      console.log("-> Mongoose validation error. Returning 400.");
      return NextResponse.json(
        { message: 'Validation failed', details: errorDetails },
        { status: 400 }
      );
    }

    // For any other type of error, return a generic 500 server error
    console.log("-> Generic server error. Returning 500.");
    return NextResponse.json(
      { message: 'An unexpected error occurred on the server.', error: error.message },
      { status: 500 }
      );
  }
}

// GET - Fetch all reservations (protected route)
export async function GET(request) {
  try {
    // Check authentication
    if (!authenticate(request)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { 
          status: 401,
          headers: {
            'Access-Control-Allow-Origin': '*',
          }
        }
      );
    }
    
    // Connect to the database
    await connectToDatabase();
    
    // Fetch all reservations
    const reservations = await Reservation.find({}).sort({ createdAt: -1 });
    
    return NextResponse.json(
      { reservations }, 
      { 
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      }
    );
  } catch (error) {
    console.error('Error fetching reservations:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reservations' },
      { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      }
    );
  }
}

// Handle CORS preflight requests
export async function OPTIONS() {
  return NextResponse.json({}, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  });
}