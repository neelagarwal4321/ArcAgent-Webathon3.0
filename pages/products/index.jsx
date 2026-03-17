import Head from 'next/head';
import Link from 'next/link';
import { getAgents } from '@/lib/agents';
import SectionHeader from '@/components/ui/SectionHeader';
import AgentBadge from '@/components/ui/AgentBadge';
import ScrollReveal from '@/components/shared/ScrollReveal';
import CTABanner from '@/components/shared/CTABanner';
import RoleTiles from '@/components/sections/RoleTiles';
import LifecyclePipeline from '@/components/sections/LifecyclePipeline';

const STAGES = ['Prospect', 'Qualify', 'Onboard', 'Support', 'Retain'];

export default function ProductsOverview({ agents }) {
  return (
    <>
      <Head>
        <title>Products — ArcAgent Suite</title>
        <meta name="description" content="Five specialized agents covering every stage of your B2B revenue lifecycle." />
      </Head>

      {/* Hero */}
      <section className="bg-bg-hero bg-grid pt-36 pb-20 px-6 text-center">
        <ScrollReveal>
          <span className="font-mono text-[11px] tracking-widest uppercase text-accent-cyan mb-4 block">The ArcAgent Suite</span>
          <h1 className="font-syne font-extrabold text-white leading-[1.05] -tracking-[0.02em] mb-5"
            style={{ fontSize: 'clamp(40px,6vw,64px)' }}>
            Five Agents. One Revenue OS.
          </h1>
          <p className="font-figtree text-lg text-white/75 max-w-xl mx-auto">
            Each agent masters a single stage of your revenue lifecycle — and they share context seamlessly so nothing falls through the cracks.
          </p>
        </ScrollReveal>

        {/* Revenue lifecycle flow */}
        <ScrollReveal delay={0.2} className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
            {STAGES.map((stage, i) => (
              <div key={stage} className="flex items-center gap-2">
                <span className="font-figtree font-medium text-sm text-white bg-white/10 border border-white/15 px-4 py-2 rounded-pill">
                  {stage}
                </span>
                {i < STAGES.length - 1 && (
                  <svg width="20" height="10" fill="none"><path d="M1 5h18M15 1l4 4-4 4" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <LifecyclePipeline />

      {/* Agent blocks */}
      <section className="bg-bg-base py-section-md px-6">
        <div className="max-w-content mx-auto flex flex-col gap-16">
          {agents.map((agent, i) => (
            <ScrollReveal key={agent.slug} delay={0.05}>
              <div className={`flex flex-col lg:flex-row gap-10 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <AgentBadge name={agent.badge || agent.name} color={agent.color} />
                  <h2 className="font-syne font-bold text-3xl text-text-on-dark mt-3 mb-2">{agent.name}</h2>
                  <p className="font-figtree text-text-on-dark-secondary text-lg mb-4">{agent.tagline}</p>
                  <p className="font-figtree text-text-on-dark-muted mb-6">{agent.description}</p>
                  <ul className="space-y-2 mb-8">
                    {agent.features.slice(0, 4).map((f) => (
                      <li key={f.name} className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: `${agent.color}20` }}>
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke={agent.color} strokeWidth="1.5" strokeLinecap="round"/></svg>
                        </span>
                        <span className="font-figtree text-sm text-text-on-dark-secondary">{f.name}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/products/${agent.slug}`}
                    className="inline-flex items-center gap-2 font-figtree font-semibold text-sm px-6 py-3 rounded-button text-white transition-colors"
                    style={{ backgroundColor: agent.color }}
                  >
                    Explore {agent.name} →
                  </Link>
                </div>
                <div className="lg:w-80 shrink-0">
                  <div className="bg-surface-1 rounded-card shadow-card p-6" style={{ borderTop: `4px solid ${agent.color}` }}>
                    <p className="font-mono text-[10px] tracking-widest uppercase mb-4" style={{ color: agent.color }}>Key Results</p>
                    <div className="grid grid-cols-2 gap-4">
                      {agent.metrics.slice(0, 2).map((m) => (
                        <div key={m.label}>
                          <p className="font-syne font-extrabold text-2xl -tracking-wide mb-0.5" style={{ color: agent.color }}>{m.value}</p>
                          <p className="font-figtree text-xs text-text-secondary leading-snug">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <RoleTiles />
      <CTABanner headline="Ready to deploy the full ArcAgent suite?" />
    </>
  );
}

export async function getStaticProps() {
  return { props: { agents: getAgents() } };
}
