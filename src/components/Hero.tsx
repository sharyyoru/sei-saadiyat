'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, Play } from 'lucide-react';
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

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-28 lg:py-32">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
              <span className="w-2 h-2 bg-[#c9a962] rounded-full animate-pulse" />
              <span className="text-white/70 text-sm tracking-wide">Saadiyat Island, Abu Dhabi</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-light tracking-tight leading-[1.1] mb-6">
              Move Into
              <br />
              <span className="font-semibold text-[#c9a962]">Stillness</span>
            </h1>
            
            <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              An exclusive collection of 778 residences across 6 towers by Aldar, 
              where modern luxury meets timeless serenity.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-10">
              <div className="text-center lg:text-left">
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Starting From</p>
                <p className="text-3xl md:text-4xl font-semibold text-white">AED 2.95M</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/10 mx-4" />
              <div className="text-center lg:text-left">
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Payment Plan</p>
                <p className="text-3xl md:text-4xl font-semibold text-[#c9a962]">50/50</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button 
                onClick={handleRegisterClick} 
                size="lg"
                className="w-full sm:w-auto bg-[#c9a962] hover:bg-[#b8984f] text-black font-semibold px-8 group"
              >
                Register Your Interest
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={handleRegisterClick}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white/20 text-white hover:bg-white hover:text-black"
              >
                Download Brochure
              </Button>
            </div>
          </div>

          {/* Right Video */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[9/16] max-h-[70vh] lg:max-h-[80vh] mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
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
              
              {/* Video overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
              
              {/* Play indicator */}
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Play className="w-4 h-4 text-white fill-white" />
                </div>
                <span className="text-white/80 text-sm font-medium">Watch Video</span>
              </div>

              {/* Logo overlay */}
              <div className="absolute top-6 right-6">
                <Image
                  src="/images/Main logo.png"
                  alt="SEI"
                  width={48}
                  height={48}
                  className="w-12 h-12 opacity-80"
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#c9a962]/10 to-transparent rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#c9a962]/5 to-transparent" />
      </div>
    </section>
  );
}
