'use client';

import Image from 'next/image';
import { Award, Building2, Globe, TrendingUp } from 'lucide-react';
import { useSectionTracking } from '@/hooks/useTracking';

const achievements = [
  { icon: Building2, value: '85+', label: 'Projects Delivered' },
  { icon: Globe, value: '100K+', label: 'Residents Housed' },
  { icon: Award, value: '#1', label: 'Developer in Abu Dhabi' },
  { icon: TrendingUp, value: '25+', label: 'Years of Excellence' },
];

export function Developer() {
  const trackRef = useSectionTracking('developer');

  return (
    <section ref={trackRef} className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-amber-700 text-sm tracking-[0.2em] uppercase mb-4">
              Developed By
            </p>
            <Image
              src="/images/aldar-logo.webp"
              alt="Aldar Properties"
              width={180}
              height={60}
              className="mb-6"
            />
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-6">
              Abu Dhabi&apos;s Leading Real Estate Developer
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Aldar Properties is the leading real estate developer in Abu
              Dhabi, with a diversified and sustainable operating model centered
              around two core businesses: Aldar Development and Aldar
              Investment. With a reputation for delivering iconic destinations,
              Aldar continues to shape the urban landscape of the UAE.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <p className="text-2xl font-serif text-gray-900">
                      {item.value}
                    </p>
                    <p className="text-sm text-gray-500">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-amber-100 to-stone-200 rounded-lg flex items-center justify-center">
              <Image
                src="/images/sei-brand.png"
                alt="SEI by Aldar"
                width={400}
                height={400}
                className="object-contain p-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
