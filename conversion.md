# React to Next.js Conversion Guide

A comprehensive guide for converting React applications to Next.js, based on real-world conversion experience.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Step-by-Step Conversion Process](#step-by-step-conversion-process)
- [Common Issues & Solutions](#common-issues--solutions)
- [Pre-Conversion Checklist](#pre-conversion-checklist)
- [Post-Conversion Checklist](#post-conversion-checklist)
- [Troubleshooting](#troubleshooting)
- [Best Practices](#best-practices)

## Prerequisites

- Node.js 18+ installed
- Basic understanding of React and Next.js
- Access to your existing React project
- Terminal/Command line access

## Step-by-Step Conversion Process

### Step 1: Create Next.js Project

```bash
# Create new Next.js project with recommended settings
npx create-next-app@latest my-app --typescript --tailwind --eslint --app --src-dir --yes

# Navigate to project directory
cd my-app
```

**Why these flags?**
- `--typescript`: Type safety and better development experience
- `--tailwind`: Maintains styling consistency
- `--eslint`: Code quality and consistency
- `--app`: Uses App Router (recommended for new projects)
- `--src-dir`: Maintains familiar project structure
- `--yes`: Skips interactive prompts

### Step 2: Install Dependencies

```bash
# Core UI dependencies (install all at once to avoid version conflicts)
npm install lucide-react @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-aspect-ratio @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-context-menu @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-label @radix-ui/react-menubar @radix-ui/react-navigation-menu @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toggle @radix-ui/react-toggle-group @radix-ui/react-tooltip class-variance-authority clsx tailwind-merge tailwindcss-animate

# Additional common dependencies
npm install motion embla-carousel-react react-day-picker recharts input-otp cmdk vaul sonner react-resizable-panels react-hook-form next-themes
```

### Step 3: Copy Project Files

```bash
# Copy components maintaining structure
cp -r /path/to/old-react-app/src/components /path/to/new-nextjs-app/src/

# Copy styles
cp -r /path/to/old-react-app/src/styles /path/to/new-nextjs-app/src/

# Copy main CSS file
cp /path/to/old-react-app/src/index.css /path/to/new-nextjs-app/src/app/globals.css

# Copy other important files
cp -r /path/to/old-react-app/src/guidelines /path/to/new-nextjs-app/src/
```

### Step 4: Fix Import Issues (Critical Step)

#### 4.1 Remove Versioned Imports

```bash
# Remove all versioned imports (e.g., @1.1.2, @0.7.1)
find src/components -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/@[0-9.]*//g'

# Fix specific patterns that might break
find src/components -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/radix-ui\/react-/@radix-ui\/react-/g'
```

#### 4.2 Update Motion/Framer Motion Imports

```typescript
// OLD (React with Framer Motion)
import { motion } from "framer-motion";

// NEW (Next.js with Motion)
import { motion } from "motion/react";
```

#### 4.3 Update Image Imports

```typescript
// OLD (React)
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

// NEW (Next.js)
import Image from 'next/image';

// Update ImageWithFallback component to use Next.js Image
"use client"

import React, { useState } from 'react'
import Image from 'next/image'

interface ImageWithFallbackProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  style?: React.CSSProperties
  fill?: boolean
  priority?: boolean
  quality?: number
  sizes?: string
  [key: string]: unknown
}

export function ImageWithFallback(props: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false)
  const handleError = () => setDidError(true)
  const { src, alt, style, className, ...rest } = props

  return didError ? (
    <div className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`} style={style}>
      <div className="flex items-center justify-center w-full h-full">
        <Image src={ERROR_IMG_SRC} alt="Error loading image" width={88} height={88} {...rest} />
      </div>
    </div>
  ) : (
    <Image src={src} alt={alt} className={className} style={style} {...rest} onError={handleError} />
  )
}
```

### Step 5: Add Client Directives

Add `"use client"` to components that use:

- React hooks (`useState`, `useEffect`, `useRef`, etc.)
- Event handlers (`onClick`, `onChange`, etc.)
- Browser APIs (`window`, `document`, etc.)
- Third-party libraries with client-side features
- Motion/Framer Motion components

```typescript
"use client"

import { useState, useEffect } from 'react';
import { motion } from "motion/react";
// ... rest of component
```

**Components that typically need "use client":**
- Components with state management
- Components using motion animations
- Components with event handlers
- Components using browser APIs
- Custom hooks

### Step 6: Convert App Structure

#### 6.1 Update Layout (src/app/layout.tsx)

```typescript
import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // or your preferred font
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Your App Title",
  description: "Your app description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

#### 6.2 Update Main Page (src/app/page.tsx)

```typescript
import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { AppCards } from "../components/AppCards";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="size-full">
      <Navigation />
      <Hero />
      <AppCards />
      <Footer />
    </div>
  );
}
```

### Step 7: Update CSS and Fonts

#### 7.1 Update globals.css

```css
/* Add font family to body */
body {
  font-family: var(--font-poppins), -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  background-color: var(--background);
  color: var(--foreground);
}

/* Remove any Vite-specific imports */
/* Update CSS custom properties if needed */
/* Ensure Tailwind classes work correctly */
```

#### 7.2 Handle Font Loading

```typescript
// In layout.tsx, use Next.js font optimization
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});
```

### Step 8: Handle Common Issues

#### 8.1 TypeScript Errors

```typescript
// Fix 'any' type errors
// OLD
const data: any = {};

// NEW
const data: unknown = {};
// or
const data: Record<string, unknown> = {};

// For complex types, use proper interfaces
interface PayloadItem {
  dataKey?: string;
  name?: string;
  value?: unknown;
}
```

#### 8.2 Export Issues

```typescript
// Fix "export *" in client boundary errors
// Add "use client" to components that need it
"use client"

export { ComponentName };
```

#### 8.3 Missing Dependencies

```bash
# Install commonly missing packages
npm install motion embla-carousel-react react-day-picker recharts input-otp cmdk vaul sonner react-resizable-panels react-hook-form next-themes
```

### Step 9: Test and Debug

#### 9.1 Development Server

```bash
npm run dev
# Check http://localhost:3000
```

#### 9.2 Production Build

```bash
npm run build
npm run start
```

#### 9.3 Common Debug Steps

1. Check browser console for errors
2. Verify all imports are correct
3. Ensure all dependencies are installed
4. Check for missing "use client" directives
5. Verify TypeScript types
6. Check for versioned imports

### Step 10: Optimization

#### 10.1 Remove Unused Components

```bash
# Remove components not used in main app
rm src/components/ui/chart.tsx  # if not needed
```

#### 10.2 Update Next.js Config (if needed)

```typescript
// next.config.ts
const nextConfig = {
  // Add any specific configurations
  experimental: {
    // Enable if needed
  }
};

export default nextConfig;
```

## Common Issues & Solutions

### Issue 1: "Module not found" errors

**Problem:** Import paths are incorrect or packages not installed.

**Solution:**
```bash
# Check if package is installed
npm list package-name

# Install missing package
npm install package-name

# Fix import paths
# OLD: import { Component } from "package@1.2.3";
# NEW: import { Component } from "package";
```

### Issue 2: "export *" in client boundary errors

**Problem:** Components using client-side features need "use client" directive.

**Solution:**
```typescript
"use client"

import { useState } from 'react';
// ... rest of component
```

### Issue 3: TypeScript errors with 'any' type

**Problem:** ESLint doesn't allow 'any' type.

**Solution:**
```typescript
// OLD
const data: any = {};

// NEW
const data: unknown = {};
// or
const data: Record<string, unknown> = {};
```

### Issue 4: Versioned imports not working

**Problem:** Imports like `@radix-ui/react-slot@1.1.2` don't work in Next.js.

**Solution:**
```bash
# Remove version numbers from imports
find src/components -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/@[0-9.]*//g'
```

### Issue 5: Motion/Framer Motion not working

**Problem:** Wrong import path for motion library.

**Solution:**
```typescript
// OLD
import { motion } from "framer-motion";

// NEW
import { motion } from "motion/react";
```

## Pre-Conversion Checklist

- [ ] Identify all client-side components
- [ ] List all dependencies and their versions
- [ ] Note any custom webpack configurations
- [ ] Check for any Vite-specific features
- [ ] Identify image usage patterns
- [ ] Note any global CSS dependencies
- [ ] Check for versioned imports
- [ ] Identify components using React hooks
- [ ] Note any custom fonts or styling

## Post-Conversion Checklist

- [ ] All imports work correctly
- [ ] No versioned imports remain
- [ ] All client components have "use client"
- [ ] Images use Next.js Image component
- [ ] Development server runs without errors
- [ ] Production build succeeds
- [ ] All functionality works as expected
- [ ] TypeScript errors are resolved
- [ ] ESLint passes
- [ ] Fonts load correctly
- [ ] Animations work properly
- [ ] Responsive design maintained

## Troubleshooting

### Development Server Issues

1. **Port already in use:**
   ```bash
   # Kill process on port 3000
   lsof -ti:3000 | xargs kill -9
   # or use different port
   npm run dev -- -p 3001
   ```

2. **Module resolution errors:**
   ```bash
   # Clear Next.js cache
   rm -rf .next
   npm run dev
   ```

3. **TypeScript errors:**
   ```bash
   # Check TypeScript configuration
   npx tsc --noEmit
   ```

### Build Issues

1. **Build fails with TypeScript errors:**
   ```bash
   # Fix TypeScript errors first
   npx tsc --noEmit
   ```

2. **Memory issues during build:**
   ```bash
   # Increase Node.js memory limit
   NODE_OPTIONS="--max-old-space-size=4096" npm run build
   ```

3. **Import errors:**
   ```bash
   # Check all import paths
   find src -name "*.tsx" -o -name "*.ts" | xargs grep -n "import.*@"
   ```

## Best Practices

### 1. Component Organization

```typescript
// Use proper component structure
"use client"

import { useState } from 'react';
import { motion } from "motion/react";

interface ComponentProps {
  // Define proper types
}

export function Component({ ...props }: ComponentProps) {
  // Component logic
  return (
    // JSX
  );
}
```

### 2. Import Management

```typescript
// Group imports logically
// 1. React imports
import { useState, useEffect } from 'react';

// 2. Next.js imports
import Image from 'next/image';

// 3. Third-party libraries
import { motion } from "motion/react";

// 4. Internal imports
import { Button } from "./ui/button";
```

### 3. Type Safety

```typescript
// Use proper TypeScript types
interface User {
  id: string;
  name: string;
  email: string;
}

// Avoid 'any' type
const user: User = { id: '1', name: 'John', email: 'john@example.com' };
```

### 4. Performance Optimization

```typescript
// Use Next.js Image component for images
import Image from 'next/image';

<Image
  src="/image.jpg"
  alt="Description"
  width={500}
  height={300}
  priority // for above-the-fold images
/>
```

### 5. Client/Server Component Separation

```typescript
// Server Component (default)
export function ServerComponent() {
  return <div>This renders on the server</div>;
}

// Client Component
"use client"
export function ClientComponent() {
  const [state, setState] = useState(0);
  return <div>This renders on the client</div>;
}
```

## Conclusion

Converting from React to Next.js requires careful attention to:

1. **Import paths** - Remove versioned imports
2. **Client directives** - Add "use client" where needed
3. **Image handling** - Use Next.js Image component
4. **Type safety** - Fix TypeScript errors
5. **Dependencies** - Install all required packages
6. **Testing** - Verify both development and production builds

Following this guide should help you successfully convert your React application to Next.js while maintaining all functionality and improving performance.

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Migration Guide](https://nextjs.org/docs/upgrading)
- [App Router Documentation](https://nextjs.org/docs/app)
- [TypeScript with Next.js](https://nextjs.org/docs/basic-features/typescript)

