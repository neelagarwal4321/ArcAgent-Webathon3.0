import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SectionHeader from '../components/ui/SectionHeader';
import ScrollReveal from '../components/shared/ScrollReveal';
import { getCareers } from '../lib/careers';

const VALUES = [
  { icon: '⚡', title: 'Speed', description: 'We ship fast, iterate faster, and believe momentum compounds. Done is better than perfect; shipped beats specced.' },
  { icon: '🎯', title: 'Precision', description: 'We obsess over the details that matter. Every word in our copy, every metric in our dashboard, every line of our contracts.' },
  { icon: '🤝', title: 'Trust', description: 'We earn trust with enterprise clients by doing exactly what we say. Internally, we trust teammates to own their work without micromanagement.' },
  { icon: '🔭', title: 'Transparency', description: 'No politics, no hidden agendas. We share context freely, give direct feedback, and communicate failures as openly as wins.' },
  { icon: '📈', title: 'Impact', description: "We measure success by outcomes, not outputs. If it doesn't move the needle for customers or the business, we deprioritize it." },
];

const PERKS = [
  { icon: '🌍', title: 'Remote-First', description: 'Work from anywhere. Our teams span Chennai, San Francisco, and London — and we\'ve built our culture to thrive asynchronously.' },
  { icon: '📈', title: 'Equity for All', description: 'Every full-time employee receives a meaningful equity grant. When ArcAgent wins, you win.' },
  { icon: '📚', title: '$5k Learning Budget', description: 'Annual budget for courses, conferences, books, and anything else that makes you sharper at your craft.' },
  { icon: '❤️', title: 'Full Health Coverage', description: 'Comprehensive medical, dental, and vision coverage for you and your dependents, fully covered by ArcAgent.' },
  { icon: '🕐', title: 'Flexible Hours', description: 'We care about output, not clock-in times. Set your schedule around your best work hours and life commitments.' },
  { icon: '✈️', title: 'Annual Offsites', description: 'Once a year, the whole company gets together in person — whether that\'s Chennai, Lisbon, or somewhere new.' },
];

const DEPT_COLORS = {
  Engineering: '#00E5FF',
  Sales: '#F5C518',
  Design: '#FF6B6B',
  Marketing: '#A78BFA',
  'Customer Success': '#34D399',
  Operations: '#FB923C',
};

