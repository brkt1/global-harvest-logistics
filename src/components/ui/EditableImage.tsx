'use client'

import { useAdmin } from '@/contexts/AdminContext'
import { Edit3, Save, X } from 'lucide-react'
import { useEffect, useState } from 'react'

interface EditableImageProps {
  src: string
  alt: string
  contentKey: string
  className?: string
  width?: number
  height?: number
  isBackground?: boolean
}

export default function EditableImage({ 
  src, 
  alt, 
  contentKey, 
  className = '',
  width,
  height,
  isBackground = false
}: EditableImageProps) {
  const { isAdmin, isEditing } = useAdmin()
  const [isEditingImage, setIsEditingImage] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(src)
  const [currentAlt, setCurrentAlt] = useState(alt)
  const [isSaving, setIsSaving] = useState(false)
  const [isUploading, setIsUploading] = useState(false)

  useEffect(() => {
    setCurrentSrc(src)
    setCurrentAlt(alt)
  }, [src, alt])

  const handleFileUpload = async (file: File) => {
    setIsUploading(true)
    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('key', contentKey)

      const response = await fetch('/api/content/image', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        const result = await response.json()
        setCurrentSrc(result.url)
      } else {
        console.error('Failed to upload image')
      }
    } catch (error) {
      console.error('Error uploading image:', error)
    } finally {
      setIsUploading(false)
    }
  }

  const handleSave = async () => {
    setIsSaving(true)
    try {
      const response = await fetch('/api/content/image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          key: contentKey,
          src: currentSrc,
          alt: currentAlt
        })
      })

      if (response.ok) {
        setIsEditingImage(false)
      } else {
        console.error('Failed to save image')
      }
    } catch (error) {
      console.error('Error saving image:', error)
    } finally {
      setIsSaving(false)
    }
  }

  const handleCancel = () => {
    setCurrentSrc(src)
    setCurrentAlt(alt)
    setIsEditingImage(false)
  }

  if (!isAdmin || !isEditing) {
    if (isBackground) {
      return (
        <div 
          className={className}
          style={{
            backgroundImage: `url('${currentSrc}')`,
          }}
        />
      )
    }
    
    return (
      <img 
        src={currentSrc} 
        alt={currentAlt} 
        className={className}
        width={width}
        height={height}
      />
    )
  }

  if (isEditingImage) {
    return (
      <div className="relative group">
        <div className="border-2 border-blue-500 rounded-lg p-4">
          {isBackground ? (
            <div 
              className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center"
              style={{
                backgroundImage: `url('${currentSrc}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="bg-black/50 text-white px-3 py-1 rounded">
                Background Image Preview
              </div>
            </div>
          ) : (
            <img 
              src={currentSrc} 
              alt={currentAlt} 
              className={className}
              width={width}
              height={height}
            />
          )}
          
          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image URL
              </label>
              <input
                type="url"
                value={currentSrc}
                onChange={(e) => setCurrentSrc(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter image URL"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Alt Text
              </label>
              <input
                type="text"
                value={currentAlt}
                onChange={(e) => setCurrentAlt(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter alt text"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload New Image
              </label>
              <input
                type="file"
                accept="image/*"
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
      {isBackground ? (
        <div 
          className={className}
          style={{
            backgroundImage: `url('${currentSrc}')`,
          }}
        />
      ) : (
        <img 
          src={currentSrc} 
          alt={currentAlt} 
          className={className}
          width={width}
          height={height}
        />
      )}
      
      <button
        onClick={() => setIsEditingImage(true)}
        className="absolute -top-8 right-0 bg-blue-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-700 flex items-center gap-1"
      >
        <Edit3 className="h-3 w-3" />
        Edit
      </button>
    </div>
  )
}
