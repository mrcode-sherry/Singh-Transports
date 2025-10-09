import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Check if the user is trying to access the dashboard
  if (pathname.startsWith('/dashboard')) {
    // In a real application, you would check for a valid session/cookie
    // For this example, we'll check for our localStorage flag
    // Since middleware runs on the server, we can't access localStorage directly
    // We'll handle the redirect on the client-side in the dashboard component
    
    // For now, we'll allow the request to proceed to the dashboard
    // The dashboard component will handle the authentication check
    return NextResponse.next();
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};