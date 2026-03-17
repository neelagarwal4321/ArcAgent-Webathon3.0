export default function GlassCard({ children, className = '' }) {
  return (
    <div
      className={`rounded-card backdrop-blur-xl ${className}`}
      style={{
        background: 'rgba(245,240,232,0.85)',
        border: '1px solid rgba(245,240,232,0.3)',
        boxShadow: '0 4px 16px rgba(10,15,44,0.1)',
      }}
    >
      {children}
    </div>
  );
}
