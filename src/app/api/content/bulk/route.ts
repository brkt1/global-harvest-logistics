import { existsSync, mkdirSync, readFileSync } from 'fs'
import { NextRequest, NextResponse } from 'next/server'
import { join } from 'path'

const CONTENT_DIR = join(process.cwd(), 'content')

// Ensure content directory exists
if (!existsSync(CONTENT_DIR)) {
  mkdirSync(CONTENT_DIR, { recursive: true })
}

interface BulkContentRequest {
  keys: string[]
  type: 'text' | 'image' | 'video'
}

export async function POST(request: NextRequest) {
  try {
    const body: BulkContentRequest = await request.json()
    const { keys, type } = body

    if (!keys || !Array.isArray(keys) || keys.length === 0) {
      return NextResponse.json({ error: 'Missing or invalid keys array' }, { status: 400 })
    }

    if (!type || !['text', 'image', 'video'].includes(type)) {
      return NextResponse.json({ error: 'Invalid type. Must be text, image, or video' }, { status: 400 })
    }

    const results: Record<string, any> = {}

    // Fetch all content files in parallel
    await Promise.all(
      keys.map(async (key) => {
        try {
          const filePath = join(CONTENT_DIR, `${key}.json`)
          
          if (!existsSync(filePath)) {
            // Return empty/default value if file doesn't exist
            if (type === 'text') {
              results[key] = { content: '' }
            } else if (type === 'image') {
              results[key] = { src: '', alt: '' }
            } else if (type === 'video') {
              results[key] = { src: '', title: '' }
            }
            return
          }

          const contentData = JSON.parse(readFileSync(filePath, 'utf8'))
          
          if (type === 'text') {
            results[key] = { content: contentData.content || '' }
          } else if (type === 'image') {
            results[key] = { src: contentData.src || '', alt: contentData.alt || '' }
          } else if (type === 'video') {
            results[key] = { src: contentData.src || '', title: contentData.title || '' }
          }
        } catch (error) {
          console.error(`Error loading content for key ${key}:`, error)
          // Return empty value on error
          if (type === 'text') {
            results[key] = { content: '' }
          } else if (type === 'image') {
            results[key] = { src: '', alt: '' }
          } else if (type === 'video') {
            results[key] = { src: '', title: '' }
          }
        }
      })
    )

    return NextResponse.json({ results })
  } catch (error) {
    console.error('Error loading bulk content:', error)
    return NextResponse.json({ error: 'Failed to load bulk content' }, { status: 500 })
  }
}

