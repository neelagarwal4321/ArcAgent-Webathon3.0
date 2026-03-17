export default function GradientOrbFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(37,57,231,0.6) 0%, rgba(0,229,255,0.2) 50%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'pulse-glow 4s ease-in-out infinite',
        }}
      />
    </div>
  );
}
