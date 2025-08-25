# ACM Student Chapter Website

A comprehensive, modern website for ACM Student Chapter built with Next.js and Tailwind CSS. This platform showcases our vibrant tech-enthusiast community passionate about computing, collaboration, and innovation.

## 🚀 Features

### Homepage Sections
- **Hero Section**: Powerful introduction with chapter statistics
- **About Section**: Mission, vision, and core values
- **Programs Overview**: Peer mentorship, projects, and special interest groups
- **Featured Projects**: Showcase of innovative student projects
- **Upcoming Events**: Latest workshops, competitions, and talks
- **News & Updates**: Recent achievements and announcements

### Key Components
- Responsive design optimized for all devices
- Modern animations with Framer Motion
- Accessible UI with proper ARIA labels
- SEO-optimized structure
- Newsletter subscription integration
- Social media integration

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Language**: TypeScript
- **Deployment**: Ready for Vercel/Netlify

## 📁 Project Structure

```
ACM Website/
├── frontend/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ProgramsOverview.tsx
│   │   │   ├── FeaturedProjects.tsx
│   │   │   ├── UpcomingEvents.tsx
│   │   │   └── NewsSection.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── public/
│   ├── tailwind.config.js
│   ├── package.json
│   ├── tsconfig.json
│   └── next.config.js
└── README.md
```

## 🏁 Getting Started

1. **Navigate to frontend directory**:
   ```bash
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:3000`

## 🎨 Design System

### Colors
- **Primary Blue**: `#0066CC` (ACM Brand)
- **Dark**: `#1a1a1a`
- **Light**: `#f8fafc`

### Components
- **Buttons**: Primary and secondary variants
- **Cards**: Shadow-based with hover effects
- **Typography**: Inter font family
- **Animations**: Fade-in and slide-up effects

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Large screens: 1280px+

## 🔧 Customization

### Adding New Sections
1. Create component in `frontend/app/components/`
2. Import and add to `frontend/app/page.tsx`
3. Style with Tailwind classes

### Updating Content
- **Events**: Modify `UpcomingEvents.tsx`
- **Projects**: Update `FeaturedProjects.tsx`
- **News**: Edit `NewsSection.tsx`
- **Programs**: Customize `ProgramsOverview.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Set root directory to `frontend`
4. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder from frontend directory

### Custom Server
1. Build: `npm run build`
2. Start: `npm run start`

## 📋 Environment Variables

Create a `.env.local` file in the frontend directory for:
```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_NEWSLETTER_API=your-newsletter-api-key
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Ensure responsive design
- Test on multiple browsers
- Maintain accessibility standards

## 📄 Pages Structure

Based on the comprehensive ACM chapter model:

### Current Implementation
- ✅ **Homepage**: Complete with all sections
- ✅ **Components**: Header, Footer, and all homepage sections

### Future Pages (Planned)
- **About Us**: Detailed history, team, awards
- **Programs**: Individual program pages
- **Projects**: Full project showcase with filtering
- **Events**: Event management and registration
- **Blog**: News and article system
- **Contact**: Contact form and information
- **Join Us**: Membership application

## 🎯 Content Strategy

### Programs & SIGs
- **Peer Mentorship**: Student-Teaching-Student Program
- **ACM Xperience**: Collaborative project development
- **Intern with ACM**: Industry partnerships
- **Special Interest Groups**: AI, Women in Computing, Embedded Systems

### Project Categories
- **Accessibility**: Tools like SightScope
- **Campus Tools**: Student utilities
- **ML/AI**: Machine learning applications
- **Community Service**: Social impact projects

### Event Types
- **Competitions**: Datathons, hackathons
- **Workshops**: Technical skill building
- **Lectures**: Industry expert talks
- **Networking**: Community building events

## 📊 Performance

- **Lighthouse Score**: 90+ (target)
- **Core Web Vitals**: Optimized
- **Bundle Size**: Minimized with tree shaking
- **Loading Speed**: <3s first contentful paint

## 🔒 Accessibility

