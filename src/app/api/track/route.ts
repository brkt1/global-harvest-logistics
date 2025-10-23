import { NextRequest, NextResponse } from 'next/server';

// Mock tracking data
const mockTrackingData = {
  'TRK-123456': {
    status: 'In Transit',
    location: 'Chicago, IL',
    estimatedDelivery: '2024-01-15',
    history: [
      { date: '2024-01-10', status: 'Picked Up', location: 'New York, NY' },
      { date: '2024-01-12', status: 'In Transit', location: 'Chicago, IL' }
    ]
  },
  'TRK-789012': {
    status: 'Delivered',
    location: 'Los Angeles, CA',
    deliveredDate: '2024-01-08',
    history: [
      { date: '2024-01-05', status: 'Picked Up', location: 'Miami, FL' },
      { date: '2024-01-07', status: 'In Transit', location: 'Phoenix, AZ' },
      { date: '2024-01-08', status: 'Delivered', location: 'Los Angeles, CA' }
    ]
  }
};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const trackingNumber = searchParams.get('trackingNumber');
    
    if (!trackingNumber) {
      return NextResponse.json(
        { error: 'Tracking number is required' },
        { status: 400 }
      );
    }
    
    const trackingData = mockTrackingData[trackingNumber as keyof typeof mockTrackingData];
    
    if (!trackingData) {
      return NextResponse.json(
        { error: 'Tracking number not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      trackingNumber,
      ...trackingData
    });
    
  } catch (error) {
    console.error('Tracking API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
