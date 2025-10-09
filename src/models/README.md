# Database Models

This directory contains all the Mongoose models for the SinghTransports application.

## Reservation Model

The Reservation model represents a booking made by a customer. It includes the following fields:

### Fields

- **name** (String, required): Customer's full name
- **email** (String, required): Customer's email address
- **phone** (String, required): Customer's phone number
- **date** (Date, required): Pickup date for the reservation
- **route** (String, required): Selected route from predefined options
- **passengers** (Number, required): Number of passengers (1-50)
- **createdAt** (Date): Timestamp when the reservation was created
- **updatedAt** (Date): Timestamp when the reservation was last updated

### Validations

- Name must be between 1 and 100 characters
- Email must be a valid email format
- Phone number must be between 1 and 20 characters
- Date must be in the future
- Route must be one of the predefined options
- Passengers must be between 1 and 50

### Indexes

- Index on `date` for better query performance
- Index on `email` for faster lookups

## Usage

```javascript
import { Reservation } from '@/models';

// Create a new reservation
const newReservation = new Reservation({
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+1234567890',
  date: new Date('2025-12-25'),
  route: 'Airport → Hostel A',
  passengers: 2
});

await newReservation.save();
```