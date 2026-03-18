import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { getPricingTiers } from '../lib/pricing';
import { useDemoModal } from '../context/DemoModalContext';
import SectionHeader from '../components/ui/SectionHeader';
import ScrollReveal from '../components/shared/ScrollReveal';
import CTABanner from '../components/shared/CTABanner';
import FAQSection from '../components/shared/FAQSection';

const PRICING_FAQS = [
  {
    question: 'Can I start with just one agent?',
    answer:
      'Yes. The Starter plan gives you one agent of your choice. You can upgrade to include more agents at any time — upgrades take effect immediately.',
  },
  {
    question: 'What counts as a task?',
    answer:
      'Each autonomous action an agent takes counts as one task: an email sent, a lead scored, a ticket resolved, a health score calculated, or a document verification completed.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'We offer a 14-day paid pilot with full deployment and hands-on setup. Most clients see measurable results within the first week — well before the pilot ends.',
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer:
      'Yes — you can change plans at any time. Upgrades take effect immediately. Downgrades take effect at the start of the next billing cycle.',
  },
  {
    question: 'What does the 14-day deployment include?',
    answer:
      'Our team handles everything: ICP model setup, CRM integration, agent configuration, compliance guardrails, and training on your specific workflows. You go live fully configured — no technical work required on your end.',
  },
  {
    question: 'Is there a contract minimum?',
    answer:
      'Monthly plans have no commitment — cancel anytime. Annual plans are billed upfront and include a 20% discount versus monthly pricing. Enterprise contracts are custom-negotiated.',
  },
];

const COMPARISON_ROWS = [
  { key: 'agents', label: 'Agents Included' },
  { key: 'tasks', label: 'Monthly Tasks' },
  { key: 'integrations', label: 'Integrations' },
  { key: 'support', label: 'Support Level' },
  { key: 'sla', label: 'Uptime SLA' },
  { key: 'customTraining', label: 'Custom Training' },
  { key: 'auditLog', label: 'Audit Log' },
  { key: 'dedicatedCSM', label: 'Dedicated CSM' },
  { key: 'ssoSaml', label: 'SSO / SAML' },
  { key: 'customDeployment', label: 'Custom Deployment' },
  { key: 'apiAccess', label: 'API Access' },
  { key: 'dashboards', label: 'Live Dashboards' },
  { key: 'teamMembers', label: 'Team Members' },
];

