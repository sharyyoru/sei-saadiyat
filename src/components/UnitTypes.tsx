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
      <section id="units" ref={trackRef} className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-amber-700 text-sm tracking-[0.2em] uppercase mb-4">
              Residence Collection
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
              Choose Your Sanctuary
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
                className={`relative bg-stone-50 rounded-lg p-6 lg:p-8 border border-stone-200 hover:border-amber-300 transition-all duration-300 hover:shadow-lg ${
                  unit.featured ? 'ring-2 ring-amber-500' : ''
                }`}
              >
                {unit.featured && (
                  <span className="absolute -top-3 left-6 bg-amber-700 text-white text-xs px-3 py-1 rounded-full">
                    Premium
                  </span>
                )}
                <h3 className="font-serif text-2xl text-gray-900 mb-2">
                  {unit.type}
                </h3>
                <p className="text-amber-700 text-xl font-medium mb-4">
                  Starting from {unit.startingPrice}
                </p>
                <p className="text-gray-600 text-sm mb-6">{unit.description}</p>
                <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <BedDouble className="w-4 h-4" />
                    <span>{unit.bedrooms} Bed</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Bath className="w-4 h-4" />
                    <span>{unit.bathrooms} Bath</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Maximize className="w-4 h-4" />
                    <span>{unit.size.replace('From ', '')}</span>
                  </div>
                </div>
                <Button
                  onClick={handleUnlockPricing}
                  variant="secondary"
                  className="w-full bg-gray-900 text-white hover:bg-gray-800"
                >
                  <Lock className="w-4 h-4 mr-2" />
                  View Full Details
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 mb-4">
              Register to receive detailed floor plans, pricing, and availability.
            </p>
            <Button onClick={handleUnlockPricing} size="lg">
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
