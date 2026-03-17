import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../shared/ScrollReveal';

const STAGES = [
  { step: 1, icon: '⚙️', title: 'Configure', description: 'Define agent scope, set guardrails, connect tools, train on your business context and tone.' },
  { step: 2, icon: '📊', title: 'Monitor', description: 'Real-time dashboards track every decision, flag anomalies, log all actions with full audit trail.' },
  { step: 3, icon: '🧠', title: 'Learn', description: 'Agents analyze outcomes, identify patterns, and refine strategies from every interaction.' },
  { step: 4, icon: '📈', title: 'Optimize', description: 'Performance improves continuously — conversion rates, resolution speed, and accuracy compound over time.' },
];

export default function LifecyclePipeline({ dark = true }) {
  return (
    <section className={`py-section-md px-6 ${dark ? 'bg-bg-base' : 'bg-bg-alt'}`}>
      <div className="max-w-content mx-auto">
        <ScrollReveal className="mb-4">
          <SectionHeader
            overline="CONTINUOUS IMPROVEMENT"
            heading="Agents That Get Smarter Every Day"
            subtext="Every ArcAgent deployment follows a four-stage intelligence pipeline. Your agents don't just execute — they observe, learn, and optimize autonomously."
            centered dark
            className="mb-12"
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(25%/2+8px)] right-[calc(25%/2+8px)] h-0.5 z-0" style={{ background: 'linear-gradient(90deg, #2539E7, #059669)' }} />
          {STAGES.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <div className={`relative rounded-card shadow-card border p-7 z-10 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-250 ${i === 0 ? 'border-primary/30 bg-surface-1' : 'bg-surface-1 border-[rgba(10,15,44,0.06)]'}`}>
                {i === 0 && <div className="absolute inset-0 rounded-card opacity-5" style={{ background: 'linear-gradient(135deg, #2539E7, transparent)' }} />}
                <div className="text-3xl mb-4">{s.icon}</div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-medium text-primary opacity-60">0{s.step}</span>
                  <h3 className="font-syne font-bold text-lg text-text-primary">{s.title}</h3>
                </div>
                <p className="font-figtree text-sm text-text-secondary leading-relaxed">{s.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal className="mt-8 text-center">
          <p className="font-figtree font-medium text-sm text-primary">Average 34% performance improvement in first 90 days</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
