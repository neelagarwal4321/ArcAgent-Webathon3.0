import { useState, useRef } from 'react';
import Head from 'next/head';
import { getIndustries } from '../lib/industries';
import { getAgents } from '../lib/agents';
import SectionHeader from '../components/ui/SectionHeader';
import TabBar from '../components/ui/TabBar';
import AgentBadge from '../components/ui/AgentBadge';
import ScrollReveal from '../components/shared/ScrollReveal';
import CTABanner from '../components/shared/CTABanner';

const INDUSTRY_ICONS = {
  'financial-services': '🏦',
  'saas-technology': '💻',
  'healthcare-insurance': '🏥',
  'legal-compliance': '⚖️',
  'ecommerce-retail': '🛍️',
  'professional-services': '💼',
};

export default function IndustriesPage({ industries, agentMap }) {
  const [activeTab, setActiveTab] = useState(industries[0]?.id || '');
  const tabSectionRef = useRef(null);

  const activeIndustry = industries.find((ind) => ind.id === activeTab);

  const tabs = industries.map((ind) => ({
    id: ind.id,
    label: ind.name,
  }));

  return (
    <>
      <Head>
        <title>Industries — ArcAgent</title>
        <meta
          name="description"
          content="ArcAgent is built for complex, regulated industries. Explore how our autonomous agents serve financial services, SaaS, healthcare, legal, e-commerce, and professional services."
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
              overline="By Industry"
              heading="Built for Complex, Regulated Industries"
              subtext="ArcAgent's agents are deployed across the most demanding enterprise environments. See how each industry leverages the platform to automate revenue operations at scale."
              centered
              dark
            />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Tab Bar + Industry Panel ── */}
      <section ref={tabSectionRef} className="page-section" style={{ background: '#0E1435' }}>
        <div className="page-container">
          <ScrollReveal>
            <div className="mb-10 overflow-x-auto">
              <TabBar tabs={tabs} activeTab={activeTab} onChange={setActiveTab} dark />
            </div>
          </ScrollReveal>

          {activeIndustry && (
            <ScrollReveal key={activeIndustry.id}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* Left column: icon, name, overview, agents */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl leading-none">
                      {INDUSTRY_ICONS[activeIndustry.id] || '🏢'}
                    </span>
                    <h2 className="font-syne font-bold text-2xl md:text-3xl text-white">
                      {activeIndustry.name}
                    </h2>
                  </div>
                  <p className="font-figtree text-[#C8CCE0] leading-relaxed whitespace-pre-line mb-8">
                    {activeIndustry.overview}
                  </p>

                  <div>
                    <p className="font-mono text-[11px] tracking-widest uppercase text-[#8088A8] mb-4">
                      Recommended Agents
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {activeIndustry.agentMapping.map((slug) => {
                        const agent = agentMap[slug];
                        if (!agent) return null;
                        return (
                          <AgentBadge
                            key={slug}
                            name={agent.name}
                            color={agent.color}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Right column: challenges + case study snippet */}
                <div className="flex flex-col gap-6">
                  <div
                    className="rounded-card p-7"
                    style={{
                      background: '#0A0F2C',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <h3 className="font-syne font-bold text-lg text-white mb-5">
                      Key Industry Challenges
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {activeIndustry.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span
                            className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold"
                            style={{
                              background: 'rgba(239,68,68,0.12)',
                              color: '#EF4444',
                            }}
                          >
                            !
                          </span>
                          <span className="font-figtree text-sm text-[#C8CCE0] leading-relaxed">
                            {challenge}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {activeIndustry.caseStudySnippet && (
                    <div
                      className="rounded-card p-7"
                      style={{
                        background: '#0A0F2C',
                        border: '1px solid rgba(37,57,231,0.3)',
                      }}
                    >
                      <p className="font-mono text-[11px] tracking-widest uppercase text-[#2539E7] mb-3">
                        Featured Case Study
                      </p>
                      <p className="font-figtree font-semibold text-white mb-2">
                        {activeIndustry.caseStudySnippet.client}
                      </p>
                      <p className="font-figtree text-sm text-[#C8CCE0] leading-relaxed">
                        {activeIndustry.caseStudySnippet.result}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* ── All Industries Overview Grid ── */}
      <section className="page-section" style={{ background: '#0A0F2C' }}>
        <div className="page-container">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="font-mono text-[11px] font-medium tracking-widest uppercase text-[#2539E7] mb-3 block">
                Full Coverage
              </span>
              <h2 className="font-syne font-bold text-3xl md:text-4xl text-white">
                Every Industry, One Platform
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <ScrollReveal key={ind.id} delay={i * 0.07}>
                <button
                  onClick={() => {
                    setActiveTab(ind.id);
                    tabSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="w-full text-left rounded-card p-7 transition-all duration-300 hover:-translate-y-1 group"
                  style={{
                    background: activeTab === ind.id ? '#0E1435' : '#0E1435',
                    border:
                      activeTab === ind.id
                        ? '1px solid rgba(37,57,231,0.4)'
                        : '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <span className="text-3xl block mb-4">
                    {INDUSTRY_ICONS[ind.id] || '🏢'}
                  </span>
                  <h3 className="font-syne font-bold text-lg text-white mb-2 group-hover:text-white">
                    {ind.name}
                  </h3>
                  <p className="font-figtree text-xs text-[#8088A8] mb-4 leading-relaxed">
                    {ind.overview.split('\n')[0].slice(0, 110)}...
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {ind.agentMapping.map((slug) => {
                      const agent = agentMap[slug];
                      if (!agent) return null;
                      return (
                        <AgentBadge
                          key={slug}
                          name={agent.name}
                          color={agent.color}
                          small
                        />
                      );
                    })}
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <CTABanner
        headline="Ready to see ArcAgent in your industry?"
        buttonText="Schedule a Demo →"
      />
    </>
  );
}

export async function getStaticProps() {
  const industries = getIndustries();
  const agents = getAgents();
  const agentMap = Object.fromEntries(agents.map((a) => [a.slug, a]));
  return { props: { industries, agentMap } };
}
