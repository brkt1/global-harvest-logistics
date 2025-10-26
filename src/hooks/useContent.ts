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
    const loadContent = async () => {
      try {
        const response = await fetch(`/api/content/${type}?key=${key}`)
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
        }
      } catch (error) {
        console.error('Error loading content:', error)
        setContent(defaultValue)
      } finally {
        setIsLoading(false)
      }
    }

    loadContent()
  }, [key, defaultValue, type])

  return { content, isLoading, setContent }
}
