import { useDemoModal } from '@/context/DemoModalContext';

export default function AgentCTABanner({ agentName, accentColor }) {
  const { openModal } = useDemoModal();
  return (
    <section className="page-section text-center" style={{ background: `linear-gradient(135deg, ${accentColor}15 0%, ${accentColor}05 100%)`, borderTop: `1px solid ${accentColor}20` }}>
      <div className="page-container">
        <div className="max-w-2xl mx-auto">
        <h2 className="font-syne font-bold text-3xl md:text-4xl text-text-on-dark mb-4">
          Ready to deploy {agentName}?
        </h2>
        <p className="text-text-on-dark-secondary mb-8">Join 200+ enterprise teams using ArcAgent to automate their revenue operations.</p>
          <button
            onClick={openModal}
            className="font-figtree font-medium text-sm px-7 py-3.5 rounded-button text-white transition-all hover:opacity-90 active:scale-95"
            style={{ backgroundColor: accentColor }}
          >
            Schedule a Demo →
          </button>
        </div>
      </div>
    </section>
  );
}
