'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useSectionTracking } from '@/hooks/useTracking';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'What is SEI Saadiyat?',
    answer:
      'SEI Saadiyat is a premium residential development by Aldar Properties on Saadiyat Island, Abu Dhabi. It comprises 6 residential towers with 778 luxury residences, offering 1 to 3-bedroom apartments and exclusive Kanso residences.',
  },
  {
    question: 'What is the starting price for SEI Saadiyat?',
    answer:
      'Prices at SEI Saadiyat start from AED 2.95 million for a 1-bedroom residence. For detailed pricing on all unit types, please register your interest to receive the complete price list.',
  },
  {
    question: 'What payment plan options are available?',
    answer:
      'SEI Saadiyat offers an attractive 50/50 payment plan. Pay 50% during construction through easy installments and the remaining 50% on handover. This makes owning a home on Saadiyat Island more accessible.',
  },
  {
    question: 'When is the expected handover date?',
    answer:
      'The expected handover for SEI Saadiyat is in 2030. The payment plan is structured with milestones from booking through to handover.',
  },
  {
    question: 'Where is SEI Saadiyat located?',
    answer:
      "SEI Saadiyat is located on Saadiyat Island, Abu Dhabi's premier cultural and lifestyle destination. It's just minutes from the Louvre Abu Dhabi, pristine beaches, championship golf courses, and the heart of Abu Dhabi.",
  },
  {
    question: 'What amenities are available at SEI Saadiyat?',
    answer:
      'Residents will enjoy world-class amenities including infinity pools, private beach access, a state-of-the-art fitness center, spa and wellness facilities, kids play areas, landscaped gardens, and 24/7 concierge services.',
  },
  {
    question: 'Who is the developer of SEI Saadiyat?',
    answer:
      "SEI Saadiyat is developed by Aldar Properties, Abu Dhabi's leading real estate developer with over 25 years of experience and more than 85 projects delivered across the UAE.",
  },
  {
    question: 'Can foreign nationals buy property at SEI Saadiyat?',
    answer:
      'Yes, Saadiyat Island is a designated freehold area where foreign nationals can purchase property with full ownership rights. SEI Saadiyat is open to investors from all nationalities.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const trackRef = useSectionTracking('faq');

  return (
    <section ref={trackRef} className="py-20 lg:py-32 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-amber-700 text-sm tracking-[0.2em] uppercase mb-4">
              Frequently Asked
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
              Questions & Answers
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-stone-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-stone-50 transition-colors"
                >
                  <span className="font-medium text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'w-5 h-5 text-amber-700 flex-shrink-0 transition-transform duration-300',
                      openIndex === index && 'rotate-180'
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'overflow-hidden transition-all duration-300',
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  )}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
