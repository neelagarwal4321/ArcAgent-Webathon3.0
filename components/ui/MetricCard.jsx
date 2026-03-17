import { useInView } from '@/hooks/useInView';
import { useCountUp } from '@/hooks/useCountUp';

function parseNumeric(value) {
  const str = String(value);
  const match = str.match(/[\d,.]+/);
  return match ? parseFloat(match[0].replace(/,/g, '')) : null;
}

export default function MetricCard({ value, label, description, accentColor = '#2539E7', large = false }) {
  const [ref, inView] = useInView();
  const numeric = parseNumeric(value);
  const isCountable = numeric !== null && !String(value).includes('.');
  const countRef = useCountUp(numeric || 0, 1.5, inView && isCountable);

  return (
    <div ref={ref} className="flex flex-col gap-1">
      <div
        className={`font-syne font-extrabold leading-none -tracking-[0.02em] ${large ? 'text-5xl' : 'text-[40px]'}`}
        style={{ color: accentColor }}
      >
        {isCountable ? (
          <span ref={countRef}>0</span>
        ) : (
          <span>{value}</span>
        )}
        {/* suffix after numeric part */}
        {isCountable && <span>{String(value).replace(/[\d,]+/, '')}</span>}
      </div>
      <p className="font-figtree text-sm font-medium text-text-secondary">{label}</p>
      {description && <p className="font-figtree text-xs text-text-muted">{description}</p>}
    </div>
  );
}
