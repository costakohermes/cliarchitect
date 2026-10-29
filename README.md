# CLIArchitect

Build powerful command-line tools with delightful developer experience

## Overview

CLIArchitect is a cli tool that an opinionated framework that handles the plumbing so you focus on commands.

**Problem:** Building great CLIs requires reinventing parsing, completion, and UX every time

**Solution:** An opinionated framework that handles the plumbing so you focus on commands

**Target Audience:** Tool builders, DevOps engineers, Platform teams

## Features

- Visual CLI builder with real-time preview
- Auto-generated shell completions (bash/zsh/fish)
- Built-in argument validation and type coercion
- Terminal UI components: tables, spinners, prompts
- Plugin system for extensibility

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React Icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

### Linting & Type Checking

```bash
npm run lint
npm run typecheck
```

## Deployment

This project is configured for static export (`output: 'export'`), making it deployable to:

- **Vercel**: Connect repo and deploy
- **Netlify**: Connect repo, build command `npm run build`, publish directory `out`
- **GitHub Pages**: Use GitHub Actions to build and deploy `out/` directory
- **Cloudflare Pages**: Connect repo, build command `npm run build`, output `out`
- **Any static host**: Upload the `out/` directory

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with providers
│   ├── page.tsx        # Landing page
│   ├── globals.css     # Global styles + Tailwind
│   └── components/     # Page-specific components
├── components/         # Shared components
├── lib/                # Utilities
├── public/             # Static assets
└── ...
```

## Brand

- **Primary Color**: #ea580c
- **Secondary Color**: #f97316
- **Background**: #fff7ed
- **Text**: #7c2d12

## License

MIT License - feel free to use for your own projects.

---

Built with ❤️ for developers.