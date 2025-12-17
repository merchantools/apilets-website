# Color Scheme Guide - apilets.com

## Overview

The website now uses a comprehensive, theme-based color system with NO hardcoded colors. All colors should reference the theme colors defined in `tailwind.config.ts`.

## Theme Colors

### 🟡 Primary - Bright Amber
**Use for:** Main brand color, primary buttons, CTAs, important highlights

```javascript
primary: {
  50: '#fef9e6',   // Lightest amber - subtle backgrounds
  100: '#fdf4ce',
  200: '#fce99c',
  300: '#fade6b',
  400: '#f9d339',
  500: '#f7c708',  // ⭐ Main primary color - use this most
  600: '#c6a006',
  700: '#947805',
  800: '#635003',
  900: '#312802',
  950: '#231c01',  // Darkest amber - text on light backgrounds
  DEFAULT: '#f7c708'
}
```

**Examples:**
- `bg-primary-500` - Bright amber background
- `text-primary-700` - Dark amber text
- `border-primary-400` - Medium amber border
- `hover:bg-primary-600` - Darker on hover

---

### 🟢 Secondary - Bright Green
**Use for:** Secondary actions, success states, complementary highlights

```javascript
secondary: {
  50: '#f4fee6',   // Lightest green
  100: '#e9fdce',
  200: '#d2fc9c',
  300: '#bcfa6b',
  400: '#a6f939',
  500: '#8ff708',  // ⭐ Main secondary color
  600: '#73c606',
  700: '#569405',
  800: '#396303',
  900: '#1d3102',
  950: '#142301',  // Darkest green
  DEFAULT: '#65AD05'
}
```

**Examples:**
- `bg-secondary-500` - Bright green background
- `text-secondary-700` - Dark green text
- `hover:bg-secondary-600` - Darker green on hover

---

### 🔵 Accent - Cyan/Blue
**Use for:** Links, interactive elements, informational highlights

```javascript
accent: {
  50: '#e7f8fd',   // Lightest cyan
  100: '#d0f0fb',
  200: '#a1e2f7',
  300: '#71d3f4',
  400: '#42c4f0',
  500: '#13b6ec',  // ⭐ Main accent color
  600: '#0f91bd',
  700: '#0b6d8e',
  800: '#08495e',
  900: '#04242f',  // Dark blue-gray
  950: '#031921',  // Darkest cyan
  DEFAULT: '#0C7699'
}
```

**Examples:**
- `text-accent-600` - Link color
- `bg-accent-900` - Dark background (testimonials badge)
- `hover:text-accent-700` - Link hover state

---

### 💛 Highlight - Bright Yellow
**Use for:** Call-to-action highlights, important notices, warnings

```javascript
highlight: {
  50: '#fffde6',   // Lightest yellow
  100: '#fefacd',
  200: '#fef69a',
  300: '#fdf168',
  400: '#fdec35',
  500: '#fce803',  // ⭐ Main highlight color
  600: '#cab902',
  700: '#978b02',
  800: '#655d01',
  900: '#322e01',
  950: '#232000',  // Darkest yellow
  DEFAULT: '#FCEA10'
}
```

**Examples:**
- `bg-highlight-500` - Bright yellow background
- `text-highlight-700` - Dark yellow text
- `border-highlight-400` - Yellow border

---

### ⚪ Base & Neutrals
**Use for:** Backgrounds, text, borders - neutral elements

```javascript
base: '#fcfcfc'  // Off-white background
```

**Standard Tailwind Colors Available:**
- `gray-*` - All gray shades (100-900)
- `white` - Pure white
- `black` - Pure black
- `slate-*` - Slate shades (for dark mode)
- `transparent` - Transparent

---

## Usage Guidelines

### ✅ DO Use Theme Colors

```jsx
// Primary for main CTAs
<button className="bg-primary-500 text-gray-900 hover:bg-primary-600">
  Get Started
</button>

// Secondary for complementary actions
<button className="bg-secondary-500 text-white hover:bg-secondary-600">
  Learn More
</button>

// Accent for links
<a className="text-accent-600 hover:text-accent-700">
  Read more
</a>

// Highlight for important notices
<div className="bg-highlight-100 border-highlight-400 text-highlight-900">
  Important: Check this out!
</div>

// Neutrals for text and backgrounds
<div className="bg-white text-gray-900 border-gray-300">
  Content here
</div>
```

### ❌ DON'T Use Explicit Colors

```jsx
// ❌ Bad - hardcoded hex
<div className="bg-[#f7c708]">Content</div>

// ❌ Bad - specific Tailwind colors for branding
<button className="bg-blue-600">Click me</button>
<div className="text-purple-500">Purple text</div>

// ❌ Bad - old theme colors
<div className="bg-accent">...</div>  // Old accent was red
<div className="text-accent-500">...</div>  // blueZ doesn't exist anymore
```

