# NView Media Website Redesign

A modern, responsive website redesign for NView Media featuring a sleek black and orange corporate theme with smooth animations and professional design elements.

## Features

- **Modern Corporate Design**: Clean, professional layout with orange and black color scheme
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: AOS (Animate On Scroll) library for engaging user experience
- **Interactive Elements**: Hover effects, smooth transitions, and dynamic content
- **Portfolio Filtering**: Interactive portfolio section with category filters
- **Contact Form**: Functional contact form with email integration
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance Optimized**: Efficient CSS and JavaScript with minimal load times

## File Structure

```
nviewmedia-redesign/
├── index.html          # Main HTML file
├── styles.css          # Complete CSS styling
├── script.js           # Interactive JavaScript functionality
└── README.md           # This file
```

## Design Elements

### Color Palette
- **Primary Orange**: #ff6b35 (Main brand color)
- **Secondary Orange**: #ff8c42 (Accent color)
- **Dark Orange**: #e55a2e (Hover states)
- **Black**: #000000 (Primary background)
- **Dark Gray**: #111111 (Secondary background)
- **Medium Gray**: #222222 (Card backgrounds)
- **Light Gray**: #333333 (Input backgrounds)

### Typography
- **Primary Font**: Inter (Body text)
- **Heading Font**: Playfair Display (Headings and titles)

### Sections Included
1. **Hero Section**: Eye-catching header with animated title and call-to-action buttons
2. **About Section**: Company information with animated statistics
3. **Services Section**: Four main service categories with detailed descriptions
4. **Portfolio Section**: Filterable portfolio showcase with overlay effects
5. **Contact Section**: Contact information and functional contact form
6. **Footer**: Additional links and company information

## Key Features Implemented

### Interactive Navigation
- Fixed header with scroll effects
- Mobile-responsive hamburger menu
- Active link highlighting based on scroll position

### Portfolio Filtering
- JavaScript-powered category filtering
- Smooth transitions between filtered items
- Hover effects with overlay information

### Contact Form
- Form validation
- Email integration via mailto links
- Responsive design with focus states

### Performance Optimizations
- Debounced scroll events
- Intersection Observer API for animations
- Lazy loading for images
- Smooth scrolling behavior

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Setup Instructions

1. **Open the website**: Simply open `index.html` in your web browser
2. **Local development**: Use a local server like Live Server in VS Code for best experience
3. **Customization**: Edit the HTML, CSS, and JS files as needed

## Customization Options

### Content Updates
- Update company information in the HTML
- Replace placeholder images with actual photos/videos
- Modify service descriptions and portfolio items
- Update contact information

### Styling Changes
- Modify CSS variables in `:root` for easy color scheme changes
- Adjust section spacing with `--section-padding` variable
- Update fonts by changing the Google Fonts imports

### Functionality Enhancements
- Add a backend for form processing
- Integrate with a CMS for easy content management
- Add more interactive elements or animations

## Dependencies

- **AOS Library**: For scroll animations (loaded via CDN)
- **Google Fonts**: Inter and Playfair Display fonts
- **Modern CSS**: Uses CSS Grid, Flexbox, and CSS Variables

## Notes for Implementation

1. **Email Setup**: The contact form currently uses mailto links. For production, consider integrating with a form processing service like Formspree, Netlify Forms, or a custom backend.

2. **Images**: Replace the placeholder image elements with actual photos and videos from your portfolio.

3. **SEO**: Update meta tags, descriptions, and add structured data for better search engine visibility.

4. **Analytics**: Add Google Analytics or other tracking code as needed.

5. **Performance**: Consider optimizing images and implementing lazy loading for production use.

## Professional Touches Added

- Subtle gradient overlays and lighting effects
- Smooth hover animations and transitions
- Professional typography hierarchy
- Consistent spacing and layout system
- Modern card-based design elements
- Interactive portfolio filtering
- Mobile-first responsive design
- Accessibility considerations with proper contrast ratios

This website provides a solid foundation for NView Media's online presence with room for future enhancements and customizations based on specific business needs.

## Support

For questions or modifications, refer to the well-commented code in each file. The CSS uses custom properties for easy theming, and the JavaScript is modular for easy maintenance.