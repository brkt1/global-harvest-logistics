'use client';

import React, { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';

interface ContentCache {
  text: Record<string, string>;
  image: Record<string, { src: string; alt: string }>;
  video: Record<string, { src: string; title: string }>;
}

interface ContentContextType {
  cache: ContentCache;
  loadingKeys: Set<string>;
  getContent: (key: string, type: 'text' | 'image' | 'video', defaultValue: any) => any;
  isLoading: (key: string, type: 'text' | 'image' | 'video') => boolean;
  registerContentKey: (key: string, type: 'text' | 'image' | 'video', defaultValue: any) => void;
  setContent: (key: string, type: 'text' | 'image' | 'video', value: any) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

interface ContentProviderProps {
  children: ReactNode;
}

// Batch timeout - collect requests for this long before fetching
const BATCH_TIMEOUT = 50; // ms

export const ContentProvider: React.FC<ContentProviderProps> = ({ children }) => {
  const [cache, setCache] = useState<ContentCache>({
    text: {},
    image: {},
    video: {},
  });
  
  const [loadingKeys, setLoadingKeys] = useState<Set<string>>(new Set());
  
  // Track registered keys that need to be fetched
  const pendingKeysRef = useRef<{
    text: Map<string, any>;
    image: Map<string, any>;
    video: Map<string, any>;
  }>({
    text: new Map(),
    image: new Map(),
    video: new Map(),
  });
  
  const batchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch content in batches
  const fetchBatch = useCallback(async () => {
    const batches: Array<{ type: 'text' | 'image' | 'video'; keys: string[] }> = [];
    
    // Collect all pending keys by type
    ['text', 'image', 'video'].forEach((type) => {
      const typedType = type as 'text' | 'image' | 'video';
      const pendingMap = pendingKeysRef.current[typedType];
      if (pendingMap.size > 0) {
        batches.push({
          type: typedType,
          keys: Array.from(pendingMap.keys()),
        });
      }
    });

    if (batches.length === 0) return;

    // Mark all keys as loading
    const allKeys = batches.flatMap(b => b.keys.map(k => `${b.type}:${k}`));
    setLoadingKeys(prev => {
      const next = new Set(prev);
      allKeys.forEach(k => next.add(k));
      return next;
    });

    try {
      // Fetch all batches in parallel
      const results = await Promise.all(
        batches.map(async (batch) => {
          try {
            const response = await fetch('/api/content/bulk', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                keys: batch.keys,
                type: batch.type,
              }),
            });

            if (!response.ok) {
              throw new Error(`Failed to fetch ${batch.type} content`);
            }

            const data = await response.json();
            return { type: batch.type, results: data.results };
          } catch (error) {
            console.error(`Error fetching ${batch.type} batch:`, error);
            // Return empty results for this batch
            const emptyResults: Record<string, any> = {};
            batch.keys.forEach(key => {
              if (batch.type === 'text') {
                emptyResults[key] = { content: pendingKeysRef.current[batch.type].get(key) || '' };
              } else if (batch.type === 'image') {
                emptyResults[key] = { src: '', alt: '' };
              } else if (batch.type === 'video') {
                emptyResults[key] = { src: '', title: '' };
              }
            });
            return { type: batch.type, results: emptyResults };
          }
        })
      );

      // Update cache with fetched results
      setCache(prev => {
        const next = { ...prev };
        results.forEach(({ type, results: batchResults }) => {
          if (type === 'text') {
            next.text = { ...next.text };
            Object.entries(batchResults).forEach(([key, value]: [string, any]) => {
              next.text[key] = value.content || pendingKeysRef.current.text.get(key) || '';
            });
          } else if (type === 'image') {
            next.image = { ...next.image };
            Object.entries(batchResults).forEach(([key, value]: [string, any]) => {
              next.image[key] = { src: value.src || '', alt: value.alt || '' };
            });
          } else if (type === 'video') {
            next.video = { ...next.video };
            Object.entries(batchResults).forEach(([key, value]: [string, any]) => {
              next.video[key] = { src: value.src || '', title: value.title || '' };
            });
          }
        });
        return next;
      });

      // Clear pending keys
      pendingKeysRef.current = {
        text: new Map(),
        image: new Map(),
        video: new Map(),
      };
    } catch (error) {
      console.error('Error in fetchBatch:', error);
    } finally {
      // Remove loading state
      setLoadingKeys(prev => {
        const next = new Set(prev);
        allKeys.forEach(k => next.delete(k));
        return next;
      });
    }
  }, []);

  // Schedule a batch fetch
  const scheduleBatchFetch = useCallback(() => {
    if (batchTimeoutRef.current) {
      clearTimeout(batchTimeoutRef.current);
    }
    batchTimeoutRef.current = setTimeout(() => {
      fetchBatch();
      batchTimeoutRef.current = null;
    }, BATCH_TIMEOUT);
  }, [fetchBatch]);

  const registerContentKey = useCallback((key: string, type: 'text' | 'image' | 'video', defaultValue: any) => {
    // Check if already in cache
    if (type === 'text' && cache.text.hasOwnProperty(key)) {
      return;
    }
    if (type === 'image' && cache.image.hasOwnProperty(key)) {
      return;
    }
    if (type === 'video' && cache.video.hasOwnProperty(key)) {
      return;
    }

    // Check if already loading
    const loadingKey = `${type}:${key}`;
    if (loadingKeys.has(loadingKey)) {
      return;
    }

    // Check if already pending
    if (pendingKeysRef.current[type].has(key)) {
      return;
    }

    // Add to pending
    pendingKeysRef.current[type].set(key, defaultValue);
    scheduleBatchFetch();
  }, [cache, loadingKeys, scheduleBatchFetch]);

  const getContent = useCallback((key: string, type: 'text' | 'image' | 'video', defaultValue: any) => {
    if (type === 'text') {
      return cache.text[key] ?? defaultValue;
    } else if (type === 'image') {
      return cache.image[key] ?? defaultValue;
    } else if (type === 'video') {
      return cache.video[key] ?? defaultValue;
    }
    return defaultValue;
  }, [cache]);

  const isLoading = useCallback((key: string, type: 'text' | 'image' | 'video') => {
    return loadingKeys.has(`${type}:${key}`);
  }, [loadingKeys]);

  const setContent = useCallback((key: string, type: 'text' | 'image' | 'video', value: any) => {
    setCache(prev => {
      const next = { ...prev };
      if (type === 'text') {
        next.text = { ...next.text, [key]: value };
      } else if (type === 'image') {
        next.image = { ...next.image, [key]: value };
      } else if (type === 'video') {
        next.video = { ...next.video, [key]: value };
      }
      return next;
    });
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (batchTimeoutRef.current) {
        clearTimeout(batchTimeoutRef.current);
      }
    };
  }, []);

  const contextValue = useMemo(() => ({
    cache,
    loadingKeys,
    getContent,
    isLoading,
    registerContentKey,
    setContent,
  }), [cache, loadingKeys, getContent, isLoading, registerContentKey, setContent]);

  return (
    <ContentContext.Provider value={contextValue}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContentContext = (): ContentContextType => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContentContext must be used within ContentProvider');
  }
  return context;
};
