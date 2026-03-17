import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useDemoModal } from '../../context/DemoModalContext';
import navData from '../../data/navigation.json';

export default function MobileNav({ open, onClose }) {
  const { openModal } = useDemoModal();
  const [productsOpen, setProductsOpen] = useState(false);

  const handleDemo = () => { onClose(); openModal(); };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-bg-base/60 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed bottom-0 left-0 right-0 z-[100] bg-surface-1 rounded-t-[16px] max-h-[85vh] overflow-y-auto"
          >
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-10 h-1 bg-surface-3 rounded-full" />
            </div>
            <div className="px-5 pb-8">
              {/* Products expand */}
              <button onClick={() => setProductsOpen((v) => !v)}
                className="w-full flex items-center justify-between py-3.5 font-figtree font-medium text-text-primary border-b border-[rgba(10,15,44,0.06)]">
                Products
                <motion.span animate={{ rotate: productsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </motion.span>
              </button>
              <AnimatePresence>
                {productsOpen && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <div className="pl-4 py-2 flex flex-col gap-1">
                      <Link href="/products" onClick={onClose} className="py-2 text-sm text-text-secondary font-figtree hover:text-text-primary">Overview — All Agents</Link>
                      {navData.agents.map((a) => (
                        <Link key={a.slug} href={`/products/${a.slug}`} onClick={onClose}
                          className="py-2 text-sm font-figtree flex items-center gap-2 hover:text-text-primary"
                          style={{ color: a.color }}>
                          <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: a.color }} />
                          {a.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              {[['Industries', '/industries'], ['Case Studies', '/case-studies'], ['Pricing', '/pricing'], ['Blog', '/blog'], ['About', '/about']].map(([label, href]) => (
                <Link key={href} href={href} onClick={onClose}
                  className="block py-3.5 font-figtree font-medium text-text-primary border-b border-[rgba(10,15,44,0.06)] hover:text-text-secondary transition-colors">
                  {label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-5">
                <Link href="/login" onClick={onClose} className="w-full text-center py-2.5 border border-[rgba(10,15,44,0.12)] rounded-button text-sm font-figtree font-medium text-text-secondary hover:text-text-primary transition-colors">Sign In</Link>
                <button onClick={handleDemo} className="w-full py-3 bg-primary text-white rounded-button text-sm font-figtree font-medium hover:bg-primary-hover transition-colors">Schedule a Demo</button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
