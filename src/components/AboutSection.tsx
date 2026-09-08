'use client';

import Image from 'next/image';
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
    <section id="about" ref={trackRef} className="py-20 lg:py-32 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-amber-700 text-sm tracking-[0.2em] uppercase mb-4">
              The Development
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
              A Sanctuary of
              <br />
              <span className="text-amber-700">Refined Living</span>
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
            <Button onClick={handleLearnMore} size="lg">
              Explore Residences
            </Button>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/gallery-1.jpg"
                alt="SEI Saadiyat Interior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-amber-700 text-white p-6 rounded-lg shadow-xl hidden md:block">
              <p className="text-3xl font-serif">2027</p>
              <p className="text-sm tracking-wide">Expected Handover</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
