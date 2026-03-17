import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setEmail(''); }
  };

  if (submitted) {
    return <p className="text-sm font-figtree text-text-on-dark-secondary">Thanks! You're on the list.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email" value={email} onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com" required
        className="flex-1 min-w-0 bg-surface-1 text-text-primary text-sm font-figtree px-3 py-2 rounded-input focus:outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-text-muted"
      />
      <button type="submit" className="shrink-0 bg-primary text-white text-sm font-figtree font-medium px-4 py-2 rounded-input hover:bg-primary-hover transition-colors">
        Subscribe
      </button>
    </form>
  );
}
