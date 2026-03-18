export default function SectionHeader({ overline, heading, subtext, centered = false, dark = false, className = '' }) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {overline && (
        <p className={`font-mono text-[11px] font-medium tracking-widest uppercase mb-4 ${dark ? 'text-accent-cyan' : 'text-primary'}`}>
          {overline}
        </p>
      )}
      <h2 className={`font-syne font-bold text-4xl md:text-[40px] leading-[1.12] -tracking-[0.02em] mb-5 ${dark ? 'text-text-on-dark' : 'text-text-primary'}`}>
        {heading}
      </h2>
      {subtext && (
        <p className={`text-lg leading-[1.65] max-w-2xl ${centered ? 'mx-auto' : ''} ${dark ? 'text-text-on-dark-secondary' : 'text-text-secondary'}`}>
          {subtext}
        </p>
      )}
    </div>
  );
}
