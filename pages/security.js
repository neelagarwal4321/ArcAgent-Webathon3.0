import Head from 'next/head';
import Link from 'next/link';
import SectionHeader from '../components/ui/SectionHeader';
import FAQSection from '../components/shared/FAQSection';
import ScrollReveal from '../components/shared/ScrollReveal';

const CERTIFICATIONS = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 2L4 7v9c0 7.18 5.16 13.9 12 15.5C22.84 29.9 28 23.18 28 16V7L16 2z" fill="#2539E7" fillOpacity="0.15" stroke="#2539E7" strokeWidth="1.5"/>
        <path d="M11 16l3 3 7-7" stroke="#2539E7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'SOC 2 Type II',
    badge: 'Annually Audited',
    description: 'ArcAgent undergoes rigorous annual SOC 2 Type II audits performed by independent third-party auditors, verifying that our security controls for availability, confidentiality, and processing integrity meet the highest standards.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="4" fill="#2539E7" fillOpacity="0.15" stroke="#2539E7" strokeWidth="1.5"/>
        <path d="M10 16h12M16 10v12" stroke="#2539E7" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'ISO 27001',
    badge: 'Certified',
    description: 'Our information security management system is certified to ISO/IEC 27001:2022, the international standard for information security. This certification covers our entire enterprise AI platform and data handling processes.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" fill="#2539E7" fillOpacity="0.15" stroke="#2539E7" strokeWidth="1.5"/>
        <path d="M12 16l2.5 2.5L20 13" stroke="#2539E7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'GDPR Compliant',
    badge: 'Full Compliance',
    description: 'ArcAgent is fully compliant with the EU General Data Protection Regulation and CCPA. We maintain comprehensive data processing agreements, honor all data subject rights, and provide full audit trails for all personal data operations.',
  },
];

const PRACTICES = [
  { icon: '🔐', label: 'AES-256 encryption at rest' },
  { icon: '🔒', label: 'TLS 1.3 in transit' },
  { icon: '🛡️', label: 'Zero-trust network architecture' },
  { icon: '👤', label: 'Role-based access control (RBAC)' },
  { icon: '🔍', label: 'Automated security scanning (SAST/DAST)' },
];

const SECURITY_FAQS = [
  {
    question: 'How does ArcAgent encrypt customer data?',
    answer: 'All customer data is encrypted at rest using AES-256 encryption and in transit using TLS 1.3. Encryption keys are managed via AWS KMS with automatic 90-day rotation. Each customer\'s data is encrypted with separate keys, ensuring complete isolation even at the cryptographic layer.',
  },
  {
    question: 'Where is customer data stored and can I choose a region?',
    answer: 'By default, customer data is stored in AWS us-east-1 (Virginia). Enterprise customers can request dedicated regional deployments in the EU (eu-west-1), APAC (ap-southeast-1), or other regions to meet data residency requirements. All storage complies with local data protection laws.',
  },
  {
    question: 'Who at ArcAgent can access my data?',
    answer: 'Access to customer data follows strict need-to-know principles enforced by RBAC. All access is logged, audited, and reviewed monthly. Fewer than 5 engineers have production data access, all of whom have passed background checks and are bound by NDA. Customer-facing support agents never have access to raw data.',
  },
  {
    question: 'How does ArcAgent respond to security incidents?',
    answer: 'We maintain a 24/7 security operations function with a documented incident response plan. For critical incidents, we commit to notifying affected customers within 72 hours of detection — ahead of the GDPR requirement. Our runbooks are tested quarterly via tabletop exercises and simulated breach drills.',
  },
  {
    question: 'Does ArcAgent conduct penetration testing?',
    answer: 'Yes. We conduct annual penetration tests with a reputable third-party firm and bi-annual automated vulnerability scans. All critical and high severity findings must be remediated within 14 days. Customers on our Enterprise plan can request access to the most recent pen test executive summary under NDA.',
  },
  {
    question: 'How do I report a vulnerability?',
    answer: 'We operate a responsible disclosure program. If you discover a security vulnerability, please email security@arcagent.ai with a description of the issue and reproduction steps. We acknowledge all reports within 24 hours and commit to a resolution timeline within 90 days for critical findings. We do not pursue legal action against good-faith reporters.',
  },
];