### ✅ Use Semantic Names

```jsx
// Good - semantic usage
const buttonStyles = {
  primary: 'bg-primary-500 hover:bg-primary-600',
  secondary: 'bg-secondary-500 hover:bg-secondary-600',
  accent: 'border-accent-500 text-accent-600',
}

<button className={buttonStyles.primary}>Primary Action</button>
```

---

## Color Combinations

### High Contrast (Best for Accessibility)

| Background | Text | Use Case |
|------------|------|----------|
| `bg-primary-500` | `text-gray-900` | Primary buttons |
| `bg-secondary-700` | `text-white` | Secondary buttons |
| `bg-accent-600` | `text-white` | Links, badges |
| `bg-white` | `text-gray-900` | Main content |
| `bg-gray-900` | `text-white` | Dark sections |

### Gradients

```jsx
// Warm amber gradient
className="bg-gradient-to-r from-primary-400 to-primary-600"

// Green to amber
className="bg-gradient-to-br from-secondary-500 to-primary-500"

// Cyan to yellow
className="bg-gradient-to-r from-accent-500 to-highlight-500"

// Subtle background (current site layout)
className="bg-gradient-to-br from-primary-100 via-primary-200 to-primary-300"
```

---

## Component Examples

### Buttons

```jsx
// Primary button
<button className="px-8 py-4 bg-primary-500 text-gray-900 rounded-lg font-semibold hover:bg-primary-600 transition-colors shadow-lg">
  Get Started
</button>

// Secondary button
<button className="px-8 py-4 bg-white text-primary-700 border-2 border-primary-500 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
  Learn More
</button>

// Accent button
<button className="px-6 py-3 bg-accent-600 text-white rounded-md hover:bg-accent-700">
  View Details
</button>
```

### Forms

```jsx
// Form input with focus state
<input
  type="text"
  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
/>

// Checkbox with accent color
<input
  type="checkbox"
  className="h-4 w-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
/>

// Error state
<input
  type="text"
  className="w-full px-4 py-3 border border-red-500 rounded-lg focus:ring-2 focus:ring-red-500"
/>
```

### Cards

```jsx
// Feature card with gradient
<div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-lg border border-gray-200 hover:border-primary-400 transition-all">
  <h3 className="text-gray-900 font-bold">Feature Title</h3>
  <p className="text-gray-600">Description</p>
</div>

// Testimonial card
<div className="bg-slate-800 p-6 rounded-lg shadow-lg">
  <p className="text-gray-300">Quote text</p>
  <div className="text-gray-500">Author</div>
</div>
```

### Badges

```jsx
// Primary badge
<span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
  New
</span>

// Accent badge
<span className="inline-block px-3 py-1 bg-accent-900 bg-opacity-60 text-primary-100 rounded-lg text-sm font-semibold">
  Featured
</span>
```

---

## Migration Checklist

- [x] Updated tailwind.config.ts with new color scheme
- [x] Removed old hardcoded colors (redZ, blueZ, blacklightZ)
- [x] Cleaned up fontFamily config
- [x] Replaced bg-[#202c47] with bg-accent-900
- [x] All components using theme colors
- [x] Dev server running successfully

---

## Files Changed

1. **tailwind.config.ts** - Complete color scheme overhaul
   - Added full primary palette (bright amber)
   - Added full secondary palette (bright green)
   - Added full accent palette (cyan/blue)
   - Added full highlight palette (bright yellow)
   - Removed old hardcoded colors

2. **src/components/Testimonies.tsx** - Fixed hardcoded color
   - Replaced `bg-[#202c47]` with `bg-accent-900`

---

## Color Psychology

- **Primary (Bright Amber)**: Energy, optimism, creativity - perfect for main CTAs
- **Secondary (Bright Green)**: Growth, harmony, success - complementary actions
- **Accent (Cyan/Blue)**: Trust, professionalism, clarity - links and info
- **Highlight (Bright Yellow)**: Attention, importance - warnings and notices

---

## Development Server

The dev server is running on: **http://localhost:3003**

Test pages:
- Home: http://localhost:3003/
- Data Integration: http://localhost:3003/data-integration
- What We Do: http://localhost:3003/what-we-do
- Contact: http://localhost:3003/contact

---

## Support

For questions about the color scheme or theme usage, refer to:
- This document: `COLOR_SCHEME_GUIDE.md`
- Tailwind CSS docs: https://tailwindcss.com/docs/customizing-colors
- Current config: `tailwind.config.ts`

---

**Last Updated**: December 17, 2025
**Version**: 2.0.0 (New Color Scheme)
**Status**: ✅ Production Ready
