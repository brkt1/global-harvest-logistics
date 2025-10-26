'use client'

import { useAdmin } from '@/contexts/AdminContext'
import { Edit3, Save, X } from 'lucide-react'
import { useEffect, useState } from 'react'

// Function to extract YouTube video ID from various YouTube URL formats
function getYouTubeVideoId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return (match && match[2].length === 11) ? match[2] : null
}

// Function to check if URL is a YouTube URL
function isYouTubeUrl(url: string): boolean {
  return url.includes('youtube.com') || url.includes('youtu.be')
}

interface EditableVideoProps {
  src: string
  title: string
  contentKey: string
  className?: string
  width?: number
  height?: number
}

export default function EditableVideo({ 
  src, 
  title, 
  contentKey, 
  className = '',
  width,
  height
}: EditableVideoProps) {
  const { isAdmin, isEditing } = useAdmin()
  const [isEditingVideo, setIsEditingVideo] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(src)
  const [currentTitle, setCurrentTitle] = useState(title)
  const [isSaving, setIsSaving] = useState(false)
  const [isUploading, setIsUploading] = useState(false)

  useEffect(() => {
    setCurrentSrc(src)
    setCurrentTitle(title)
  }, [src, title])

  const handleFileUpload = async (file: File) => {
    setIsUploading(true)
    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('key', contentKey)

      const response = await fetch('/api/content/video', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        const result = await response.json()
        setCurrentSrc(result.url)
      } else {
        console.error('Failed to upload video')
      }
    } catch (error) {
      console.error('Error uploading video:', error)
    } finally {
      setIsUploading(false)
    }
  }

  const handleSave = async () => {
    setIsSaving(true)
    try {
      const response = await fetch('/api/content/video', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          key: contentKey,
          src: currentSrc,
          title: currentTitle
        })
      })

      if (response.ok) {
        setIsEditingVideo(false)
      } else {
        console.error('Failed to save video')
      }
    } catch (error) {
      console.error('Error saving video:', error)
    } finally {
      setIsSaving(false)
    }
  }

  const handleCancel = () => {
    setCurrentSrc(src)
    setCurrentTitle(title)
    setIsEditingVideo(false)
  }

  // Get YouTube embed URL
  const getEmbedUrl = (url: string) => {
    if (isYouTubeUrl(url)) {
      const videoId = getYouTubeVideoId(url)
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`
      }
    }
    return url
  }

  if (!isAdmin || !isEditing) {
    return (
      <div className={className}>
        {isYouTubeUrl(currentSrc) ? (
          <iframe
            src={getEmbedUrl(currentSrc)}
            title={currentTitle}
            width={width}
            height={height}
            className="w-full aspect-video rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video 
            src={currentSrc} 
            controls
            width={width}
            height={height}
            className="w-full h-auto rounded-lg"
          >
            Your browser does not support the video tag.
          </video>
        )}
        {currentTitle && (
          <p className="text-sm text-gray-600 mt-2">{currentTitle}</p>
        )}
      </div>
    )
  }

  if (isEditingVideo) {
    return (
      <div className="relative group">
        <div className="border-2 border-blue-500 rounded-lg p-4">
          {isYouTubeUrl(currentSrc) ? (
            <iframe
              src={getEmbedUrl(currentSrc)}
              title={currentTitle}
              width={width}
              height={height}
              className="w-full aspect-video rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video 
              src={currentSrc} 
              controls
              width={width}
              height={height}
              className="w-full h-auto rounded-lg"
            >
              Your browser does not support the video tag.
            </video>
          )}
          
          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Video URL (YouTube or direct video file)
              </label>
              <input
                type="url"
                value={currentSrc}
                onChange={(e) => setCurrentSrc(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter YouTube URL or video file URL"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Video Title
              </label>
              <input
                type="text"
                value={currentTitle}
                onChange={(e) => setCurrentTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter video title"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload New Video
              </label>
              <input
                type="file"
                accept="video/*"
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) handleFileUpload(file)
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={isUploading}
              />
              {isUploading && (
                <p className="text-sm text-blue-600 mt-1">Uploading...</p>
              )}
            </div>
          </div>
        </div>
        
        <div className="absolute -top-10 right-0 bg-white rounded-lg shadow-lg border p-2 flex gap-2">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50 flex items-center gap-1"
          >
            <Save className="h-3 w-3" />
            {isSaving ? 'Saving...' : 'Save'}
          </button>
          <button
            onClick={handleCancel}
            className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 flex items-center gap-1"
          >
            <X className="h-3 w-3" />
            Cancel
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="relative group">
      {isYouTubeUrl(currentSrc) ? (
        <iframe
          src={getEmbedUrl(currentSrc)}
          title={currentTitle}
          width={width}
          height={height}
          className="w-full aspect-video rounded-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <video 
          src={currentSrc} 
          controls
          width={width}
          height={height}
          className="w-full h-auto rounded-lg"
        >
          Your browser does not support the video tag.
        </video>
      )}
      {currentTitle && (
        <p className="text-sm text-gray-600 mt-2">{currentTitle}</p>
      )}
      
      <button
        onClick={() => setIsEditingVideo(true)}
        className="absolute -top-8 right-0 bg-blue-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-700 flex items-center gap-1"
      >
        <Edit3 className="h-3 w-3" />
        Edit
      </button>
    </div>
  )
}
