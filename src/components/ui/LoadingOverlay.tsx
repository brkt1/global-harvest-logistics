'use client';

import { useLoading } from '@/contexts/LoadingContext';
import React from 'react';
import TruckLoading from './TruckLoading';

const LoadingOverlay: React.FC = () => {
  const { isLoading, loadingText } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/80">
  
        <TruckLoading 
          size="lg" 
          text={loadingText}
          className="min-w-[200px]"
        />
    </div>
  );
};

export default LoadingOverlay;
