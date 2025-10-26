'use client'

import { useAdmin } from '@/contexts/AdminContext'
import { useContent } from '@/hooks/useContent'
import { Edit3, Save, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'

interface EditableTextProps {
  content: string
  contentKey: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  className?: string
  placeholder?: string
}

export default function EditableText({ 
  content, 
  contentKey, 
  tag = 'p', 
  className = '',
  placeholder = 'Click to edit...'
}: EditableTextProps) {
  const { isAdmin, isEditing } = useAdmin()
  const { content: loadedContent, setContent } = useContent({ 
    key: contentKey, 
    defaultValue: content 
  })
  const [isEditingText, setIsEditingText] = useState(false)
  const [currentContent, setCurrentContent] = useState(loadedContent)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    setCurrentContent(loadedContent)
  }, [loadedContent])

  const handleSave = async () => {
    setIsSaving(true)
    try {
      const response = await fetch('/api/content/text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          key: contentKey,
          content: currentContent
        })
      })

      if (response.ok) {
        setContent(currentContent)
        setIsEditingText(false)
      } else {
        console.error('Failed to save content')
      }
    } catch (error) {
      console.error('Error saving content:', error)
    } finally {
      setIsSaving(false)
    }
  }

  const handleCancel = () => {
    setCurrentContent(loadedContent)
    setIsEditingText(false)
  }

  const TagComponent = tag as keyof React.JSX.IntrinsicElements
  const WrapperComponent = tag === 'span' ? 'span' : 'div'

  if (!isAdmin || !isEditing) {
    return React.createElement(TagComponent, { className }, currentContent)
  }
  
  if (isEditingText) {
    return (
      React.createElement(WrapperComponent, { className: "relative group" },
        React.createElement('div', { className: `${className} min-h-[2rem] border-2 border-blue-500 rounded px-2 py-1 focus:outline-none` },
          React.createElement('textarea', {
            value: currentContent,
            onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => setCurrentContent(e.target.value),
            className: "w-full h-full resize-none border-none outline-none bg-transparent",
            style: { minHeight: '2rem' },
            autoFocus: true
          })
        ),
        React.createElement('div', { className: "absolute -top-10 right-0 bg-white rounded-lg shadow-lg border p-2 flex gap-2" },
          React.createElement('button', {
            onClick: handleSave,
            disabled: isSaving,
            className: "px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50 flex items-center gap-1"
          },
            React.createElement(Save, { className: "h-3 w-3" }),
            isSaving ? 'Saving...' : 'Save'
          ),
          React.createElement('button', {
            onClick: handleCancel,
            className: "px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 flex items-center gap-1"
          },
            React.createElement(X, { className: "h-3 w-3" }),
            'Cancel'
          )
        )
      )
    )
  }
  
  return (
    React.createElement(WrapperComponent, { className: "relative group" },
      React.createElement(TagComponent, { className }, currentContent),
      isAdmin && isEditing && (
        <button
          onClick={() => setIsEditingText(true)}
          className="absolute -top-8 right-0 bg-blue-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-700 flex items-center gap-1"
        >
          <Edit3 className="h-3 w-3" />
          Edit
        </button>
      )
    )
  )
}
