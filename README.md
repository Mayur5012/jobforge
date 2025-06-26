# JobForge - Job Search Website

A modern, responsive job search website built with React.js, Tailwind CSS, Framer Motion, and Lucide React icons.

## Features

- 🎨 Modern and clean UI design
- 📱 Fully responsive design
- ✨ Smooth animations with Framer Motion
- 🔍 Advanced job search functionality
- 🎯 Job filtering and categorization
- 💼 Company profiles and job listings
- 🔔 Real-time notifications
- 📊 Interactive job cards with detailed information

## Technologies Used

- **React.js** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Icons** - Additional icon library

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd jobforge
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
jobforge/
├── public/
│   └── index.html
├── src/
│   ├── App.js          # Main application component
│   ├── index.js        # Application entry point
│   └── index.css       # Global styles and Tailwind imports
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
└── README.md          # Project documentation
```

## Features Overview

### Navigation
- Responsive navigation bar with mobile menu
- User authentication icons
- Job posting button

### Hero Section
- Eye-catching gradient background
- Large search bar with job title and location inputs
- Call-to-action button

### Job Listings
- Interactive job cards with company logos
- Detailed job information (title, company, location, salary, type)
- Skill tags for each position
- Apply and save functionality
- Share and favorite options

### Filters Sidebar
- Job type filters (Full-time, Part-time, Contract, Internship)
- Experience level filters
- Salary range filters
- Sticky positioning for better UX

### Footer
- Company information
- Links for job seekers and employers
- Social media and contact information

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... more shades
  }
}
```

### Animations
Custom animations are defined in `tailwind.config.js` and can be extended:
```javascript
animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'slide-up': 'slideUp 0.5s ease-out',
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For any questions or support, please open an issue in the repository. 