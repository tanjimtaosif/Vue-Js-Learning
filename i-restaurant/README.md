# Irestaurant

A modern, high-converting website template built specifically for restaurants. Launch faster, convert more customers, and manage everything without technical complexity.

## ✨ Features

- **Premium UI/UX** – Glassmorphism effects, smooth gradients, and micro-interactions
- **Sticky Header** – Smart navigation with frosted glass effect
- **Hero Section** – Eye-catching introduction with video preview
- **Features Showcase** – Highlight key platform benefits
- **Comparison Table** – Side-by-side competitor comparison
- **Gallery** – Infinite scrolling image carousel with hover pause
- **Testimonials** – Infinite scrolling customer reviews with ratings
- **CTA Section** – Conversion-focused call-to-action block
- **Responsive Footer** – Brand info, navigation links, and social media

## 🛠️ Tech Stack

- **Vue 3** – Composition API with `<script setup>`
- **TypeScript** – Type-safe development
- **Vite** – Fast development and build tooling
- **Pinia** – State management
- **Vue Router** – Client-side routing
- **SCSS** – Modular styling with BEM methodology
- **Lucide Icons** – Beautiful open-source icons

## 📁 Project Structure

```
src/
├── assets/scss/       # Global styles (base, layout, components, pages)
├── components/
│   ├── base/          # Reusable base components (BaseContainer, BaseButton)
│   ├── layout/        # Layout components (AppHeader, AppFooter)
│   └── sections/      # Page sections (HeroSection, FeaturesSection, etc.)
├── pages/             # Route views (HomeView, AboutView, etc.)
├── router/            # Vue Router configuration
├── stores/            # Pinia stores
└── public/data/       # Static JSON data (testimonials.json)
```

## 🚀 Getting Started

### Prerequisites

- Node.js v20.19+ or v22.12+
- pnpm

### Installation

```sh
pnpm install
```

### Development

```sh
pnpm dev
```

### Production Build

```sh
pnpm build
```

### Linting

```sh
pnpm lint
```

## 🎨 Design System

The project uses a premium design system with CSS custom properties:

- **Colors**: Curated palette with `--color-primary` (Purple), `--color-accent` (Pink), and refined neutrals.
- **Typography**: `Inter` font with optimized letter-spacing and fluid font sizes.
- **Effects**:
  - `Glassmorphism`: Backdrop blur and translucent backgrounds.
  - `Gradients`: Premium mesh gradients and smooth color transitions.
  - `Shadows`: Multi-layered shadows for depth (`--shadow-lg`, `--shadow-glow`).
  - `Animations`: Scroll-triggered entrance animations (`useScrollReveal`) and floating elements.
- **Components**:
  - `Buttons`: Ripple effects, hover lifts, and gradient variants.
  - `Cards`: Elevated, glass, and interactive states.
  - `Badges`: Status indicators with pill shaping.

## 📄 Pages

| Route       | Component    | Description          |
| ----------- | ------------ | -------------------- |
| `/`         | HomeView     | Landing page         |
| `/features` | FeaturesView | Features detail page |
| `/pricing`  | PricingView  | Pricing plans        |
| `/about`    | AboutView    | About the company    |
| `/contact`  | ContactView  | Contact form         |

## 📝 License

© 2026 Irestaurant. All rights reserved.
