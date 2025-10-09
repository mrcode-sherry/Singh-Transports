export const validateReservationData = (data) => {
  const errors = [];

  // Validate name
  if (!data.name || data.name.trim().length === 0) {
    errors.push('Name is required');
  } else if (data.name.length > 100) {
    errors.push('Name cannot exceed 100 characters');
  }

  // Validate email
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!data.email) {
    errors.push('Email is required');
  } else if (!emailRegex.test(data.email)) {
    errors.push('Please enter a valid email');
  }

  // Validate phone
  if (!data.phone || data.phone.trim().length === 0) {
    errors.push('Phone number is required');
  } else if (data.phone.length > 20) {
    errors.push('Phone number cannot exceed 20 characters');
  }

  // Validate date
  if (!data.date) {
    errors.push('Date is required');
  } else {
    const selectedDate = new Date(data.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      errors.push('Date cannot be in the past');
    }
  }

  // Validate route
  const validRoutes = [
    "Airport → Hostel A",
    "Airport → Hostel B",
    "Hostel A → Airport",
    "Hostel B → Airport",
    "Airport → City Center",
    "City Center → Hostel A",
    "Hostel B → City Center"
  ];
  
  if (!data.route) {
    errors.push('Route is required');
  } else if (!validRoutes.includes(data.route)) {
    errors.push('Please select a valid route');
  }

  // Validate passengers
  const passengers = parseInt(data.passengers);
  if (isNaN(passengers)) {
    errors.push('Number of passengers is required');
  } else if (passengers < 1) {
    errors.push('There must be at least 1 passenger');
  } else if (passengers > 50) {
    errors.push('Cannot book for more than 50 passengers');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};