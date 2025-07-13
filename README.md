# Oz Logistics Website

A modern, SEO-optimized freight forwarding website built with Next.js 15, TypeScript, and Tailwind CSS. This project implements the complete wireframe specifications for a professional logistics company website.

## 🚀 Project Overview

**Oz Logistics** is a comprehensive freight forwarding website featuring:
- Modern, responsive design optimized for the logistics industry
- SEO-friendly architecture with structured data
- Complete service pages for sea freight, air freight, land transport, and warehousing
- Interactive components and animations
- Professional team showcase
- Industry news and insights section
- Advanced contact and tracking functionality

## 🎯 Features

### Core Pages
- **Homepage**: Complete with hero, services overview, process flow, statistics, team, news, and CTA sections
- **Service Pages**: Detailed pages for each logistics service
- **About/Team**: Professional team showcase with contact information
- **News/Blog**: Industry insights and company updates
- **Contact & Quote**: Lead generation and customer engagement

### Technical Features
- ✅ Next.js 15 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Responsive design (mobile-first)
- ✅ SEO optimization with structured data
- ✅ Accessibility compliant (WCAG)
- ✅ Performance optimized
- ✅ Server-side rendering

### SEO & Performance
- XML sitemap generation
- Robots.txt configuration
- Open Graph and Twitter meta tags
- Structured data (Schema.org)
- Optimized images and fonts
- Core Web Vitals optimization

## 📁 Project Structure

```
oz-logistics-website/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── globals.css              # Global styles & design system
│   │   ├── layout.tsx               # Root layout
│   │   ├── page.tsx                 # Homepage
│   │   ├── sitemap.ts              # XML sitemap generation
│   │   ├── robots.ts               # Robots.txt configuration
│   │   └── services/               # Service pages
│   │       ├── page.tsx            # Services overview
│   │       ├── sea-freight/        # Sea freight service page
│   │       └── air-freight/        # Air freight service page
│   ├── components/
│   │   ├── layout/                 # Header, Footer components
│   │   │   ├── Header.tsx          # Main navigation with dropdowns
│   │   │   └── Footer.tsx          # Footer with links and contact info
│   │   ├── sections/               # Homepage sections
│   │   │   ├── HeroSection.tsx     # Hero with video and CTAs
│   │   │   ├── ServicesSection.tsx # Services overview cards
│   │   │   ├── WhyChooseUsSection.tsx # Benefits/features
│   │   │   ├── ProcessSection.tsx  # How it works (4-step process)
│   │   │   ├── StatisticsSection.tsx # Animated counters
│   │   │   ├── TeamSection.tsx     # Team member showcase
│   │   │   ├── NewsSection.tsx     # Latest industry news
│   │   │   └── CTASection.tsx      # Final call-to-action
│   │   ├── common/                 # Reusable components
│   │   ├── forms/                  # Form components
│   │   ├── icons/                  # Custom icons
│   │   └── ui/                     # UI components
│   └── lib/
│       └── structured-data.ts      # SEO structured data schemas
├── public/                         # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#1e40af` (Trust, Reliability)
- **Secondary Orange**: `#f97316` (Energy, Movement)
- **Gray Scale**: `#f8fafc` to `#0f172a`
- **Success Green**: `#059669`

### Typography
- **Headings**: Inter/Roboto (Professional, Readable)
- **Body**: Source Sans Pro (Clean, Legible)
- **Accents**: Montserrat (Modern, Impactful)

### Component Classes
- `.btn` - Button variations (primary, secondary, outline, ghost)
- `.card` - Card components with hover effects
- `.section` - Consistent section spacing
- `.container` - Responsive container widths

## 🛠️ Installation & Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup
```bash
# Clone the repository
git clone <repository-url>
cd oz-logistics-website

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
open http://localhost:3000
```