function CheckIcon({ color = '#059669' }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mx-auto flex-shrink-0">
      <path
        d="M3 8l3.5 3.5L13 5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mx-auto flex-shrink-0">
      <path
        d="M4 4l8 8M12 4l-8 8"
        stroke="#4B5563"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FeatureCell({ value, highlighted }) {
  if (value === true) return <CheckIcon color={highlighted ? '#2539E7' : '#059669'} />;
  if (value === false || value === null) return <CrossIcon />;
  return (
    <span
      className={`font-figtree text-xs font-medium ${
        highlighted ? 'text-[#0A0F2C]' : 'text-[#C8CCE0]'
      }`}
    >
      {value}
    </span>
  );
}

export default function PricingPage({ tiers }) {
  const [annual, setAnnual] = useState(true);
  const { openModal } = useDemoModal();

  return (
    <>
      <Head>
        <title>Pricing — ArcAgent</title>
        <meta
          name="description"
          content="Simple, transparent pricing for the ArcAgent revenue intelligence suite. Start with one agent, scale to five. Monthly and annual plans available."
        />
      </Head>

      {/* ── Hero ── */}
      <section className="relative pt-16 md:pt-20 lg:pt-28 pb-10 md:pb-12 overflow-hidden" style={{ background: '#0A0F2C' }}>
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
              overline="Pricing"
              heading="Simple, Transparent Pricing"
              subtext="Start with one agent. Scale to all five. No hidden fees, no per-seat surprises."
              centered
              dark
            />
            </div>
          </ScrollReveal>

          {/* Monthly / Annual toggle */}
          <ScrollReveal delay={0.15}>
            <div className="flex justify-center mt-10">
              <div
                className="inline-flex items-center gap-1 p-1 rounded-pill"
                style={{
                  background: '#0E1435',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <button
                  onClick={() => setAnnual(false)}
                  className={`px-5 py-2.5 rounded-pill text-sm font-medium transition-all duration-200 ${
                    !annual ? 'bg-white text-[#0A0F2C] shadow-sm' : 'text-[#C8CCE0]'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setAnnual(true)}
                  className={`px-5 py-2.5 rounded-pill text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    annual ? 'bg-white text-[#0A0F2C] shadow-sm' : 'text-[#C8CCE0]'
                  }`}
                >
                  Annual
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(245,197,24,0.15)', color: '#F5C518' }}
                  >
                    Save 20%
                  </span>
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Pricing Cards ── */}
      <section className="pt-0 pb-16 md:pb-20 lg:pb-28" style={{ background: '#0A0F2C' }}>
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, i) => (
              <ScrollReveal key={tier.name} delay={i * 0.08}>
                <div
                  className="rounded-card p-7 flex flex-col relative h-full"
                  style={{
                    background: tier.highlighted ? '#FFFDF8' : '#0E1435',
                    border: tier.highlighted
                      ? '2px solid #2539E7'
                      : '1px solid rgba(255,255,255,0.08)',
                    boxShadow: tier.highlighted
                      ? '0 0 40px rgba(37,57,231,0.12)'
                      : 'none',
                  }}
                >
                  {/* Most Popular badge */}
                  {tier.badge && (
                    <div
                      className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold text-white rounded-pill whitespace-nowrap"
                      style={{ background: '#2539E7' }}
                    >
                      {tier.badge}
                    </div>
                  )}

                  {/* Tier name */}
                  <h3
                    className={`font-syne font-bold text-xl mb-1 ${
                      tier.highlighted ? 'text-[#0A0F2C]' : 'text-white'
                    }`}
                  >
                    {tier.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-7 mt-3">
                    {tier.monthly !== null ? (
                      <>
                        <div className="flex items-end gap-1">
                          <span
                            className={`font-syne font-bold text-4xl leading-none ${
                              tier.highlighted ? 'text-[#0A0F2C]' : 'text-white'
                            }`}
                          >
                            ${annual ? tier.annual : tier.monthly}
                          </span>
                          <span
                            className={`text-sm mb-1 ${
                              tier.highlighted ? 'text-[#6B7094]' : 'text-[#8088A8]'
                            }`}
                          >
                            /mo
                          </span>
                        </div>
                        {annual && (
                          <p className="font-figtree text-xs mt-1" style={{ color: '#059669' }}>
                            billed annually
                          </p>
                        )}
                      </>
                    ) : (
                      <span
                        className={`font-syne font-bold text-3xl ${
                          tier.highlighted ? 'text-[#0A0F2C]' : 'text-white'
                        }`}
                      >
                        Custom
                      </span>
                    )}
                  </div>

                  {/* Feature list */}
                  <ul className="flex flex-col gap-3 mb-8 flex-1">
                    {Object.values(tier.features)
                      .filter((f) => typeof f === 'string' && f)
                      .map((feature, fi) => (
                        <li key={fi} className="flex items-start gap-2.5">
                          <span className="mt-0.5">
                            <CheckIcon color={tier.highlighted ? '#2539E7' : '#059669'} />
                          </span>
                          <span
                            className={`font-figtree text-xs leading-relaxed ${
                              tier.highlighted ? 'text-[#3D4260]' : 'text-[#C8CCE0]'
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                  </ul>

                  {/* CTA button */}
                  {tier.cta.type === 'modal' ? (
                    <button
                      onClick={openModal}
                      className="w-full py-3 font-figtree font-medium text-sm rounded-button transition-all hover:opacity-90 active:scale-[0.98]"
                      style={
                        tier.highlighted
                          ? { background: '#2539E7', color: '#FFFFFF' }
                          : {
                              background: 'rgba(37,57,231,0.12)',
                              color: '#2539E7',
                              border: '1px solid rgba(37,57,231,0.3)',
                            }
                      }
                    >
                      {tier.cta.label}
                    </button>
                  ) : (
                    <Link
                      href={tier.cta.href || '/contact'}
                      className="w-full py-3 font-figtree font-medium text-sm rounded-button transition-all hover:opacity-90 text-center block"
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        color: '#C8CCE0',
                        border: '1px solid rgba(255,255,255,0.12)',
                      }}
                    >
                      {tier.cta.label}
                    </Link>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="page-section" style={{ background: '#0E1435' }}>
        <div className="page-container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="font-mono text-[11px] font-medium tracking-widest uppercase text-[#2539E7] mb-3 block">
                Compare Plans
              </span>
              <h2 className="font-syne font-bold text-3xl md:text-4xl text-white">
                Full Feature Comparison
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="overflow-x-auto">
            <div
              className="rounded-card overflow-hidden min-w-[640px]"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {/* Table header */}
              <div
                className="grid"
                style={{
                  gridTemplateColumns: '1fr repeat(4, 1fr)',
                  background: '#0A0F2C',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div className="px-6 py-4" />
                {tiers.map((tier) => (
                  <div
                    key={tier.name}
                    className="px-4 py-4 text-center"
                    style={
                      tier.highlighted
                        ? {
                            background: 'rgba(37,57,231,0.12)',
                            borderLeft: '1px solid rgba(37,57,231,0.2)',
                            borderRight: '1px solid rgba(37,57,231,0.2)',
                          }
                        : {}
                    }
                  >
                    <p
                      className={`font-syne font-bold text-sm ${
                        tier.highlighted ? 'text-[#2539E7]' : 'text-white'
                      }`}
                    >
                      {tier.name}
                    </p>
                  </div>
                ))}
              </div>

              {/* Table rows */}
              {COMPARISON_ROWS.map((row, ri) => (
                <div
                  key={row.key}
                  className="grid"
                  style={{
                    gridTemplateColumns: '1fr repeat(4, 1fr)',
                    background: ri % 2 === 0 ? '#0E1435' : 'rgba(10,15,44,0.5)',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  <div className="px-6 py-4">
                    <span className="font-figtree text-sm text-[#C8CCE0]">{row.label}</span>
                  </div>
                  {tiers.map((tier) => (
                    <div
                      key={tier.name}
                      className="px-4 py-4 flex items-center justify-center"
                      style={
                        tier.highlighted
                          ? {
                              background: 'rgba(37,57,231,0.05)',
                              borderLeft: '1px solid rgba(37,57,231,0.1)',
                              borderRight: '1px solid rgba(37,57,231,0.1)',
                            }
                          : {}
                      }
                    >
                      <FeatureCell
                        value={tier.features[row.key]}
                        highlighted={tier.highlighted}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <FAQSection faqs={PRICING_FAQS} title="Pricing FAQs" dark />

      {/* ── CTA Banner ── */}
      <CTABanner
        headline="Not sure which plan is right for you?"
        buttonText="Talk to Our Team →"
      />
    </>
  );
}

export async function getStaticProps() {
  const tiers = getPricingTiers();
  return { props: { tiers } };
}
