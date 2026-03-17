import DashboardSidebar from './DashboardSidebar';
import DashboardMetrics from './DashboardMetrics';
import DashboardChart from './DashboardChart';
import DashboardLiveFeed from './DashboardLiveFeed';
import DashboardConversation from './DashboardConversation';
import DashboardProgressBars from './DashboardProgressBars';
import DashboardStatusList from './DashboardStatusList';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function AgentDashboard({ agent }) {
  const d = agent.dashboardData;
  const slug = agent.slug;

  const showConversation = ['arcreach', 'arcdesk'].includes(slug);
  const showLiveFeed     = ['arcreach', 'arcqual', 'arcpulse'].includes(slug);
  const showProgressBars = slug === 'arcboard';
  const showStatusList   = ['arcqual', 'arcdesk', 'arcpulse'].includes(slug);

  return (
    <ScrollReveal>
      <div
        className="rounded-card overflow-hidden shadow-glass border border-[rgba(10,15,44,0.06)]"
        style={{ minHeight: 420 }}
      >
        <div className="flex flex-col md:flex-row h-full">
          {/* Sidebar */}
          <DashboardSidebar agentName={agent.name} agentColor={agent.color} />

          {/* Main area */}
          <div className="flex-1 bg-surface-1 p-6 flex flex-col gap-6 overflow-auto">
            {/* Metrics row */}
            <DashboardMetrics metrics={d.metrics} accentColor={agent.color} />

            {/* Chart + secondary panel */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
              <div className="lg:col-span-3">
                <div className="bg-surface-1 rounded-card shadow-card border border-[rgba(10,15,44,0.06)] p-5 h-full">
                  <p className="font-figtree font-semibold text-sm text-text-primary mb-4">
                    {d.chartType === 'bar' ? 'Daily Volume' : 'Activity Trend'}
                  </p>
                  <DashboardChart
                    type={d.chartType}
                    data={d.chartData}
                    color={agent.color}
                  />
                </div>
              </div>

              <div
                className="lg:col-span-2 rounded-card p-5"
                style={{ backgroundColor: '#0A0F2C' }}
              >
                {showLiveFeed && (
                  <DashboardLiveFeed
                    entries={d.feedEntries || []}
                    accentColor={agent.color}
                  />
                )}
                {showConversation && (
                  <DashboardConversation
                    messages={d.messages || []}
                    accentColor={agent.color}
                  />
                )}
                {showProgressBars && (
                  <DashboardProgressBars
                    items={d.progressItems || []}
                    accentColor={agent.color}
                  />
                )}
                {showStatusList && (
                  <DashboardStatusList items={d.statusItems || []} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
