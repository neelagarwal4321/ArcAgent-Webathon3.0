import { useState } from 'react';
import Head from 'next/head';
import { getCaseStudies } from '../lib/case-studies';
import { useDemoModal } from '../context/DemoModalContext';
import SectionHeader from '../components/ui/SectionHeader';
import Badge from '../components/ui/Badge';
import AgentBadge from '../components/ui/AgentBadge';
import ScrollReveal from '../components/shared/ScrollReveal';
import CTABanner from '../components/shared/CTABanner';

const AGENT_COLORS = {
  arcreach: '#3B82F6',
  arcqual: '#0891B2',
  arcboard: '#059669',
  arcdesk: '#7C3AED',
  arcpulse: '#D97706',
};
const AGENT_NAMES = {
  arcreach: 'ArcReach',
  arcqual: 'ArcQual',
  arcboard: 'ArcBoard',
  arcdesk: 'ArcDesk',
  arcpulse: 'ArcPulse',
};

export default function CaseStudiesPage({ caseStudies }) {
  const { openModal } = useDemoModal();
  const [activeFilter, setActiveFilter] = useState('All');
  const [openId, setOpenId] = useState(null);

  // Collect unique tags
  const tags = ['All', ...Array.from(new Set(caseStudies.map((cs) => cs.tag)))];

  const filtered =
    activeFilter === 'All'
      ? caseStudies
      : caseStudies.filter((cs) => cs.tag === activeFilter);

  const toggleOpen = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <>
      <Head>
        <title>Case Studies — ArcAgent</title>
        <meta
          name="description"
          content="Real results from enterprise revenue teams using ArcAgent. Pipeline growth, churn reduction, onboarding acceleration, and support automation case studies."
        />
      </Head>

      {/* ── Hero ── */}
      <section className="relative page-section overflow-hidden" style={{ background: '#0A0F2C' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(37,57,231,0.16) 0%, transparent 60%)',
          }}
        />
        <div className="relative z-10 page-container">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
            <SectionHeader
              overline="Results"
              heading="Real Results from Real Customers"
              subtext="From financial services to SaaS to professional services — here's what ArcAgent deployments deliver across the revenue lifecycle."
              centered
              dark
            />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Filter + Accordion List ── */}
      <section className="page-section" style={{ background: '#F5F0E8' }}>
        <div className="page-container">
          <div className="max-w-4xl mx-auto">
          {/* Filter buttons */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-10">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveFilter(tag)}
                  className="px-4 py-2 rounded-pill font-figtree text-sm font-medium transition-all duration-200"
                  style={
                    activeFilter === tag
                      ? {
                          background: '#2539E7',
                          color: '#FFFFFF',
                        }
                      : {
                          background: 'rgba(10,15,44,0.06)',
                          color: '#3D4260',
                          border: '1px solid rgba(10,15,44,0.12)',
                        }
                  }
                >
                  {tag}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Accordion items */}
          <div className="flex flex-col gap-4">
            {filtered.map((cs, i) => {
              const isOpen = openId === cs.id;
              return (
                <ScrollReveal key={cs.id} delay={i * 0.06}>
                  <div
                    className="rounded-card overflow-hidden transition-all duration-300"
                    style={{
                      background: '#FFFDF8',
                      border: isOpen
                        ? '1px solid rgba(37,57,231,0.25)'
                        : '1px solid rgba(10,15,44,0.08)',
                      boxShadow: isOpen
                        ? '0 4px 24px rgba(37,57,231,0.08)'
                        : '0 2px 8px rgba(10,15,44,0.04)',
                    }}
                  >
                    {/* Collapsed header — always visible */}
                    <button
                      onClick={() => toggleOpen(cs.id)}
                      className="w-full text-left px-7 py-6 flex flex-col sm:flex-row sm:items-center gap-4"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <Badge text={cs.tag} color="#2539E7" />
                          <span className="font-figtree text-xs text-[#6B7094]">
                            {cs.client}
                          </span>
                        </div>
                        <h3 className="font-syne font-bold text-lg text-[#0A0F2C] mb-3 pr-8">
                          {cs.headline}
                        </h3>
                        {/* Outcome pills */}
                        <div className="flex flex-wrap gap-2">
                          {cs.results.map((r, ri) => (
                            <span
                              key={ri}
                              className="inline-flex items-center gap-1.5 font-figtree text-xs font-semibold px-3 py-1 rounded-pill"
                              style={{
                                background: 'rgba(5,150,105,0.1)',
                                color: '#059669',
                                border: '1px solid rgba(5,150,105,0.2)',
                              }}
                            >
                              <span className="font-bold">{r.metric}</span>
                              <span className="font-normal text-[#3D4260]">{r.label}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                      {/* Chevron */}
                      <span
                        className="shrink-0 self-start sm:self-center transition-transform duration-300"
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          color: '#6B7094',
                        }}
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path
                            d="M5 7.5l5 5 5-5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>

                    {/* Expanded content */}
                    {isOpen && (
                      <div
                        className="px-7 pb-7 border-t"
                        style={{ borderColor: 'rgba(10,15,44,0.08)' }}
                      >
                        <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                          {/* Challenge */}
                          <div>
                            <p className="font-mono text-[11px] tracking-widest uppercase text-[#6B7094] mb-3">
                              The Challenge
                            </p>
                            <p className="font-figtree text-sm text-[#3D4260] leading-relaxed">
                              {cs.challenge}
                            </p>
                          </div>
                          {/* Solution */}
                          <div>
                            <p className="font-mono text-[11px] tracking-widest uppercase text-[#6B7094] mb-3">
                              The Solution
                            </p>
                            <p className="font-figtree text-sm text-[#3D4260] leading-relaxed">
                              {cs.solution}
                            </p>
                          </div>
                        </div>

                        {/* Full results list */}
                        <div className="mb-6">
                          <p className="font-mono text-[11px] tracking-widest uppercase text-[#6B7094] mb-4">
                            Results
                          </p>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {cs.results.map((r, ri) => (
                              <div
                                key={ri}
                                className="rounded-card p-4 text-center"
                                style={{
                                  background: '#F5F0E8',
                                  border: '1px solid rgba(10,15,44,0.06)',
                                }}
                              >
                                <div className="font-syne font-bold text-2xl text-[#0A0F2C] mb-1">
                                  {r.metric}
                                </div>
                                <div className="font-figtree text-xs text-[#6B7094]">
                                  {r.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Quote */}
                        {cs.quote && (
                          <blockquote
                            className="rounded-card p-6 mb-6"
                            style={{
                              background: 'rgba(37,57,231,0.04)',
                              borderLeft: '3px solid #2539E7',
                            }}
                          >
                            <p className="font-figtree text-sm italic text-[#3D4260] leading-relaxed mb-3">
                              "{cs.quote.text}"
                            </p>
                            <footer className="font-figtree text-xs text-[#6B7094] not-italic">
                              — {cs.quote.author}
                              {cs.quote.role ? `, ${cs.quote.role}` : ''},{' '}
                              {cs.quote.company}
                            </footer>
                          </blockquote>
                        )}

                        {/* Agent tags */}
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-[11px] tracking-widest uppercase text-[#8088A8]">
                            Agents Used:
                          </span>
                          {cs.agentsUsed.map((slug) => (
                            <AgentBadge
                              key={slug}
                              name={AGENT_NAMES[slug] || slug}
                              color={AGENT_COLORS[slug] || '#2539E7'}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-figtree text-[#6B7094]">
                No case studies found for this filter.
              </p>
            </div>
          )}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <CTABanner
        headline="See what ArcAgent can do for your revenue team."
        buttonText="Request a Demo →"
      />
    </>
  );
}

export async function getStaticProps() {
  const caseStudies = getCaseStudies();
  return { props: { caseStudies } };
}
