# mainwebsite

Modern, professional AI technology company website built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Setup

1. **Configure your company**  
   Edit `config/company.ts` to set your company name, tagline, email, location, and description. These values drive the navbar, hero, footer, SEO metadata, and contact section.

2. **Install and run**
   ```bash
   npm install
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

3. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## Structure

- `config/company.ts` — Single source for company branding and contact info
- `components/layout/` — Navbar, Footer
- `components/sections/` — Hero, About, Services, Why Us, Industries, Process, Case Studies, Testimonials, Contact
- `src/app/` — App Router layout, global styles, home page
