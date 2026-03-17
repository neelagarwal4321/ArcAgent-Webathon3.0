export const AGENT_COLORS = {
  arcreach: '#3B82F6',
  arcqual: '#0891B2',
  arcboard: '#059669',
  arcdesk: '#7C3AED',
  arcpulse: '#D97706',
};

export const AGENT_NAMES = {
  arcreach: 'ArcReach',
  arcqual: 'ArcQual',
  arcboard: 'ArcBoard',
  arcdesk: 'ArcDesk',
  arcpulse: 'ArcPulse',
};

export const BREAKPOINTS = {
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1440,
};

export const ANIMATION = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
  stagger: 0.08,
};

export const EMAILJS = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
};

export const SITE = {
  name: 'ArcAgent',
  tagline: 'The Autonomous Revenue OS',
  description: 'ArcAgent builds and orchestrates multi-agent systems that manage your entire revenue lifecycle — sales, onboarding, support, and retention — without adding headcount.',
  url: 'https://arcagent.ai',
  email: 'hello@arcagent.ai',
  phone: '+91 44 2345 6789',
  location: 'Chennai, India',
  social: {
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    github: 'https://github.com',
  },
};
