export default function ProgressBar({ value = 0, color = '#2539E7', label, showPercent = true }) {
  return (
    <div className="w-full">
      {(label || showPercent) && (
        <div className="flex justify-between items-center mb-1.5">
          {label && <span className="text-xs font-figtree text-text-secondary">{label}</span>}
          {showPercent && <span className="text-xs font-mono font-medium" style={{ color }}>{value}%</span>}
        </div>
      )}
      <div className="w-full h-1.5 bg-surface-3 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{ width: `${Math.min(100, Math.max(0, value))}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}
