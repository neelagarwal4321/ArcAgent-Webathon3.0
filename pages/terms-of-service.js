import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SectionHeader from '../components/ui/SectionHeader';
import TabBar from '../components/ui/TabBar';
import ScrollReveal from '../components/shared/ScrollReveal';

const TABS = ['Overview', 'Use of Service', 'Payments', 'IP Rights', 'Termination', 'Governing Law'];

const CONTENT = {
  Overview: {
    heading: 'Terms of Service Overview',
    body: [
      'These Terms of Service ("Terms") constitute a legally binding agreement between you (or the entity you represent) ("Customer") and ArcAgent, Inc. ("ArcAgent," "we," "us," or "our") governing your access to and use of ArcAgent\'s enterprise AI platform, APIs, documentation, and related services (collectively, the "Services").',
      'By accessing or using the Services, by clicking "I Accept," or by executing an Order Form that references these Terms, you acknowledge that you have read, understood, and agree to be bound by these Terms in full. If you are accepting on behalf of a company or other legal entity, you represent and warrant that you have the authority to bind that entity.',
      'These Terms are effective as of the date you first access or use the Services ("Effective Date"). ArcAgent reserves the right to modify these Terms at any time. We will provide notice of material changes via email or through a prominent notice in the Services at least 30 days prior to the changes taking effect. Your continued use of the Services after the effective date of any changes constitutes acceptance of the revised Terms.',
      'These Terms govern the general use of our Services. Additional terms may apply to specific features or services, and any such additional terms are incorporated herein by reference. In the event of a conflict between these Terms and an executed Order Form, the terms of the Order Form will control.',
    ],
  },
  'Use of Service': {
    heading: 'Permitted Use of Services',
    body: [
      'Subject to your compliance with these Terms and timely payment of all fees, ArcAgent grants you a limited, non-exclusive, non-transferable, non-sublicensable license to access and use the Services solely for your internal business operations during the applicable subscription term.',
      'You may not use the Services to: (a) violate any applicable law, regulation, or third-party right; (b) transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable; (c) attempt to gain unauthorized access to any portion of the Services or its related systems; (d) reverse engineer, decompile, or disassemble the Services; (e) use the Services to build a competitive product or service; or (f) resell, sublicense, or otherwise make the Services available to third parties without our prior written consent.',
      'You are responsible for all activity that occurs under your account. You must maintain the security of your account credentials and promptly notify ArcAgent of any unauthorized access or suspected security breach. ArcAgent is not liable for any losses arising from unauthorized use of your account.',
      'ArcAgent reserves the right to suspend or terminate your access to the Services immediately if we determine, in our sole discretion, that you are in breach of these Terms or that your use of the Services poses a security risk, legal risk, or harm to ArcAgent or its other customers.',
      'You agree to provide accurate and complete information when creating your account and to keep this information current. ArcAgent may verify your identity and company information at any time and may terminate your account if we determine that any information is inaccurate or misleading.',
    ],
  },
  Payments: {
    heading: 'Fees, Billing & Payments',
    body: [
      'You agree to pay all fees set forth in the applicable Order Form or as displayed during your subscription purchase. All fees are stated in US Dollars unless otherwise specified. ArcAgent reserves the right to change pricing with 60 days prior written notice; price changes take effect at the start of your next subscription renewal period.',
      'Subscription fees are billed in advance on the date set forth in your Order Form — either monthly or annually. Enterprise customers may negotiate alternative billing terms. All amounts are due within 30 days of invoice. Overdue amounts accrue interest at 1.5% per month (or the maximum rate permitted by law, if lower).',
      'Unless otherwise stated in your Order Form, all fees are non-refundable. If you cancel your subscription before the end of a billing period, you will retain access to the Services until the end of that period but will not receive a pro-rated refund. Annual subscribers may request a pro-rated refund within 30 days of the subscription start date.',
      'You are responsible for all applicable taxes, levies, or duties imposed by taxing authorities on your purchase of the Services. ArcAgent will collect and remit applicable sales taxes where required by law. If you are exempt from sales tax, you must provide a valid exemption certificate.',
      'ArcAgent may suspend your access to the Services if payment is overdue by more than 15 days, after providing written notice. Services will be reinstated promptly upon receipt of all outstanding amounts plus any applicable interest.',
    ],
  },
  'IP Rights': {
    heading: 'Intellectual Property Rights',
    body: [
      'ArcAgent retains all right, title, and interest in and to the Services, including all software, algorithms, AI models, interfaces, documentation, and other technology. Nothing in these Terms transfers any ownership interest in the Services to you. ArcAgent trademarks, service marks, and logos may not be used without our prior written consent.',
      'You retain all right, title, and interest in and to the data you submit to or generate through the Services ("Customer Data"). You grant ArcAgent a limited license to use Customer Data solely to provide the Services to you. We will not use your Customer Data to train general-purpose AI models without your explicit opt-in consent.',
      'To the extent you provide feedback, suggestions, or ideas about the Services ("Feedback"), you hereby grant ArcAgent a perpetual, irrevocable, royalty-free, worldwide license to use such Feedback for any purpose without compensation to you. We are not obligated to act on any Feedback.',
      'ArcAgent will defend you against any third-party claim alleging that the Services, as used in accordance with these Terms, infringe any third-party intellectual property right. ArcAgent\'s obligation is subject to you promptly notifying us of the claim, providing us control of the defense, and reasonably cooperating with our defense efforts.',
      'You will defend and indemnify ArcAgent against claims arising from your Customer Data, your use of the Services in violation of these Terms or applicable law, or any modification of the Services made by you or at your direction.',
    ],
  },
  Termination: {
    heading: 'Termination & Suspension',
    body: [
      'Either party may terminate these Terms for convenience at the end of any subscription term by providing written notice at least 30 days prior to the renewal date. For month-to-month subscriptions, either party may terminate with 30 days written notice. Annual subscriptions may not be cancelled mid-term for convenience.',
      'ArcAgent may terminate these Terms or suspend your access immediately upon written notice if: (a) you materially breach these Terms and fail to cure such breach within 15 days after notice; (b) you become insolvent or subject to bankruptcy proceedings; (c) your use of the Services poses a risk to the security or integrity of the Services or other customers; or (d) continued provision of Services would violate applicable law.',
      'Upon termination, your right to access and use the Services ceases immediately. ArcAgent will retain your Customer Data for 30 days after termination, during which time you may request an export. After 30 days, ArcAgent will delete or anonymize your Customer Data in accordance with our data retention policy, except as required by law.',
      'Provisions of these Terms that by their nature should survive termination will survive, including but not limited to: confidentiality obligations, intellectual property provisions, payment obligations for amounts accrued prior to termination, and limitations of liability.',
    ],
  },
  'Governing Law': {
    heading: 'Governing Law & Disputes',
    body: [
      'These Terms are governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions. For customers based in the EU/EEA, mandatory consumer protection laws of your country of residence may also apply and take precedence.',
      'Any dispute arising out of or relating to these Terms or the Services that cannot be resolved informally shall be resolved through binding arbitration administered by the American Arbitration Association ("AAA") under its Commercial Arbitration Rules, except that either party may seek injunctive or other equitable relief in any court of competent jurisdiction to prevent actual or threatened infringement of intellectual property rights.',
      'The arbitration shall be conducted in English, in San Francisco, California, USA. The arbitrator\'s award shall be final and binding. Each party shall bear its own arbitration fees and costs, except that the arbitrator may award fees and costs to the prevailing party. CLASS ACTION WAIVER: YOU AND ARCAGENT AGREE THAT EACH PARTY MAY BRING CLAIMS ONLY IN ITS INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS ACTION.',
      'TO THE MAXIMUM EXTENT PERMITTED BY LAW: (A) IN NO EVENT SHALL EITHER PARTY BE LIABLE TO THE OTHER FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES; AND (B) ARCAGENT\'S TOTAL LIABILITY TO YOU ARISING FROM OR RELATING TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE TOTAL FEES PAID BY YOU IN THE 12 MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY.',
      'Questions about these Terms? Contact us at legal@arcagent.ai or write to ArcAgent, Inc., Attn: Legal Department, 1 Market Street, Suite 300, San Francisco, CA 94105.',
    ],
  },
};

export default function TermsOfService() {
  const [activeTab, setActiveTab] = useState('Overview');
  const section = CONTENT[activeTab];

  return (
    <>
      <Head>
        <title>Terms of Service — ArcAgent</title>
        <meta name="description" content="ArcAgent's Terms of Service. Read the terms governing your use of our enterprise AI platform." />
      </Head>

      {/* ── Hero ── */}
      <section className="page-section" style={{ background: '#0A0F2C' }}>
        <div className="page-container text-center">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
            <SectionHeader
              overline="Legal"
              heading="Terms of Service"
              subtext="Last updated: January 1, 2025"
              centered
              dark
            />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="page-section" style={{ background: '#0A0F2C' }}>
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
            <p className="text-[#8088A8] text-sm mb-3">Have questions about our terms?</p>
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
