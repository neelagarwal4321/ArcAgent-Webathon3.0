import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SectionHeader from '../components/ui/SectionHeader';
import TabBar from '../components/ui/TabBar';
import ScrollReveal from '../components/shared/ScrollReveal';

const TABS = ['Overview', 'Data Collection', 'Data Use', 'Your Rights', 'Cookies', 'Contact'];

const CONTENT = {
  Overview: {
    heading: 'Privacy Policy Overview',
    body: [
      'ArcAgent, Inc. ("ArcAgent," "we," "us," or "our") is committed to protecting the privacy of our customers, prospective customers, and visitors to our website. This Privacy Policy describes how we collect, use, disclose, and safeguard your personal information when you use our website, platform, and services (collectively, the "Services").',
      'This policy applies to all information collected through our Services, including our website at arcagent.ai, our enterprise AI platform, and any related applications, tools, or communications. It does not apply to the data you process on behalf of your own customers through our platform — that is governed by your Data Processing Agreement with ArcAgent.',
      'We are committed to compliance with the EU General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and other applicable data protection laws. If you have questions about how we handle your personal data, please contact our Data Protection Officer at privacy@arcagent.ai.',
      'By using our Services, you agree to the collection and use of information in accordance with this policy. We may update this policy periodically. The "Last Updated" date at the top of this page reflects when material changes were last made. Continued use of our Services after changes constitutes acceptance of the updated policy.',
    ],
  },
  'Data Collection': {
    heading: 'What Data We Collect',
    body: [
      'We collect information you provide directly to us when you create an account, request a demo, fill out contact forms, or communicate with us. This includes your name, email address, company name, job title, phone number, and the content of your communications.',
      'We automatically collect certain technical information when you visit our website or use our platform. This includes IP addresses, browser type and version, operating system, referring URLs, pages visited, time spent on pages, and unique device identifiers. We collect this data through cookies, web beacons, and similar tracking technologies.',
      'When you integrate ArcAgent with your enterprise tools (CRM, support desk, communication platforms), we access the data necessary to provide our Services. This may include customer contact information, deal data, support tickets, and communication records. We process this data solely on your behalf as a data processor, as described in your Data Processing Agreement.',
      'We may collect information from third-party sources such as public databases, business intelligence services, and social media platforms to supplement the information we hold about prospective customers. This is used solely for sales and marketing purposes and is treated with the same protections as other personal data.',
      'We do not intentionally collect sensitive personal data such as health information, religious beliefs, political opinions, or financial account numbers. If such data is uploaded to our platform by you or your users, please contact us immediately to ensure it is handled appropriately.',
    ],
  },
  'Data Use': {
    heading: 'How We Use Your Data',
    body: [
      'We use the information we collect to provide, operate, and improve our Services. This includes processing transactions, managing your account, responding to your inquiries, sending you service-related communications, and providing customer support.',
      'We use aggregated and anonymized data to analyze usage patterns, improve our platform features, train our AI models (on your data only with your explicit consent), and develop new services. Individual customers are never identifiable in this aggregated analysis.',
      'With your consent or based on our legitimate interests, we may use your contact information to send marketing communications about our products, industry insights, and company news. You can opt out of marketing emails at any time by clicking "Unsubscribe" in any email or contacting us at privacy@arcagent.ai.',
      'We may use your information to detect, prevent, and respond to fraud, abuse, security incidents, and other potentially harmful activities. We also use it to comply with legal obligations, enforce our terms of service, and protect the rights and safety of ArcAgent, our customers, and the public.',
      'We do not sell your personal data to third parties. We do not use your data to serve you advertising from other companies. Our business model is based on providing value through our Services, not monetizing your information.',
    ],
  },
  'Your Rights': {
    heading: 'Your Privacy Rights',
    body: [
      'Depending on your location, you may have certain rights regarding your personal data. Under the GDPR, EU/EEA residents have the right to access, rectify, erase, restrict processing of, and port their personal data. You also have the right to object to processing and to withdraw consent at any time where processing is based on consent.',
      'California residents have rights under the CCPA, including the right to know what personal information is collected about them, the right to know whether personal information is sold or disclosed and to whom, the right to opt out of the sale of personal information (note: we do not sell personal information), and the right to equal service and price whether or not they exercise their privacy rights.',
      'To exercise any of these rights, please submit a request to privacy@arcagent.ai. We will respond to verified requests within 30 days (or 45 days for complex requests, with notice). We may need to verify your identity before processing your request. We will not discriminate against you for exercising your privacy rights.',
      'If you are located in the EU/EEA and believe we have not handled your personal data in compliance with applicable law, you have the right to lodge a complaint with your local supervisory authority. ArcAgent\'s lead supervisory authority for EU matters is the Irish Data Protection Commission.',
    ],
  },
  Cookies: {
    heading: 'Cookies & Tracking Technologies',
    body: [
      'We use cookies and similar tracking technologies to operate and improve our Services. Cookies are small text files stored on your device that allow us to recognize you, remember your preferences, and understand how you interact with our website.',
      'We use three categories of cookies: (1) Strictly necessary cookies, which are essential for the website to function and cannot be disabled; (2) Analytics cookies, which help us understand how visitors use our site by collecting aggregated, anonymous information; and (3) Marketing cookies, which track your activity across sites and are used to deliver relevant advertising and measure campaign effectiveness.',
      'We use analytics tools including Google Analytics and Segment to understand how our website and platform are used. These tools may set their own cookies. We have configured these tools to anonymize IP addresses and not share data with third parties for advertising purposes.',
      'You can control cookies through your browser settings. Most browsers allow you to refuse cookies, delete existing cookies, and configure your preferences. Note that disabling cookies may affect the functionality of our website. You can also use our cookie preference center, accessible via the cookie banner on your first visit.',
      'We participate in the IAB Transparency and Consent Framework (TCF) for users in the EU/EEA. Our consent management platform records and stores your cookie preferences and allows you to update them at any time by clicking "Cookie Settings" in the website footer.',
    ],
  },
  Contact: {
    heading: 'How to Reach Us',
    body: [
      'If you have questions, concerns, or requests related to this Privacy Policy or our handling of your personal data, please contact our Data Protection Officer. We are committed to resolving privacy concerns promptly and transparently.',
      'You can reach us by email at privacy@arcagent.ai. For formal data subject requests (access, erasure, portability, etc.), please use this same address and include your name, the email address associated with your account, and a clear description of your request. We will respond within 30 days.',
      'Our mailing address is: ArcAgent, Inc., Attn: Data Protection Officer, 1 Market Street, Suite 300, San Francisco, CA 94105, United States. For EU/EEA inquiries, our EU representative is ArcAgent Ireland Ltd., 2 Grand Canal Square, Dublin 2, D02 A342, Ireland.',
      'For security vulnerability disclosures, please use security@arcagent.ai rather than our privacy contact. For general product or sales inquiries, please visit our contact page at arcagent.ai/contact.',
    ],
  },
};

