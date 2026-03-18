import Head from 'next/head';
import Link from 'next/link';
import { getAgents } from '@/lib/agents';
import { useDemoModal } from '@/context/DemoModalContext';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/shared/ScrollReveal';
import CTABanner from '@/components/shared/CTABanner';
import LifecyclePipeline from '@/components/sections/LifecyclePipeline';
import RoleTiles from '@/components/sections/RoleTiles';

const PIPELINE = [
  { agent: 'ArcReach', color: '#3B82F6', stage: 'Prospect', slug: 'arcreach' },
  { agent: 'ArcQual',  color: '#0891B2', stage: 'Qualify',  slug: 'arcqual' },
  { agent: 'ArcBoard', color: '#059669', stage: 'Onboard',  slug: 'arcboard' },
  { agent: 'ArcDesk',  color: '#7C3AED', stage: 'Support',  slug: 'arcdesk' },
  { agent: 'ArcPulse', color: '#D97706', stage: 'Retain',   slug: 'arcpulse' },
];

export default function ProductsPage({ agents }) {
  const { openModal } = useDemoModal();

  return (
    <>
      <Head>
        <title>Products — ArcAgent</title>
        <meta name="description" content="Five specialized AI agents covering every stage of your revenue lifecycle." />
      </Head>

      {/* Hero */}
      <section className="relative page-section overflow-hidden" style={{ background: '#0A0F2C' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(37,57,231,0.18) 0%, transparent 60%)' }} />
        <div className="relative z-10 page-container">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
            <SectionHeader
              overline="The Product Suite"
              heading="One Platform. Five AI Agents."
              subtext="ArcAgent deploys a coordinated workforce of autonomous agents across your entire revenue lifecycle — from first outreach to long-term retention."
              centered
              dark
            />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <button onClick={openModal} className="inline-flex items-center justify-center gap-2 font-medium text-base px-7 py-3.5 text-white rounded-button transition-all hover:bg-[#3348F5]" style={{ background: '#2539E7' }}>
                Request Demo
              </button>
              <Button variant="ghost" size="lg" href="/pricing">View Pricing</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pipeline Flow */}
      <section className="page-section" style={{ background: '#0E1435' }}>
        <div className="page-container">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-0">
              {PIPELINE.map((item, i) => (
                <div key={item.slug} className="flex items-center">
                  <Link href={`/products/${item.slug}`} className="flex flex-col items-center gap-2 group px-5 py-4 rounded-card hover:bg-white/5 transition-colors">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center border-2 group-hover:scale-110 transition-transform" style={{ borderColor: item.color, background: `${item.color}15` }}>
                      <span className="text-xs font-bold" style={{ color: item.color }}>{String(i+1).padStart(2,'0')}</span>
                    </div>
                    <span className="text-sm font-bold text-white">{item.agent}</span>
                    <span className="text-xs text-[#8088A8]">{item.stage}</span>
                  </Link>
                  {i < PIPELINE.length - 1 && (
                    <span className="text-[#8088A8] text-lg hidden md:block mx-1">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lifecycle Pipeline — placed before agent blocks per blueprint */}
      <LifecyclePipeline />

      {/* Agent Cards — alternating layout */}
      <section className="page-section" style={{ background: '#0A0F2C' }}>
        <div className="page-container">
          <div className="max-w-6xl mx-auto flex flex-col gap-16">
          {agents.map((agent, i) => (
            <div key={agent.slug} className={`flex flex-col lg:flex-row gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Text */}
              <div className="flex-1">
                <span className="inline-block px-3 py-1 rounded-pill text-xs font-bold uppercase tracking-wide mb-4" style={{ background: `${agent.color}20`, color: agent.color }}>{agent.badge}</span>
                <h2 className="font-syne font-bold text-3xl text-white mb-2">{agent.name}</h2>
                <p className="text-lg font-medium mb-4" style={{ color: agent.color }}>{agent.tagline}</p>
                <p className="text-[#C8CCE0] leading-relaxed mb-6">{agent.description}</p>
                {agent.features && (
                  <ul className="flex flex-col gap-2.5 mb-8">
                    {agent.features.slice(0, 3).map((f) => (
                      <li key={f.name} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${agent.color}20` }}>
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke={agent.color} strokeWidth="1.5" strokeLinecap="round"/></svg>
                        </span>
                        <span className="text-sm text-[#C8CCE0]"><strong className="text-white">{f.name}</strong> — {f.description}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <Link href={`/products/${agent.slug}`} className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-button text-white transition-all hover:opacity-90" style={{ background: agent.color }}>
                  Explore {agent.name} →
                </Link>
              </div>
              {/* Metrics card */}
              <div className="lg:w-[360px] shrink-0 w-full">
                <div className="rounded-card p-7" style={{ background: '#0E1435', border: '1px solid rgba(255,255,255,0.08)', borderLeft: `3px solid ${agent.color}` }}>
                  <p className="text-xs tracking-widest uppercase mb-5 font-bold" style={{ color: agent.color }}>Key Results</p>
                  {agent.metrics && (
                    <div className="grid grid-cols-2 gap-5 mb-5">
                      {agent.metrics.slice(0, 2).map((m) => (
                        <div key={m.label}>
                          <div className="font-syne font-extrabold text-3xl mb-1" style={{ color: agent.color }}>{m.value}</div>
                          <div className="text-xs text-[#8088A8]">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${agent.color}, ${agent.color}40)` }} />
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* Role Tiles */}
      <RoleTiles />

      {/* Comparison Table */}
      <section className="page-section" style={{ background: '#0E1435' }}>
        <div className="page-container">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="font-mono text-[11px] font-medium tracking-widest uppercase text-[#2539E7] mb-3 block">Compare Agents</span>
              <h2 className="font-syne font-bold text-3xl md:text-4xl text-white">Which Agent Does What?</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="rounded-card overflow-x-auto" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
              {/* Header row */}
              <div className="grid min-w-[700px]" style={{ gridTemplateColumns: '200px repeat(5, 1fr)', background: '#0A0F2C', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="px-5 py-4" />
                {agents.map((a) => (
                  <div key={a.slug} className="px-4 py-4 text-center">
                    <span className="inline-block px-2 py-0.5 rounded-pill text-[10px] font-bold uppercase tracking-wide mb-1" style={{ background: `${a.color}20`, color: a.color }}>{a.badge}</span>
                    <p className="font-syne font-bold text-sm text-white">{a.name}</p>
                  </div>
                ))}
              </div>
              {/* Feature rows */}
              {[
                { label: 'Revenue Stage', values: ['Prospect', 'Qualify', 'Onboard', 'Support', 'Retain'] },
                { label: 'AI Decision-Making', values: [true, true, true, true, true] },
                { label: 'CRM Integration', values: [true, true, true, true, true] },
                { label: 'Multi-Channel Outreach', values: [true, false, false, false, false] },
                { label: 'Lead Scoring', values: [false, true, false, false, true] },
                { label: 'Automated Sequences', values: [true, false, true, false, true] },
                { label: 'Human Handoff', values: [true, true, true, true, false] },
                { label: 'Compliance & Audit Trail', values: [false, false, true, false, false] },
                { label: 'Continuous Learning', values: [false, true, false, true, true] },
              ].map((row, ri) => (
                <div key={row.label} className="grid min-w-[700px]" style={{ gridTemplateColumns: '200px repeat(5, 1fr)', background: ri % 2 === 0 ? '#0E1435' : 'rgba(10,15,44,0.5)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="px-5 py-3.5 flex items-center">
                    <span className="font-figtree text-sm text-[#C8CCE0]">{row.label}</span>
                  </div>
                  {row.values.map((val, vi) => (
                    <div key={vi} className="px-4 py-3.5 flex items-center justify-center">
                      {typeof val === 'boolean' ? (
                        val
                          ? <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" fill="rgba(5,150,105,0.15)"/><path d="M5 8l2.5 2.5L11 6" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          : <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" fill="rgba(255,255,255,0.04)"/><path d="M10 6l-4 4M6 6l4 4" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round"/></svg>
                      ) : (
                        <span className="font-mono text-[11px] font-medium tracking-wide" style={{ color: agents[vi]?.color }}>{val}</span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        headline="Ready to deploy the full ArcAgent suite?"
        buttonText="Schedule a Demo →"
      />
    </>
  );
}

export async function getStaticProps() {
  return { props: { agents: getAgents() } };
}
