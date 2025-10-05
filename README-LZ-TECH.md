# LZ-Tech Website

A modern, responsive React website for LZ-Tech showcasing their technology solutions and services.

![LZ-Tech Logo](./public/vite.svg)

## 🚀 Features

- **Modern Design**: Clean, professional UI with responsive layout
- **React 19**: Built with the latest React version and TypeScript
- **TailwindCSS**: Utility-first CSS framework for rapid styling
- **React Router**: Client-side routing for seamless navigation
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Performance**: Fast loading with Vite build tool
- **Accessible**: Semantic HTML and accessibility best practices
- **SEO Optimized**: Meta tags and proper document structure

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header with responsive menu
│   └── Footer.tsx      # Site footer with contact info
├── pages/              # Page components
│   ├── Home.tsx        # Landing page with hero section
│   ├── Services.tsx    # Detailed services showcase
│   ├── About.tsx       # Company information and values
│   └── Contact.tsx     # Contact form and information
├── App.tsx             # Main application component with routing
├── App.css             # Global application styles
├── index.css           # TailwindCSS imports and base styles
└── main.tsx            # Application entry point
```

## 🛠️ Technology Stack

- **Frontend**: React 19, TypeScript
- **Styling**: TailwindCSS, CSS3
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Package Manager**: npm
- **Linting**: ESLint

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd lz-tech-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory, ready for deployment.

## 📱 Pages Overview

### Home Page
- Hero section with call-to-action
- Features showcase
- Company highlights
- Contact CTA

### Services Page
- Comprehensive service listings:
  - Custom Software Development
  - Cloud Solutions & Migration
  - Digital Transformation
  - Enterprise Solutions
  - Data Analytics & AI
  - Cybersecurity & Compliance
- Development process overview
- Contact form integration

### About Page
- Company mission and values
- Team expertise showcase
- Technology stack display
- Statistics and achievements

### Contact Page
- Contact form with validation
- Office information
- Business hours
- Social media links
- Interactive contact options

## 🎨 Design Features

- **Color Scheme**: Professional blue gradient with neutral grays
- **Typography**: Inter font family for modern readability
- **Layout**: Card-based design with generous whitespace
- **Icons**: Heroicons SVG icons for consistency
- **Responsive**: Mobile-first design approach
- **Animations**: Smooth transitions and hover effects

## 🔧 Customization

### Colors
Update colors in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Custom color palette
      }
    }
  }
}
```

### Content
- Update service information in `src/pages/Services.tsx`
- Modify company details in `src/pages/About.tsx`
- Change contact information in `src/pages/Contact.tsx` and `src/components/Footer.tsx`

## 📧 Contact Form

The contact form includes:
- Name and email validation
- Subject categorization
- Company field
- Message textarea
- Form submission handling (currently logs to console)

To integrate with a backend service, update the `handleSubmit` function in `src/pages/Contact.tsx`.

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set up continuous deployment with your Git repository

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the deployment prompts

### Other Platforms
The built files in `dist/` can be deployed to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support or questions about this project:
- Email: info@lz-tech.com
- Website: [LZ-Tech Official Site](https://lz-tech.com)

---

Built with ❤️ by the LZ-Tech development team