import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

const GlitchText404 = dynamic(
  () => import('../components/three/GlitchText404'),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center w-full h-48">
        <span
          className="font-syne font-bold select-none"
          style={{
            fontSize: 'clamp(80px, 20vw, 160px)',
            color: '#2539E7',
            opacity: 0.9,
            letterSpacing: '-0.04em',
            textShadow: '0 0 40px rgba(37,57,231,0.4)',
          }}
        >
          404
        </span>
      </div>
    ),
  }
);

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
];

export default function NotFound() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  function handleSearch(e) {
    e.preventDefault();
    router.push('/products');
  }

  return (
    <>
      <Head>
        <title>404 — Agent Not Found | ArcAgent</title>
        <meta name="description" content="This route doesn't exist in the ArcAgent system." />
      </Head>

      <div
        className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ background: '#0A0F2C' }}
      >
        {/* Ambient glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(37,57,231,0.12) 0%, transparent 70%)' }}
        />

        <div className="page-container w-full">
          <div className="relative z-10 max-w-2xl w-full mx-auto">
          {/* Three.js 404 Visual */}
          <div className="mb-6">
            <GlitchText404 />
          </div>

          {/* Heading */}
          <h1 className="font-syne font-bold text-3xl md:text-4xl text-white mb-3">
            Agent Not Found
          </h1>
          <p className="text-[#C8CCE0] text-lg mb-10 leading-relaxed">
            This route doesn&apos;t exist in the ArcAgent system.<br />
            The agent you&apos;re looking for may have been moved or deprecated.
          </p>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="flex gap-2 max-w-md mx-auto mb-10">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search ArcAgent…"
              className="flex-1 px-4 py-3 rounded-button font-figtree text-sm outline-none transition-all"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: '#fff',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'rgba(37,57,231,0.6)')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
            />
            <button
              type="submit"
              className="px-5 py-3 rounded-button font-figtree font-medium text-sm text-white transition-all duration-200 hover:bg-[#3348F5] active:scale-[0.98] shrink-0"
              style={{ background: '#2539E7' }}
            >
              Search
            </button>
          </form>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm text-[#8088A8] mr-1">Quick links:</span>
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-button font-figtree font-medium text-sm transition-all duration-200 hover:border-white/30 hover:text-white"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#C8CCE0',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
