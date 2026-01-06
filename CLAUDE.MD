# CLAUDE.MD - One More Rep

## Project Overview

**One More Rep** is an interactive commercial proposal dashboard for a SaaS GYM AI automation platform. The application presents a high-end, professional sales presentation designed for "ONE MORE REP Training" gym automation services integrated with GoHighLevel (GHL).

### Key Information
- **Project Name:** Propuesta Comercial SaaS GYM
- **Client:** ONE MORE REP Training
- **Purpose:** Commercial proposal dashboard for gym automation with AI
- **Target Platform:** GoHighLevel integration
- **Version:** 1.0
- **Date:** January 6, 2026

## Tech Stack

### Frontend Framework
- **React:** 19.2.3
- **TypeScript:** ~5.8.2
- **Build Tool:** Vite 6.2.0

### Dependencies
- `react-dom`: ^19.2.3
- `lucide-react`: ^0.562.0 (icon library)

### Development Tools
- `@vitejs/plugin-react`: ^5.0.0
- `@types/node`: ^22.14.0

## Project Structure

```
One-More-Rep/
├── App.tsx                 # Main application component with navigation
├── components/             # React components
│   ├── VisionSection.tsx           # Executive summary
│   ├── TechnicalSection.tsx        # Technical breakdown
│   ├── OnboardingSection.tsx       # Videos and support
│   ├── RoadmapSection.tsx          # Timeline/roadmap
│   ├── InvestmentSection.tsx       # Investment and ROI details
│   └── ArchitectureSection.tsx     # System architecture (not currently used)
├── ghl_export.html         # GoHighLevel export file
├── index.html              # HTML entry point
├── index.tsx               # React entry point
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── metadata.json           # Project metadata
```

## Application Architecture

### Navigation Structure
The app uses a single-page application (SPA) design with a sidebar navigation:

1. **Resumen Ejecutivo** (vision) - Executive summary
2. **Desglose Técnico** (tecnico) - Technical breakdown
3. **Videos y Soporte** (onboarding) - Videos and support resources
4. **Cronograma** (roadmap) - Implementation timeline
5. **Inversión y ROI** (inversion) - Investment and ROI calculations

### Design System

**Color Palette:**
- Primary: Lime/Green (`lime-500`) - #84cc16
- Background: Dark zinc (`zinc-950`, `zinc-900`)
- Text: Light zinc (`zinc-100`)
- Accents: Zinc borders (`zinc-800`, `zinc-700`)

**Typography:**
- Font Family: 'Inter'
- Uses uppercase tracking for labels
- Font weights: Regular, bold, and black

**UI Patterns:**
- Dark theme with high contrast
- Gradient backgrounds
- Glassmorphism effects (backdrop-blur)
- Rounded corners (rounded-xl, rounded-full)
- Shadow effects on interactive elements
- Smooth transitions (300ms duration)

## Key Features

1. **Responsive Sidebar Navigation**
   - Fixed sidebar on desktop (hidden on mobile)
   - Active state highlighting with lime-500 background
   - Icon-based navigation using Lucide React

2. **Brand Identity**
   - GHL Team LATAM branding
   - SaaS GYM AI product badge
   - "ONE MORE REP Training" client identification

3. **Interactive Content Sections**
   - State-managed section switching
   - Smooth transitions between views
   - Floating navigation buttons for section traversal

4. **Professional Header**
   - Breadcrumb navigation
   - Version display
   - Date stamp

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Configuration

The project uses Gemini API integration. Set the following in `.env.local`:
```
GEMINI_API_KEY=your_api_key_here
```

## Branding Assets

**Logo URL:** `https://storage.googleapis.com/msgsndr/0wU8TEPnQYaDjxaaOoxk/media/6925d10ac57318d59bd4b2d0.png`

## Code Style Guidelines

1. **Component Structure:**
   - Functional components with TypeScript
   - React.FC type annotation
   - useState for local state management

2. **Styling:**
   - Tailwind-style utility classes
   - Inline conditional classes with template literals
   - BEM-like naming for semantic clarity

3. **Icons:**
   - Lucide React for all icons
   - Consistent sizing (16px for badges, 20px for nav)

## Important Notes for AI Assistants

### When Making Changes:
- Maintain the dark theme aesthetic (zinc-950 base)
- Keep lime-500 as the primary accent color
- Preserve the professional, high-end design language
- All text labels are in Spanish
- Maintain responsive design patterns
- Follow existing component structure in the components/ directory

### Code Patterns:
- Use functional components with hooks
- TypeScript interfaces for props when needed
- Maintain the state management pattern using useState
- Keep the navigation structure in navItems array
- Follow the switch/case pattern for section rendering

### Design Principles:
- Professional and polished UI
- High contrast for readability
- Smooth transitions and animations
- Modern glassmorphism effects
- Mobile-first responsive approach

## Related Files

- **AI Studio Link:** https://ai.studio/apps/drive/1eK82nc7_twupVYmAGy2QOWX6VVaT0F2Q
- **GHL Export:** See `ghl_export.html` for the GoHighLevel integration export

## Version History

- **v1.0** (Jan 6, 2026) - Initial project setup with basic structure and branding
  - Core navigation and section components
  - Professional dark theme design
  - GoHighLevel integration export
