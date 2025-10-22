'use client';

import { useLoading } from '@/contexts/LoadingContext';
import { useTheme } from '@/contexts/ThemeContext';
import React from 'react';
import TruckLoading from './TruckLoading';

const LoadingOverlay: React.FC = () => {
  const { isLoading, loadingText } = useLoading();
  const { resolvedTheme } = useTheme();

  if (!isLoading) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm ${
      resolvedTheme === 'dark' 
        ? 'bg-gray-900/80' 
        : 'bg-white/80'
    }`}>
  
        <TruckLoading 
          size="lg" 
          text={loadingText}
          className="min-w-[200px]"
        />
    </div>
  );
};

export default LoadingOverlay;
