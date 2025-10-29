'use client'

import { useEffect, useState } from 'react'

interface UseContentOptions {
  key: string
  defaultValue: string
  type?: 'text' | 'image' | 'video'
}

export function useContent({ key, defaultValue, type = 'text' }: UseContentOptions) {
  const [content, setContent] = useState(defaultValue)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Only fetch on client side
    if (typeof window === 'undefined') {
      setIsLoading(false)
      return
    }

    const loadContent = async () => {
      try {
        const url = `/api/content/${type}?key=${encodeURIComponent(key)}`
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        
        if (response.ok) {
          const data = await response.json()
          if (type === 'text') {
            setContent(data.content || defaultValue)
          } else if (type === 'image') {
            setContent(data.src || defaultValue)
          } else if (type === 'video') {
            setContent(data.src || defaultValue)
          }
        } else if (response.status === 404) {
          // Content doesn't exist yet, use default value
          setContent(defaultValue)
        } else {
          // Other error statuses - use default value
          console.warn(`Content API returned status ${response.status} for key: ${key}`)
          setContent(defaultValue)
        }
      } catch (error) {
        // Network errors or other fetch failures
        if (error instanceof TypeError && error.message === 'Failed to fetch') {
          console.warn(`Failed to fetch content for key "${key}". Using default value. This may indicate the API route is not available.`)
        } else {
          console.error('Error loading content:', error)
        }
        setContent(defaultValue)
      } finally {
        setIsLoading(false)
      }
    }

    loadContent()
  }, [key, defaultValue, type])

  return { content, isLoading, setContent }
}
