import Head from 'next/head';
import Link from 'next/link';
import { getAgents, getAgentBySlug, getAgentSlugs } from '@/lib/agents';
import { useDemoModal } from '@/context/DemoModalContext';
import Button from '@/components/ui/Button';
import MetricCard from '@/components/ui/MetricCard';
import ScrollReveal from '@/components/shared/ScrollReveal';
import FAQSection from '@/components/shared/FAQSection';
import AgentCTABanner from '@/components/shared/AgentCTABanner';
import AgentDashboard from '@/components/dashboard/AgentDashboard';

export default function AgentPage({ agent }) {
  const { openModal } = useDemoModal();
  if (!agent) return null;

  return (
    <>
      <Head>
        <title>{`${agent.name} — ArcAgent`}</title>
        <meta name="description" content={agent.description} />
      </Head>

      {/* ── Hero ── */}
      <section className="relative page-section overflow-hidden" style={{ background: '#0A0F2C' }}>
        {/* Accent glow behind heading */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 60% 0%, ${agent.color}22 0%, transparent 55%)`,
          }}
        />
        <div className="relative z-10 page-container">
          <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 text-sm text-[#8088A8]">
            <Link href="/products" className="hover:text-white transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-white">{agent.name}</span>
          </div>

          {/* Badge */}
          <span
            className="inline-block px-3 py-1 rounded-pill text-xs font-bold uppercase tracking-wide mb-4"
            style={{ background: `${agent.color}20`, color: agent.color }}
          >
            {agent.badge}
          </span>

          {/* Heading */}
          <h1
            className="font-syne font-bold text-5xl md:text-6xl text-white mb-3 max-w-3xl leading-[1.05]"
            style={{ textShadow: `0 0 80px ${agent.color}30` }}
          >
            {agent.name}
          </h1>
          <p className="text-xl font-medium mb-5" style={{ color: agent.color }}>
            {agent.tagline}
          </p>
          <p className="text-[#C8CCE0] text-lg max-w-2xl leading-relaxed mb-10">
            {agent.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={openModal}
              className="inline-flex items-center justify-center gap-2 font-medium text-base px-7 py-3.5 text-white rounded-button transition-all hover:opacity-90 active:scale-[0.98]"
              style={{ background: agent.color }}
            >
              Request Demo
            </button>
            <Button variant="ghost" size="lg" href="/products">
              See All Products
            </Button>
          </div>
          </div>
        </div>
      </section>

      {/* ── Problem Statement ── */}
      {agent.problem && (
        <section className="page-section" style={{ background: '#F5F0E8' }}>
          <div className="page-container">
            <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Left: problem title + body */}
                <div>
                  <span
                    className="font-mono text-[11px] font-medium tracking-widest uppercase mb-3 block"
                    style={{ color: agent.color }}
                  >
                    The Problem
                  </span>
                  <h2 className="font-syne font-bold text-3xl md:text-4xl text-[#0A0F2C] mb-5 leading-[1.15]">
                    {agent.problem.title}
                  </h2>
                  <p className="font-figtree text-[#3D4260] text-lg leading-relaxed">
                    {agent.problem.body}
                  </p>
                </div>

                {/* Right: Before / After comparison */}
                <div className="flex flex-col gap-5">
                  {/* Before */}
                  <div
                    className="rounded-card p-6"
                    style={{
                      background: '#FFFDF8',
                      border: '1px solid rgba(239,68,68,0.15)',
                    }}
                  >
                    <h3 className="font-syne font-bold text-base text-[#0A0F2C] mb-4 flex items-center gap-2">
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{ background: 'rgba(239,68,68,0.1)', color: '#EF4444' }}
                      >
                        ✕
                      </span>
                      Before {agent.name}
                    </h3>
                    <ul className="flex flex-col gap-2.5">
                      {agent.problem.before.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#3D4260]">
                          <span
                            className="w-4 h-4 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center text-[10px]"
                            style={{ background: 'rgba(239,68,68,0.1)', color: '#EF4444' }}
                          >
                            ✕
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* After */}
                  <div
                    className="rounded-card p-6"
                    style={{
                      background: '#FFFDF8',
                      border: `1px solid ${agent.color}30`,
                    }}
                  >
                    <h3 className="font-syne font-bold text-base text-[#0A0F2C] mb-4 flex items-center gap-2">
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{ background: `${agent.color}15`, color: agent.color }}
                      >
                        ✓
                      </span>
                      After {agent.name}
                    </h3>
                    <ul className="flex flex-col gap-2.5">
                      {agent.problem.after.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#3D4260]">
                          <span
                            className="w-4 h-4 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center text-[10px]"
                            style={{ background: `${agent.color}15`, color: agent.color }}
                          >
                            ✓
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      {/* ── Agent Dashboard ── */}
      {agent.dashboardData && (
        <section className="page-section" style={{ background: '#0E1435' }}>
          <div className="page-container">
            <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span
                  className="font-mono text-[11px] font-medium tracking-widest uppercase mb-3 block"
                  style={{ color: agent.color }}
                >
                  Live Preview
                </span>
                <h2 className="font-syne font-bold text-3xl md:text-4xl text-white">
                  See {agent.name} in Action
                </h2>
              </div>
            </ScrollReveal>
            <AgentDashboard agent={agent} />
            </div>
          </div>
        </section>
      )}

      {/* ── Feature Grid ── */}
      {agent.features && (
        <section className="page-section" style={{ background: '#0A0F2C' }}>
          <div className="page-container">
            <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span
                  className="font-mono text-[11px] font-medium tracking-widest uppercase mb-3 block"
                  style={{ color: agent.color }}
                >
                  Capabilities
                </span>
                <h2 className="font-syne font-bold text-3xl md:text-4xl text-white">
                  What {agent.name} Does
                </h2>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agent.features.map((feature, i) => (
                <ScrollReveal key={i} delay={i * 0.07}>
                  <div
                    className="rounded-card p-6 h-full"
                    style={{
                      background: '#0E1435',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderTop: `2px solid ${agent.color}`,
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                      style={{ background: `${agent.color}15` }}
                    >
                      <span className="text-lg" style={{ color: agent.color }}>
                        ◆
                      </span>
                    </div>
                    <h3 className="font-syne font-bold text-base text-white mb-2">
                      {feature.name}
                    </h3>
                    <p className="font-figtree text-sm text-[#C8CCE0] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            </div>
          </div>
        </section>
      )}

      {/* ── How It Works ── */}
      {agent.steps && (
        <section className="page-section" style={{ background: '#0E1435' }}>
          <div className="page-container">
            <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-14">
                <span
                  className="font-mono text-[11px] font-medium tracking-widest uppercase mb-3 block"
                  style={{ color: agent.color }}
                >
                  Workflow
                </span>
                <h2 className="font-syne font-bold text-3xl md:text-4xl text-white">
                  How It Works
                </h2>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {agent.steps.map((step, i) => (
                <ScrollReveal key={i} delay={i * 0.12}>
                  <div
                    className="rounded-card p-7"
                    style={{
                      background: '#0A0F2C',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <div
                      className="font-syne font-bold text-5xl mb-4 opacity-25 leading-none"
                      style={{ color: agent.color }}
                    >
                      {step.step}
                    </div>
                    <h3 className="font-syne font-bold text-xl text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="font-figtree text-sm text-[#C8CCE0] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Integration Logos ── */}
      {agent.integrations && (
        <section className="page-section" style={{ background: '#0A0F2C' }}>
          <div className="page-container text-center">
            <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <span className="font-mono text-[11px] font-medium tracking-widest uppercase mb-3 block" style={{ color: agent.color }}>Integrations</span>
              <h2 className="font-syne font-bold text-3xl text-white mb-4">Works With Everything You Use</h2>
              <p className="font-figtree text-[#8088A8] text-base mb-12 max-w-xl mx-auto">
                {agent.name} connects natively to your existing stack — no re-platforming required.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-4">
              {agent.integrations.map((name, i) => (
                <ScrollReveal key={name} delay={i * 0.04}>
                  <div
                    className="group flex flex-col items-center gap-2.5 p-4 rounded-card cursor-default transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: '#0E1435', border: '1px solid rgba(255,255,255,0.07)' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = `${agent.color}50`}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
                  >
                    <div
                      className="w-10 h-10 rounded-[10px] flex items-center justify-center font-mono font-bold text-sm transition-colors duration-200"
                      style={{ background: 'rgba(255,255,255,0.06)', color: '#C8CCE0' }}
                    >
                      {name.slice(0, 2).toUpperCase()}
                    </div>
                    <span className="font-figtree text-[11px] font-medium text-[#8088A8] leading-tight text-center group-hover:text-[#C8CCE0] transition-colors">
                      {name}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Metrics ── */}
      {agent.metrics && (
        <section className="page-section" style={{ background: '#F5F0E8' }}>
          <div className="page-container">
            <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-14">
                <span
                  className="font-mono text-[11px] font-medium tracking-widest uppercase mb-3 block"
                  style={{ color: agent.color }}
                >
                  Proven Results
                </span>
                <h2 className="font-syne font-bold text-3xl md:text-4xl text-[#0A0F2C]">
                  The Numbers Speak
                </h2>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {agent.metrics.map((m, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div
                    className="rounded-card p-6 text-center"
                    style={{
                      background: '#FFFDF8',
                      border: '1px solid rgba(10,15,44,0.08)',
                    }}
                  >
                    <MetricCard
                      value={m.value}
                      label={m.label}
                      description={m.description}
                      accentColor={agent.color}
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      {agent.faqs && <FAQSection faqs={agent.faqs} dark />}

      {/* ── Agent CTA Banner ── */}
      <AgentCTABanner agentName={agent.name} accentColor={agent.color} />
    </>
  );
}

export async function getStaticPaths() {
  const slugs = getAgentSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const agent = getAgentBySlug(params.slug);
  return { props: { agent } };
}
