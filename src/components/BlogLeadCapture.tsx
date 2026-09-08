'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle, Gift } from 'lucide-react';
import { Button } from './ui/Button';

const countries = [
  'United Arab Emirates',
  'Saudi Arabia',
  'Qatar',
  'Kuwait',
  'India',
  'United Kingdom',
  'United States',
  'Other',
];

export function BlogLeadCapture() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: name,
          email,
          phone,
          country: country || 'Not specified',
          lead_source: 'blog_sidebar',
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-[#0a0a0a] rounded-2xl p-6 text-center">
        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-6 h-6 text-green-400" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Thank You!</h3>
        <p className="text-white/60 text-sm">
          We&apos;ll send you exclusive pricing and availability shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0a] rounded-2xl p-6 sticky top-24">
      <div className="flex items-center gap-2 text-[#c9a962] mb-4">
        <Gift className="w-5 h-5" />
        <span className="text-sm font-semibold">Exclusive Access</span>
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-2">
        Get Priority Pricing
      </h3>
      <p className="text-white/60 text-sm mb-6">
        Register now for exclusive unit pricing, floor plans, and early access to SEI Saadiyat.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#c9a962] transition-colors"
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#c9a962] transition-colors"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#c9a962] transition-colors"
        />
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#c9a962] transition-colors"
        >
          <option value="" className="bg-[#0a0a0a]">Select Country</option>
          {countries.map((c) => (
            <option key={c} value={c} className="bg-[#0a0a0a]">{c}</option>
          ))}
        </select>
        
        {error && (
          <p className="text-red-400 text-sm">{error}</p>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#c9a962] hover:bg-[#b8984f] text-black font-semibold"
        >
          {isSubmitting ? 'Submitting...' : 'Get Exclusive Access'}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </form>

      <p className="text-white/30 text-xs mt-4 text-center">
        By registering, you agree to receive updates about SEI Saadiyat.
      </p>

      {/* Stats */}
      <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-center">
        <div>
          <p className="text-[#c9a962] text-lg font-bold">AED 2.95M</p>
          <p className="text-white/40 text-xs">Starting Price</p>
        </div>
        <div>
          <p className="text-[#c9a962] text-lg font-bold">50/50</p>
          <p className="text-white/40 text-xs">Payment Plan</p>
        </div>
      </div>
    </div>
  );
}
