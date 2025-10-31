# Design Document

## Overview

This design enhances the course pages with visual improvements, testimonials, and better user experience elements. The design focuses on creating a more professional, engaging, and conversion-optimized course presentation while maintaining the existing Persian/Farsi language support and right-to-left layout considerations.

## Architecture

### Component Structure
```
CourseDetailPage
├── Navigation (existing)
├── CourseHero (enhanced with image)
├── ActionButtons (new - registration & corporate)
├── CourseInfoCards (enhanced styling)
├── CourseDescription (existing)
├── CourseOutcomes (existing)
├── CourseModules (existing)
├── TestimonialsSection (new)
├── CallToAction (existing)
└── Footer (existing)
```

### Data Flow
- Course data remains in the existing static structure
- Testimonials will be added to the course data structure
- Images will be stored in the public/images directory
- Enhanced styling will use Tailwind CSS classes and custom CSS variables

## Components and Interfaces

### 1. Enhanced Course Hero Section
**Purpose**: Add visual appeal with course-related imagery

**Design Elements**:
- Background gradient overlay on hero image
- Maintains existing text hierarchy
- Responsive image handling with Next.js Image component
- Fallback to gradient background if no image available

**Implementation**:
```typescript
interface CourseHeroProps {
  title: string
  subtitle: string
  heroImage?: string
}
```

### 2. Action Buttons Component
**Purpose**: Provide clear registration and corporate inquiry options

**Design Elements**:
- Two-button layout: Primary (registration) + Secondary (corporate)
- Sticky positioning option for better accessibility
- Mobile-responsive stacking
- Persian text support

**Visual Hierarchy**:
- Primary button: Solid background, high contrast
- Secondary button: Outline style, complementary color
- Consistent spacing and sizing

**Implementation**:
```typescript
interface ActionButtonsProps {
  courseSlug: string
  isSticky?: boolean
}
```

### 3. Enhanced Course Info Cards
**Purpose**: Transform plain cards into visually engaging information displays

**Current Issues**:
- Plain white/gray backgrounds
- Minimal visual hierarchy
- Basic typography

**Design Improvements**:
- **Color Scheme**: Gradient backgrounds with course-specific colors
- **Visual Elements**: 
  - Subtle shadows and border radius
  - Icon integration for each card type
  - Hover animations with scale and shadow effects
- **Typography**: Enhanced font weights and spacing
- **Layout**: Improved padding and spacing ratios

**Card Types & Styling**:
1. **Duration Card**: Blue gradient (⏱ icon)
2. **Schedule Card**: Green gradient (📅 icon) 
3. **Start Date Card**: Purple gradient (🚀 icon)

**Implementation**:
```typescript
interface EnhancedCardProps {
  type: 'duration' | 'schedule' | 'startDate'
  title: string
  content: string
  icon: string
}
```

### 4. Testimonials Section
**Purpose**: Build trust through social proof from previous participants

**Design Elements**:
- Card-based layout with participant photos
- Responsive grid (1 col mobile, 2-3 cols desktop)
- Persian text support with proper RTL layout
- Star ratings or visual indicators

**Content Structure**:
- Participant name and role/company
- Review text (2-3 sentences optimal)
- Optional participant photo
- Course completion date or batch info

**Visual Design**:
- Clean card design with subtle shadows
- Consistent spacing and typography
- Alternating layouts for visual interest
- Proper contrast ratios for accessibility

**Implementation**:
```typescript
interface Testimonial {
  id: string
  name: string
  role: string
  company?: string
  review: string
  photo?: string
  courseDate?: string
  rating?: number
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
  courseTitle: string
}
```

## Data Models

### Enhanced Course Data Structure
```typescript
interface EnhancedCourse {
  // Existing fields
  id: string
  title: string
  subtitle: string
  description: string
  duration: string
  schedule: string
  startDate: string
  format: string
  outcomes: string[]
  targetAudience: string[]
  modules: CourseModule[]
  
  // New fields
  heroImage?: string
  testimonials: Testimonial[]
  colorScheme: {
    primary: string
    secondary: string
    accent: string
  }
}
```

### Testimonial Data Model
```typescript
interface Testimonial {
  id: string
  name: string
  role: string
  company?: string
  review: string
  photo?: string
  courseDate?: string
  rating?: number
}
```

## Error Handling

### Image Loading
- Graceful fallback to gradient backgrounds if images fail to load
- Proper loading states and skeleton components
- Optimized image formats (WebP with JPEG fallback)

### Responsive Design
- Breakpoint-specific layouts for all new components
- Touch-friendly button sizes on mobile
- Proper text scaling and spacing

### Content Validation
- Fallback content for missing testimonials
- Default styling if custom color schemes are unavailable
- Graceful degradation for older browsers

## Testing Strategy

### Visual Regression Testing
- Screenshot comparisons for enhanced card designs
- Cross-browser compatibility testing
- Mobile responsiveness validation

### User Experience Testing
- Button accessibility and keyboard navigation
- RTL layout validation for Persian content
- Performance impact assessment of new images and animations

### Content Testing
- Testimonial display with various content lengths
- Image loading performance and fallback behavior
- Color contrast validation for accessibility compliance

## Implementation Notes

### Styling Approach
- Extend existing Tailwind CSS configuration
- Use CSS custom properties for dynamic color schemes
- Maintain existing design system consistency

### Performance Considerations
- Lazy loading for testimonial images
- Optimized image formats and sizes
- Minimal JavaScript for animations (prefer CSS)

### Accessibility
- Proper ARIA labels for enhanced elements
- Keyboard navigation support
- Screen reader compatibility for testimonials
- Color contrast compliance (WCAG 2.1 AA)

### Internationalization
- RTL layout support maintained
- Persian typography considerations
- Proper text direction handling for mixed content