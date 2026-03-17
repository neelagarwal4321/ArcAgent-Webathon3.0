import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../shared/ScrollReveal';

export default function AgentCarousel({ agents }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % agents.length), 5000);
    return () => clearInterval(t);
  }, [agents.length]);

  const agent = agents[current];

  return (
    <section className="bg-bg-base py-section-md px-6">
      <div className="max-w-content mx-auto">
        <ScrollReveal className="mb-12">
          <SectionHeader overline="PRODUCTS" heading="The ArcAgent Suite" centered dark />
        </ScrollReveal>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="bg-surface-1 rounded-card shadow-card-md border border-[rgba(10,15,44,0.06)] p-8 md:p-10"
              style={{ borderLeft: `4px solid ${agent.color}` }}
            >
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${agent.color}18` }}>
                      <span className="w-4 h-4 rounded-full" style={{ backgroundColor: agent.color }} />
                    </div>
                    <div>
                      <h3 className="font-syne font-bold text-2xl text-text-primary">{agent.name}</h3>
                      <span className="inline-block font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-pill" style={{ color: agent.color, backgroundColor: `${agent.color}15` }}>{agent.badge}</span>
                    </div>
                  </div>
                  <p className="font-figtree text-base text-text-secondary leading-relaxed mb-6">{agent.description}</p>
                  <ul className="space-y-2.5 mb-6">
                    {agent.features.slice(0, 3).map((f) => (
                      <li key={f.name} className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: `${agent.color}20` }}>
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke={agent.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </span>
                        <span className="font-figtree text-sm text-text-secondary"><strong className="text-text-primary font-medium">{f.name}</strong> — {f.description}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={`/products/${agent.slug}`} className="font-figtree font-medium text-sm transition-colors hover:opacity-80" style={{ color: agent.color }}>
                    Learn More →
                  </Link>
                </div>
                <div className="flex-shrink-0 flex flex-col gap-4 lg:w-64">
                  {agent.metrics.slice(0, 2).map((m) => (
                    <div key={m.label} className="bg-surface-2 rounded-[10px] p-5 border-t-2" style={{ borderTopColor: agent.color }}>
                      <p className="font-syne font-extrabold text-3xl -tracking-wide mb-1" style={{ color: agent.color }}>{m.value}</p>
                      <p className="font-figtree font-medium text-sm text-text-primary">{m.label}</p>
                      <p className="font-figtree text-xs text-text-muted mt-1">{m.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-7">
            <button onClick={() => setCurrent((c) => (c - 1 + agents.length) % agents.length)} className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-text-on-dark-muted hover:text-white hover:border-white/30 transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </button>
            <div className="flex gap-2">
              {agents.map((a, i) => (
                <button key={a.slug} onClick={() => setCurrent(i)}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{ backgroundColor: i === current ? a.color : 'rgba(255,255,255,0.2)', transform: i === current ? 'scale(1.3)' : 'scale(1)' }}
                />
              ))}
            </div>
            <button onClick={() => setCurrent((c) => (c + 1) % agents.length)} className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-text-on-dark-muted hover:text-white hover:border-white/30 transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
