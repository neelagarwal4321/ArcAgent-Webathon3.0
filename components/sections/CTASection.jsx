import Link from 'next/link';
import { useDemoModal } from '@/context/DemoModalContext';
import ScrollReveal from '../shared/ScrollReveal';

export default function CTASection() {
  const { openModal } = useDemoModal();

  return (
    <section className="relative page-section text-center overflow-hidden bg-grid" style={{ backgroundColor: '#2539E7' }}>
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)' }} />
      </div>
      <div className="relative z-10 page-container">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="font-syne font-bold text-3xl md:text-5xl -tracking-[0.02em] text-white mb-5 leading-[1.08]">
              Ready to Deploy Your Agent Workforce?
            </h2>
            <p className="font-figtree text-lg text-white/75 mb-10 max-w-xl mx-auto">
              Join 200+ enterprise teams automating their revenue operations with ArcAgent. Live in 14 days, guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={openModal} className="bg-white text-primary font-figtree font-semibold text-sm px-8 py-3.5 rounded-button hover:bg-surface-2 transition-colors w-full sm:w-auto">
                Schedule a Demo →
              </button>
              <Link href="/contact" className="font-figtree font-medium text-sm text-white/80 hover:text-white transition-colors border border-white/20 px-8 py-3.5 rounded-button w-full sm:w-auto text-center">
                Contact Sales
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
