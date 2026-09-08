'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { useSectionTracking } from '@/hooks/useTracking';
import { trackCTAClick } from '@/lib/tracking';

export function AboutSection() {
  const trackRef = useSectionTracking('about');

  const handleLearnMore = () => {
    trackCTAClick('about_learn_more', 'about');
    const units = document.getElementById('units');
    units?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" ref={trackRef} className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-[#c9a962] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              The Development
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0a0a0a] font-light mb-6 leading-tight">
              A Sanctuary of
              <br />
              <span className="font-semibold">Refined Living</span>
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-8">
              <p>
                SEI Saadiyat is a masterfully designed residential development
                on Abu Dhabi&apos;s most coveted island. Comprising 6 elegant towers
                with 778 meticulously crafted residences, SEI offers an
                unparalleled lifestyle where modern luxury meets natural
                serenity.
              </p>
              <p>
                Nestled on Saadiyat Island, residents enjoy proximity to
                world-class cultural institutions including the Louvre Abu
                Dhabi, pristine beaches, and championship golf courses—all while
                being minutes from the heart of Abu Dhabi.
              </p>
            </div>
            <Button 
              onClick={handleLearnMore} 
              size="lg"
              className="bg-[#0a0a0a] hover:bg-[#1a1a1a] text-white group"
            >
              Explore Residences
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/gallery-1.jpg"
                alt="SEI Saadiyat Interior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-[#0a0a0a] text-white p-6 rounded-xl shadow-xl">
              <p className="text-3xl font-semibold">2030</p>
              <p className="text-sm text-white/60 tracking-wide">Expected Handover</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
