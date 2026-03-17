import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDemoModal } from '@/context/DemoModalContext';
import { useScrolled } from '@/hooks/useScrolled';

const AGENTS = [
  { slug: 'arcreach', name: 'ArcReach', color: '#3B82F6', oneliner: 'Autonomous outbound sales & prospecting' },
  { slug: 'arcqual',  name: 'ArcQual',  color: '#0891B2', oneliner: 'Inbound lead scoring & routing' },
  { slug: 'arcboard', name: 'ArcBoard', color: '#059669', oneliner: 'Client onboarding automation' },
  { slug: 'arcdesk',  name: 'ArcDesk',  color: '#7C3AED', oneliner: 'AI-native support resolution' },
  { slug: 'arcpulse', name: 'ArcPulse', color: '#D97706', oneliner: 'Revenue health & churn prevention' },
];

const NAV_LINKS = [
  { label: 'Products', href: '/products', hasMegaMenu: true },
  { label: 'Industries', href: '/industries' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Pricing', href: '/pricing' },
];

export default function Navbar() {
  const scrolled = useScrolled(20);
  const { openModal } = useDemoModal();
  const router = useRouter();
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const megaRef = useRef(null);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [router.pathname]);

  useEffect(() => {
    function handleClick(e) {
      if (megaRef.current && !megaRef.current.contains(e.target)) setMegaOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const isActive = (href) => router.pathname === href || router.pathname.startsWith(href + '/');

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(10,15,44,0.97)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 font-syne font-bold text-xl">
            <span style={{ color: '#2539E7' }}>Arc</span>
            <span className="text-white">Agent</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.hasMegaMenu ? (
                <div key={link.label} className="relative" ref={megaRef}>
                  <button
                    onClick={() => setMegaOpen((v) => !v)}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
                      isActive(link.href) ? 'text-white' : 'text-[#C8CCE0] hover:text-white'
                    }`}
                  >
                    {link.label}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform ${megaOpen ? 'rotate-180' : ''}`}>
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  {megaOpen && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] rounded-card p-4 shadow-glass"
                      style={{ background: '#0E1435', border: '1px solid rgba(255,255,255,0.1)' }}
                    >
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        {AGENTS.map((agent) => (
                          <Link
                            key={agent.slug}
                            href={`/products/${agent.slug}`}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                          >
                            <span className="w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0" style={{ background: agent.color }} />
                            <div>
                              <div className="text-sm font-semibold text-white group-hover:text-white">{agent.name}</div>
                              <div className="text-xs text-[#8088A8] mt-0.5">{agent.oneliner}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }} className="pt-3">
                        <Link href="/products" className="text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all" style={{ color: '#2539E7' }}>
                          View All Products →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(link.href) ? 'text-white' : 'text-[#C8CCE0] hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={openModal}
              className="px-5 py-2.5 text-sm font-medium text-white rounded-button transition-all duration-200 hover:bg-[#3348F5] active:scale-[0.98]"
              style={{ background: '#2539E7' }}
            >
              Request Demo
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[#C8CCE0] hover:text-white transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-16"
          style={{ background: 'rgba(10,15,44,0.98)', backdropFilter: 'blur(12px)' }}
        >
          <div className="flex flex-col p-6 gap-2">
            {/* Products with accordion */}
            <div>
              <button
                className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-[#C8CCE0] hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                onClick={() => setMobileProductsOpen((v) => !v)}
              >
                Products
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`}>
                  <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {mobileProductsOpen && (
                <div className="ml-4 mt-1 flex flex-col gap-1">
                  {AGENTS.map((agent) => (
                    <Link
                      key={agent.slug}
                      href={`/products/${agent.slug}`}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: agent.color }} />
                      <span className="text-sm text-[#C8CCE0]">{agent.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {[
              { label: 'Industries', href: '/industries' },
              { label: 'Case Studies', href: '/case-studies' },
              { label: 'Pricing', href: '/pricing' },
              { label: 'Blog', href: '/blog' },
              { label: 'About', href: '/about' },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-3 text-base font-medium text-[#C8CCE0] hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <button
                onClick={() => { openModal(); setMobileOpen(false); }}
                className="w-full py-3 text-base font-medium text-white rounded-button transition-all"
                style={{ background: '#2539E7' }}
              >
                Request Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
