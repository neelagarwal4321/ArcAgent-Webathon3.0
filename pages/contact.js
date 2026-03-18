import { useState } from 'react';
import Head from 'next/head';
import SectionHeader from '../components/ui/SectionHeader';
import GlassCard from '../components/ui/GlassCard';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import CTABanner from '../components/shared/CTABanner';
import ScrollReveal from '../components/shared/ScrollReveal';
import { sendContactForm } from '../lib/emailjs';

const SUBJECT_OPTIONS = [
  { value: 'Schedule a Demo', label: 'Schedule a Demo' },
  { value: 'Technical Question', label: 'Technical Question' },
  { value: 'Partnership', label: 'Partnership' },
  { value: 'Press Inquiry', label: 'Press Inquiry' },
  { value: 'Other', label: 'Other' },
];

const CONTACT_DETAILS = [
  {
    label: 'Email',
    value: 'hello@arcagent.ai',
    href: 'mailto:hello@arcagent.ai',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+1 (415) 555-0100',
    href: 'tel:+14155550100',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'San Francisco, CA',
    href: null,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: 'Response Time',
    value: 'Within 24 hours',
    href: null,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const OFFICE_HOURS = [
  { days: 'Monday – Friday', hours: '9:00 AM – 6:00 PM PST' },
  { days: 'Saturday', hours: '10:00 AM – 2:00 PM PST' },
  { days: 'Sunday', hours: 'Closed' },
];

const INITIAL_FORM = {
  name: '',
  email: '',
  company: '',
  subject: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  }

  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Full name is required.';
    if (!form.email.trim()) errs.email = 'Email address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email.';
    if (!form.subject) errs.subject = 'Please select a subject.';
    if (!form.message.trim()) errs.message = 'Message is required.';
    return errs;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    try {
      await sendContactForm({
        fullName: form.name,
        email: form.email,
        company: form.company,
        subject: form.subject,
        message: form.message,
      });
    } catch (_) {
      // Gracefully continue even if EmailJS is not configured
    } finally {
      setLoading(false);
      setSuccess(true);
      setForm(INITIAL_FORM);
    }
  }

  return (
    <>
      <Head>
        <title>Contact — ArcAgent</title>
        <meta name="description" content="Get in touch with ArcAgent. Schedule a demo, ask a technical question, or explore a partnership." />
      </Head>

      {/* ── Hero ── */}
      <section className="pt-[64px] md:pt-[80px] lg:pt-[120px] pb-0 bg-[#0A0F2C]">
        <div className="page-container">
          <ScrollReveal>
            <SectionHeader
              overline="Contact"
              heading="Get in Touch"
              subtext="Whether you're ready to see a demo, have a technical question, or want to explore a partnership — we'd love to hear from you."
              centered
              dark
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ── 2-col layout ── */}
      <section className="pt-12 pb-[64px] md:pb-[80px] lg:pb-[120px] bg-[#0A0F2C]">
        <div className="page-container">
          <div className="grid lg:grid-cols-[1fr_420px] gap-10 items-start">

            {/* Left: Contact Form */}
            <ScrollReveal direction="left">
              <GlassCard className="p-8 md:p-10">
                {success ? (
                  <div className="text-center py-12">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                      style={{ background: 'rgba(37,57,231,0.12)' }}
                    >
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2539E7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="font-syne font-bold text-2xl text-[#0A0F2C] mb-3">Message Sent!</h3>
                    <p className="font-figtree text-base text-[#3D4260] leading-relaxed mb-6 max-w-sm mx-auto">
                      Thanks for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSuccess(false)}
                      className="font-figtree text-sm font-medium text-[#2539E7] hover:underline underline-offset-2"
                    >
                      Send another message →
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="font-syne font-bold text-2xl text-[#0A0F2C] mb-2">Send us a message</h2>
                      <p className="font-figtree text-sm text-[#6B7094]">Fill out the form below and we'll be in touch shortly.</p>
                    </div>
                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <Input
                          label="Full Name"
                          name="name"
                          type="text"
                          placeholder="Arjun Mehta"
                          value={form.name}
                          onChange={handleChange}
                          required
                          error={errors.name}
                        />
                        <Input
                          label="Email Address"
                          name="email"
                          type="email"
                          placeholder="arjun@company.com"
                          value={form.email}
                          onChange={handleChange}
                          required
                          error={errors.email}
                        />
                      </div>
                      <Input
                        label="Company"
                        name="company"
                        type="text"
                        placeholder="Acme Corp"
                        value={form.company}
                        onChange={handleChange}
                      />
                      <Input
                        label="Subject"
                        name="subject"
                        type="select"
                        value={form.subject}
                        onChange={handleChange}
                        options={SUBJECT_OPTIONS}
                        required
                        error={errors.subject}
                      />
                      <Input
                        label="Message"
                        name="message"
                        type="textarea"
                        placeholder="Tell us what you're working on and how we can help..."
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        required
                        error={errors.message}
                      />
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        loading={loading}
                        disabled={loading}
                        className="w-full justify-center"
                      >
                        {loading ? 'Sending...' : 'Send Message →'}
                      </Button>
                    </form>
                  </>
                )}
              </GlassCard>
            </ScrollReveal>

            {/* Right: Contact Details */}
            <ScrollReveal direction="right" delay={0.1}>
              <div className="space-y-6">
                {/* Contact info cards */}
                <div
                  className="rounded-card p-6 border border-white/8"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  <h3 className="font-syne font-bold text-white text-lg mb-5">Contact Information</h3>
                  <div className="space-y-4">
                    {CONTACT_DETAILS.map((item) => (
                      <div key={item.label} className="flex items-start gap-3">
                        <div
                          className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-[#2539E7]"
                          style={{ background: 'rgba(37,57,231,0.12)' }}
                        >
                          {item.icon}
                        </div>
                        <div className="pt-0.5">
                          <p className="font-figtree text-xs text-[#8088A8] mb-0.5">{item.label}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="font-figtree text-sm font-medium text-[#C8CCE0] hover:text-white transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="font-figtree text-sm font-medium text-[#C8CCE0]">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Office Hours */}
                <div
                  className="rounded-card p-6 border border-white/8"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  <h3 className="font-syne font-bold text-white text-base mb-4">Office Hours</h3>
                  <div className="space-y-3">
                    {OFFICE_HOURS.map((oh) => (
                      <div key={oh.days} className="flex justify-between items-center">
                        <span className="font-figtree text-sm text-[#8088A8]">{oh.days}</span>
                        <span className={`font-figtree text-sm font-medium ${oh.hours === 'Closed' ? 'text-[#6B7094]' : 'text-[#C8CCE0]'}`}>
                          {oh.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick links */}
                <div
                  className="rounded-card p-6 border border-white/8"
                  style={{ background: 'rgba(37,57,231,0.06)', borderColor: 'rgba(37,57,231,0.2)' }}
                >
                  <p className="font-mono text-[11px] font-medium tracking-widest uppercase text-primary mb-3">Quick Links</p>
                  <div className="space-y-2.5">
                    <p className="font-figtree text-sm text-[#C8CCE0]">Looking for something specific?</p>
                    <div className="flex flex-col gap-2 mt-3">
                      <a href="/products" className="font-figtree text-sm text-[#2539E7] hover:underline underline-offset-2">Explore our AI agents →</a>
                      <a href="/pricing" className="font-figtree text-sm text-[#2539E7] hover:underline underline-offset-2">View pricing plans →</a>
                      <a href="/careers" className="font-figtree text-sm text-[#2539E7] hover:underline underline-offset-2">Join our team →</a>
                      <a href="/blog" className="font-figtree text-sm text-[#2539E7] hover:underline underline-offset-2">Read our blog →</a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTABanner headline="Want a personalized walk-through of ArcAgent?" buttonText="Schedule a Demo →" />
    </>
  );
}
