import StatusDot from '../ui/StatusDot';

const NAV_ITEMS = ['Overview', 'Activity', 'Metrics', 'Settings'];

export default function DashboardSidebar({ agentName, agentColor }) {
  return (
    <div className="w-[200px] shrink-0 flex flex-col py-5" style={{ backgroundColor: '#0A0F2C' }}>
      {/* Agent brand */}
      <div className="px-5 mb-6 flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${agentColor}25` }}>
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: agentColor }} />
        </div>
        <span className="font-figtree font-semibold text-sm text-white">{agentName}</span>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-0.5 px-3 flex-1">
        {NAV_ITEMS.map((item, i) => (
          <div key={item}
            className={`px-3 py-2 rounded-[8px] font-figtree text-xs font-medium transition-colors ${
              i === 0
                ? 'text-white'
                : 'text-white/40 cursor-default'
            }`}
            style={i === 0 ? { borderLeft: `2px solid ${agentColor}`, backgroundColor: `${agentColor}18` } : {}}
          >
            {item}
          </div>
        ))}
      </nav>

      {/* Status */}
      <div className="px-5 pt-4 border-t border-white/8 flex items-center gap-2">
        <StatusDot status="active" />
        <span className="font-figtree text-xs text-white/50">Agent Active</span>
      </div>
    </div>
  );
}
