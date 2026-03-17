import emailjs from '@emailjs/browser';
import { EMAILJS } from './constants';

let initialized = false;

function ensureInit() {
  if (!initialized && EMAILJS.publicKey) {
    emailjs.init(EMAILJS.publicKey);
    initialized = true;
  }
}

export async function sendDemoRequest(formData) {
  ensureInit();
  return emailjs.send(EMAILJS.serviceId, EMAILJS.templateId, {
    from_name: formData.fullName,
    from_email: formData.email,
    phone: formData.phone || '',
    company: formData.company || '',
    role: formData.role || '',
    company_size: formData.companySize || '',
    agent_interest: formData.agentInterest || '',
    source: formData.source || '',
    message: formData.message || '',
    contact_pref: formData.contactPref || 'Email',
  });
}

export async function sendContactForm(formData) {
  ensureInit();
  return emailjs.send(EMAILJS.serviceId, EMAILJS.templateId, {
    from_name: formData.fullName,
    from_email: formData.email,
    company: formData.company || '',
    subject: formData.subject || '',
    message: formData.message || '',
  });
}
