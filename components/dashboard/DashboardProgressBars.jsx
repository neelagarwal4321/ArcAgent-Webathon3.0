import ProgressBar from '@/components/ui/ProgressBar';

export default function DashboardProgressBars({ items = [], accentColor = '#2539E7' }) {
  return (
    <div className="space-y-4">
      <p className="font-mono text-[10px] tracking-wider text-white/40 uppercase mb-3">Progress</p>
      {items.map((item) => (
        <ProgressBar key={item.client} label={item.client} value={item.percent} color={accentColor} />
      ))}
    </div>
  );
}
