import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AccordionItem({ title, children, defaultOpen = false, dark = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`border rounded-card overflow-hidden transition-colors ${dark ? 'border-white/8 bg-bg-alt/50' : 'border-[rgba(10,15,44,0.08)] bg-surface-1'}`}>
      <button
        onClick={() => setOpen((v) => !v)}
        className={`w-full flex items-center justify-between px-6 py-5 text-left font-figtree font-medium text-[15px] transition-colors ${dark ? 'text-text-on-dark hover:text-white' : 'text-text-primary hover:text-text-secondary'}`}
      >
        <span>{title}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} className="shrink-0 ml-4">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className={`px-6 pb-6 font-figtree text-sm leading-relaxed ${dark ? 'text-text-on-dark-secondary' : 'text-text-secondary'}`}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
