export default function AgentBadge({ name, color, small = false }) {
  return (
    <span
      className={`inline-flex items-center font-figtree font-medium rounded-pill ${small ? 'text-[11px] px-2 py-0.5' : 'text-xs px-2.5 py-1'}`}
      style={{ color, backgroundColor: `${color}18`, border: `1px solid ${color}30` }}
    >
      {name}
    </span>
  );
}
