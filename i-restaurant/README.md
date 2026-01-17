# Irestaurant

A modern, high-converting website template built specifically for restaurants. Launch faster, convert more customers, and manage everything without technical complexity.

## ✨ Features

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

The project uses CSS custom properties for theming:

- `--color-primary` / `--color-primary-dark` – Brand purple
- `--color-black` / `--color-white` – Neutral extremes
- `--color-gray-100` to `--color-gray-700` – Gray scale
- `--border-radius-md` / `--border-radius-lg` – Consistent rounding
- `--container-width` – Max content width

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
