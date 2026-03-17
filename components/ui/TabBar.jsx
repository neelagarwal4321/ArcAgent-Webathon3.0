export default function TabBar({ tabs, activeTab, onChange, dark = false }) {
  return (
    <div className={`flex gap-1 overflow-x-auto scrollbar-none border-b ${dark ? 'border-white/8' : 'border-[rgba(10,15,44,0.08)]'}`}>
      {tabs.map((tab) => {
        const isActive = tab === activeTab || tab.id === activeTab;
        const label = tab.label || tab;
        const id = tab.id || tab;
        return (
          <button
            key={id}
            onClick={() => onChange(id)}
            className={`shrink-0 px-5 py-3 font-figtree text-sm font-medium transition-colors border-b-2 -mb-px ${
              isActive
                ? `border-primary ${dark ? 'text-white' : 'text-text-primary'}`
                : `border-transparent ${dark ? 'text-text-on-dark-muted hover:text-text-on-dark-secondary' : 'text-text-muted hover:text-text-secondary'}`
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
