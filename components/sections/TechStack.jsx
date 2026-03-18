import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../shared/ScrollReveal';

const STACK = [
  { category: 'Orchestration', items: ['LangGraph', 'CrewAI', 'AutoGen', 'LlamaIndex'] },
  { category: 'AI Models', items: ['GPT-4o', 'Claude 3.5', 'Gemini 1.5', 'Mistral'] },
  { category: 'Cloud', items: ['AWS', 'Azure', 'GCP', 'Kubernetes'] },
  { category: 'Integrations', items: ['Salesforce', 'HubSpot', 'Zendesk', 'SAP', 'Jira', 'Slack'] },
];

const BADGES = [
  { label: 'SOC 2 Type II', icon: '🛡' },
  { label: 'ISO 27001', icon: '✓' },
  { label: 'GDPR Ready', icon: '🔒' },
];

export default function TechStack() {
  return (
    <section className="bg-bg-base page-section">
      <div className="page-container">
        <ScrollReveal className="mb-12">
          <SectionHeader overline="INFRASTRUCTURE" heading="Enterprise-Grade Infrastructure" centered dark />
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {STACK.map((col, ci) => (
            <ScrollReveal key={col.category} delay={ci * 0.08}>
              <div className="bg-surface-1 rounded-card shadow-card border border-[rgba(10,15,44,0.06)] p-5">
                <p className="font-syne font-semibold text-sm text-text-primary mb-4">{col.category}</p>
                <div className="flex flex-wrap gap-2">
                  {col.items.map((item) => (
                    <span key={item} className="font-mono text-xs text-text-secondary bg-surface-3 px-2.5 py-1 rounded-pill border border-[rgba(10,15,44,0.06)]">{item}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal className="flex flex-wrap justify-center gap-4">
          {BADGES.map((b) => (
            <div key={b.label} className="flex items-center gap-2 bg-surface-1 rounded-pill px-5 py-2.5 shadow-card border border-[rgba(10,15,44,0.06)]">
              <span className="text-lg">{b.icon}</span>
              <span className="font-figtree font-medium text-sm text-text-primary">{b.label}</span>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
