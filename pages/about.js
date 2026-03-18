import Head from 'next/head';
import Link from 'next/link';
import { getTeam } from '../lib/team';
import { useDemoModal } from '../context/DemoModalContext';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import CTABanner from '../components/shared/CTABanner';
import ScrollReveal from '../components/shared/ScrollReveal';

const MILESTONES = [
  { year: '2021', event: 'Founded in San Francisco by Arjun Mehta and Vikram Nair.' },
  { year: '2022', event: 'Signed first enterprise client — a wealth management firm with $4B AUM.' },
  { year: '2023', event: 'Raised Series A led by Sequoia Capital. Expanded to 5 specialized agents.' },
  { year: '2024', event: 'Reached 100+ enterprise customers. Launched in EMEA and APAC markets.' },
  { year: '2025', event: 'Global expansion to 14 countries. $2.3B ARR under active management.' },
];

const STATS = [
  { value: '200+', label: 'Enterprise Clients' },
  { value: '5', label: 'AI Agents' },
  { value: '$2.3B', label: 'ARR Managed' },
  { value: '14 Days', label: 'To Deploy' },
];

const VALUES = [
  {
    name: 'Speed',
    description: 'We ship fast, deploy fast, and expect results fast. The 14-day deployment commitment isn\'t a tagline — it\'s a standard we hold ourselves to on every engagement.',
    icon: '⚡',
  },
  {
    name: 'Precision',
    description: 'Autonomous systems must be accurate. We invest deeply in testing, governance layers, and confidence thresholds so our agents only act when they should.',
    icon: '◎',
  },
  {
    name: 'Trust',
    description: 'Enterprise clients are trusting us with their most critical workflows. We earn and protect that trust through reliability, transparency, and consistent outcomes.',
    icon: '◈',
  },
  {
    name: 'Transparency',
    description: 'Our clients always know what our agents are doing and why. Every decision is logged, auditable, and explainable — because black-box AI has no place in enterprise revenue.',
    icon: '◻',
  },
  {
    name: 'Impact',
    description: 'We measure ourselves on the outcomes we create: pipeline growth, churn reduction, onboarding efficiency. If it doesn\'t move the business, it doesn\'t matter.',
    icon: '◆',
  },
];

const OFFICES = [
  { city: 'San Francisco', country: 'United States', role: 'Headquarters', detail: '535 Mission St, Suite 1400' },
  { city: 'New York', country: 'United States', role: 'East Coast Office', detail: '1 World Trade Center, Floor 85' },
  { city: 'London', country: 'United Kingdom', role: 'EMEA Hub', detail: '22 Bishopsgate, EC2N 4BQ' },
  { city: 'Singapore', country: 'Singapore', role: 'APAC Hub', detail: 'One Raffles Quay, North Tower' },
];

const PARTNERS = [
  'Sequoia Capital', 'a16z', 'Salesforce Ventures', 'Tiger Global', 'Google for Startups', 'Accenture Ventures',
];

