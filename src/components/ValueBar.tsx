'use client';

import { Building2, Home, MapPin, Wallet } from 'lucide-react';
import { useSectionTracking } from '@/hooks/useTracking';

const stats = [
  { icon: Building2, value: '6', label: 'Residential Towers' },
  { icon: Home, value: '778', label: 'Exclusive Residences' },
  { icon: MapPin, value: 'Saadiyat', label: 'Island Location' },
  { icon: Wallet, value: '50/50', label: 'Payment Plan' },
];

export function ValueBar() {
  const trackRef = useSectionTracking('value_bar');

  return (
    <section
      ref={trackRef}
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-8"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-4 text-center md:text-left"
            >
              <stat.icon className="w-8 h-8 text-amber-500 hidden sm:block" />
              <div>
                <p className="text-2xl md:text-3xl font-serif text-white">
                  {stat.value}
                </p>
                <p className="text-sm text-white/60 tracking-wide">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
