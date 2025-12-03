# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**LifeReverse** is a Japanese-language task management application built with Next.js. The app helps users design their remaining time by working backward from life goals to daily tasks ("人生を逆算して設計する"). It features a countdown display showing remaining years, months, days, and hours, along with focus-mode task management.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

### Framework & Styling

- **Next.js 16** with App Router (not Pages Router)
- **React 19** with TypeScript
- **Tailwind CSS 4** using new `@import "tailwindcss"` syntax with inline theme configuration
- **tw-animate-css** for additional animations
- Uses **next/font** with Geist Sans and Geist Mono fonts

### UI Component System

- **shadcn/ui** components (New York style) installed via `components.json`
- Components live in `components/ui/`
- Uses **Radix UI** primitives with **class-variance-authority** for variants
- Icon library: **lucide-react**
- Utility function `cn()` in `lib/utils.ts` combines clsx and tailwind-merge

### Path Aliases

Configured in `tsconfig.json`:
```typescript
"@/*": ["./*"]
```

shadcn/ui aliases:
- `@/components` - React components
- `@/components/ui` - UI components
- `@/lib` - Utility functions
- `@/hooks` - Custom hooks (when created)

### Project Structure

```
app/
  layout.tsx      # Root layout with font configuration
  page.tsx        # Homepage with hero section and countdown mockup
  globals.css     # Tailwind imports and CSS variable theme
components/
  ui/            # shadcn/ui components (e.g., button.tsx)
lib/
  utils.ts       # cn() utility for className merging
```

## Key Technical Details

### Styling Approach

- Uses Tailwind CSS 4's new `@theme inline` syntax for design tokens
- Color system based on oklch color space with CSS variables
- Dark mode support via `.dark` class using custom variant: `@custom-variant dark (&:is(.dark *))`
- Design system includes sidebar, chart, and destructive color tokens

### TypeScript Configuration

- Target: ES2017
- Strict mode enabled
- JSX: react-jsx (not preserve)
- Module resolution: bundler (modern)

### Component Patterns

When adding shadcn/ui components:
1. Use the `npx shadcn@latest add <component>` command
2. Components follow the New York style variant
3. All components use the `cn()` utility for className composition
4. Components support Radix UI's `asChild` pattern where applicable

### Language & Content

- Primary language: Japanese
- UI text is in Japanese (e.g., "目標を設定してスタート")
- Keep all user-facing strings in Japanese when adding features