export default function Security() {
  return (
    <>
      <Head>
        <title>Security — ArcAgent</title>
        <meta name="description" content="Enterprise-grade security by default. SOC 2 Type II, ISO 27001, and GDPR compliant. Your data is protected at every layer." />
      </Head>

      {/* ── Hero ── */}
      <section className="page-section" style={{ background: '#0A0F2C' }}>
        <div className="page-container text-center">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: 'rgba(37,57,231,0.15)', border: '1px solid rgba(37,57,231,0.3)' }}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M20 3L5 9.5v11c0 9.11 6.43 17.63 15 19.75C28.57 38.13 35 29.61 35 20.5v-11L20 3z" fill="rgba(37,57,231,0.2)" stroke="#2539E7" strokeWidth="2"/>
                  <path d="M13 20l5 5 9-9" stroke="#2539E7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <SectionHeader
              overline="Security"
              heading="Enterprise-Grade Security by Default"
              subtext="ArcAgent was built security-first. Every layer of our infrastructure, from the code we ship to the data we handle, is designed to meet the most demanding enterprise security requirements."
              centered
              dark
            />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="page-section" style={{ background: '#0E1435' }}>
        <div className="page-container">
          <ScrollReveal>
            <SectionHeader
              overline="Compliance"
              heading="Certified and Audited"
              subtext="We invest heavily in third-party verification so you don't have to take our word for it."
              centered
              dark
              className="mb-16"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, i) => (
              <ScrollReveal key={cert.title} delay={i * 0.1}>
                <div className="rounded-card p-8" style={{ background: '#F5F0E8', border: '1px solid rgba(10,15,44,0.08)' }}>
                  <div className="mb-5">{cert.icon}</div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-syne font-bold text-xl text-[#0A0F2C]">{cert.title}</h3>
                    <span className="px-2 py-0.5 rounded-pill text-xs font-bold" style={{ background: 'rgba(37,57,231,0.1)', color: '#2539E7' }}>{cert.badge}</span>
                  </div>
                  <p className="text-sm text-[#3D4260] leading-relaxed">{cert.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Data Practices ── */}
      <section className="page-section" style={{ background: '#0A0F2C' }}>
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <SectionHeader
                overline="Data Protection"
                heading="How We Protect Your Data"
                dark
                className="mb-8"
              />
              <div className="flex flex-col gap-4">
                {PRACTICES.map((p, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-card" style={{ background: 'rgba(37,57,231,0.08)', border: '1px solid rgba(37,57,231,0.15)' }}>
                    <span className="text-xl">{p.icon}</span>
                    <span className="font-figtree font-medium text-[#C8CCE0]">{p.label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="rounded-card p-8" style={{ background: '#0E1435', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="font-syne font-bold text-2xl text-white mb-4">Our Infrastructure</h3>
                <p className="text-[#C8CCE0] text-sm leading-relaxed mb-4">
                  ArcAgent runs on a multi-tenant cloud infrastructure hosted on AWS, with all production workloads isolated by customer using dedicated VPCs and strict network segmentation. Our architecture follows a zero-trust model — no implicit trust is granted to any service, user, or device.
                </p>
                <p className="text-[#C8CCE0] text-sm leading-relaxed mb-4">
                  All production systems are hardened to CIS benchmark standards. Automated vulnerability scans run nightly, and any critical finding triggers an immediate PagerDuty alert to our on-call security engineer.
                </p>
                <p className="text-[#C8CCE0] text-sm leading-relaxed">
                  We maintain a 99.99% uptime SLA backed by a multi-region failover architecture. All infrastructure changes are reviewed, version-controlled, and deployed through a fully audited CI/CD pipeline — no manual production access, ever.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Infrastructure Flow Diagram ── */}
      <section className="page-section" style={{ background: '#0E1435' }}>
        <div className="page-container">
          <ScrollReveal>
            <SectionHeader
              overline="Architecture"
              heading="Your Data Flow, Secured End-to-End"
              centered
              dark
              className="mb-16"
            />
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 overflow-x-auto">
              {[
                { label: 'Your Data', sub: 'CRM, Support, Comms', color: '#F5C518' },
                { label: 'Encrypted Transport', sub: 'TLS 1.3', color: '#2539E7' },
                { label: 'ArcAgent Processing', sub: 'Isolated VPC', color: '#00E5FF' },
                { label: 'Encrypted Storage', sub: 'AES-256', color: '#2539E7' },
                { label: 'Your CRM', sub: 'Results & Insights', color: '#F5C518' },
              ].map((node, i, arr) => (
                <div key={i} className="flex items-center gap-3 md:gap-4 shrink-0">
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-card flex flex-col items-center justify-center text-center p-3"
                      style={{ background: 'rgba(37,57,231,0.1)', border: `1px solid ${node.color}40` }}>
                      <div className="w-3 h-3 rounded-full mb-2" style={{ background: node.color, boxShadow: `0 0 8px ${node.color}` }} />
                      <span className="font-syne font-bold text-xs text-white leading-tight">{node.label}</span>
                      <span className="text-[10px] mt-1" style={{ color: node.color }}>{node.sub}</span>
                    </div>
                  </div>
                  {i < arr.length - 1 && (
                    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" className="shrink-0">
                      <path d="M0 8h20M14 2l6 6-6 6" stroke="rgba(200,204,224,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-center text-sm text-[#8088A8] mt-8">Every byte of data in transit and at rest is encrypted. Your data never leaves your designated region.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQSection
        faqs={SECURITY_FAQS}
        title="Security FAQs"
        dark
      />

      {/* ── CTA ── */}
      <section className="page-section" style={{ background: '#0A0F2C', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="page-container text-center">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto">
            <h3 className="font-syne font-bold text-2xl text-white mb-3">Questions About Our Security Posture?</h3>
            <p className="text-[#C8CCE0] mb-6">Our security team is available to provide a detailed security review, compliance documentation, and answer any due diligence questions.</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 font-figtree font-medium text-base px-7 py-3.5 rounded-button transition-all duration-200 hover:bg-[#3348F5] active:scale-[0.98]"
              style={{ background: '#2539E7', color: '#fff' }}
            >
              Contact Our Security Team →
            </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
