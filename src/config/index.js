// Environment configuration
export const config = {
  // Admin credentials
  ADMIN_USERNAME: process.env.ADMIN_USERNAME || "admin",
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD || "singh123",
  
  // Site configuration
  SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME || "SinghTransports",
  SITE_DESCRIPTION: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "Reliable shuttle and transport booking website.",
  
  // Contact information
  CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@singhtransports.com",
  CONTACT_PHONE: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+33 123 456 789",
  
  // Database configuration
  MONGODB_URI: process.env.MONGODB_URI || "",
  
  // Environment
  NODE_ENV: process.env.NODE_ENV || "development",
};

export default config;