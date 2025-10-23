import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Add CORS headers for API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const response = NextResponse.next();
    
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    return response;
  }

  // Rate limiting for API routes (basic example)
  if (request.nextUrl.pathname.startsWith('/api/')) {
    // You could implement more sophisticated rate limiting here
    // using Redis or in-memory storage
    console.log(`API request to: ${request.nextUrl.pathname}`);
  }

  // Authentication middleware (example)
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Check for authentication token
    const token = request.headers.get('authorization');
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/api/:path*',
    '/admin/:path*'
  ]
};
