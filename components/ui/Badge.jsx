export default function Badge({ text, color = '#2539E7', dark = false, className = '' }) {
  if (dark) {
    return (
      <span className={`inline-flex items-center gap-1.5 font-mono text-[11px] font-medium tracking-widest uppercase ${className}`}
        style={{ color: '#00E5FF' }}>
        {text}
      </span>
    );
  }
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[11px] font-medium tracking-widest uppercase px-3 py-1 rounded-pill ${className}`}
      style={{ color, backgroundColor: `${color}15`, border: `1px solid ${color}30` }}
    >
      {text}
    </span>
  );
}
