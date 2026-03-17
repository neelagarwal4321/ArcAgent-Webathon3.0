import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import navData from '../../data/navigation.json';

export default function MegaMenu({ open }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-surface-1 rounded-card shadow-glass border border-[rgba(10,15,44,0.08)] p-5 z-50"
        >
          <Link href="/products" className="block text-xs font-mono tracking-wider text-primary uppercase mb-4 hover:text-primary-hover transition-colors">
            Overview — See all agents →
          </Link>
          <div className="grid grid-cols-2 gap-2">
            {navData.agents.map((agent) => (
              <Link key={agent.slug} href={`/products/${agent.slug}`}
                className="flex items-start gap-3 p-3 rounded-[10px] hover:bg-surface-3 transition-colors group">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: `${agent.color}18` }}>
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: agent.color }} />
                </div>
                <div>
                  <p className="font-figtree font-semibold text-sm text-text-primary group-hover:text-text-primary">{agent.name}</p>
                  <p className="font-figtree text-xs text-text-muted leading-relaxed mt-0.5">{agent.oneliner}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
