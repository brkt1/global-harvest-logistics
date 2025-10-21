'use client';

import TruckLoading from '@/components/ui/TruckLoading';
import { useLoading } from '@/contexts/LoadingContext';
import { useState } from 'react';

export default function LoadingDemo() {
  const { showLoading, hideLoading } = useLoading();
  const [isLocalLoading, setIsLocalLoading] = useState(false);

  const handleGlobalLoading = () => {
    showLoading('Processing your request...');
    setTimeout(() => {
      hideLoading();
    }, 3000);
  };

  const handleLocalLoading = () => {
    setIsLocalLoading(true);
    setTimeout(() => {
      setIsLocalLoading(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-ghl-neutral-50 py-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-ghl-primary-600 mb-8 text-center">
            Truck Loading Animation Demo
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Global Loading Demo */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-ghl-neutral-200">
              <h2 className="text-2xl font-semibold text-ghl-primary-600 mb-4">
                Global Loading Overlay
              </h2>
              <p className="text-ghl-neutral-600 mb-6">
                This will show a full-screen loading overlay with the truck animation.
              </p>
              <button
                onClick={handleGlobalLoading}
                className="btn btn-primary w-full"
              >
                Show Global Loading
              </button>
            </div>

            {/* Local Loading Demo */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-ghl-neutral-200">
              <h2 className="text-2xl font-semibold text-ghl-primary-600 mb-4">
                Local Loading Component
              </h2>
              <p className="text-ghl-neutral-600 mb-6">
                This shows the truck loading component inline.
              </p>
              <button
                onClick={handleLocalLoading}
                className="btn btn-primary w-full"
                disabled={isLocalLoading}
              >
                {isLocalLoading ? 'Loading...' : 'Show Local Loading'}
              </button>
              
              {isLocalLoading && (
                <div className="mt-6">
                  <TruckLoading 
                    size="md" 
                    text="Processing locally..." 
                  />
                </div>
              )}
            </div>
          </div>

          {/* Size Variations */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-ghl-neutral-200">
            <h2 className="text-2xl font-semibold text-ghl-primary-600 mb-6">
              Different Sizes
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <TruckLoading size="sm" text="Small" />
              </div>
              <div className="text-center">
                <TruckLoading size="md" text="Medium" />
              </div>
              <div className="text-center">
                <TruckLoading size="lg" text="Large" />
              </div>
              <div className="text-center">
                <TruckLoading size="xl" text="Extra Large" />
              </div>
            </div>
          </div>

          {/* Usage Instructions */}
          <div className="mt-12 bg-ghl-primary-50 rounded-lg p-6 border border-ghl-primary-200">
            <h2 className="text-2xl font-semibold text-ghl-primary-600 mb-4">
              How to Use
            </h2>
            <div className="space-y-4 text-ghl-neutral-700">
              <div>
                <h3 className="font-semibold text-ghl-primary-600">Global Loading:</h3>
                <p>Use the <code className="bg-ghl-neutral-100 px-2 py-1 rounded">useLoading</code> hook to show/hide global loading overlay.</p>
              </div>
              <div>
                <h3 className="font-semibold text-ghl-primary-600">Local Loading:</h3>
                <p>Import and use the <code className="bg-ghl-neutral-100 px-2 py-1 rounded">TruckLoading</code> component directly in your pages.</p>
              </div>
              <div>
                <h3 className="font-semibold text-ghl-primary-600">Brand Colors:</h3>
                <p>The animation uses your brand colors: Primary Green (#1e5631) and Secondary Green (#4CAF50).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