export default function PrivacyPolicy() {
  const [activeTab, setActiveTab] = useState('Overview');
  const section = CONTENT[activeTab];

  return (
    <>
      <Head>
        <title>Privacy Policy — ArcAgent</title>
        <meta name="description" content="ArcAgent's Privacy Policy. Learn how we collect, use, and protect your data." />
      </Head>

      {/* ── Hero ── */}
      <section className="pt-16 md:pt-20 lg:pt-28 pb-0" style={{ background: '#0A0F2C' }}>
        <div className="page-container text-center">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
            <SectionHeader
              overline="Legal"
              heading="Privacy Policy"
              subtext="Last updated: January 1, 2025"
              centered
              dark
            />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="pt-12 md:pt-14 pb-16 md:pb-20 lg:pb-28" style={{ background: '#0A0F2C' }}>
        <div className="page-container">
          <div className="max-w-4xl mx-auto">
          {/* Tab bar */}
          <div className="mb-10">
            <TabBar tabs={TABS} activeTab={activeTab} onChange={setActiveTab} dark />
          </div>

          {/* Content panel */}
          <div className="rounded-card p-8 md:p-12" style={{ background: '#0E1435', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h2 className="font-syne font-bold text-2xl md:text-3xl text-white mb-8">{section.heading}</h2>
            <div className="flex flex-col gap-5">
              {section.body.map((para, i) => (
                <p key={i} className="text-[#C8CCE0] text-sm md:text-base leading-relaxed">{para}</p>
              ))}
            </div>
          </div>

          {/* Bottom link */}
          <div className="mt-8 text-center">
            <p className="text-[#8088A8] text-sm mb-3">Have questions about our privacy practices?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 font-figtree font-medium text-sm transition-colors"
              style={{ color: '#2539E7' }}
            >
              Contact Us →
            </Link>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
