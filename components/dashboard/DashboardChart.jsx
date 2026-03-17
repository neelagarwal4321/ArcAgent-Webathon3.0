import dynamic from 'next/dynamic';

const LineChart = dynamic(() => import('recharts').then(m => m.LineChart), { ssr: false });
const BarChart  = dynamic(() => import('recharts').then(m => m.BarChart),  { ssr: false });
const Line      = dynamic(() => import('recharts').then(m => m.Line),      { ssr: false });
const Bar       = dynamic(() => import('recharts').then(m => m.Bar),       { ssr: false });
const XAxis     = dynamic(() => import('recharts').then(m => m.XAxis),     { ssr: false });
const YAxis     = dynamic(() => import('recharts').then(m => m.YAxis),     { ssr: false });
const Tooltip   = dynamic(() => import('recharts').then(m => m.Tooltip),   { ssr: false });
const ResponsiveContainer = dynamic(() => import('recharts').then(m => m.ResponsiveContainer), { ssr: false });

const tooltipStyle = { background: '#0A0F2C', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, fontSize: 12, fontFamily: 'Figtree' };

export default function DashboardChart({ type = 'line', data = [], color = '#2539E7', dataKey = 'value' }) {
  if (!data.length) return null;
  const labelKey = Object.keys(data[0]).find(k => k !== dataKey) || 'day';

  if (type === 'bar') {
    return (
      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={data} margin={{ top: 4, right: 4, left: -24, bottom: 0 }}>
          <XAxis dataKey={labelKey} tick={{ fontSize: 11, fill: '#6B7094', fontFamily: 'Figtree' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: '#6B7094' }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={tooltipStyle} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
          <Bar dataKey={dataKey} fill={color} radius={[4, 4, 0, 0]} animationDuration={1200} />
        </BarChart>
      </ResponsiveContainer>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={160}>
      <LineChart data={data} margin={{ top: 4, right: 4, left: -24, bottom: 0 }}>
        <XAxis dataKey={labelKey} tick={{ fontSize: 11, fill: '#6B7094', fontFamily: 'Figtree' }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 11, fill: '#6B7094' }} axisLine={false} tickLine={false} />
        <Tooltip contentStyle={tooltipStyle} />
        <Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2} dot={false} animationDuration={1200} />
      </LineChart>
    </ResponsiveContainer>
  );
}
