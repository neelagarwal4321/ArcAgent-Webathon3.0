import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useScrolled } from '@/hooks/useScrolled';
import { useDemoModal } from '@/context/DemoModalContext';
import MegaMenu from './MegaMenu';
import MobileNav from './MobileNav';
import navData from '@/data/navigation.json';

export default function Navbar() {
  const scrolled = useScrolled(20);
  const { openModal } = useDemoModal();
  const router = useRouter();
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href) => router.pathname === href || router.pathname.startsWith(href + '/');

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'border-b border-white/8' : ''
        }`}
        style={scrolled ? { background: 'rgba(10,15,44,0.9)', backdropFilter: 'blur(16px)' } : {}}
      >
        <div className="page-container h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="3" fill="white"/>
                <path d="M8 2 Q12 5 14 8 Q12 11 8 14 Q4 11 2 8 Q4 5 8 2Z" stroke="white" strokeWidth="1.2" fill="none"/>
              </svg>
            </div>
            <span className="font-syne font-bold text-lg text-white tracking-tight">ArcAgent</span>
          </Link>

          {/* Nav Links - desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navData.navbar.map((link) =>
              link.hasMegaMenu ? (
                <div key={link.href} className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}>
                  <button className={`font-figtree font-medium text-sm flex items-center gap-1 transition-colors ${
                    isActive(link.href) ? 'text-white' : 'text-text-on-dark-secondary hover:text-white'
                  }`}>
                    {link.label}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </button>
                  {isActive(link.href) && <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />}
                  <MegaMenu open={megaOpen} />
                </div>
              ) : (
                <Link key={link.href} href={link.href}
                  className={`relative font-figtree font-medium text-sm transition-colors ${
                    isActive(link.href) ? 'text-white' : 'text-text-on-dark-secondary hover:text-white'
                  }`}>
                  {link.label}
                  {isActive(link.href) && <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />}
                </Link>
              )
            )}
          </nav>

          {/* Right CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login" className="font-figtree font-medium text-sm text-text-on-dark-secondary hover:text-white transition-colors px-4 py-2 border border-white/15 rounded-button hover:border-white/30">
              Sign In
            </Link>
            <button onClick={openModal} className="font-figtree font-medium text-sm bg-primary text-white px-5 py-2.5 rounded-button hover:bg-primary-hover transition-colors">
              Schedule a Demo
            </button>
          </div>

          {/* Mobile CTAs */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={openModal}
              className="font-figtree font-medium text-xs bg-primary text-white px-3.5 py-2 rounded-button hover:bg-primary-hover transition-colors"
            >
              Schedule
            </button>
            <button onClick={() => setMobileOpen(true)} className="p-2 text-text-on-dark-secondary hover:text-white transition-colors">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </header>
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
