import Head from 'next/head';
import Link from 'next/link';
import { getAgents } from '@/lib/agents';
import { getTestimonials } from '@/lib/testimonials';
import { useDemoModal } from '@/context/DemoModalContext';
import Button from '@/components/ui/Button';

const STATS = [
  { value: '3.2x', label: 'Average Pipeline Growth' },
  { value: '89%', label: 'Support Auto-Resolution' },
  { value: '42%', label: 'Average Churn Reduction' },
  { value: '14 days', label: 'Average Deployment Time' },
];

const STEPS = [
  { num: '01', title: 'Connect', description: 'Integrates with your CRM, support desk, and communication tools in 14 days. Zero disruption to existing workflows.' },
  { num: '02', title: 'Deploy', description: 'Five specialized agents activate across your revenue lifecycle — each trained on your ICP, processes, and compliance requirements.' },
  { num: '03', title: 'Scale', description: 'Revenue operations run autonomously, improving with every interaction. More pipeline, faster onboarding, lower churn — without adding headcount.' },
];

export default function Home({ agents, testimonials }) {
  const { openModal } = useDemoModal();

  return (
    <>
      <Head>
        <title>ArcAgent — The Autonomous Revenue OS</title>
        <meta name="description" content="ArcAgent builds and orchestrates multi-agent AI systems that manage your entire revenue lifecycle — sales, onboarding, support, and retention — without adding headcount." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid" style={{ background: '#0A0F2C' }}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(37,57,231,0.18) 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-32 pt-40">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-pill border border-white/10 bg-white/5 mb-8">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#F5C518' }} />
            <span className="text-sm font-medium text-[#C8CCE0]">Introducing The Autonomous Revenue OS</span>
          </div>
          <h1 className="font-syne font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.05]">
            Your Revenue Team,<br />
            <span className="text-gradient-blue">Running on Autopilot</span>
          </h1>
          <p className="text-lg md:text-xl text-[#C8CCE0] max-w-2xl mx-auto mb-10 leading-relaxed">
            ArcAgent builds and orchestrates multi-agent AI systems that manage your entire revenue lifecycle — sales, onboarding, support, and retention — without adding headcount.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button
              onClick={openModal}
              className="inline-flex items-center justify-center gap-2 font-medium text-base px-7 py-3.5 text-white rounded-button transition-all duration-200 active:scale-[0.98] hover:bg-[#3348F5]"
              style={{ background: '#2539E7' }}
            >
              Request a Demo
            </button>
            <Button variant="ghost" size="lg" href="/products">See How It Works →</Button>
          </div>
          <p className="text-sm text-[#8088A8] mb-10">Trusted by 200+ enterprise revenue teams</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {agents.map((agent) => (
              <Link key={agent.slug} href={`/products/${agent.slug}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-pill border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-200 group">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: agent.color, boxShadow: `0 0 8px ${agent.color}80` }} />
                <span className="text-sm font-medium text-[#C8CCE0] group-hover:text-white transition-colors">{agent.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section style={{ background: '#F5F0E8' }}>
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.value} className="text-center">
                <div className="font-syne font-bold text-4xl md:text-5xl text-[#0A0F2C] mb-2">{stat.value}</div>
                <div className="text-sm text-[#6B7094] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products Grid ── */}
      <section className="py-24" style={{ background: '#0A0F2C' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: '#F5C518' }}>OUR AGENTS</span>
            <h2 className="font-syne font-bold text-4xl md:text-5xl text-white mb-4">Five Agents. One Revenue OS.</h2>
            <p className="text-[#C8CCE0] text-lg max-w-2xl mx-auto">Each agent is specialized, autonomous, and deeply integrated — designed to take over an entire stage of your revenue lifecycle.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent) => (
              <Link
                key={agent.slug}
                href={`/products/${agent.slug}`}
                className="group block rounded-card p-6 transition-all duration-300 hover:-translate-y-1"
                style={{ background: '#0E1435', border: '1px solid rgba(255,255,255,0.08)', borderLeft: `3px solid ${agent.color}` }}
              >
                <span className="inline-block px-3 py-1 rounded-pill text-xs font-bold uppercase tracking-wide mb-3" style={{ background: `${agent.color}20`, color: agent.color }}>
                  {agent.badge}
                </span>
                <h3 className="font-syne font-bold text-xl text-white mb-1">{agent.name}</h3>
                <p className="text-sm font-medium mb-3" style={{ color: agent.color }}>{agent.tagline}</p>
                <p className="text-sm text-[#C8CCE0] leading-relaxed mb-4">{(agent.description || '').slice(0, 120)}…</p>
                <span className="text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: agent.color }}>Learn More →</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="ghost" size="lg" href="/products">View Full Product Suite</Button>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-24" style={{ background: '#0E1435' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: '#F5C518' }}>THE PROCESS</span>
            <h2 className="font-syne font-bold text-4xl md:text-5xl text-white mb-4">The ArcAgent Workflow</h2>
            <p className="text-[#C8CCE0] text-lg max-w-2xl mx-auto">From integration to autonomous operation in 14 days.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((step) => (
              <div key={step.num} className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-white/10 mb-6 font-syne font-bold text-2xl" style={{ background: 'rgba(37,57,231,0.15)', color: '#2539E7' }}>
                  {step.num}
                </div>
                <h3 className="font-syne font-bold text-xl text-white mb-3">{step.title}</h3>
                <p className="text-[#C8CCE0] text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      {testimonials && testimonials.length > 0 && (
        <section className="py-24 overflow-hidden" style={{ background: '#F5F0E8' }}>
          <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: '#2539E7' }}>SOCIAL PROOF</span>
            <h2 className="font-syne font-bold text-4xl md:text-5xl text-[#0A0F2C] mb-4">What Revenue Leaders Say</h2>
          </div>
          <div className="flex gap-6" style={{ animation: 'marquee-left 50s linear infinite', width: 'max-content' }}>
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="flex-shrink-0 w-80 rounded-card p-6" style={{ background: '#FFFDF8', border: '1px solid rgba(10,15,44,0.08)', boxShadow: '0 2px 8px rgba(10,15,44,0.06)' }}>
                <p className="text-sm text-[#3D4260] leading-relaxed mb-4">"{t.text.length > 140 ? t.text.slice(0, 140) + '…' : t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0" style={{ background: '#2539E7' }}>{t.initials}</div>
                  <div>
                    <div className="text-sm font-bold text-[#0A0F2C]">{t.author}</div>
                    <div className="text-xs text-[#6B7094]">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── CTA Banner ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#2539E7' }}>
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-white mb-4">Ready to Automate Your Revenue OS?</h2>
          <p className="mb-10 text-lg" style={{ color: 'rgba(255,255,255,0.8)' }}>Deploy all five agents in 14 days. No headcount required.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openModal}
              className="inline-flex items-center justify-center gap-2 font-medium text-base px-7 py-3.5 rounded-button transition-all duration-200 active:scale-[0.98]"
              style={{ background: '#FFFFFF', color: '#2539E7' }}
            >
              Request a Demo
            </button>
            <Button variant="ghost" size="lg" href="/pricing">View Pricing</Button>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const agents = getAgents();
  const testimonials = getTestimonials();
  return { props: { agents, testimonials } };
}
