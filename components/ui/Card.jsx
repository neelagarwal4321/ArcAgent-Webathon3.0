export default function Card({ children, className = '', hover = true, accent = null, glass = false }) {
  const base = glass
    ? 'rounded-card backdrop-blur-xl shadow-glass'
    : 'bg-surface-1 rounded-card shadow-card border border-[rgba(10,15,44,0.06)]';

  const hoverCls = hover
    ? 'transition-all duration-250 hover:shadow-card-hover hover:-translate-y-0.5'
    : '';

  const glassStyle = glass ? { background: 'rgba(245,240,232,0.85)', border: '1px solid rgba(245,240,232,0.3)' } : {};
  const accentStyle = accent ? { borderLeft: `4px solid ${accent}` } : {};

  return (
    <div className={`${base} ${hoverCls} ${className}`} style={{ ...glassStyle, ...accentStyle }}>
      {children}
    </div>
  );
}
