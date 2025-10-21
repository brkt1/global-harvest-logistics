'use client';

import { useLoading } from '@/contexts/LoadingContext';
import React from 'react';
import TruckLoading from './TruckLoading';

const LoadingOverlay: React.FC = () => {
  const { isLoading, loadingText } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-xl p-8 border border-ghl-neutral-200">
        <TruckLoading 
          size="lg" 
          text={loadingText}
          className="min-w-[200px]"
        />
      </div>
    </div>
  );
};

export default LoadingOverlay;
