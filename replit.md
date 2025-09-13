# Kampus.fun - Campus Hub Landing Page

## Overview

Kampus.fun is a modern landing page showcasing an all-in-one campus hub platform. The project is built with Next.js 15 and serves as a marketing site for various campus-related applications including shopping, transportation, housing, and events. The landing page features a responsive design with animated components and a component-based architecture using React and TypeScript.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: Next.js 15 with App Router for modern React development and optimized performance
- **TypeScript**: Full type safety throughout the application with strict configuration
- **Styling**: Tailwind CSS for utility-first styling with custom gradients and responsive design
- **Font System**: Google Fonts integration with Poppins font family for consistent typography

### Component Architecture
- **UI Components**: Comprehensive design system built on Radix UI primitives for accessibility and consistency
- **Component Library**: Modular UI components in `/src/components/ui/` following shadcn/ui patterns
- **Layout Components**: Structured page components (Navigation, Hero, AppCards, Footer) for clean separation of concerns
- **Animation System**: Motion library integration for smooth animations and interactions

### Design System
- **Color Scheme**: Custom CSS variables for theming with light/dark mode support via next-themes
- **Component Variants**: Class Variance Authority (CVA) for consistent component styling variations
- **Responsive Design**: Mobile-first approach with breakpoint-based responsive utilities
- **Accessibility**: Focus management, ARIA labels, and keyboard navigation built into Radix UI components

### Development Configuration
- **Build System**: Next.js with TypeScript compilation and strict type checking
- **Code Quality**: ESLint configuration for consistent code standards
- **Development Server**: Custom port configuration (5000) with host binding for development
- **Asset Optimization**: Next.js automatic image optimization and font loading

### File Structure
- **App Directory**: Next.js 13+ App Router structure with layout and page components
- **Component Organization**: Logical separation between UI primitives and business components
- **Type Safety**: Comprehensive TypeScript configuration with path mapping for clean imports
- **Style Management**: Global CSS with Tailwind integration and custom properties

## External Dependencies

### UI Framework Dependencies
- **@radix-ui/react-***: Complete suite of accessible, unstyled UI primitives for building the design system
- **lucide-react**: Icon library providing consistent iconography throughout the application
- **class-variance-authority**: Utility for creating component variants with TypeScript support
- **clsx**: Conditional className utility for dynamic styling

### Animation and Interaction
- **motion**: Modern animation library for smooth transitions and interactive elements
- **embla-carousel-react**: Carousel component for potential future content sliders
- **vaul**: Drawer component library for mobile-friendly interactions

### Form and Input Management
- **react-hook-form**: Form state management and validation
- **input-otp**: OTP input component for authentication flows
- **react-day-picker**: Date picker component for scheduling features

### Development Tools
- **next-themes**: Theme management system for light/dark mode toggle
- **cmdk**: Command palette component for future search functionality
- **sonner**: Toast notification system for user feedback
- **react-resizable-panels**: Resizable panel components for layout flexibility

### Build and Configuration
- **tailwindcss**: Utility-first CSS framework with custom configuration
- **typescript**: Static type checking and enhanced developer experience
- **eslint**: Code linting and quality assurance
- **@next/font**: Next.js font optimization system