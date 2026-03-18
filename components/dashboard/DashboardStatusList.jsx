import StatusDot from '@/components/ui/StatusDot';

export default function DashboardStatusList({ items = [] }) {
  return (
    <div className="space-y-2">
      <p className="font-mono text-[10px] tracking-wider text-white/40 uppercase mb-3">Status</p>
      {items.map((item) => (
        <div
          key={item.name}
          className="flex items-center justify-between px-3 py-2.5 rounded-[8px]"
          style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
        >
          <span className="font-figtree text-xs text-white/70">{item.name}</span>
          <StatusDot status={item.status} showLabel />
        </div>
      ))}
    </div>
  );
}
