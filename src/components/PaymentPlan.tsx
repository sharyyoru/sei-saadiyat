'use client';

import { useState } from 'react';
import { Check, Download } from 'lucide-react';
import { Button } from './ui/Button';
import { Modal } from './ui/Modal';
import { RegistrationForm } from './RegistrationForm';
import { useSectionTracking } from '@/hooks/useTracking';
import { trackCTAClick } from '@/lib/tracking';

const paymentMilestones = [
  { milestone: 'Booking', date: 'On Booking', percentage: '5%' },
  { milestone: 'Payment 2', date: 'Mar 2027', percentage: '5%' },
  { milestone: 'Payment 3', date: 'Sep 2027', percentage: '5%' },
  { milestone: 'Payment 4', date: 'Apr 2028', percentage: '10%' },
  { milestone: 'Payment 5', date: 'Dec 2028', percentage: '10%' },
  { milestone: 'Payment 6', date: 'Aug 2029', percentage: '10%' },
  { milestone: 'Payment 7', date: 'Apr 2030', percentage: '10%' },
  { milestone: 'Handover', date: 'On Handover', percentage: '45%' },
];

export function PaymentPlan() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const trackRef = useSectionTracking('payment_plan');

  const handleDownload = () => {
    trackCTAClick('download_payment_plan', 'payment');
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="payment" ref={trackRef} className="py-20 lg:py-32 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-amber-400 text-sm tracking-[0.2em] uppercase mb-4">
                Flexible Payment
              </p>
              <h2 className="font-serif text-4xl md:text-5xl mb-6">
                50/50 Payment Plan
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Invest in your future with our attractive payment structure.
                Pay 50% during construction and 50% on handover, making your
                dream home on Saadiyat Island more accessible than ever.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={handleDownload} size="lg">
                  <Download className="w-5 h-5 mr-2" />
                  Download Payment Plan
                </Button>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-white/10">
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
                <span className="text-white/60 text-sm">Milestone</span>
                <span className="text-white/60 text-sm">Payment</span>
              </div>
              <div className="space-y-4">
                {paymentMilestones.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-white/5 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber-700/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-amber-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium">{item.milestone}</p>
                        <p className="text-white/50 text-sm">{item.date}</p>
                      </div>
                    </div>
                    <span className="text-amber-400 text-xl font-serif">
                      {item.percentage}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
                <span className="text-white font-medium">Total</span>
                <span className="text-amber-400 text-2xl font-serif">100%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Download Payment Plan"
        modalName="payment_plan_modal"
      >
        <p className="text-gray-600 mb-6">
          Register to receive the detailed payment plan PDF along with unit
          availability and floor plans.
        </p>
        <RegistrationForm onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
}
