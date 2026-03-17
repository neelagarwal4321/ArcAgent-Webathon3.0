import ScrollReveal from '@/components/shared/ScrollReveal';

export default function DashboardMetrics({ metrics = [], accentColor = '#2539E7' }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {metrics.map((m, i) => (
        <ScrollReveal key={m.label} delay={i * 0.06}>
          <div
            className="bg-surface-2 rounded-[10px] p-5 border-t-2 shadow-card-md"
            style={{ borderTopColor: accentColor }}
          >
            <p
              className="font-syne font-extrabold text-2xl leading-none -tracking-wide mb-1"
              style={{ color: accentColor }}
            >
              {m.value}
            </p>
            <p className="font-figtree text-sm font-medium text-text-primary">{m.label}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
