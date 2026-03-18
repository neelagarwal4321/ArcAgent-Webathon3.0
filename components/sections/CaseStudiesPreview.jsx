import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../shared/ScrollReveal';
import { AGENT_COLORS } from '@/lib/constants';

export default function CaseStudiesPreview({ caseStudies }) {
  const [openId, setOpenId] = useState(null);
  const items = caseStudies.slice(0, 3);

  return (
    <section className="bg-bg-alt page-section">
      <div className="page-container">
        <ScrollReveal className="mb-14">
          <SectionHeader overline="PROOF" heading="Results That Speak for Themselves" centered dark />
        </ScrollReveal>
        <div className="flex flex-col gap-4 mb-12">
          {items.map((cs, i) => (
            <ScrollReveal key={cs.id} delay={i * 0.06}>
              <div className="bg-surface-1 rounded-card shadow-card border border-[rgba(10,15,44,0.06)] overflow-hidden"
                style={{ borderLeft: `4px solid ${AGENT_COLORS[cs.agentsUsed[0]] || '#2539E7'}` }}>
                <button
                  onClick={() => setOpenId(openId === cs.id ? null : cs.id)}
                  className="w-full flex items-start justify-between p-7 text-left gap-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-[10px] text-text-muted tracking-wider uppercase">{cs.industry}</span>
                      <span className="text-text-muted">·</span>
                      <span className="font-figtree text-xs text-text-muted">{cs.client}</span>
                    </div>
                    <p className="font-syne font-semibold text-base text-text-primary">{cs.headline}</p>
                  </div>
                  <motion.span animate={{ rotate: openId === cs.id ? 180 : 0 }} transition={{ duration: 0.25 }} className="shrink-0 mt-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="#6B7094" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openId === cs.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="px-7 pb-7 bg-surface-2 border-t border-[rgba(10,15,44,0.06)]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                          <div>
                            <p className="font-figtree font-semibold text-sm text-text-primary mb-2">The Challenge</p>
                            <p className="font-figtree text-sm text-text-secondary">{cs.challenge}</p>
                          </div>
                          <div>
                            <p className="font-figtree font-semibold text-sm text-text-primary mb-2">The Results</p>
                            <div className="grid grid-cols-2 gap-2">
                              {cs.results.map((r) => (
                                <div key={r.label} className="bg-surface-1 rounded-[8px] p-3 border border-[rgba(10,15,44,0.06)]">
                                  <p className="font-syne font-bold text-xl text-primary">{r.metric}</p>
                                  <p className="font-figtree text-xs text-text-muted">{r.label}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal className="text-center">
          <Link href="/case-studies" className="font-figtree font-medium text-sm text-primary hover:text-primary-hover transition-colors">View All Case Studies →</Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
