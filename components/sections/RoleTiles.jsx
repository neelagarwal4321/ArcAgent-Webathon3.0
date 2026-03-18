import SectionHeader from '../ui/SectionHeader';
import AgentBadge from '../ui/AgentBadge';
import ScrollReveal from '../shared/ScrollReveal';
import { AGENT_COLORS } from '@/lib/constants';

const ROLES = [
  { icon: '📈', role: 'Sales Leaders', description: 'Scale outbound pipeline and accelerate deal velocity without scaling SDR headcount.', agents: [{ name: 'ArcReach', color: AGENT_COLORS.arcreach }, { name: 'ArcQual', color: AGENT_COLORS.arcqual }] },
  { icon: '⚙️', role: 'RevOps Leaders', description: 'Unify your revenue stack with autonomous workflows that reduce manual ops by 70%.', agents: [{ name: 'ArcReach', color: AGENT_COLORS.arcreach }, { name: 'ArcQual', color: AGENT_COLORS.arcqual }, { name: 'ArcPulse', color: AGENT_COLORS.arcpulse }] },
  { icon: '🎧', role: 'CX Leaders', description: 'Deliver instant, context-aware support and reduce churn with proactive health monitoring.', agents: [{ name: 'ArcDesk', color: AGENT_COLORS.arcdesk }, { name: 'ArcPulse', color: AGENT_COLORS.arcpulse }] },
  { icon: '🚀', role: 'Founders & CEOs', description: 'Deploy a full revenue operations team in 14 days — without hiring a single person.', agents: [{ name: 'ArcReach', color: AGENT_COLORS.arcreach }, { name: 'ArcQual', color: AGENT_COLORS.arcqual }, { name: 'ArcBoard', color: AGENT_COLORS.arcboard }, { name: 'ArcDesk', color: AGENT_COLORS.arcdesk }, { name: 'ArcPulse', color: AGENT_COLORS.arcpulse }] },
];

export default function RoleTiles() {
  return (
    <section className="bg-bg-alt page-section">
      <div className="page-container">
        <ScrollReveal className="mb-12">
          <SectionHeader overline="WHO IT'S FOR" heading="Built for Every Revenue Leader" centered dark />
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROLES.map((r, i) => (
            <ScrollReveal key={r.role} delay={i * 0.08}>
              <div className="bg-surface-1 rounded-card shadow-card border border-[rgba(10,15,44,0.06)] p-7 h-full hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-[250ms]">
                <div className="text-3xl mb-4">{r.icon}</div>
                <h3 className="font-syne font-semibold text-lg text-text-primary mb-2">{r.role}</h3>
                <p className="font-figtree text-sm text-text-secondary leading-relaxed mb-5">{r.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {r.agents.map((a) => <AgentBadge key={a.name} name={a.name} color={a.color} small />)}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
