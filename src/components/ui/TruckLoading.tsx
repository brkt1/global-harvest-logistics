'use client';

import React from 'react';

interface TruckLoadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  text?: string;
}

const TruckLoading: React.FC<TruckLoadingProps> = ({ 
  size = 'md', 
  className = '', 
  text = 'Loading...' 
}) => {
  const sizeClasses = {
    sm: 'w-16 h-8',
    md: 'w-24 h-12',
    lg: 'w-32 h-16',
    xl: 'w-48 h-24'
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      <div className={`truck-loading ${sizeClasses[size]}`}>
        <svg className="truck" viewBox="0 0 48 24" width="100%" height="100%">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" transform="translate(0,2)">
            <g className="truck__body">
              <g strokeDasharray="105 105">
                <polyline className="truck__outside1" points="2 17,1 17,1 11,5 9,7 1,39 1,39 6" />
                <polyline className="truck__outside2" points="39 12,39 17,31.5 17" />
                <polyline className="truck__outside3" points="22.5 17,11 17" />
                <polyline className="truck__window1" points="6.5 4,8 4,8 9,5 9" />
                <polygon className="truck__window2" points="10 4,10 9,14 9,14 4" />
              </g>
              <polyline className="truck__line" points="43 8,31 8" strokeDasharray="10 2 10 2 10 2 10 2 10 2 10 26" />
              <polyline className="truck__line" points="47 10,31 10" strokeDasharray="14 2 14 2 14 2 14 2 14 18" />
            </g>
            <g strokeDasharray="15.71 15.71">
              <g className="truck__wheel">
                <circle className="truck__wheel-spin" r="2.5" cx="6.5" cy="17" />
              </g>
              <g className="truck__wheel">
                <circle className="truck__wheel-spin" r="2.5" cx="27" cy="17" />
              </g>
            </g>
          </g>
        </svg>
      </div>
      {text && (
        <p className="text-ghl-primary-600 font-medium text-sm">
          {text}
        </p>
      )}
    </div>
  );
};

export default TruckLoading;
