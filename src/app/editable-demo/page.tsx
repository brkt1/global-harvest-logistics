'use client'

import EditableImage from '@/components/ui/EditableImage'
import EditableText from '@/components/ui/EditableText'
import EditableVideo from '@/components/ui/EditableVideo'

export default function EditableDemo() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <div className="text-center">
            <EditableText 
              content="Editable Content Demo"
              contentKey="demo-title"
              tag="h1"
              className="text-4xl font-bold text-gray-900 mb-4"
            />
            <EditableText 
              content="This page demonstrates the inline editing capabilities. Login as admin and click 'Edit Mode' to start editing content directly on the page."
              contentKey="demo-description"
              tag="p"
              className="text-lg text-gray-600"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <EditableText 
                content="Sample Heading"
                contentKey="demo-heading-1"
                tag="h2"
                className="text-2xl font-semibold text-gray-800 mb-4"
              />
              <EditableText 
                content="This is a sample paragraph that can be edited inline. Click the edit button when in admin mode to modify this text."
                contentKey="demo-paragraph-1"
                tag="p"
                className="text-gray-600 mb-4"
              />
            </div>

            <div>
              <EditableImage 
                src="/hero.jpg"
                alt="Sample Image"
                contentKey="demo-image-1"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>

          <div>
            <EditableText 
              content="Video Section"
              contentKey="demo-video-heading"
              tag="h2"
              className="text-2xl font-semibold text-gray-800 mb-4"
            />
            <EditableVideo 
              src="/sample-video.mp4"
              title="Sample Video"
              contentKey="demo-video-1"
              className="w-full"
            />
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <EditableText 
              content="Admin Instructions"
              contentKey="demo-instructions-heading"
              tag="h3"
              className="text-xl font-semibold text-blue-900 mb-3"
            />
            <EditableText 
              content="1. Click the 'Admin' button in the top-right corner\n2. Enter password: admin123\n3. Click 'Edit Mode' to enable editing\n4. Hover over any editable content to see edit buttons\n5. Click edit buttons to modify content\n6. Save or cancel your changes\n7. Click 'Exit Edit' when done"
              contentKey="demo-instructions"
              tag="p"
              className="text-blue-800 whitespace-pre-line"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
