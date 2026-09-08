'use client';

import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
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
            
            <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-4 max-w-xl mx-auto lg:mx-0">
              <span className="text-white/80 italic">Sei</span> — stillness and calm in Japanese. 
              778 homes across six towers in Saadiyat Cultural District, shaped by balance, 
              simplicity, and restorative living.
            </p>
            <p className="text-white/40 text-sm mb-8 max-w-xl mx-auto lg:mx-0">
              Architecture by Jacobs • Interiors by Kettle Collective • Estidama Pearl 3
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
              
              {/* Register CTA */}
              <button 
                onClick={handleRegisterClick}
                className="absolute bottom-6 left-6 right-6 flex items-center justify-center gap-2 bg-[#c9a962] hover:bg-[#b8984f] text-black font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Register Your Interest
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#c9a962]/10 to-transparent rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      {/* Abu Dhabi Skyline Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0f1419] to-[#0a0a0a]" />
        
        {/* Subtle skyline silhouette effect */}
        <div className="absolute bottom-0 left-0 right-0 h-[40%]">
          <svg 
            viewBox="0 0 1440 400" 
            className="absolute bottom-0 w-full h-full opacity-[0.08]"
            preserveAspectRatio="xMidYMax slice"
          >
            {/* Stylized Abu Dhabi skyline */}
            <path 
              d="M0,400 L0,280 L60,280 L60,200 L80,200 L80,180 L100,180 L100,200 L120,200 L120,280 
                 L180,280 L180,220 L200,220 L200,150 L210,150 L210,120 L220,120 L220,100 L240,100 L240,120 L250,120 L250,150 L260,150 L260,220 L280,220 L280,280
                 L340,280 L340,240 L360,240 L360,180 L380,180 L380,160 L400,160 L400,180 L420,180 L420,240 L440,240 L440,280
                 L500,280 L500,200 L520,200 L520,140 L540,140 L540,80 L560,80 L560,60 L580,60 L580,80 L600,80 L600,140 L620,140 L620,200 L640,200 L640,280
                 L700,280 L700,220 L720,220 L720,280
                 L780,280 L780,160 L800,160 L800,100 L820,100 L820,60 L850,40 L880,60 L880,100 L900,100 L900,160 L920,160 L920,280
                 L980,280 L980,200 L1000,200 L1000,280
                 L1060,280 L1060,180 L1080,180 L1080,120 L1100,120 L1100,80 L1120,80 L1120,120 L1140,120 L1140,180 L1160,180 L1160,280
                 L1220,280 L1220,240 L1240,240 L1240,280
                 L1300,280 L1300,220 L1320,220 L1320,180 L1340,180 L1340,220 L1360,220 L1360,280
                 L1440,280 L1440,400 Z"
              fill="url(#skylineGradient)"
            />
            <defs>
              <linearGradient id="skylineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#c9a962" />
                <stop offset="100%" stopColor="#0a0a0a" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Ambient glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c9a962]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#c9a962]/3 rounded-full blur-[100px]" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(201,169,98,0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(201,169,98,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
    </section>
  );
}
