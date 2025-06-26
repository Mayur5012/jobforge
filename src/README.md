# JobForge - Component Structure

This document outlines the refactored component structure for better maintainability and scalability.

## Directory Structure

```
src/
├── components/           # Reusable UI components
│   ├── index.js         # Component exports
│   ├── Header.js        # Navigation bar component
│   ├── HeroSection.js   # Main banner with search
│   ├── FiltersSidebar.js# Job filtering sidebar
│   ├── JobList.js       # Job listings and cards
│   └── Footer.js        # Site footer
├── pages/               # Page-level components
│   ├── index.js         # Page exports
│   └── HomePage.js      # Main landing page
├── App.js               # Root component
└── index.js             # Entry point
```

## Components

### Header
- Navigation bar with logo, menu items, and mobile menu
- Responsive design with mobile hamburger menu
- User actions (notifications, profile, post job)

### HeroSection
- Large banner with search functionality
- Animated text and search inputs
- Location and job title search fields

### FiltersSidebar
- Job filtering options
- Job type, experience level, and salary filters
- Sticky positioning for better UX

### JobList
- Job cards with company info, skills, and actions
- Like and share functionality
- Load more pagination
- Responsive card layout

### Footer
- Site links organized by category
- Company information and copyright

## Pages

### HomePage
- Combines all components into the main landing page
- Manages the overall layout and structure

## Usage

Components can be imported individually or using the barrel exports:

```javascript
// Individual imports
import Header from './components/Header';

// Barrel imports (preferred)
import { Header, Footer } from './components';
```

## Future Enhancements

This structure makes it easy to:
- Add new pages (JobDetails, Profile, etc.)
- Create new reusable components
- Implement routing with React Router
- Add state management (Redux, Context)
- Write component tests 