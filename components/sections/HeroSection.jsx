import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useDemoModal } from '@/context/DemoModalContext';
import VideoModal from '../modals/VideoModal';
import GradientOrbFallback from '../three/GradientOrbFallback';

const ParticleSphere = dynamic(() => import('../three/ParticleSphere'), {
  ssr: false,
  loading: () => <GradientOrbFallback />,
});

const TRUST_LOGOS = ['Nexora', 'Veldric', 'SentinelAI', 'Pyramus', 'OmniCore'];

export default function HeroSection() {
  const { openModal } = useDemoModal();
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center page-section overflow-hidden bg-grid"
        style={{ backgroundColor: '#2539E7' }}
      >
        {/* Particle sphere */}
        <div className="absolute inset-0 z-0">
          <ParticleSphere particleCount={2000} />
        </div>

        {/* Decorative yellow pixel blocks */}
        <div className="absolute top-24 right-16 hidden xl:block opacity-70" aria-hidden>
          <div className="grid grid-cols-2 gap-1">
            {[...Array(4)].map((_, i) => <div key={i} className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#F5C518' }} />)}
          </div>
        </div>
        <div className="absolute bottom-32 left-16 hidden xl:block opacity-70" aria-hidden>
          <div className="grid grid-cols-2 gap-1">
            {[...Array(4)].map((_, i) => <div key={i} className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#F5C518' }} />)}
          </div>
        </div>

        {/* Cyan sparkle */}
        <div className="absolute top-32 left-24 hidden xl:block opacity-60" aria-hidden>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 0l1.8 8.2L20 10l-8.2 1.8L10 20l-1.8-8.2L0 10l8.2-1.8z" fill="#00E5FF"/>
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 page-container">
          <div className="max-w-[860px] mx-auto">
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] font-medium tracking-widest uppercase px-4 py-1.5 rounded-pill" style={{ background: 'rgba(255,255,255,0.12)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>
              ✦ Next-Generation Agentic Automation
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-extrabold leading-[1.05] -tracking-[0.03em] text-white mb-6"
            style={{ fontSize: 'clamp(44px, 7vw, 80px)' }}>
            Deploy an Autonomous<br />
            <span style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, rgba(255,255,255,0.75) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Client-Facing Workforce.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="font-figtree text-lg leading-[1.65] max-w-[560px] mx-auto mb-10"
            style={{ color: 'rgba(255,255,255,0.75)' }}>
            ArcAgent builds and orchestrates multi-agent systems that manage your entire revenue lifecycle — sales, onboarding, support, and retention — without adding headcount.
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button onClick={openModal} className="bg-white text-primary font-figtree font-semibold text-sm px-7 py-3.5 rounded-button hover:bg-surface-2 transition-colors active:scale-95 w-full sm:w-auto">
              Deploy Your First Agent →
            </button>
            <button onClick={() => setVideoOpen(true)} className="font-figtree font-medium text-sm px-7 py-3.5 rounded-button transition-colors w-full sm:w-auto" style={{ border: '1px solid rgba(255,255,255,0.25)', color: 'white' }}>
              ▶ Watch Demo Video
            </button>
          </motion.div>

          {/* Trust bar */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}>
            <div className="h-px mb-6 mx-auto max-w-sm" style={{ background: 'rgba(255,255,255,0.15)' }} />
            <p className="font-figtree text-xs tracking-wider uppercase mb-5" style={{ color: 'rgba(255,255,255,0.5)' }}>Trusted by enterprise teams at</p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {TRUST_LOGOS.map((logo) => (
                <span key={logo} className="font-syne font-bold text-sm" style={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '0.05em' }}>{logo}</span>
              ))}
            </div>
          </motion.div>
          </div>
        </div>
      </section>
      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </>
  );
}
