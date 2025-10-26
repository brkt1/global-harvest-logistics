import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { NextRequest, NextResponse } from 'next/server'
import { join } from 'path'

const CONTENT_DIR = join(process.cwd(), 'content')
const UPLOADS_DIR = join(process.cwd(), 'public', 'uploads')

// Ensure directories exist
if (!existsSync(CONTENT_DIR)) {
  mkdirSync(CONTENT_DIR, { recursive: true })
}
if (!existsSync(UPLOADS_DIR)) {
  mkdirSync(UPLOADS_DIR, { recursive: true })
}

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type')
    
    if (contentType?.includes('multipart/form-data')) {
      // Handle file upload
      const formData = await request.formData()
      const file = formData.get('file') as File
      const key = formData.get('key') as string

      if (!file || !key) {
        return NextResponse.json({ error: 'Missing file or key' }, { status: 400 })
      }

      const buffer = Buffer.from(await file.arrayBuffer())
      const fileName = `${key}-${Date.now()}.${file.name.split('.').pop()}`
      const filePath = join(UPLOADS_DIR, fileName)
      
      writeFileSync(filePath, buffer)
      
      const imageData = {
        key,
        src: `/uploads/${fileName}`,
        alt: file.name,
        updatedAt: new Date().toISOString()
      }

      const contentFilePath = join(CONTENT_DIR, `${key}.json`)
      writeFileSync(contentFilePath, JSON.stringify(imageData, null, 2))

      return NextResponse.json({ success: true, url: imageData.src })
    } else {
      // Handle JSON data
      const body = await request.json()
      const { key, src, alt } = body

      if (!key || !src) {
        return NextResponse.json({ error: 'Missing key or src' }, { status: 400 })
      }

      const imageData = {
        key,
        src,
        alt: alt || '',
        updatedAt: new Date().toISOString()
      }

      const filePath = join(CONTENT_DIR, `${key}.json`)
      writeFileSync(filePath, JSON.stringify(imageData, null, 2))

      return NextResponse.json({ success: true, data: imageData })
    }
  } catch (error) {
    console.error('Error saving image content:', error)
    return NextResponse.json({ error: 'Failed to save image' }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const key = searchParams.get('key')

    if (!key) {
      return NextResponse.json({ error: 'Missing key parameter' }, { status: 400 })
    }

    const filePath = join(CONTENT_DIR, `${key}.json`)
    
    if (!existsSync(filePath)) {
      return NextResponse.json({ src: '', alt: '' })
    }

    const imageData = JSON.parse(readFileSync(filePath, 'utf8'))
    return NextResponse.json({ src: imageData.src, alt: imageData.alt })
  } catch (error) {
    console.error('Error loading image content:', error)
    return NextResponse.json({ error: 'Failed to load image' }, { status: 500 })
  }
}
