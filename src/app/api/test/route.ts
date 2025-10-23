import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'Next.js Backend is working!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    endpoints: {
      quote: '/api/quote',
      track: '/api/track',
      contact: '/api/contact'
    }
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json({
      message: 'POST request received',
      data: body,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid JSON' },
      { status: 400 }
    );
  }
}
