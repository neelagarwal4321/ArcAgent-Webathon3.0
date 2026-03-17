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
      <section className="relative pt-40 pb-24 overflow-hidden" style={{ background: '#0A0F2C' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(37,57,231,0.18) 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeader
              overline="The Product Suite"
              heading="One Platform. Five AI Agents."
              subtext="ArcAgent deploys a coordinated workforce of autonomous agents across your entire revenue lifecycle — from first outreach to long-term retention."
              centered
              dark
            />
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
      <section className="py-12" style={{ background: '#0E1435' }}>
        <div className="max-w-5xl mx-auto px-6">
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
      </section>

      {/* Agent Cards — alternating layout */}
      <section className="py-20" style={{ background: '#0A0F2C' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-16">
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
      </section>

      {/* Lifecycle Pipeline */}
      <LifecyclePipeline />

      {/* Role Tiles */}
      <RoleTiles />

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
