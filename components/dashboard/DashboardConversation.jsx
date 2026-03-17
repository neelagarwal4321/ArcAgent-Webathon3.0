import { useState, useEffect } from 'react';

export default function DashboardConversation({ messages = [], accentColor = '#2539E7' }) {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (shown >= messages.length) return;
    const t = setTimeout(() => setShown(s => s + 1), 1400);
    return () => clearTimeout(t);
  }, [shown, messages.length]);

  return (
    <div className="space-y-3">
      <p className="font-mono text-[10px] tracking-wider text-white/40 uppercase mb-3">Live Conversation</p>
      {messages.slice(0, shown).map((msg, i) => (
        <div key={i} className={`flex ${msg.role === 'agent' ? 'justify-start' : 'justify-end'}`}>
          <div className={`max-w-[80%] px-3.5 py-2.5 rounded-[10px] font-figtree text-xs leading-relaxed ${
            msg.role === 'agent'
              ? 'text-white/80 rounded-tl-none'
              : 'text-white rounded-tr-none'
          }`}
            style={msg.role === 'agent'
              ? { backgroundColor: `${accentColor}25`, border: `1px solid ${accentColor}30` }
              : { backgroundColor: 'rgba(255,255,255,0.1)' }}>
            {msg.text}
          </div>
        </div>
      ))}
      {shown < messages.length && (
        <div className="flex justify-start">
          <div className="px-4 py-2.5 rounded-[10px] rounded-tl-none flex gap-1 items-center" style={{ backgroundColor: `${accentColor}20` }}>
            {[0,1,2].map(d => <span key={d} className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: `${d * 0.15}s` }} />)}
          </div>
        </div>
      )}
    </div>
  );
}
