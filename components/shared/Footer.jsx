import Link from 'next/link';
import NewsletterSignup from '@/components/layout/NewsletterSignup';

const FOOTER_LINKS = {
  Products: [
    { label: 'Overview', href: '/products' },
    { label: 'ArcReach', href: '/products/arcreach' },
    { label: 'ArcQual', href: '/products/arcqual' },
    { label: 'ArcBoard', href: '/products/arcboard' },
    { label: 'ArcDesk', href: '/products/arcdesk' },
    { label: 'ArcPulse', href: '/products/arcpulse' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Security', href: '/security' },
  ],
  Resources: [
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Industries', href: '/industries' },
    { label: 'Pricing', href: '/pricing' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
  ],
};

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}
function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}
function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: '#070F1F' }}>
      <div className="max-w-content mx-auto px-6 py-16">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-1 font-syne font-bold text-xl mb-3">
              <span style={{ color: '#2539E7' }}>Arc</span>
              <span className="text-white">Agent</span>
            </Link>
            <p className="text-sm text-[#8088A8] leading-relaxed max-w-xs mt-2">
              The Autonomous Revenue OS. Five specialized AI agents that manage your entire revenue lifecycle.
            </p>
            <p className="text-sm text-[#8088A8] mt-4">
              <a href="mailto:hello@arcagent.ai" className="hover:text-[#C8CCE0] transition-colors">hello@arcagent.ai</a>
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <div className="text-xs font-bold uppercase tracking-widest text-[#8088A8] mb-4">{title}</div>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-[#C8CCE0] hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div>
            <p className="font-figtree font-medium text-sm text-text-on-dark-secondary mb-1">Stay updated on agentic AI</p>
            <p className="font-figtree text-xs text-[#8088A8]">Join 5,000+ revenue leaders who get our weekly insights.</p>
          </div>
          <div className="w-full sm:w-auto sm:min-w-[320px]">
            <NewsletterSignup />
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
        >
          <p className="text-sm text-[#8088A8]">© 2026 ArcAgent. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#8088A8] hover:text-white transition-colors">
              <LinkedInIcon />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#8088A8] hover:text-white transition-colors">
              <TwitterIcon />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#8088A8] hover:text-white transition-colors">
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
