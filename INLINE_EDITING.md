# Inline Content Editing System

This system allows admin users to edit website content directly on the pages without needing a separate admin dashboard.

## Features

- **Inline Text Editing**: Click to edit any text content
- **Image Management**: Upload new images or change image URLs
- **Video Management**: Upload videos or change video URLs
- **Background Image Support**: Edit background images
- **Real-time Saving**: Changes are saved immediately
- **Admin Authentication**: Simple password-based admin login

## How to Use

### 1. Admin Login
- Click the "Admin" button in the top-right corner
- Enter password: `admin123`
- Click "Login"

### 2. Enable Edit Mode
- Click "Edit Mode" to enable editing
- Hover over editable content to see edit buttons
- Click edit buttons to modify content

### 3. Edit Content
- **Text**: Click edit button, modify text, save or cancel
- **Images**: Click edit button, upload new file or change URL, save or cancel
- **Videos**: Click edit button, upload new file or change URL, save or cancel

### 4. Exit Edit Mode
- Click "Exit Edit" when finished
- Click "Logout" to end admin session

## Components

### EditableText
```tsx
<EditableText 
  content="Default text"
  contentKey="unique-key"
  tag="h1"
  className="text-2xl font-bold"
/>
```

### EditableImage
```tsx
<EditableImage 
  src="/image.jpg"
  alt="Image description"
  contentKey="unique-key"
  className="w-full h-48 object-cover"
  isBackground={false}
/>
```

### EditableVideo
```tsx
<EditableVideo 
  src="/video.mp4"
  title="Video title"
  contentKey="unique-key"
  className="w-full"
/>
```

## API Endpoints

- `POST /api/content/text` - Save text content
- `GET /api/content/text?key=...` - Load text content
- `POST /api/content/image` - Save image content
- `GET /api/content/image?key=...` - Load image content
- `POST /api/content/video` - Save video content
- `GET /api/content/video?key=...` - Load video content

## File Storage

- Content metadata: `content/` directory
- Uploaded files: `public/uploads/` directory

## Demo Page

Visit `/editable-demo` to see the editing system in action.

## Security Notes

- Change the admin password in `AdminContext.tsx`
- Implement proper authentication for production
- Add file type validation for uploads
- Add file size limits for uploads
- Consider using a database instead of file storage for production
