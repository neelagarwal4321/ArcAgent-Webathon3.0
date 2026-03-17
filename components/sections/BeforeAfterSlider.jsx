import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../shared/ScrollReveal';

const BEFORE = [
  { icon: '✗', text: '14-day onboarding cycle' },
  { icon: '✗', text: '62% of leads go cold before contact' },
  { icon: '✗', text: '11-minute average support response' },
  { icon: '✗', text: '$340 cost per support ticket' },
  { icon: '✗', text: '8% annual churn rate' },
  { icon: '✗', text: 'Manual CRM updates, 3 hours/day' },
];

const AFTER = [
  { icon: '✓', text: '4-hour onboarding with ArcBoard' },
  { icon: '✓', text: '98% of leads contacted in < 8 seconds' },
  { icon: '✓', text: 'Instant resolution, 89% auto-handled' },
  { icon: '✓', text: '$47 cost per ticket with ArcDesk' },
  { icon: '✓', text: '3.2% churn with ArcPulse monitoring' },
  { icon: '✓', text: 'Zero manual entry — full CRM sync' },
];

export default function BeforeAfterSlider() {
  const [pos, setPos] = useState(50);
  const containerRef = useRef(null);

  const handleDrag = (e, info) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const x = info.point.x - left;
    setPos(Math.min(90, Math.max(10, (x / width) * 100)));
  };

  return (
    <section className="bg-bg-base py-section-md px-6">
      <div className="max-w-content mx-auto">
        <ScrollReveal className="mb-12">
          <SectionHeader overline="THE DIFFERENCE" heading="Before and After ArcAgent" centered dark />
        </ScrollReveal>

        {/* Desktop slider */}
        <div ref={containerRef} className="relative hidden md:flex rounded-card overflow-hidden shadow-card-md" style={{ minHeight: 380 }}>
          {/* Before */}
          <div className="absolute inset-0 flex" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)`, background: 'rgba(239,68,68,0.04)' }}>
            <div className="w-full p-10">
              <p className="font-figtree font-semibold text-base text-red-400 mb-5">Without ArcAgent</p>
              <div className="space-y-3">
                {BEFORE.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-red-400 font-bold mt-0.5 shrink-0">{item.icon}</span>
                    <span className="font-figtree text-sm text-text-secondary">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* After */}
          <div className="w-full p-10" style={{ background: 'rgba(5,150,105,0.04)' }}>
            <p className="font-figtree font-semibold text-base mb-5" style={{ color: '#059669' }}>With ArcAgent</p>
            <div className="space-y-3">
              {AFTER.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="font-bold mt-0.5 shrink-0" style={{ color: '#059669' }}>{item.icon}</span>
                  <span className="font-figtree text-sm text-text-secondary">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Slider handle */}
          <motion.div
            className="absolute top-0 bottom-0 z-10 flex items-center justify-center cursor-ew-resize"
            style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
            drag="x" dragConstraints={containerRef} dragElastic={0}
            onDrag={handleDrag}
          >
            <div className="w-1 h-full bg-primary opacity-60" />
            <div className="absolute w-10 h-10 rounded-full bg-surface-1 shadow-card-md border border-[rgba(10,15,44,0.1)] flex items-center justify-center gap-1">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M3 2L1 5l2 3M7 2l2 3-2 3" stroke="#2539E7" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </motion.div>
        </div>

        {/* Mobile stacked */}
        <div className="md:hidden grid grid-cols-1 gap-4">
          {[
            { title: 'Without ArcAgent', items: BEFORE, bg: 'rgba(239,68,68,0.04)', titleColor: '#EF4444' },
            { title: 'With ArcAgent', items: AFTER, bg: 'rgba(5,150,105,0.04)', titleColor: '#059669' },
          ].map((side) => (
            <div key={side.title} className="rounded-card p-6 shadow-card" style={{ background: side.bg }}>
              <p className="font-figtree font-semibold text-base mb-4" style={{ color: side.titleColor }}>{side.title}</p>
              <div className="space-y-2.5">
                {side.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="font-bold shrink-0" style={{ color: side.titleColor }}>{item.icon}</span>
                    <span className="font-figtree text-sm text-text-secondary">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
