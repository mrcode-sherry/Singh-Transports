// src/models/Reservation.js

// Make sure to import 'models' from mongoose
import { Schema, model, models } from 'mongoose';

const reservationSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    maxlength: [20, 'Phone number cannot exceed 20 characters']
  },
  date: {
    type: Date,
    required: [true, 'Date is required']
  },
  route: {
    type: String,
    required: [true, 'Route is required'],
    enum: {
      values: [
        "Airport → Hostel A",
        "Airport → Hostel B",
        "Hostel A → Airport",
        "Hostel B → Airport",
        "Airport → City Center",
        "City Center → Hostel A",
        "Hostel B → City Center"
      ],
      message: 'Please select a valid route'
    }
  },
  passengers: {
    type: Number,
    required: [true, 'Number of passengers is required'],
    min: [1, 'There must be at least 1 passenger'],
    max: [50, 'Cannot book for more than 50 passengers']
  }
}, {
  // BEST PRACTICE: Use Mongoose's built-in timestamps
  // This automatically adds and manages `createdAt` and `updatedAt` fields
  timestamps: true
});

// Index for better query performance
reservationSchema.index({ date: 1 });
reservationSchema.index({ email: 1 });

// THE FIX: Check if the model is already compiled before creating it
const Reservation = models.Reservation || model('Reservation', reservationSchema);

export default Reservation;