### Build for Production
```bash
# Build the application
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: `< 640px`
- **Tablet**: `640px - 1024px`  
- **Desktop**: `1024px+`

Key responsive features:
- Collapsible navigation menu
- Responsive grid layouts
- Touch-friendly interactions
- Optimized images for different screen sizes

## 🔍 SEO Optimization

### Technical SEO
- Next.js App Router for optimal performance
- Server-side rendering (SSR)
- Automatic XML sitemap generation
- Robots.txt configuration
- Meta tags optimization
- Structured data markup

### Content SEO
- Industry-specific keywords integration
- Service-focused landing pages
- Regular blog/news content structure
- FAQ optimization ready
- Local SEO preparation

### Performance
- Optimized Core Web Vitals
- Image optimization with Next.js Image
- Font optimization
- Lazy loading implementation

## 🎯 Conversion Optimization

### Lead Generation
- Multiple quote request forms
- Tracking widget in header
- Strategic CTA placement
- Contact information prominence

### Trust Building
- Professional team showcase
- Industry statistics and achievements
- Customer testimonials ready
- Certification displays
- 24/7 support emphasis

## 🔧 Customization

### Adding New Services
1. Create new directory in `src/app/services/[service-name]/`
2. Add `page.tsx` with service details
3. Update navigation in `src/components/layout/Header.tsx`
4. Add to sitemap in `src/app/sitemap.ts`

### Styling Updates
- Modify color variables in `src/app/globals.css`
- Update Tailwind config in `tailwind.config.ts`
- Component styles use CSS custom properties for easy theming

### Content Management
- Team members: Update `src/components/sections/TeamSection.tsx`
- Services: Modify `src/components/sections/ServicesSection.tsx`
- News articles: Edit `src/components/sections/NewsSection.tsx`

## 📊 Analytics & Tracking

Ready for integration with:
- Google Analytics 4
- Google Tag Manager
- Facebook Pixel
- Lead tracking systems
- Heat mapping tools

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Other Platforms
- **Netlify**: Connect GitHub repository
- **AWS Amplify**: Deploy from Git
- **Digital Ocean**: Docker deployment ready

## 🔐 Environment Variables

Create `.env.local` file:
```bash
# Site configuration
NEXT_PUBLIC_SITE_URL=https://oz-logistics.com
NEXT_PUBLIC_COMPANY_EMAIL=info@oz-logistics.com
NEXT_PUBLIC_COMPANY_PHONE=+1-555-123-4567

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-ga-id
NEXT_PUBLIC_GTM_ID=your-gtm-id
```

## 📄 Pages Implemented

### Core Pages
- ✅ Homepage (All sections from wireframe)
- ✅ Services Overview
- ✅ Sea Freight Service Page
- ✅ Air Freight Service Page
- 🚧 Land Transport (structure ready)
- 🚧 Warehousing (structure ready)
- 🚧 About/Team (components ready)
- 🚧 Contact (structure ready)
- 🚧 Quote Request (structure ready)
- 🚧 Tracking (structure ready)

### SEO Pages
- ✅ Sitemap (auto-generated)
- ✅ Robots.txt
- ✅ Structured data implementation

## 🎭 Components Overview

### Layout Components
- **Header**: Navigation, dropdowns, tracking widget, mobile menu
- **Footer**: 4-column layout, contact info, newsletter signup

### Section Components
- **HeroSection**: Full-viewport hero with video, CTAs, stats
- **ServicesSection**: 4-service grid with hover effects
- **WhyChooseUsSection**: 6-benefit cards
- **ProcessSection**: 4-step process visualization
- **StatisticsSection**: Animated counters with achievements
- **TeamSection**: Team member cards with contact info
- **NewsSection**: Industry news with filtering
- **CTASection**: Final conversion section with urgency

## 🔄 Future Enhancements

### Phase 2 Features
- [ ] Quote calculator with real-time pricing
- [ ] Customer portal with shipment tracking
- [ ] Multi-language support
- [ ] Advanced search functionality
- [ ] Integration with shipping APIs

### Content Management
- [ ] Headless CMS integration (Strapi/Contentful)
- [ ] Blog/news management system
- [ ] Team member management
- [ ] Service content management

## 📞 Support & Contact

For development questions or customization needs:
- **Email**: dev@oz-logistics.com
- **Documentation**: Check component comments for detailed usage
- **Issues**: Use GitHub issues for bug reports

## 📜 License

This project is proprietary to Oz Logistics. All rights reserved.

---

**Built with ❤️ for the logistics industry**

*Last updated: January 2025*
