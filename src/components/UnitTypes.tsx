'use client';

import { useState } from 'react';
import { BedDouble, Bath, Maximize, Lock } from 'lucide-react';
import { Button } from './ui/Button';
import { Modal } from './ui/Modal';
import { RegistrationForm } from './RegistrationForm';
import { useSectionTracking } from '@/hooks/useTracking';
import { trackCTAClick } from '@/lib/tracking';

const units = [
  {
    type: '1-Bedroom',
    startingPrice: 'AED 2.95M',
    bedrooms: 1,
    bathrooms: 1,
    size: 'From 750 sq.ft',
    description: 'Perfect for professionals and investors seeking prime Saadiyat address.',
  },
  {
    type: '2-Bedroom',
    startingPrice: 'AED 4.5M',
    bedrooms: 2,
    bathrooms: 2,
    size: 'From 1,200 sq.ft',
    description: 'Spacious layouts ideal for couples and small families.',
  },
  {
    type: '2-Bedroom + Maid',
    startingPrice: 'AED 5.4M',
    bedrooms: 2,
    bathrooms: 3,
    size: 'From 1,450 sq.ft',
    description: 'Enhanced living with dedicated staff quarters.',
  },
  {
    type: '3-Bed Kanso Residence',
    startingPrice: 'AED 8.4M',
    bedrooms: 3,
    bathrooms: 4,
    size: 'From 2,100 sq.ft',
    description: 'Premium residence with study room and maid\'s quarters.',
    featured: true,
  },
  {
    type: '2-Bed Kanso Loft',
    startingPrice: 'AED 7.5M',
    bedrooms: 2,
    bathrooms: 3,
    size: 'From 1,800 sq.ft',
    description: 'Duplex living with dramatic double-height spaces.',
    featured: true,
  },
];

export function UnitTypes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const trackRef = useSectionTracking('units');

  const handleUnlockPricing = () => {
    trackCTAClick('unlock_pricing', 'units');
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="units" ref={trackRef} className="py-24 lg:py-32 bg-[#fafafa]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#c9a962] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Residence Collection
            </p>
            <h2 className="text-4xl md:text-5xl text-[#0a0a0a] font-light mb-6">
              Choose Your <span className="font-semibold">Sanctuary</span>
            </h2>
            <p className="text-gray-600 text-lg">
              From intimate one-bedroom retreats to expansive Kanso residences,
              each home is designed for those who appreciate the art of living well.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {units.map((unit, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 hover:border-[#c9a962]/30 transition-all duration-300 hover:shadow-xl group ${
                  unit.featured ? 'ring-2 ring-[#c9a962]' : ''
                }`}
              >
                {unit.featured && (
                  <span className="absolute -top-3 left-6 bg-[#c9a962] text-black text-xs font-semibold px-4 py-1 rounded-full">
                    Premium
                  </span>
                )}
                <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-2">
                  {unit.type}
                </h3>
                <p className="text-[#c9a962] text-xl font-semibold mb-4">
                  Starting from {unit.startingPrice}
                </p>
                <p className="text-gray-500 text-sm mb-6">{unit.description}</p>
                <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-gray-500">
                    <BedDouble className="w-4 h-4 text-[#c9a962]" />
                    <span>{unit.bedrooms} Bed</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Bath className="w-4 h-4 text-[#c9a962]" />
                    <span>{unit.bathrooms} Bath</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Maximize className="w-4 h-4 text-[#c9a962]" />
                    <span>{unit.size.replace('From ', '')}</span>
                  </div>
                </div>
                <Button
                  onClick={handleUnlockPricing}
                  variant="secondary"
                  className="w-full bg-[#0a0a0a] text-white hover:bg-[#1a1a1a] font-medium"
                >
                  <Lock className="w-4 h-4 mr-2" />
                  View Full Details
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-500 mb-6">
              Register to receive detailed floor plans, pricing, and availability.
            </p>
            <Button 
              onClick={handleUnlockPricing} 
              size="lg"
              className="bg-[#c9a962] hover:bg-[#b8984f] text-black font-semibold"
            >
              Unlock Full Pricing
            </Button>
          </div>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get Exclusive Pricing"
        modalName="pricing_modal"
      >
        <p className="text-gray-600 mb-6">
          Register your interest to receive detailed pricing, floor plans, and
          exclusive access to unit selection.
        </p>
        <RegistrationForm onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
}
