import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../shared/ScrollReveal';

const STEPS = [
  { step: '01', icon: '🗂', title: 'Workflow Audit', description: 'We map your existing revenue workflows, identify automation opportunities, and define clear scope for each agent.' },
  { step: '02', icon: '🧠', title: 'Agent Training', description: 'Each agent is trained on your business context, CRM data, tone guidelines, escalation thresholds, and tool access.' },
  { step: '03', icon: '🔗', title: 'System Integration', description: 'Agents connect to your stack — Salesforce, HubSpot, Zendesk, SAP, and more — via native or custom integrations.' },
  { step: '04', icon: '🚀', title: 'Deploy & Scale', description: 'Agents go live with real-time monitoring. Human override at every decision node. Scales automatically with demand.' },
];

export default function HowItWorks() {
  return (
    <section className="bg-bg-alt page-section">
      <div className="page-container">
        <ScrollReveal className="mb-14">
          <SectionHeader overline="PROCESS" heading="From Contract to Deployment in 14 Days" centered dark />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(25%/2+8px)] right-[calc(25%/2+8px)] h-px" style={{ background: 'linear-gradient(90deg, rgba(37,57,231,0.3), rgba(0,229,255,0.3))' }} />
          {STEPS.map((s, i) => (
            <ScrollReveal key={s.step} delay={i * 0.1}>
              <div className="bg-surface-1 rounded-card shadow-card border border-[rgba(10,15,44,0.06)] p-7 relative hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-[250ms]">
                <p className="absolute top-4 right-5 font-syne font-extrabold text-5xl text-[rgba(10,15,44,0.05)] leading-none select-none">{s.step}</p>
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-syne font-bold text-lg text-text-primary mb-2">{s.title}</h3>
                <p className="font-figtree text-sm text-text-secondary leading-relaxed">{s.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
