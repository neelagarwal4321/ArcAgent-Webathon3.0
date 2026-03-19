# ArcAgent — Autonomous Revenue OS

ArcAgent is a B2B SaaS platform that deploys AI agents to automate the entire revenue lifecycle for enterprise companies. Built for Webathon 3.0.

## Overview

The platform showcases five specialized AI agents — **ArcReach**, **ArcQual**, **ArcBoard**, **ArcDesk**, and **ArcPulse** — each handling a distinct stage of the revenue pipeline, from outbound prospecting to customer success.

## Tech Stack

| Layer     | Technology |


| Framework | Next.js 16 (Pages Router) |
| UI | React 19, Tailwind CSS 4 |
| Animation | Framer Motion 12, GSAP 3 |
| 3D | Three.js, React Three Fiber |
| Charts | Recharts |
| Auth | NextAuth 4 (Google, GitHub, Credentials) |
| Email | EmailJS |

## Pages

- `/` — Hero, agent carousel, stats, case studies, testimonials
- `/products` — Five AI agents with feature breakdowns
- `/industries` — Industry-specific use cases
- `/pricing` — Plans and tiers
- `/case-studies` — Enterprise success stories
- `/about` — Team, values, company story
- `/blog` — Blog with dynamic slug routing
- `/contact` — Contact form
- `/careers` — Open roles
- `/login` — Authentication (supports OAuth + credentials)
- `/security`, `/privacy-policy`, `/terms-of-service` — Legal pages

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env.local` file:

```env
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_ID=your_github_id
GITHUB_SECRET=your_github_secret

NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

> **Demo mode:** The credentials provider accepts any email/password combination.

## Project Structure

```
arcagent/
├── pages/          # Next.js pages and API routes
├── components/     # Reusable UI and section components
├── lib/            # Data fetching helpers (agents, case studies, etc.)
├── public/         # Static assets
└── styles/         # Global CSS
```
