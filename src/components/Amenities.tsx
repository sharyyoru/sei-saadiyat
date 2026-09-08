'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Wind, Dumbbell, Heart, Users } from 'lucide-react';
import { useSectionTracking } from '@/hooks/useTracking';

const categories = [
  { 
    id: 'all', 
    label: 'All Amenities',
    icon: null,
  },
  { 
    id: 'breathe', 
    label: 'Breathe',
    icon: Wind,
    description: 'Serene spaces for mindfulness and relaxation',
  },
  { 
    id: 'move', 
    label: 'Move',
    icon: Dumbbell,
    description: 'State-of-the-art fitness and sports facilities',
  },
  { 
    id: 'restore', 
    label: 'Restore',
    icon: Heart,
    description: 'Wellness amenities for rejuvenation',
  },
  { 
    id: 'connect', 
    label: 'Connect',
    icon: Users,
    description: 'Community spaces for gathering and socializing',
  },
];

const amenities = [
  {
    id: 1,
    category: 'restore',
    title: 'Outdoor Yoga Deck',
    description: 'Find inner peace with morning yoga sessions overlooking the gardens',
    image: '/images/amenities/adults-practice-yoga-on-wooden-deck-outdoors-2026-01-07-01-30-39-utc.jpg',
  },
  {
    id: 2,
    category: 'connect',
    title: 'Kids Activity Center',
    description: 'Supervised play areas with engaging activities for children',
    image: '/images/amenities/boys-with-clown-putting-hands-together-for-celebra-2026-01-06-09-07-56-utc.jpg',
  },
  {
    id: 3,
    category: 'move',
    title: 'Sports Courts',
    description: 'Multi-purpose courts for tennis, basketball, and padel',
    image: '/images/amenities/brightly-colored-sports-field-in-the-sunshine-2026-03-25-09-20-51-utc.jpg',
  },
  {
    id: 4,
    category: 'restore',
    title: 'Resort-Style Pool',
    description: 'Temperature-controlled infinity pool with stunning views',
    image: '/images/amenities/couple-floating-relaxing-in-the-swimming-pool-2026-03-20-00-22-20-utc.jpg',
  },
  {
    id: 5,
    category: 'connect',
    title: 'Adventure Playground',
    description: 'Creative outdoor play spaces designed for exploration',
    image: '/images/amenities/girl-plays-on-unique-playground-equipment-outdoors-2026-01-08-06-23-16-utc.jpg',
  },
  {
    id: 6,
    category: 'connect',
    title: 'Private Cinema',
    description: 'Luxurious screening room for private movie nights',
    image: '/images/amenities/home-theater-room-with-large-screen-and-seating-2026-03-24-04-55-45-utc.jpg',
  },
  {
    id: 7,
    category: 'connect',
    title: 'Business Lounge',
    description: 'Professional co-working space with meeting rooms',
    image: '/images/amenities/italy-business-people-working-in-modern-creative-2026-01-09-08-54-54-utc.jpg',
  },
  {
    id: 8,
    category: 'move',
    title: 'Outdoor Fitness',
    description: 'Al fresco workout stations with scenic views',
    image: '/images/amenities/people-exercising-outside-on-a-wooden-deck-2026-03-09-06-09-04-utc.jpg',
  },
  {
    id: 9,
    category: 'restore',
    title: 'Wellness Clinic',
    description: 'On-site health consultations and wellness services',
    image: '/images/amenities/woman-consults-with-medical-professional-in-clinic-2026-03-10-02-08-37-utc.jpg',
  },
  {
    id: 10,
    category: 'move',
    title: 'Fitness Center',
    description: 'Fully-equipped gym with premium cardio and weights',
    image: '/images/amenities/women-working-out-on-treadmills-in-a-gym-2026-03-09-03-24-38-utc.jpg',
  },
];

export function Amenities() {
  const [activeCategory, setActiveCategory] = useState('all');
  const trackRef = useSectionTracking('amenities');

  const filteredAmenities = activeCategory === 'all'
    ? amenities
    : amenities.filter(a => a.category === activeCategory);

  const activeInfo = categories.find(c => c.id === activeCategory);

  return (
    <section ref={trackRef} id="amenities" className="py-24 lg:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[#c9a962] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Lifestyle & Wellness
          </p>
          <h2 className="text-4xl md:text-5xl text-white font-light mb-6">
            Live <span className="font-semibold">Exceptionally</span>
          </h2>
          <p className="text-white/60 text-lg">
            SEI Saadiyat offers a curated selection of amenities designed around four pillars of wellbeing.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-[#c9a962] text-black'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category.icon && <category.icon className="w-4 h-4" />}
              {category.label}
            </button>
          ))}
        </div>

        {/* Category Description */}
        {activeInfo?.description && (
          <p className="text-center text-white/50 mb-10">{activeInfo.description}</p>
        )}

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAmenities.map((amenity, index) => (
            <div
              key={amenity.id}
              className={`group relative rounded-2xl overflow-hidden ${
                index === 0 && activeCategory === 'all' ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className={`relative ${index === 0 && activeCategory === 'all' ? 'aspect-square md:aspect-[4/3]' : 'aspect-[4/3]'}`}>
                <Image
                  src={amenity.image}
                  alt={amenity.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes={index === 0 && activeCategory === 'all' ? '66vw' : '33vw'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full capitalize">
                    {categories.find(c => c.id === amenity.category)?.icon && (
                      (() => {
                        const IconComponent = categories.find(c => c.id === amenity.category)?.icon;
                        return IconComponent ? <IconComponent className="w-3 h-3" /> : null;
                      })()
                    )}
                    {amenity.category}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className={`font-semibold text-white mb-2 ${
                    index === 0 && activeCategory === 'all' ? 'text-2xl' : 'text-lg'
                  }`}>
                    {amenity.title}
                  </h3>
                  <p className="text-white/70 text-sm line-clamp-2">
                    {amenity.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '40+', label: 'Lifestyle Amenities' },
            { value: '24/7', label: 'Concierge Service' },
            { value: '4', label: 'Wellness Pillars' },
            { value: '∞', label: 'Beachfront Access' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-white/5 rounded-xl">
              <p className="text-3xl font-bold text-[#c9a962] mb-2">{stat.value}</p>
              <p className="text-white/50 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