export default function Careers({ careers }) {
  const departments = ['All', ...new Set(careers.map((c) => c.department))];
  const [activeDept, setActiveDept] = useState('All');

  const filtered = activeDept === 'All' ? careers : careers.filter((c) => c.department === activeDept);

  return (
    <>
      <Head>
        <title>Careers — ArcAgent</title>
        <meta name="description" content="Join ArcAgent and build the future of autonomous enterprise AI. Remote-first, equity for all, and a mission that matters." />
      </Head>

      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden page-section" style={{ background: '#2539E7' }}>
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)' }} />
        <div className="relative z-10 page-container text-center">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-pill text-xs font-bold uppercase tracking-widest mb-6" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}>
              We&apos;re Hiring
            </span>
            <h1 className="font-syne font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.05]">
              Build the Future of<br />Autonomous Enterprise
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
              ArcAgent is on a mission to make autonomous AI agents the default operating layer for enterprise revenue. We&apos;re looking for people who want to build something that genuinely changes how companies operate at scale.
            </p>
            <a
              href="#roles"
              className="inline-flex items-center justify-center gap-2 font-figtree font-medium text-base px-7 py-3.5 rounded-button transition-all duration-200 active:scale-[0.98]"
              style={{ background: '#fff', color: '#2539E7' }}
            >
              View Open Roles ↓
            </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="page-section" style={{ background: '#0A0F2C' }}>
        <div className="page-container">
          <ScrollReveal>
            <SectionHeader
              overline="How We Work"
              heading="Our Values"
              subtext="These aren't wall art. They're the principles we hire, promote, and part ways on."
              centered
              dark
              className="mb-16"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {VALUES.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.08}>
                <div className="rounded-card p-6 h-full" style={{ background: '#F5F0E8', border: '1px solid rgba(10,15,44,0.06)' }}>
                  <div className="text-3xl mb-4">{v.icon}</div>
                  <h3 className="font-syne font-bold text-lg text-[#0A0F2C] mb-2">{v.title}</h3>
                  <p className="text-sm text-[#3D4260] leading-relaxed">{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Perks ── */}
      <section className="page-section" style={{ background: '#0E1435' }}>
        <div className="page-container">
          <ScrollReveal>
            <SectionHeader
              overline="Benefits"
              heading="What You Get"
              subtext="We believe in taking care of the people who build ArcAgent."
              centered
              dark
              className="mb-16"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PERKS.map((perk, i) => (
              <ScrollReveal key={perk.title} delay={i * 0.07}>
                <div className="rounded-card p-6" style={{ background: 'rgba(37,57,231,0.08)', border: '1px solid rgba(37,57,231,0.15)' }}>
                  <div className="text-3xl mb-4">{perk.icon}</div>
                  <h3 className="font-syne font-bold text-lg text-white mb-2">{perk.title}</h3>
                  <p className="text-sm text-[#C8CCE0] leading-relaxed">{perk.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Roles ── */}
      <section id="roles" className="page-section scroll-mt-20" style={{ background: '#0A0F2C' }}>
        <div className="page-container">
          <ScrollReveal>
            <SectionHeader
              overline="Open Positions"
              heading="Join the Team"
              subtext={`${careers.length} open roles across ${departments.length - 1} departments.`}
              centered
              dark
              className="mb-12"
            />
          </ScrollReveal>

          {/* Department filter */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveDept(dept)}
                  className="px-5 py-2 rounded-button font-figtree font-medium text-sm transition-all duration-200"
                  style={
                    activeDept === dept
                      ? { background: '#2539E7', color: '#fff' }
                      : { background: 'rgba(255,255,255,0.06)', color: '#C8CCE0', border: '1px solid rgba(255,255,255,0.1)' }
                  }
                >
                  {dept}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Role cards */}
          <div className="flex flex-col gap-4">
            {filtered.map((role, i) => (
              <ScrollReveal key={`${role.title}-${i}`} delay={i * 0.06}>
                <div className="rounded-card p-6 group" style={{ background: '#0E1435', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span
                          className="px-2.5 py-0.5 rounded-pill text-xs font-bold uppercase tracking-wide"
                          style={{
                            background: `${DEPT_COLORS[role.department] || '#2539E7'}20`,
                            color: DEPT_COLORS[role.department] || '#2539E7',
                          }}
                        >
                          {role.department}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-pill text-xs font-medium" style={{ background: 'rgba(255,255,255,0.06)', color: '#8088A8' }}>
                          {role.type}
                        </span>
                        <span className="text-xs text-[#8088A8]">📍 {role.location}</span>
                      </div>
                      <h3 className="font-syne font-bold text-xl text-white mb-2">{role.title}</h3>
                      <p className="text-sm text-[#C8CCE0] leading-relaxed">{role.description}</p>
                    </div>
                    <a
                      href="#"
                      className="shrink-0 inline-flex items-center gap-1 font-figtree font-medium text-sm px-5 py-2.5 rounded-button transition-all duration-200 hover:bg-[#3348F5] self-start sm:self-center"
                      style={{ background: '#2539E7', color: '#fff' }}
                    >
                      Apply →
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-14 md:py-16" style={{ background: '#0E1435', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="page-container text-center">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto">
            <h3 className="font-syne font-bold text-2xl text-white mb-3">Don&apos;t See Your Role?</h3>
            <p className="text-[#C8CCE0] mb-6">
              We&apos;re always interested in exceptional people. Send your resume and a note about what you&apos;d want to build at ArcAgent.
            </p>
            <a
              href="mailto:careers@arcagent.ai"
              className="inline-flex items-center gap-2 font-figtree font-medium text-base transition-colors"
              style={{ color: '#2539E7' }}
            >
              careers@arcagent.ai →
            </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const careers = getCareers();
  return { props: { careers } };
}
