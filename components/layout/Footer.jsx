import Link from 'next/link';
import navData from '@/data/navigation.json';
import { SITE } from '@/lib/constants';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#070F1F', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="page-container-narrow py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 pb-12 border-b border-white/6">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="3" fill="white"/>
                  <path d="M8 2 Q12 5 14 8 Q12 11 8 14 Q4 11 2 8 Q4 5 8 2Z" stroke="white" strokeWidth="1.2" fill="none"/>
                </svg>
              </div>
              <span className="font-syne font-bold text-base text-white">ArcAgent</span>
            </div>
            <p className="text-text-on-dark-muted text-xs font-figtree leading-relaxed mb-4">{SITE.tagline}</p>
            <div className="flex gap-3">
              {[
                { href: SITE.social.linkedin, icon: 'M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.5 6.5h-2v5h2v-5zm-1-1.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8.5 1.5h-2v2.5c0 .7-.5 1-1 1s-1-.3-1-1V6.5h-2v5h2v-.8c.4.5 1 .8 1.5.8C12.5 11.5 14 10.8 14 9V6.5z' },
                { href: SITE.social.twitter, icon: 'M13.6 3h2.4l-5.2 6 6.1 8H12l-3.8-5-4.3 5H1.5l5.6-6.3L1 3h4.8l3.4 4.5L13.6 3z' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-text-on-dark-muted hover:text-white hover:border-white/25 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d={s.icon}/></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <p className="font-figtree font-semibold text-xs text-text-on-dark uppercase tracking-wider mb-4">Products</p>
            <div className="flex flex-col gap-2.5">
              {navData.footer.products.map((l) => (
                <Link key={l.href} href={l.href} className="font-figtree text-xs text-text-on-dark-muted hover:text-text-on-dark-secondary transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="font-figtree font-semibold text-xs text-text-on-dark uppercase tracking-wider mb-4">Company</p>
            <div className="flex flex-col gap-2.5">
              {navData.footer.company.map((l) => (
                <Link key={l.href} href={l.href} className="font-figtree text-xs text-text-on-dark-muted hover:text-text-on-dark-secondary transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <p className="font-figtree font-semibold text-xs text-text-on-dark uppercase tracking-wider mb-4">Resources</p>
            <div className="flex flex-col gap-2.5">
              {navData.footer.resources.map((l) => (
                <Link key={l.href} href={l.href} className="font-figtree text-xs text-text-on-dark-muted hover:text-text-on-dark-secondary transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="font-figtree font-semibold text-xs text-text-on-dark uppercase tracking-wider mb-4">Legal</p>
            <div className="flex flex-col gap-2.5">
              {navData.footer.legal.map((l) => (
                <Link key={l.href} href={l.href} className="font-figtree text-xs text-text-on-dark-muted hover:text-text-on-dark-secondary transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-figtree font-semibold text-xs text-text-on-dark uppercase tracking-wider mb-4">Contact</p>
            <div className="flex flex-col gap-2.5">
              <a href={`mailto:${SITE.email}`} className="font-figtree text-xs text-text-on-dark-muted hover:text-text-on-dark-secondary transition-colors">{SITE.email}</a>
              <p className="font-figtree text-xs text-text-on-dark-muted">{SITE.location}</p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="py-8 border-b border-white/6 flex flex-col sm:flex-row items-center gap-4 justify-between">
          <div>
            <p className="font-figtree font-medium text-sm text-text-on-dark mb-0.5">Stay updated on agentic AI</p>
            <p className="font-figtree text-xs text-text-on-dark-muted">Join 5,000+ revenue leaders who get our weekly insights.</p>
          </div>
          <form className="flex gap-2 w-full sm:w-auto" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="you@company.com" className="bg-surface-1 text-text-primary placeholder:text-text-muted text-sm font-figtree px-4 py-2.5 rounded-button border border-[rgba(10,15,44,0.1)] focus:outline-none focus:border-primary/40 w-full sm:w-60" />
            <button type="submit" className="bg-primary text-white text-sm font-figtree font-medium px-5 py-2.5 rounded-button hover:bg-primary-hover transition-colors shrink-0">Subscribe</button>
          </form>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-figtree text-xs text-text-on-dark-muted">© 2026 ArcAgent Inc. All rights reserved.</p>
          <p className="font-figtree text-xs text-text-on-dark-muted">Built for the enterprise. Trusted by 200+ teams.</p>
        </div>
      </div>
    </footer>
  );
}
