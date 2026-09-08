# SEI Saadiyat Landing Page

A high-converting, SEO-optimized landing page for SEI Saadiyat luxury residences by Aldar Properties.

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL)
- **Deployment**: Vercel

## Features

- Responsive luxury design optimized for conversions
- Lead capture with detailed investor profiling
- User action tracking (page views, scroll depth, video engagement, CTA clicks)
- SEO optimized with JSON-LD structured data
- AEO optimized with FAQ schema

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 3. Set Up Supabase Database

Run the SQL schema in your Supabase SQL Editor:

```bash
# Copy contents of supabase-schema.sql and run in Supabase Dashboard > SQL Editor
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

### Deploy to Vercel

1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── leads/route.ts      # Lead submission endpoint
│   │   └── events/route.ts     # Event tracking endpoint
│   ├── layout.tsx              # Root layout with SEO metadata
│   ├── page.tsx                # Main landing page
│   ├── sitemap.ts              # Auto-generated sitemap
│   └── robots.ts               # Robots.txt configuration
├── components/
│   ├── ui/                     # Reusable UI components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ValueBar.tsx
│   ├── AboutSection.tsx
│   ├── UnitTypes.tsx
│   ├── PaymentPlan.tsx
│   ├── Location.tsx
│   ├── Developer.tsx
│   ├── FAQ.tsx
│   ├── RegisterSection.tsx
│   ├── RegistrationForm.tsx
│   └── Footer.tsx
├── hooks/
│   ├── useTracking.ts          # Page and scroll tracking
│   └── useVideoTracking.ts     # Video engagement tracking
└── lib/
    ├── supabase.ts             # Supabase client
    ├── tracking.ts             # Event tracking functions
    └── utils.ts                # Utility functions
```

## Analytics

All user actions are tracked in the Supabase `events` table:

- `page_view` - Page loads
- `scroll_depth` - 25%, 50%, 75%, 100% milestones
- `video_play`, `video_progress`, `video_complete` - Video engagement
- `cta_click` - Button clicks
- `form_start`, `form_submit` - Form interactions
- `section_view` - Section visibility

## License

Private - Aldar Properties
