'use client';

import { trackShipment } from '@/lib/actions';
import { useState } from 'react';

interface TrackingData {
  trackingNumber: string;
  status: string;
  location: string;
  estimatedDelivery?: string;
  deliveredDate?: string;
  history: Array<{
    date: string;
    status: string;
    location: string;
  }>;
}

export default function TrackingForm() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;

    setIsLoading(true);
    setError('');

    try {
      const result = await trackShipment(trackingNumber.trim());
      
      if (result.success) {
        setTrackingData(result.data);
      } else {
        setError(result.error || 'Failed to track shipment');
        setTrackingData(null);
      }
    } catch (err) {
      setError('Failed to track shipment');
      setTrackingData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-4">
          <input
            type="text"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            placeholder="Enter tracking number"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? 'Tracking...' : 'Track'}
          </button>
        </div>
      </form>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-600">{error}</p>
        </div>
      )}

      {trackingData && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Tracking Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-gray-500">Tracking Number:</span>
                <p className="font-mono text-lg">{trackingData.trackingNumber}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Status:</span>
                <p className={`font-semibold ${
                  trackingData.status === 'Delivered' ? 'text-green-600' : 'text-blue-600'
                }`}>
                  {trackingData.status}
                </p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Current Location:</span>
                <p className="font-medium">{trackingData.location}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">
                  {trackingData.deliveredDate ? 'Delivered:' : 'Estimated Delivery:'}
                </span>
                <p className="font-medium">
                  {trackingData.deliveredDate || trackingData.estimatedDelivery}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-4">Shipment History</h4>
            <div className="space-y-3">
              {trackingData.history.map((event, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="font-medium">{event.status}</p>
                    <p className="text-sm text-gray-600">{event.location}</p>
                  </div>
                  <div className="text-sm text-gray-500">
                    {new Date(event.date).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
