import Head from 'next/head';
import { getAgents } from '@/lib/agents';
import { getTestimonials } from '@/lib/testimonials';
import { getCaseStudies } from '@/lib/case-studies';
import { getIndustries } from '@/lib/industries';

import HeroSection from '@/components/sections/HeroSection';
import StatsRow from '@/components/sections/StatsRow';
import RoleTiles from '@/components/sections/RoleTiles';
import AgentCarousel from '@/components/sections/AgentCarousel';
import BeforeAfterSlider from '@/components/sections/BeforeAfterSlider';
import HowItWorks from '@/components/sections/HowItWorks';
import LifecyclePipeline from '@/components/sections/LifecyclePipeline';
import IndustriesPreview from '@/components/sections/IndustriesPreview';
import TechStack from '@/components/sections/TechStack';
import CaseStudiesPreview from '@/components/sections/CaseStudiesPreview';
import TestimonialsMarquee from '@/components/sections/TestimonialsMarquee';
import CTASection from '@/components/sections/CTASection';
import CTABanner from '@/components/shared/CTABanner';

export default function Home({ agents, testimonials, caseStudies, industries }) {
  return (
    <>
      <Head>
        <title>ArcAgent — The Autonomous Revenue OS</title>
        <meta
          name="description"
          content="ArcAgent builds and orchestrates multi-agent AI systems that manage your entire revenue lifecycle — sales, onboarding, support, and retention — without adding headcount."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="ArcAgent — The Autonomous Revenue OS" />
        <meta
          property="og:description"
          content="Deploy an autonomous client-facing workforce. Five specialized agents covering every stage of your B2B revenue lifecycle."
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* H1 — Hero: blue bg, ParticleSphere, VideoModal, trust logos */}
      <HeroSection />

      {/* H2 — Stats Row: 3 cream cards with animated counters */}
      <StatsRow />

      {/* H3 — Role Tiles: 4 persona cards with agent badges */}
      <RoleTiles />

      {/* H4 — Agent Carousel: auto-rotating single card, arrows + dots */}
      <AgentCarousel agents={agents} />

      {/* H5 — Book a Live Demo */}
      <BeforeAfterSlider />

      {/* H6 — How It Works: 4-step process */}
      <HowItWorks />

      {/* H7 — Lifecycle Pipeline: Configure → Monitor → Learn → Optimize */}
      <LifecyclePipeline />

      {/* H8 — Industries Preview: 6 industry cards */}
      <IndustriesPreview industries={industries} />

      {/* CTA Banner 2 */}
      <CTABanner headline="Built for financial services, SaaS, healthcare, and more." buttonText="Explore Industries →" />

      {/* H9 — Tech Stack: 4-col pill grid + compliance badges */}
      <TechStack />

      {/* H10 — Case Studies Preview: 3 expandable accordion cards */}
      <CaseStudiesPreview caseStudies={caseStudies} />

      {/* H11 — Testimonials Marquee: dual-row infinite scroll */}
      <TestimonialsMarquee testimonials={testimonials} />

      {/* CTA Banner 3 */}
      <CTABanner headline="Join 200+ enterprise revenue teams running on ArcAgent." buttonText="Schedule a Demo →" />

      {/* H12 — Final CTA Section: blue bg, demo + contact CTAs */}
      <CTASection />
    </>
  );
}

export async function getStaticProps() {
  const agents = getAgents();
  const testimonials = getTestimonials();
  const caseStudies = getCaseStudies();
  const industries = getIndustries();
  return {
    props: {
      agents,
      testimonials,
      caseStudies,
      industries,
    },
  };
}
