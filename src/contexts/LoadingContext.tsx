'use client';

import React, { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  loadingText: string;
  setLoading: (loading: boolean, text?: string) => void;
  showLoading: (text?: string) => void;
  hideLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('Loading...');

  const setLoading = useCallback((loading: boolean, text: string = 'Loading...') => {
    setIsLoading(loading);
    setLoadingText(text);
  }, []);

  const showLoading = useCallback((text: string = 'Loading...') => {
    setLoading(true, text);
  }, [setLoading]);

  const hideLoading = useCallback(() => {
    setLoading(false);
  }, [setLoading]);

  const contextValue = useMemo(() => ({
    isLoading,
    loadingText,
    setLoading,
    showLoading,
    hideLoading,
  }), [isLoading, loadingText, setLoading, showLoading, hideLoading]);

  return (
    <LoadingContext.Provider value={contextValue}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = (): LoadingContextType => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};
