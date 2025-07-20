
# Aya - AI Empowerment Platform for Women

Aya is a comprehensive platform designed to empower women to use AI confidently in their everyday lives. From discovery to mastery, Aya provides tools, resources, and guidance tailored specifically for women entering the AI space.

## 🌟 Features

### 🧭 The Spark Quiz
Interactive onboarding quiz that personalizes your AI journey based on your goals, interests, and experience level.

### 🔍 Discovery Hub
Pinterest-style dashboard with curated "Idea Cards" featuring quick wins, tool spotlights, and inspiring success stories.

### 🛠️ The Sandbox
Practice space with guided "Recipes" - step-by-step templates for common AI tasks, organized by categories.

### 🗺️ Pathways
Structured learning roadmaps for larger projects like launching a side hustle or advancing your career.

### 🧰 AI Toolkit
Filterable directory of vetted AI tools with plain English descriptions, pricing info, and real use cases.

### 📰 Latest Developments
Real-time AI news and developments, curated and explained in easy-to-understand language.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- Yarn package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/aya-platform.git
   cd aya-platform
   ```

2. **Install dependencies**
   ```bash
   cd app
   yarn install
   ```

3. **Start development server**
   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Building for Production

```bash
cd app
yarn build
```

The static files will be generated in the `out` directory, ready for deployment to GitHub Pages.

## 🏗️ Architecture

### Tech Stack
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + Custom Components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (Static Export)

### Project Structure
```
app/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Homepage
│   ├── quiz/             # Quiz section
│   ├── discovery/        # Discovery Hub
│   ├── sandbox/          # Practice recipes
│   ├── pathways/         # Learning paths
│   ├── toolkit/          # AI tools directory
│   └── news/             # Latest developments
├── components/           # Reusable components
├── lib/                 # Utilities and data
└── public/              # Static assets
```

## 🎨 Design System

### Color Palette
- **Primary**: Purple to Pink gradient (#9333ea to #ec4899)
- **Secondary**: Blue shades for tools and resources
- **Success**: Green for achievements and positive actions
- **Warning**: Yellow/Orange for important notices

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Component Patterns
- Cards with hover animations and subtle shadows
- Gradient buttons and text highlights
- Responsive grid layouts
- Progressive disclosure for complex information

## 📱 Responsive Design

The platform is built mobile-first with breakpoints:
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px+

## 🚢 Deployment

### GitHub Pages Deployment

The site automatically deploys to GitHub Pages when you push to the main branch.

1. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Set source to "GitHub Actions"

2. **Push to main branch**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Access your site**
   Your site will be available at: `https://your-username.github.io/aya-platform`

### Manual Deployment

For other static hosting services:

```bash
cd app
yarn build
# Upload the 'out' directory to your hosting service
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the `app` directory:

```env
# Optional: Add any API keys for real news integration
NEXT_PUBLIC_NEWS_API_KEY=your_api_key_here
```

### Next.js Configuration
The `next.config.js` is pre-configured for GitHub Pages deployment:
- Static export enabled
- Image optimization disabled (for static hosting)
- Trailing slashes enabled

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Content Updates

To add new content:

- **Quiz Questions**: Edit `lib/quiz-data.ts`
- **Discovery Ideas**: Edit `lib/discovery-data.ts`
- **Sandbox Recipes**: Edit `lib/sandbox-data.ts`
- **Learning Pathways**: Edit `lib/pathways-data.ts`
- **AI Tools**: Edit `lib/toolkit-data.ts`

## 📊 Analytics & Performance

### Core Web Vitals
The platform is optimized for:
- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)

### SEO Optimization
- Semantic HTML structure
- Meta tags and Open Graph
- Structured data markup
- Accessible design (WCAG 2.1 AA)

## 🆘 Troubleshooting

### Common Issues

**Build fails with TypeScript errors**
```bash
cd app
yarn type-check
```

**Images not loading on GitHub Pages**
- Ensure images use the IMAGE_PLACEHOLDER format
- Check that next.config.js has `images.unoptimized: true`

**Styles not applying correctly**
```bash
cd app
yarn build
# Check the generated CSS in out/_next/static/css/
```

### Getting Help

- 📧 Email: support@ayaplatform.com
- 💬 Discussions: Use GitHub Discussions tab
- 🐛 Issues: Use GitHub Issues for bugs

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Acknowledgments

- Design inspiration from [Mattie James](https://mattiejames.com)
- UI components built with [Radix UI](https://www.radix-ui.com/)
- Icons provided by [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

**Built with ❤️ for women in AI**

*Empowering women to use AI confidently in work, home, learning, and play.*
