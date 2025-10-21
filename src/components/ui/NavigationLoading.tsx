'use client';

import { useLoading } from '@/contexts/LoadingContext';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';

const NavigationLoading: React.FC = () => {
  const { showLoading, hideLoading } = useLoading();
  const pathname = usePathname();
  const previousPathname = useRef(pathname);
  const isInitialLoad = useRef(true);
  const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Memoize the loading functions to prevent unnecessary re-renders
  const handleShowLoading = useCallback((text: string) => {
    showLoading(text);
  }, [showLoading]);

  const handleHideLoading = useCallback(() => {
    hideLoading();
  }, [hideLoading]);

  useEffect(() => {
    // Clear any existing timeout
    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current);
      loadingTimeoutRef.current = null;
    }

    // Skip loading on initial page load
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      previousPathname.current = pathname;
      return;
    }

    // Only show loading if pathname actually changed
    if (previousPathname.current !== pathname) {
      handleShowLoading('Loading page...');
      
      // Hide loading after a short delay
      loadingTimeoutRef.current = setTimeout(() => {
        handleHideLoading();
        loadingTimeoutRef.current = null;
      }, 800);

      previousPathname.current = pathname;
    }

    // Cleanup function
    return () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
        loadingTimeoutRef.current = null;
      }
    };
  }, [pathname, handleShowLoading, handleHideLoading]);

  return null;
};

export default NavigationLoading;
