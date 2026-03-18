import ScrollReveal from '../shared/ScrollReveal';
import { useDemoModal } from '@/context/DemoModalContext';

const PERKS = [
  '30-minute session',
  'No commitment',
  'Tailored to your workflows',
  'Live Q&A included',
];

export default function BookDemo() {
  const { openModal } = useDemoModal();

  return (
    <section className="bg-bg-base page-section">
      <div className="page-container">
        <ScrollReveal>
          <div
            className="relative rounded-card overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #0E1435 0%, #111836 60%, #0A0F2C 100%)',
              border: '1px solid rgba(37,57,231,0.35)',
              boxShadow: '0 0 60px rgba(37,57,231,0.18), 0 0 120px rgba(37,57,231,0.08), inset 0 1px 0 rgba(255,255,255,0.06)',
            }}
          >
            {/* Strong top spotlight */}
            <div
              className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
              style={{
                top: '-80px',
                width: '700px',
                height: '500px',
                background: 'radial-gradient(ellipse at 50% 0%, rgba(37,57,231,0.55) 0%, rgba(37,57,231,0.15) 35%, transparent 70%)',
              }}
            />
            {/* Secondary cyan accent */}
            <div
              className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
              style={{
                top: '-40px',
                width: '300px',
                height: '200px',
                background: 'radial-gradient(ellipse at 50% 0%, rgba(0,229,255,0.12) 0%, transparent 70%)',
              }}
            />

            <div className="relative z-10 flex flex-col items-center text-center px-8 py-16 md:py-20 md:px-16">
              {/* Eyebrow */}
              <span className="inline-block font-syne font-semibold text-xs tracking-widest uppercase text-[#00E5FF] mb-5">
                Live Demo
              </span>

              {/* Heading */}
              <h2 className="font-syne font-bold text-4xl md:text-5xl text-white leading-tight mb-5 max-w-2xl">
                See what ArcAgent can do{' '}
                <span className="text-gradient-blue">for your team</span>
              </h2>

              {/* Sub */}
              <p className="font-figtree text-base md:text-lg max-w-lg mb-10" style={{ color: '#C8CCE0' }}>
                A live walkthrough built around your pipeline — no slides, no fluff. Just agents working.
              </p>

              {/* CTA */}
              <button
                onClick={openModal}
                className="inline-flex items-center gap-2.5 bg-primary hover:bg-primary-dark text-white font-figtree font-semibold text-sm px-9 py-4 rounded-pill transition-colors mb-10"
                style={{ boxShadow: '0 0 24px rgba(37,57,231,0.45)' }}
              >
                Book a Live Demo
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Perks */}
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                {PERKS.map((p) => (
                  <span key={p} className="flex items-center gap-1.5 font-figtree text-xs" style={{ color: '#8088A8' }}>
                    <span style={{ color: '#00E5FF' }}>✓</span>
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