- WCAG 2.1 AA compliant
- Screen reader friendly
- Keyboard navigation support
- High contrast ratios
- Alt text for images

## 📱 Browser Support

- Chrome/Chromium 90+
- Firefox 90+
- Safari 14+
- Edge 90+

## 📞 Support

For questions about the website:
- **Technical Issues**: Create a GitHub issue
- **Content Updates**: Contact chapter leadership
- **Feature Requests**: Use GitHub discussions

## 📄 License

MIT License - see LICENSE file for details

## 🙏 Acknowledgments

- Inspired by MUJ ACM Student Chapter
- Built with modern web technologies
- Community-driven development

---

*This website represents our commitment to excellence in computing education, community service, and technical innovation. Join us in building a stronger, more inclusive tech community!*

## 🎨 Design System

### Colors
- **Primary Blue**: `#0066CC` (ACM Brand)
- **Dark**: `#1a1a1a`
- **Light**: `#f8fafc`

### Components
- **Buttons**: Primary and secondary variants
- **Cards**: Shadow-based with hover effects
- **Typography**: Inter font family
- **Animations**: Fade-in and slide-up effects

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Large screens: 1280px+

## 🔧 Customization

### Adding New Sections
1. Create component in `app/components/`
2. Import and add to `app/page.tsx`
3. Style with Tailwind classes

### Updating Content
- **Events**: Modify `UpcomingEvents.tsx`
- **Projects**: Update `FeaturedProjects.tsx`
- **News**: Edit `NewsSection.tsx`
- **Programs**: Customize `ProgramsOverview.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder

### Custom Server
1. Build: `npm run build`
2. Start: `npm run start`

## 📋 Environment Variables

Create a `.env.local` file for:
```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_NEWSLETTER_API=your-newsletter-api-key
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Ensure responsive design
- Test on multiple browsers
- Maintain accessibility standards

## 📄 Pages Structure

Based on the comprehensive ACM chapter model:

### Current Implementation
- ✅ **Homepage**: Complete with all sections
- ✅ **Components**: Header, Footer, and all homepage sections

### Future Pages (Planned)
- **About Us**: Detailed history, team, awards
- **Programs**: Individual program pages
- **Projects**: Full project showcase with filtering
- **Events**: Event management and registration
- **Blog**: News and article system
- **Contact**: Contact form and information
- **Join Us**: Membership application

## 🎯 Content Strategy

### Programs & SIGs
- **Peer Mentorship**: Student-Teaching-Student Program
- **ACM Xperience**: Collaborative project development
- **Intern with ACM**: Industry partnerships
- **Special Interest Groups**: AI, Women in Computing, Embedded Systems

### Project Categories
- **Accessibility**: Tools like SightScope
- **Campus Tools**: Student utilities
- **ML/AI**: Machine learning applications
- **Community Service**: Social impact projects

### Event Types
- **Competitions**: Datathons, hackathons
- **Workshops**: Technical skill building
- **Lectures**: Industry expert talks
- **Networking**: Community building events

## 📊 Performance

- **Lighthouse Score**: 90+ (target)
- **Core Web Vitals**: Optimized
- **Bundle Size**: Minimized with tree shaking
- **Loading Speed**: <3s first contentful paint

## 🔒 Accessibility

- WCAG 2.1 AA compliant
- Screen reader friendly
- Keyboard navigation support
- High contrast ratios
- Alt text for images

## 📱 Browser Support

- Chrome/Chromium 90+
- Firefox 90+
- Safari 14+
- Edge 90+

## 📞 Support

For questions about the website:
- **Technical Issues**: Create a GitHub issue
- **Content Updates**: Contact chapter leadership
- **Feature Requests**: Use GitHub discussions

## 📄 License

MIT License - see LICENSE file for details

## 🙏 Acknowledgments

- Inspired by MUJ ACM Student Chapter
- Built with modern web technologies
- Community-driven development

---

*This website represents our commitment to excellence in computing education, community service, and technical innovation. Join us in building a stronger, more inclusive tech community!*
