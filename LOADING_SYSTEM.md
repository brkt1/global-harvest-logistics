# Truck Loading Animation System

This document explains how to use the truck loading animation system integrated into your Global Harvest Logistics website.

## Overview

The loading system includes:
- **TruckLoading Component**: A reusable component with animated truck SVG
- **Loading Context**: Global state management for loading states
- **Loading Overlay**: Full-screen loading overlay
- **Brand Colors**: Uses your brand colors (#1e5631 and #4CAF50)

## Components

### 1. TruckLoading Component

A customizable loading component with animated truck.

\`\`\`tsx
import TruckLoading from '@/components/ui/TruckLoading';

// Basic usage
<TruckLoading />

// With custom props
<TruckLoading 
  size="lg" 
  text="Loading your shipment..." 
  className="my-custom-class"
/>
\`\`\`

**Props:**
- `size`: 'sm' | 'md' | 'lg' | 'xl' (default: 'md')
- `text`: string (optional loading text)
- `className`: string (additional CSS classes)

### 2. Loading Context

Global state management for loading states across your app.

\`\`\`tsx
import { useLoading } from '@/contexts/LoadingContext';

function MyComponent() {
  const { isLoading, showLoading, hideLoading } = useLoading();

  const handleAsyncOperation = async () => {
    showLoading('Processing your request...');
    try {
      await someAsyncOperation();
    } finally {
      hideLoading();
    }
  };
}
\`\`\`

**Methods:**
- `showLoading(text?)`: Show global loading overlay
- `hideLoading()`: Hide global loading overlay
- `setLoading(loading, text?)`: Set loading state and text
- `isLoading`: Current loading state
- `loadingText`: Current loading text

### 3. Loading Overlay

Automatically shows/hides based on loading context state.

## Usage Examples

### Global Loading (Full Screen Overlay)

\`\`\`tsx
'use client';
import { useLoading } from '@/contexts/LoadingContext';

export default function MyPage() {
  const { showLoading, hideLoading } = useLoading();

  const handleSubmit = async () => {
    showLoading('Submitting your request...');
    try {
      await submitForm();
    } finally {
      hideLoading();
    }
  };

  return (
    <button onClick={handleSubmit}>
      Submit
    </button>
  );
}
\`\`\`

### Local Loading (Inline Component)

\`\`\`tsx
'use client';
import { useState } from 'react';
import TruckLoading from '@/components/ui/TruckLoading';

export default function MyComponent() {
  const [isLoading, setIsLoading] = useState(false);

  const handleAction = async () => {
    setIsLoading(true);
    try {
      await someOperation();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleAction} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Click Me'}
      </button>
      
      {isLoading && (
        <TruckLoading size="md" text="Processing..." />
      )}
    </div>
  );
}
\`\`\`

### Different Sizes

\`\`\`tsx
<div className="flex space-x-4">
  <TruckLoading size="sm" text="Small" />
  <TruckLoading size="md" text="Medium" />
  <TruckLoading size="lg" text="Large" />
  <TruckLoading size="xl" text="Extra Large" />
</div>
\`\`\`

## Demo Page

The loading system is integrated throughout the application. You can see the loading animations in action when using forms, navigation, and other interactive elements.

## Brand Integration

The loading system is fully integrated with your brand:
- **Primary Color**: #1e5631 (Deep Green)
- **Secondary Color**: #4CAF50 (Fresh Green)
- **Animation**: Smooth truck movement with wheel spinning
- **Typography**: Uses your Inter/Poppins font stack

## CSS Classes

The system adds these CSS classes to your globals.css:
- `.truck-loading`: Main container class
- `.truck`: SVG truck element
- Various animation keyframes for smooth truck movement

## Best Practices

1. **Use Global Loading** for page-level operations (form submissions, navigation)
2. **Use Local Loading** for component-level operations (button clicks, data fetching)
3. **Always provide loading text** to inform users what's happening
4. **Use appropriate sizes** - smaller for inline, larger for overlays
5. **Handle errors** - always hide loading in finally blocks

## Integration

The loading system is already integrated into your app layout. The `LoadingProvider` wraps your entire app, and the `LoadingOverlay` is included in the layout.

No additional setup required - just import and use the components and hooks as needed!
