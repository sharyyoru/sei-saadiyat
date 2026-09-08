'use client';

import { MapPin, Palmtree, Building, Waves, GraduationCap, Plane } from 'lucide-react';
import { useSectionTracking } from '@/hooks/useTracking';

const landmarks = [
  { icon: Building, name: 'Louvre Abu Dhabi', distance: '5 min' },
  { icon: Waves, name: 'Saadiyat Beach', distance: '3 min' },
  { icon: Palmtree, name: 'Saadiyat Beach Golf Club', distance: '7 min' },
  { icon: GraduationCap, name: 'NYU Abu Dhabi', distance: '10 min' },
  { icon: MapPin, name: 'Abu Dhabi Downtown', distance: '15 min' },
  { icon: Plane, name: 'Abu Dhabi Airport', distance: '25 min' },
];

const amenities = [
  'Infinity Pool',
  'Private Beach Access',
  'Fitness Center',
  'Spa & Wellness',
  'Kids Play Area',
  'Landscaped Gardens',
  'Concierge Services',
  'Smart Home Features',
];

export function Location() {
  const trackRef = useSectionTracking('location');

  return (
    <section id="location" ref={trackRef} className="py-20 lg:py-32 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-amber-700 text-sm tracking-[0.2em] uppercase mb-4">
            Prime Location
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
            Saadiyat Island
          </h2>
          <p className="text-gray-600 text-lg">
            Abu Dhabi&apos;s cultural heart, where world-class museums meet pristine
            beaches and championship golf courses.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h3 className="font-serif text-2xl text-gray-900 mb-8">
              Nearby Landmarks
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {landmarks.map((landmark, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white p-4 rounded-lg border border-stone-200"
                >
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <landmark.icon className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{landmark.name}</p>
                    <p className="text-sm text-gray-500">{landmark.distance} drive</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl text-gray-900 mb-8">
              World-Class Amenities
            </h3>
            <div className="bg-white p-8 rounded-lg border border-stone-200">
              <div className="grid grid-cols-2 gap-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-700 rounded-full" />
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
