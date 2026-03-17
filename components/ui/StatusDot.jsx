const STATUS = {
  active: { color: '#059669', label: 'Active' },
  warning: { color: '#D97706', label: 'Warning' },
  critical: { color: '#EF4444', label: 'Critical' },
};

export default function StatusDot({ status = 'active', showLabel = false }) {
  const s = STATUS[status] || STATUS.active;
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: s.color, boxShadow: `0 0 4px ${s.color}` }} />
      {showLabel && <span className="text-xs font-figtree text-text-muted">{s.label}</span>}
    </span>
  );
}
