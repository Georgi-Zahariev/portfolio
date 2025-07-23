# 🚀 Georgi Zahariev - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS, showcasing my skills, projects, and experience as a Computer Science student and software developer.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8)

## ✨ Features

- **🎨 Modern Design** - Clean, professional layout with smooth animations
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **🌙 Dark Mode** - Automatic dark/light theme support
- **⚡ Performance Optimized** - Built with Next.js 15 and Turbopack
- **🎭 Smooth Animations** - Beautiful transitions using Framer Motion
- **🎯 Interactive Components** - Engaging user experience with hover effects
- **📊 Skills Visualization** - Categorized skills with proficiency levels
- **🚀 Fast Loading** - Optimized images and code splitting

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Components**: Shadcn/ui

### Development Tools
- **Package Manager**: pnpm
- **Development Server**: Turbopack
- **Code Quality**: ESLint, TypeScript
- **Version Control**: Git

### Deployment
- **Platform**: Vercel (recommended)
- **CI/CD**: Automatic deployments from GitHub

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── Hero.tsx          # Hero section
│   │   ├── About.tsx         # About section
│   │   ├── Skills.tsx        # Skills showcase
│   │   ├── Projects.tsx      # Projects gallery
│   │   ├── Contact.tsx       # Contact form
│   │   └── Navigation.tsx    # Navigation bar
│   ├── assets/               # Static assets
│   │   └── profile_converted.jpeg
│   └── lib/                  # Utility functions
│       └── utils.ts
├── public/                   # Public assets
│   ├── favicon.ico          # Website icon
│   └── profile.jpeg         # Profile image
├── package.json             # Dependencies
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.0 or later
- **pnpm** (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Georgi-Zahariev/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint

# Package Management
pnpm install      # Install dependencies
pnpm add <pkg>    # Add new dependency
```

## 🎨 Customization

### Updating Personal Information

1. **Profile Image**: Replace `src/assets/profile_converted.jpeg`
2. **About Section**: Edit `src/components/About.tsx`
3. **Skills**: Modify skill categories in `src/components/Skills.tsx`
4. **Projects**: Update project data in `src/components/Projects.tsx`
5. **Contact Info**: Edit contact details in `src/components/Contact.tsx`

### Styling
- **Colors**: Modify `tailwind.config.ts` for theme colors
- **Typography**: Update font settings in `src/app/layout.tsx`
- **Animations**: Customize Framer Motion animations in components

### Adding New Sections
1. Create new component in `src/components/`
2. Import and add to `src/app/page.tsx`
3. Update navigation in `src/components/Navigation.tsx`

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub repository
2. Connect repository to Vercel
3. Deploy automatically on every push

### Manual Deployment
```bash
pnpm build
pnpm start
```

### Environment Variables
Create `.env.local` for any environment-specific configurations:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: 
  - `sm`: 640px and up
  - `md`: 768px and up
  - `lg`: 1024px and up
  - `xl`: 1280px and up

## 🎯 Sections Overview

### 🏠 Hero Section
- Eye-catching introduction with animated background
- Professional tagline and call-to-action
- Smooth scroll navigation

### 👨‍💻 About Section
- Personal introduction and background
- Profile image with animated border
- Quick stats and achievements
- Floating technology badges

### 🛠️ Skills Section
- **Comfortable Skills**: Technologies I use regularly
- **Familiar Skills**: Technologies I'm learning
- **Soft Skills**: Professional capabilities
- Progress bars with proficiency levels
- Categorized by type (Languages, Frameworks, Tools, etc.)

### 💼 Projects Section
- Featured project showcases
- Technology stack for each project
- Live demo and source code links
- Responsive project cards

### 📬 Contact Section
- Multiple contact methods
- Social media links
- Professional contact form
- Location and availability info

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📈 Future Enhancements

- [ ] Blog section with MDX support
- [ ] Project filtering and search
- [ ] Testimonials section
- [ ] Resume download functionality
- [ ] Contact form backend integration
- [ ] SEO optimization with structured data
- [ ] PWA capabilities
- [ ] Multi-language support

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Georgi Zahariev**
- 🌐 Website: [your-website.com](https://your-website.com)
- 📧 Email: your.email@example.com
- 💼 LinkedIn: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- 🐙 GitHub: [github.com/Georgi-Zahariev](https://github.com/Georgi-Zahariev)

---

⭐ **Star this repository if you found it helpful!**

Built with ❤️ by Georgi Zahariev
