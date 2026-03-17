import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDemoModal } from '../../context/DemoModalContext';
import Input from '../ui/Input';

const AGENTS = ['ArcReach', 'ArcQual', 'ArcBoard', 'ArcDesk', 'ArcPulse', "Not sure yet"];
const SIZES = ['1-10', '11-50', '51-200', '201-1000', '1000+'];
const SOURCES = ['LinkedIn', 'Google Search', 'Word of mouth', 'Blog / Content', 'Event / Conference', 'Other'];

function Step1({ data, onChange, onNext }) {
  return (
    <div>
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-mono text-xs text-text-muted">Step 1 of 2</span>
        </div>
        <div className="h-1 bg-surface-3 rounded-full"><div className="h-full w-1/2 bg-primary rounded-full transition-all" /></div>
      </div>
      <h2 className="font-syne font-bold text-2xl text-text-primary mb-1">Schedule a Discovery Call</h2>
      <p className="text-sm text-text-muted mb-6">Tell us about yourself to get started.</p>
      <div className="flex flex-col gap-4">
        <Input label="Full Name" name="name" value={data.name} onChange={onChange} required placeholder="Jane Smith" />
        <Input label="Work Email" name="email" type="email" value={data.email} onChange={onChange} required placeholder="jane@company.com" />
        <Input label="Phone" name="phone" type="tel" value={data.phone} onChange={onChange} placeholder="+1 (555) 000-0000" />
        <Input label="Company Name" name="company" value={data.company} onChange={onChange} required placeholder="Acme Corp" />
        <Input label="Job Title" name="title" value={data.title} onChange={onChange} required placeholder="VP Sales" />
      </div>
      <button onClick={onNext} disabled={!data.name || !data.email || !data.company || !data.title}
        className="mt-6 w-full bg-primary text-white font-figtree font-medium text-sm py-3 rounded-button hover:bg-primary-hover transition-colors disabled:opacity-40 disabled:pointer-events-none">
        Continue →
      </button>
    </div>
  );
}

function Step2({ data, onChange, onBack, onSubmit, loading }) {
  const toggleAgent = (agent) => {
    const curr = data.agents || [];
    onChange({ target: { name: 'agents', value: curr.includes(agent) ? curr.filter((a) => a !== agent) : [...curr, agent] } });
  };

  return (
    <div>
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-mono text-xs text-text-muted">Step 2 of 2</span>
        </div>
        <div className="h-1 bg-surface-3 rounded-full"><div className="h-full w-full bg-primary rounded-full transition-all" /></div>
      </div>
      <h2 className="font-syne font-bold text-2xl text-text-primary mb-1">Project Details</h2>
      <p className="text-sm text-text-muted mb-6">Help us understand what you need.</p>
      <div className="flex flex-col gap-4">
        <Input label="Company Size" name="companySize" type="select" value={data.companySize} onChange={onChange} options={SIZES.map((s) => ({ value: s, label: s + ' employees' }))} />
        <div>
          <p className="font-figtree text-sm font-medium text-text-secondary mb-2">Agents you're interested in</p>
          <div className="flex flex-wrap gap-2">
            {AGENTS.map((a) => {
              const active = (data.agents || []).includes(a);
              return (
                <button key={a} type="button" onClick={() => toggleAgent(a)}
                  className={`text-xs px-3 py-1.5 rounded-pill font-figtree font-medium border transition-colors ${active ? 'bg-primary text-white border-primary' : 'bg-surface-2 text-text-secondary border-[rgba(10,15,44,0.1)] hover:border-primary/30'}`}>
                  {a}
                </button>
              );
            })}
          </div>
        </div>
        <Input label="How did you hear about us?" name="source" type="select" value={data.source} onChange={onChange} options={SOURCES} />
        <Input label="Message (optional)" name="message" type="textarea" value={data.message} onChange={onChange} placeholder="Tell us about your current challenges..." rows={3} />
      </div>
      <div className="flex gap-3 mt-6">
        <button onClick={onBack} className="px-4 py-3 text-sm font-figtree text-text-muted hover:text-text-secondary transition-colors">← Back</button>
        <button onClick={onSubmit} disabled={loading}
          className="flex-1 bg-primary text-white font-figtree font-medium text-sm py-3 rounded-button hover:bg-primary-hover transition-colors disabled:opacity-40 flex items-center justify-center gap-2">
          {loading && <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
          Schedule a Discovery Call →
        </button>
      </div>
    </div>
  );
}

function Success({ onClose }) {
  return (
    <div className="text-center py-8">
      <div className="w-16 h-16 rounded-full bg-success/15 flex items-center justify-center mx-auto mb-5">
        <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      <h2 className="font-syne font-bold text-2xl text-text-primary mb-3">We'll be in touch!</h2>
      <p className="text-text-secondary text-sm mb-8 max-w-xs mx-auto">Thank you for your interest. Our team will reach out within 24 hours to schedule your discovery call.</p>
      <button onClick={onClose} className="bg-primary text-white font-figtree font-medium text-sm px-6 py-2.5 rounded-button hover:bg-primary-hover transition-colors">Close</button>
    </div>
  );
}

export default function DemoModal() {
  const { isOpen, closeModal } = useDemoModal();
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', title: '', companySize: '', agents: [], source: '', message: '' });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSuccess(true);
  };

  const handleClose = () => {
    closeModal();
    setTimeout(() => { setStep(1); setSuccess(false); setForm({ name: '', email: '', phone: '', company: '', title: '', companySize: '', agents: [], source: '', message: '' }); }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ background: 'rgba(10,15,44,0.7)', backdropFilter: 'blur(8px)' }}
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-[520px] bg-surface-1 rounded-card shadow-glass p-8 max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={handleClose} className="absolute top-5 right-5 text-text-muted hover:text-text-primary transition-colors">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </button>
            {success ? <Success onClose={handleClose} /> :
              step === 1 ? <Step1 data={form} onChange={handleChange} onNext={() => setStep(2)} /> :
              <Step2 data={form} onChange={handleChange} onBack={() => setStep(1)} onSubmit={handleSubmit} loading={loading} />
            }
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
