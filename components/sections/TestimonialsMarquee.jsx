import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../shared/ScrollReveal';

function TestimonialCard({ t }) {
  return (
    <div className="bg-surface-1 rounded-card shadow-card border border-[rgba(10,15,44,0.06)] p-6 w-[340px] shrink-0 mx-3">
      <p className="font-figtree text-sm italic text-text-secondary leading-relaxed mb-4">"{t.text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
          <span className="font-syne font-bold text-xs text-primary">{t.initials}</span>
        </div>
        <div>
          <p className="font-figtree font-semibold text-sm text-text-primary">{t.author}</p>
          <p className="font-figtree text-xs text-text-muted">{t.role} · {t.company}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsMarquee({ testimonials }) {
  const half = Math.ceil(testimonials.length / 2);
  const row1 = testimonials.slice(0, half);
  const row2 = testimonials.slice(half);

  return (
    <section className="bg-bg-base py-section-md overflow-hidden">
      <div className="max-w-content mx-auto px-6 mb-12">
        <ScrollReveal>
          <SectionHeader overline="SOCIAL PROOF" heading="Trusted by Revenue Leaders Worldwide" centered dark />
        </ScrollReveal>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="flex mb-4 hover:[animation-play-state:paused]">
        <div className="flex animate-marquee-left">
          {[...row1, ...row1].map((t, i) => <TestimonialCard key={i} t={t} />)}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="flex hover:[animation-play-state:paused]">
        <div className="flex animate-marquee-right">
          {[...row2, ...row2].map((t, i) => <TestimonialCard key={i} t={t} />)}
        </div>
      </div>
    </section>
  );
}
