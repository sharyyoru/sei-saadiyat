'use client';

import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/Button';
import { useVideoTracking } from '@/hooks/useVideoTracking';
import { trackCTAClick } from '@/lib/tracking';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useVideoTracking(videoRef);

  const handleRegisterClick = () => {
    trackCTAClick('hero_register', 'hero');
    const form = document.getElementById('register');
    form?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollDown = () => {
    const about = document.getElementById('about');
    about?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-amber-400 text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-fade-in">
            Saadiyat Island, Abu Dhabi
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light tracking-wide mb-6 animate-fade-in-up">
            MOVE INTO
            <br />
            <span className="font-normal">STILLNESS</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-4 animate-fade-in-up animation-delay-200">
            An exclusive collection of residences by Aldar,
            <br className="hidden md:block" /> where luxury meets tranquility.
          </p>
          <p className="text-amber-400 text-xl md:text-2xl font-light mb-8 animate-fade-in-up animation-delay-300">
            Starting from AED 2.95M
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
            <Button onClick={handleRegisterClick} size="lg">
              Register Your Interest
            </Button>
            <Button
              onClick={handleRegisterClick}
              variant="outline"
              size="lg"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </div>

      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
