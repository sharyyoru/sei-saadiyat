'use client';

import { RegistrationForm } from './RegistrationForm';
import { useSectionTracking } from '@/hooks/useTracking';

export function RegisterSection() {
  const trackRef = useSectionTracking('register');

  return (
    <section id="register" ref={trackRef} className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-amber-400 text-sm tracking-[0.2em] uppercase mb-4">
              Register Your Interest
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              Be Among The First
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Register today to receive exclusive pricing, floor plans, and
              priority access to unit selection at SEI Saadiyat.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 lg:p-12 shadow-2xl">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
