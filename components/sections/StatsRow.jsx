import ScrollReveal from '../shared/ScrollReveal';

const STATS = [
  { value: '500M+', label: 'Tasks Automated', description: 'Across all active ArcAgent deployments' },
  { value: '98.7%', label: 'Resolution Rate', description: 'Average support resolution accuracy' },
  { value: '73%', label: 'Cost Reduction', description: 'Average ops cost reduction for clients' },
];

function StatCard({ stat, delay }) {
  return (
    <ScrollReveal delay={delay} className="flex-1 min-w-[200px]">
      <div className="bg-surface-1 rounded-card shadow-card border border-[rgba(10,15,44,0.06)] p-7 text-center hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-250">
        <p className="font-syne font-extrabold text-[40px] leading-none -tracking-[0.02em] text-primary mb-2">{stat.value}</p>
        <p className="font-syne font-semibold text-base text-text-primary mb-1">{stat.label}</p>
        <p className="font-figtree text-xs text-text-muted">{stat.description}</p>
      </div>
    </ScrollReveal>
  );
}

export default function StatsRow() {
  return (
    <section className="bg-bg-base py-16 px-6">
      <div className="max-w-content mx-auto">
        <div className="flex flex-col sm:flex-row gap-6">
          {STATS.map((stat, i) => <StatCard key={stat.label} stat={stat} delay={i * 0.08} />)}
        </div>
      </div>
    </section>
  );
}
