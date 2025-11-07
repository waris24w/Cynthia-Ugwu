# Cynthia Ugwu - Portfolio Website

A modern, interactive portfolio website featuring smooth animations, custom cursor effects, and image hover interactions built with GSAP and Locomotive Scroll.

🔗 Live <a href="https://waris24w.github.io/Cynthia-Ugwu/">Preview View Live Demo</a>
## 🌟 Features

- **Smooth Scrolling**: Implemented using Locomotive Scroll for a premium scrolling experience
- **Custom Cursor**: Interactive mini-circle cursor that follows mouse movement with scaling effects
- **Animated Hero Section**: Eye-catching text animations on page load using GSAP timelines
- **Interactive Project Gallery**: Hover over projects to reveal images that follow your cursor with rotation effects
- **Responsive Design**: Clean, modern layout optimized for different screen sizes
- **Performance Optimized**: Smooth 60fps animations with hardware acceleration

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox layout
- **JavaScript (ES6)**: Interactive functionality and animations
- **GSAP (GreenSock Animation Platform)**: High-performance animations
- **Locomotive Scroll**: Smooth scrolling library
- **Remix Icons**: Icon library for UI elements

## 📁 Project Structure

```
├── index.html          # Main HTML file
├── styles.css          # Custom styles and layout
├── loco.css           # Locomotive Scroll styles
├── src.js             # JavaScript functionality and animations
└── resources/         # Images and media assets
    ├── lucid-motors.webp
    ├── baron-capital.webp
    ├── nfl.webp
    ├── placenew.webp
    └── cynthia.webp
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Local development server (optional but recommended)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cynthia-portfolio
```

2. Open the project in your preferred code editor

3. Launch the website:
   - **Option 1**: Open `index.html` directly in your browser
   - **Option 2**: Use a local server (recommended for better performance):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js with http-server
     npx http-server
     
     # Using VS Code Live Server extension
     Right-click on index.html → Open with Live Server
     ```

4. Navigate to `http://localhost:8000` in your browser

## 💡 Key Features Explained

### Custom Cursor Effect
The mini-circle cursor scales based on mouse movement speed, creating a dynamic and engaging user experience.

### Image Hover Interaction
When hovering over project elements:
- Images fade in smoothly
- Images follow the cursor position
- Images rotate slightly based on horizontal mouse movement
- Images are centered on the cursor for precise positioning
- Images fade out when the cursor leaves the element

### Page Load Animation
Sequential animations create a polished entrance:
1. Navigation bar fades in from top
2. Hero headings slide up with stagger effect
3. Side text appears last

## 🎨 Customization

### Changing Colors
Edit the CSS variables or direct color values in `styles.css`:
```css
background: black;  /* Main background */
color: whitesmoke;  /* Text color */
```

### Modifying Animation Speed
Adjust timing in `src.js`:
```javascript
duration: 1.3,  // Animation duration in seconds
stagger: .2,    // Delay between staggered animations
```

### Adding New Projects
Add a new element in `index.html`:
```html
<div class="element">
    <img src="resources/your-image.webp">
    <h1>Project Name</h1>
    <h5>2025</h5>
</div>
```

## 📦 Dependencies

All dependencies are loaded via CDN:
- **GSAP**: v3.13.0
- **Locomotive Scroll**: v3.5.4
- **Remix Icons**: v4.7.0

## 🐛 Troubleshooting

### Images not appearing on hover
- Ensure image paths in `index.html` are correct
- Check that images exist in the `resources/` folder
- Verify images are in WebP format or update paths accordingly

### Animations not working
- Check browser console for JavaScript errors
- Ensure GSAP and Locomotive Scroll libraries are loading correctly
- Verify internet connection for CDN resources

### Smooth scroll not functioning
- Locomotive Scroll requires proper HTML structure
- Ensure the `.main` wrapper contains all scrollable content

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

**Note**: Some features may not work in Internet Explorer

## 📝 License

This project is open source and available for personal and commercial use.


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

**Last Updated**: November 2025
