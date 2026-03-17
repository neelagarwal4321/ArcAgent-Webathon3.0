import { useState, useEffect } from 'react';

export default function DashboardLiveFeed({ entries = [], accentColor = '#2539E7' }) {
  const [visible, setVisible] = useState(entries.slice(0, 4));
  const [idx, setIdx] = useState(4);

  useEffect(() => {
    if (!entries.length) return;
    const t = setInterval(() => {
      setVisible(prev => {
        const next = entries[idx % entries.length];
        return [next, ...prev.slice(0, 3)];
      });
      setIdx(i => i + 1);
    }, 3000);
    return () => clearInterval(t);
  }, [entries, idx]);

  return (
    <div className="space-y-2">
      <p className="font-mono text-[10px] tracking-wider text-white/40 uppercase mb-3">Live Activity</p>
      {visible.map((entry, i) => (
        <div key={`${entry}-${i}`}
          className="flex items-start gap-2.5 px-3 py-2 rounded-[6px] transition-all"
          style={{ backgroundColor: i === 0 ? `${accentColor}12` : 'rgba(255,255,255,0.03)', opacity: 1 - i * 0.15 }}>
          <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: accentColor }} />
          <p className="font-figtree text-xs text-white/70 leading-relaxed">{entry}</p>
        </div>
      ))}
    </div>
  );
}
