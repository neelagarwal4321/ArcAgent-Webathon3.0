import Link from 'next/link';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../shared/ScrollReveal';

const ICONS = { Landmark: '🏦', Cpu: '💻', Heart: '❤️', Scale: '⚖️', ShoppingBag: '🛍', Briefcase: '💼' };

export default function IndustriesPreview({ industries }) {
  return (
    <section className="bg-bg-base page-section">
      <div className="page-container">
        <ScrollReveal className="mb-14">
          <SectionHeader overline="VERTICALS" heading="Built for Complex, Regulated, and High-Volume Industries" centered dark />
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {industries.slice(0, 6).map((ind, i) => (
            <ScrollReveal key={ind.id} delay={i * 0.06}>
              <div className="bg-surface-1 rounded-card shadow-card border border-[rgba(10,15,44,0.06)] p-7 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-[250ms] h-full">
                <div className="text-3xl mb-4">{ICONS[ind.icon] || '🏢'}</div>
                <h3 className="font-syne font-semibold text-base text-text-primary mb-2.5">{ind.name}</h3>
                <p className="font-figtree text-xs text-text-muted leading-relaxed">{ind.caseStudySnippet.result}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal className="text-center">
          <Link href="/industries" className="font-figtree font-medium text-sm text-primary hover:text-primary-hover transition-colors">View All Industries →</Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
