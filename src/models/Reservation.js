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
        "Paris → Puy du Fou",
        "Paris → Mont Saint Michel",
        "Paris → Calais Ferry",
        "Paris → Dunkerque",
        "Paris → Le Havre",
        "Paris → Reims",
        "Paris → Giverny"
      ],
      message: 'Please select a valid route'
    }
  },
  passengers: {
    type: Number,
    required: [true, 'Number of passengers is required'],
    min: [8, 'There must be at least 8 passengers'],
    max: [50, 'Cannot book for more than 50 passengers']
  },
  pricePerPerson: {
    type: Number,
    required: [true, 'Price per person is required'],
    min: [0, 'Price must be a positive number']
  },
  totalPrice: {
    type: Number,
    required: [true, 'Total price is required'],
    min: [0, 'Total price must be a positive number']
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