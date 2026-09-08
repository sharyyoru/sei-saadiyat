'use client';

import { useState, useEffect } from 'react';
import { Download, Calculator, TrendingUp, Calendar, ChevronRight } from 'lucide-react';
import { Button } from './ui/Button';
import { Modal } from './ui/Modal';
import { RegistrationForm } from './RegistrationForm';
import { useSectionTracking } from '@/hooks/useTracking';
import { trackCTAClick } from '@/lib/tracking';

const unitPrices = [
  { type: '1-Bedroom', price: 2950000 },
  { type: '2-Bedroom', price: 4500000 },
  { type: '2-Bedroom + Maid', price: 5400000 },
  { type: '3-Bed Kanso', price: 8400000 },
  { type: '2-Bed Kanso Loft', price: 7500000 },
];

const paymentMilestones = [
  { milestone: 'Booking', date: 'On Booking', percentage: 5, phase: 'construction' },
  { milestone: 'Installment 2', date: 'Mar 2027', percentage: 5, phase: 'construction' },
  { milestone: 'Installment 3', date: 'Sep 2027', percentage: 5, phase: 'construction' },
  { milestone: 'Installment 4', date: 'Apr 2028', percentage: 10, phase: 'construction' },
  { milestone: 'Installment 5', date: 'Dec 2028', percentage: 10, phase: 'construction' },
  { milestone: 'Installment 6', date: 'Aug 2029', percentage: 10, phase: 'construction' },
  { milestone: 'Installment 7', date: 'Apr 2030', percentage: 5, phase: 'construction' },
  { milestone: 'On Handover', date: '2030', percentage: 50, phase: 'handover' },
];

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-AE', {
    style: 'currency',
    currency: 'AED',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function PaymentPlan() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(0);
  const [activePhase, setActivePhase] = useState<'all' | 'construction' | 'handover'>('all');
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const trackRef = useSectionTracking('payment_plan');

  const selectedPrice = unitPrices[selectedUnit].price;

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedProgress(50), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleDownload = () => {
    trackCTAClick('download_payment_plan', 'payment');
    setIsModalOpen(true);
  };

  const constructionTotal = paymentMilestones
    .filter(m => m.phase === 'construction')
    .reduce((sum, m) => sum + m.percentage, 0);

  return (
    <>
      <section id="payment" ref={trackRef} className="py-24 lg:py-32 bg-[#0a0a0a] text-white overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#c9a962] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Flexible Payment
            </p>
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              <span className="font-semibold">50/50</span> Payment Plan
            </h2>
            <p className="text-white/60 text-lg">
              Pay 50% during construction, 50% on handover. Calculate your personalized payment schedule below.
            </p>
          </div>

          {/* Interactive Donut Chart + Stats */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Donut Chart */}
            <div className="lg:col-span-1 flex flex-col items-center justify-center">
              <div className="relative w-64 h-64">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="12"
                  />
                  {/* Construction phase (50%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#c9a962"
                    strokeWidth="12"
                    strokeDasharray={`${animatedProgress * 2.51} 251.2`}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                  />
                  {/* Handover phase (50%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="12"
                    strokeDasharray={`${animatedProgress * 2.51} 251.2`}
                    strokeDashoffset={`-${animatedProgress * 2.51}`}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out delay-300"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl font-bold text-white">50/50</span>
                  <span className="text-white/50 text-sm mt-1">Split</span>
                </div>
              </div>
              <div className="flex gap-6 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#c9a962]" />
                  <span className="text-white/70 text-sm">Construction</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white" />
                  <span className="text-white/70 text-sm">Handover</span>
                </div>
              </div>
            </div>

            {/* Payment Calculator */}
            <div className="lg:col-span-2 bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#c9a962]/20 flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-[#c9a962]" />
                </div>
                <h3 className="text-xl font-semibold">Payment Calculator</h3>
              </div>

              {/* Unit Selector */}
              <div className="mb-8">
                <label className="text-white/50 text-sm mb-3 block">Select Unit Type</label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                  {unitPrices.map((unit, index) => (
                    <button
                      key={unit.type}
                      onClick={() => setSelectedUnit(index)}
                      className={`px-3 py-3 rounded-lg text-sm font-medium transition-all ${
                        selectedUnit === index
                          ? 'bg-[#c9a962] text-black'
                          : 'bg-white/5 text-white/70 hover:bg-white/10'
                      }`}
                    >
                      {unit.type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Calculated Amounts */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-xl p-5">
                  <p className="text-white/50 text-sm mb-1">Unit Price</p>
                  <p className="text-2xl font-bold text-white">{formatCurrency(selectedPrice)}</p>
                </div>
                <div className="bg-[#c9a962]/10 rounded-xl p-5 border border-[#c9a962]/30">
                  <p className="text-[#c9a962] text-sm mb-1">During Construction</p>
                  <p className="text-2xl font-bold text-[#c9a962]">{formatCurrency(selectedPrice * 0.5)}</p>
                  <p className="text-white/40 text-xs mt-1">7 installments</p>
                </div>
                <div className="bg-white/5 rounded-xl p-5">
                  <p className="text-white/50 text-sm mb-1">On Handover</p>
                  <p className="text-2xl font-bold text-white">{formatCurrency(selectedPrice * 0.5)}</p>
                  <p className="text-white/40 text-xs mt-1">Final payment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div className="flex items-center gap-3 mb-4 md:mb-0">
                <div className="w-10 h-10 rounded-full bg-[#c9a962]/20 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-[#c9a962]" />
                </div>
                <h3 className="text-xl font-semibold">Payment Timeline</h3>
              </div>
              
              {/* Phase Filter */}
              <div className="flex bg-white/5 rounded-lg p-1">
                {(['all', 'construction', 'handover'] as const).map((phase) => (
                  <button
                    key={phase}
                    onClick={() => setActivePhase(phase)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all capitalize ${
                      activePhase === phase
                        ? 'bg-[#c9a962] text-black'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {phase === 'all' ? 'All Payments' : phase}
                  </button>
                ))}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="relative mb-8">
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#c9a962] to-white rounded-full transition-all duration-500"
                  style={{ width: `${constructionTotal}%` }}
                />
              </div>
              <div className="flex justify-between mt-2 text-xs text-white/40">
                <span>Start</span>
                <span>Construction 50%</span>
                <span>Handover 100%</span>
              </div>
            </div>

            {/* Milestone Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {paymentMilestones
                .filter(m => activePhase === 'all' || m.phase === activePhase)
                .map((item, index) => (
                  <div
                    key={index}
                    className={`group relative p-5 rounded-xl border transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                      item.phase === 'handover'
                        ? 'bg-white/10 border-white/20 hover:border-white/40'
                        : 'bg-[#c9a962]/5 border-[#c9a962]/20 hover:border-[#c9a962]/50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className={`text-xs font-semibold uppercase tracking-wider ${
                        item.phase === 'handover' ? 'text-white/50' : 'text-[#c9a962]'
                      }`}>
                        {item.phase}
                      </span>
                      <span className={`text-2xl font-bold ${
                        item.phase === 'handover' ? 'text-white' : 'text-[#c9a962]'
                      }`}>
                        {item.percentage}%
                      </span>
                    </div>
                    <p className="text-white font-medium mb-1">{item.milestone}</p>
                    <p className="text-white/40 text-sm">{item.date}</p>
                    
                    {/* Amount based on selected unit */}
                    <div className="mt-3 pt-3 border-t border-white/10">
                      <p className="text-white/50 text-xs">Amount</p>
                      <p className="text-white font-semibold">
                        {formatCurrency(selectedPrice * (item.percentage / 100))}
                      </p>
                    </div>

                    {/* Hover indicator */}
                    <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-hover:text-white/60 transition-all group-hover:translate-x-1" />
                  </div>
                ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <Button 
                onClick={handleDownload} 
                size="lg"
                className="bg-[#c9a962] hover:bg-[#b8984f] text-black font-semibold"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Full Payment Plan
              </Button>
              <p className="text-white/40 text-sm">
                Includes detailed breakdown & payment schedule
              </p>
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