export default function About({ team }) {
  const { openModal } = useDemoModal();

  return (
    <>
      <Head>
        <title>About — ArcAgent</title>
        <meta name="description" content="ArcAgent is building the autonomous enterprise. Learn about our mission, team, and the company behind the Autonomous Revenue OS." />
      </Head>

      {/* ── 1. Hero ── */}
      <section
        className="page-section flex items-center min-h-[60vh]"
        style={{ background: '#2539E7' }}
      >
        <div className="page-container w-full">
          <ScrollReveal>
            <p className="font-mono text-[11px] font-medium tracking-widest uppercase text-white/60 mb-4">About ArcAgent</p>
            <h1 className="font-syne font-bold text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05] -tracking-[0.02em] mb-6 max-w-4xl">
              We're building the autonomous enterprise.
            </h1>
            <p className="font-figtree text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mb-10">
              ArcAgent builds and orchestrates multi-agent AI systems that manage the entire B2B revenue lifecycle — sales, onboarding, support, and retention — so enterprise companies can scale revenue without scaling headcount.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={openModal}
                className="inline-flex items-center justify-center gap-2 font-figtree font-medium text-base px-7 py-3.5 bg-white text-[#2539E7] rounded-button hover:bg-[#FFFDF8] transition-all duration-200 active:scale-[0.98]"
              >
                Schedule a Demo
              </button>
              <Button variant="ghost" size="lg" href="/products">Explore Our Agents →</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 2. Company Story ── */}
      <section className="page-section bg-[#0A0F2C]">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left: Story */}
            <ScrollReveal direction="left">
              <SectionHeader
                overline="Our Story"
                heading="Built by operators who lived the problem."
                dark
                className="mb-10"
              />
              <div className="space-y-5">
                <p className="font-figtree text-base text-[#C8CCE0] leading-relaxed">
                  ArcAgent was founded in 2021 by Arjun Mehta and Vikram Nair — a revenue operator and an AI engineer who met at a Salesforce hackathon and spent three months debating the same question: why does enterprise revenue still require so much human intervention?
                </p>
                <p className="font-figtree text-base text-[#C8CCE0] leading-relaxed">
                  Arjun had spent eight years running revenue operations at enterprise software companies, watching teams burn cycles on tasks that were fundamentally automatable — if the AI was smart enough to handle the exceptions. Vikram had spent five years at Google Brain building the kind of AI that could.
                </p>
                <p className="font-figtree text-base text-[#C8CCE0] leading-relaxed">
                  They built the first version of ArcAgent in a San Francisco apartment. The goal was simple: take the most expensive, most time-consuming stages of the B2B revenue lifecycle and run them autonomously — without sacrificing the quality and judgment that enterprise buyers demand.
                </p>
                <p className="font-figtree text-base text-[#C8CCE0] leading-relaxed">
                  Today, ArcAgent's five specialized agents manage over $2.3B in ARR for 200+ enterprise clients across financial services, SaaS, and professional services. The apartment is gone. The conviction hasn't changed.
                </p>
              </div>
            </ScrollReveal>

            {/* Right: Milestones */}
            <ScrollReveal direction="right" delay={0.1}>
              <p className="font-mono text-[11px] font-medium tracking-widest uppercase text-primary mb-6">Timeline</p>
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-[19px] top-3 bottom-3 w-px bg-white/10" />
                <div className="space-y-6">
                  {MILESTONES.map((m) => (
                    <div key={m.year} className="flex gap-5 items-start">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-mono text-[10px] font-bold text-white relative z-10"
                        style={{ background: '#2539E7' }}
                      >
                        {m.year.slice(2)}
                      </div>
                      <div className="pt-1.5">
                        <p className="font-syne font-semibold text-white text-sm mb-1">{m.year}</p>
                        <p className="font-figtree text-sm text-[#8088A8] leading-relaxed">{m.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 3. Mission & Vision ── */}
      <section className="page-section bg-[#0E1435]">
        <div className="page-container">
          <ScrollReveal>
            <SectionHeader
              overline="Purpose"
              heading="Mission & Vision"
              centered
              dark
              className="mb-12"
            />
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <ScrollReveal delay={0.05}>
              <Card hover={false} className="p-8 h-full" accent="#2539E7">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-5"
                  style={{ background: 'rgba(37,57,231,0.12)' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2539E7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <p className="font-mono text-[11px] font-medium tracking-widest uppercase text-[#6B7094] mb-3">Mission</p>
                <h3 className="font-syne font-bold text-xl text-[#0A0F2C] leading-snug mb-4">
                  Eliminate the operational ceiling on revenue growth.
                </h3>
                <p className="font-figtree text-sm text-[#3D4260] leading-relaxed">
                  Every B2B company hits a point where growing revenue requires growing headcount proportionally. We build the systems that break that constraint — making revenue operations scalable, efficient, and autonomous.
                </p>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Card hover={false} className="p-8 h-full" accent="#7C3AED">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-5"
                  style={{ background: 'rgba(124,58,237,0.1)' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <p className="font-mono text-[11px] font-medium tracking-widest uppercase text-[#6B7094] mb-3">Vision</p>
                <h3 className="font-syne font-bold text-xl text-[#0A0F2C] leading-snug mb-4">
                  A world where every B2B company has access to an autonomous revenue workforce.
                </h3>
                <p className="font-figtree text-sm text-[#3D4260] leading-relaxed">
                  The largest enterprises have armies of RevOps specialists. We're building the technology that gives every company — regardless of size — access to the same capability, running autonomously at a fraction of the cost.
                </p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 4. Stats Bar ── */}
      <section className="py-14 md:py-16 bg-[#0E1435] border-y border-white/5">
        <div className="page-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.07}>
                <div className="text-center">
                  <p className="font-syne font-bold text-4xl md:text-5xl text-white mb-2">{stat.value}</p>
                  <p className="font-figtree text-sm text-[#8088A8]">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Values ── */}
      <section className="page-section bg-[#0A0F2C]">
        <div className="page-container">
          <ScrollReveal>
            <SectionHeader
              overline="What We Believe"
              heading="Our Values"
              subtext="Five principles that guide every product decision, every hiring call, and every client engagement."
              centered
              dark
              className="mb-14"
            />
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {VALUES.map((v, i) => (
              <ScrollReveal key={v.name} delay={i * 0.07}>
                <Card className="p-6 h-full" hover>
                  <div className="text-2xl mb-4">{v.icon}</div>
                  <h3 className="font-syne font-bold text-base text-[#0A0F2C] mb-3">{v.name}</h3>
                  <p className="font-figtree text-sm text-[#3D4260] leading-relaxed">{v.description}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Team Grid ── */}
      <section className="page-section bg-[#0E1435]">
        <div className="page-container">
          <ScrollReveal>
            <SectionHeader
              overline="The People"
              heading="Meet the Team"
              subtext="Operators, engineers, and builders who've spent careers in enterprise software and AI — and decided to build the product they always wished existed."
              centered
              dark
              className="mb-14"
            />
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.07}>
                <Card className="p-7 h-full flex flex-col" hover>
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-mono text-sm font-bold shrink-0"
                      style={{ background: '#2539E7' }}
                    >
                      {member.initials}
                    </div>
                    <div>
                      <h3 className="font-syne font-bold text-[#0A0F2C] text-base leading-tight mb-0.5">{member.name}</h3>
                      <p className="font-figtree text-xs text-[#6B7094] font-medium">{member.title}</p>
                    </div>
                  </div>
                  <p className="font-figtree text-sm text-[#3D4260] leading-relaxed flex-1">
                    {member.bio}
                  </p>
                  {member.linkedin && member.linkedin !== '#' && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 font-figtree text-xs font-medium text-[#2539E7] hover:underline underline-offset-2"
                    >
                      LinkedIn →
                    </a>
                  )}
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Office Locations ── */}
      <section className="page-section bg-[#0A0F2C]">
        <div className="page-container">
          <ScrollReveal>
            <SectionHeader
              overline="Where We Are"
              heading="Global Offices"
              centered
              dark
              className="mb-14"
            />
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {OFFICES.map((office, i) => (
              <ScrollReveal key={office.city} delay={i * 0.07}>
                <div
                  className="rounded-card p-6 border border-white/8 hover:border-white/16 transition-all duration-[250ms]"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center mb-4"
                    style={{ background: 'rgba(37,57,231,0.15)' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2539E7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <p className="font-mono text-[10px] font-medium tracking-widest uppercase text-primary mb-1">{office.role}</p>
                  <h3 className="font-syne font-bold text-white text-lg mb-1">{office.city}</h3>
                  <p className="font-figtree text-sm text-[#8088A8] mb-2">{office.country}</p>
                  <p className="font-figtree text-xs text-[#6B7094]">{office.detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Partners & Investors ── */}
      <section className="py-14 md:py-16 bg-[#0E1435] border-y border-white/5">
        <div className="page-container">
          <ScrollReveal>
            <p className="font-mono text-[11px] font-medium tracking-widest uppercase text-[#8088A8] text-center mb-8">Backed by & partnered with</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {PARTNERS.map((partner) => (
                <div
                  key={partner}
                  className="px-5 py-2.5 rounded-pill border border-white/10 bg-white/4"
                >
                  <span className="font-figtree text-sm font-medium text-[#C8CCE0]">{partner}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 9. Culture + CTA ── */}
      <section className="page-section bg-[#0A0F2C]">
        <div className="page-container text-center">
          <ScrollReveal>
            <SectionHeader
              overline="Culture"
              heading="We're building something that matters."
              subtext="ArcAgent is a team of 60+ people who believe the future of enterprise software is autonomous. We're remote-first, outcome-driven, and always looking for people who want to build category-defining products."
              centered
              dark
              className="mb-10"
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="/careers">
                We're Hiring — See Open Roles →
              </Button>
              <button
                onClick={openModal}
                className="inline-flex items-center justify-center gap-2 font-figtree font-medium text-base px-7 py-3.5 border border-white/20 text-[#C8CCE0] rounded-button hover:border-white/40 hover:text-white transition-all duration-200"
              >
                Talk to the Team
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner headline="Ready to build your autonomous revenue operation?" buttonText="Schedule a Demo →" />
    </>
  );
}

export async function getStaticProps() {
  const team = getTeam();
  return {
    props: { team },
  };
}
