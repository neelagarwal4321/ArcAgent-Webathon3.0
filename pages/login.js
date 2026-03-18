import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (result?.error) {
      setError('Invalid email or password. Please try again.');
    } else {
      window.location.href = '/';
    }
  }

  return (
    <>
      <Head>
        <title>Sign In — ArcAgent</title>
        <meta name="description" content="Sign in to your ArcAgent dashboard." />
      </Head>

      <div className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: '#0A0F2C' }}>
        {/* Ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(37,57,231,0.15) 0%, transparent 70%)' }} />

        <div className="page-container w-full">
          <div className="relative z-10 w-full max-w-[420px] mx-auto">
            <div className="rounded-card p-8 shadow-2xl" style={{ background: '#F5F0E8', border: '1px solid rgba(10,15,44,0.08)' }}>

            {/* Logo */}
            <div className="flex justify-center mb-8">
              <Link href="/" className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: '#2539E7' }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2L3 6v8l7 4 7-4V6L10 2z" fill="white" fillOpacity="0.9"/>
                    <path d="M10 6l-4 2v4l4 2 4-2V8l-4-2z" fill="#2539E7"/>
                  </svg>
                </div>
                <span className="font-syne font-bold text-xl text-[#0A0F2C]">ArcAgent</span>
              </Link>
            </div>

            <h1 className="font-syne font-bold text-2xl text-[#0A0F2C] text-center mb-1">Welcome back</h1>
            <p className="text-sm text-[#6B7094] text-center mb-8">Sign in to your ArcAgent dashboard</p>

            {/* OAuth buttons */}
            <div className="flex flex-col gap-3 mb-6">
              <button
                onClick={() => signIn('google', { callbackUrl: '/' })}
                className="w-full flex items-center justify-center gap-3 px-5 py-3 rounded-button font-figtree font-medium text-sm transition-all duration-200 hover:bg-gray-50 active:scale-[0.98]"
                style={{ background: '#fff', color: '#0A0F2C', border: '1px solid rgba(10,15,44,0.15)', boxShadow: '0 1px 3px rgba(10,15,44,0.08)' }}
                type="button"
              >
                {/* Google G icon */}
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
                  <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
                  <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                  <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>

              <button
                onClick={() => signIn('github', { callbackUrl: '/' })}
                className="w-full flex items-center justify-center gap-3 px-5 py-3 rounded-button font-figtree font-medium text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                style={{ background: '#24292F', color: '#fff' }}
                type="button"
              >
                {/* GitHub icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                Continue with GitHub
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px" style={{ background: 'rgba(10,15,44,0.12)' }} />
              <span className="text-xs text-[#6B7094] font-medium">or</span>
              <div className="flex-1 h-px" style={{ background: 'rgba(10,15,44,0.12)' }} />
            </div>

            {/* Email/password form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {error && (
                <div className="px-4 py-3 rounded-card text-sm text-red-700" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}>
                  {error}
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-[#3D4260] mb-1.5">Email address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  className="w-full px-4 py-3 rounded-button text-sm font-figtree transition-all duration-200 outline-none"
                  style={{
                    background: '#FFFDF8',
                    border: '1px solid rgba(10,15,44,0.15)',
                    color: '#0A0F2C',
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#2539E7'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(10,15,44,0.15)'}
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-medium text-[#3D4260]">Password</label>
                  <Link href="#" className="text-xs font-medium" style={{ color: '#2539E7' }}>Forgot password?</Link>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-3 rounded-button text-sm font-figtree transition-all duration-200 outline-none"
                  style={{
                    background: '#FFFDF8',
                    border: '1px solid rgba(10,15,44,0.15)',
                    color: '#0A0F2C',
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#2539E7'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(10,15,44,0.15)'}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 font-figtree font-medium text-sm px-5 py-3 rounded-button transition-all duration-200 hover:bg-[#3348F5] active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none mt-1"
                style={{ background: '#2539E7', color: '#fff' }}
              >
                {loading && <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
                {loading ? 'Signing in…' : 'Sign In'}
              </button>
            </form>

            {/* Footer link */}
            <p className="text-center text-xs text-[#6B7094] mt-6">
              Don&apos;t have an account?{' '}
              <Link href="/contact" className="font-medium" style={{ color: '#2539E7' }}>Contact sales</Link>
            </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
