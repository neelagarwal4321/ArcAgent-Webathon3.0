import Link from 'next/link';

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  loading = false,
  disabled = false,
  className = '',
  type = 'button',
}) {
  const base = 'inline-flex items-center justify-center gap-2 font-figtree font-medium transition-all duration-200 rounded-button focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const sizes = {
    sm: 'text-sm px-4 py-2',
    md: 'text-sm px-5 py-2.5',
    lg: 'text-base px-7 py-3.5',
  };

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-hover active:scale-[0.98]',
    ghost: 'border border-white/20 text-text-on-dark-secondary hover:border-white/40 hover:text-white bg-transparent',
    'ghost-dark': 'border border-[rgba(10,15,44,0.15)] text-text-secondary hover:border-[rgba(10,15,44,0.3)] hover:text-text-primary bg-transparent',
    white: 'bg-white text-primary hover:bg-surface-2 active:scale-[0.98]',
    accent: 'text-white active:scale-[0.98]',
    outline: 'border border-primary/25 text-primary hover:bg-primary/5',
  };

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const content = loading ? (
    <>
      <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      {children}
    </>
  ) : children;

  if (href) {
    return <Link href={href} className={cls}>{content}</Link>;
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled || loading} className={cls}>
      {content}
    </button>
  );
}
