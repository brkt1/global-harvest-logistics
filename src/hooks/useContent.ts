'use client'

import { useContentContext } from '@/contexts/ContentContext'
import { useEffect, useMemo } from 'react'

interface UseContentOptions {
  key: string
  defaultValue: string
  type?: 'text' | 'image' | 'video'
}

export function useContent({ key, defaultValue, type = 'text' }: UseContentOptions) {
  const { cache, loadingKeys, getContent, isLoading: isLoadingKey, registerContentKey, setContent: setContentContext } = useContentContext()
  
  // Register this content key for batch fetching
  useEffect(() => {
    if (typeof window !== 'undefined') {
      registerContentKey(key, type, defaultValue)
    }
  }, [key, type, defaultValue, registerContentKey])

  // Get content from cache - this will automatically update when cache changes
  const cachedContent = useMemo(() => getContent(key, type, defaultValue), [key, type, defaultValue, cache, getContent])
  
  // Determine the actual content value based on type
  const content = useMemo(() => {
    if (type === 'text') {
      return cachedContent || defaultValue
    } else if (type === 'image') {
      return cachedContent?.src || defaultValue
    } else if (type === 'video') {
      return cachedContent?.src || defaultValue
    }
    return defaultValue
  }, [cachedContent, type, defaultValue])

  // Check loading state
  const isLoading = isLoadingKey(key, type)

  const setContent = (value: string | { src: string; alt?: string; title?: string }) => {
    // Update context cache
    if (type === 'text') {
      setContentContext(key, type, value)
    } else if (type === 'image') {
      setContentContext(key, type, typeof value === 'string' ? { src: value, alt: '' } : value)
    } else if (type === 'video') {
      setContentContext(key, type, typeof value === 'string' ? { src: value, title: '' } : value)
    }
  }

  return { content, isLoading, setContent }
}
