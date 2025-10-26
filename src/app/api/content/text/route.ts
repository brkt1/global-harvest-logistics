import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { NextRequest, NextResponse } from 'next/server'
import { join } from 'path'

const CONTENT_DIR = join(process.cwd(), 'content')

// Ensure content directory exists
if (!existsSync(CONTENT_DIR)) {
  mkdirSync(CONTENT_DIR, { recursive: true })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { key, content } = body

    if (!key || !content) {
      return NextResponse.json({ error: 'Missing key or content' }, { status: 400 })
    }

    const filePath = join(CONTENT_DIR, `${key}.json`)
    const contentData = {
      key,
      content,
      updatedAt: new Date().toISOString()
    }

    writeFileSync(filePath, JSON.stringify(contentData, null, 2))

    return NextResponse.json({ success: true, data: contentData })
  } catch (error) {
    console.error('Error saving text content:', error)
    return NextResponse.json({ error: 'Failed to save content' }, { status: 500 })
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
      return NextResponse.json({ content: '' })
    }

    const contentData = JSON.parse(readFileSync(filePath, 'utf8'))
    return NextResponse.json({ content: contentData.content })
  } catch (error) {
    console.error('Error loading text content:', error)
    return NextResponse.json({ error: 'Failed to load content' }, { status: 500 })
  }
}
