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
  { milestone: 'Booking', date: 'On Booking', dateObj: new Date('2026-09-16'), percentage: 5, phase: 'construction' },
  { milestone: 'Installment 2', date: 'Mar 2027', dateObj: new Date('2027-03-01'), percentage: 5, phase: 'construction' },
  { milestone: 'Installment 3', date: 'Sep 2027', dateObj: new Date('2027-09-01'), percentage: 5, phase: 'construction' },
  { milestone: 'Installment 4', date: 'Apr 2028', dateObj: new Date('2028-04-01'), percentage: 10, phase: 'construction' },
  { milestone: 'Installment 5', date: 'Dec 2028', dateObj: new Date('2028-12-01'), percentage: 10, phase: 'construction' },
  { milestone: 'Installment 6', date: 'Aug 2029', dateObj: new Date('2029-08-01'), percentage: 10, phase: 'construction' },
  { milestone: 'Installment 7', date: 'Apr 2030', dateObj: new Date('2030-04-01'), percentage: 5, phase: 'construction' },
  { milestone: 'On Handover', date: 'Q4 2030', dateObj: new Date('2030-12-01'), percentage: 50, phase: 'handover' },
];

function getPaymentStatus(dateObj: Date): 'completed' | 'current' | 'upcoming' {
  const now = new Date();
  const threeMonthsFromNow = new Date(now.getTime() + 90 * 24 * 60 * 60 * 1000);
  
  if (dateObj < now) return 'completed';
  if (dateObj <= threeMonthsFromNow) return 'current';
  return 'upcoming';
}

function getTimeUntil(dateObj: Date): string {
  const now = new Date();
  const diff = dateObj.getTime() - now.getTime();
  
  if (diff < 0) return 'Completed';
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);
  
  if (years > 0) return `${years}y ${months % 12}m`;
  if (months > 0) return `${months} months`;
  return `${days} days`;
}

function getProgressPercentage(): number {
  const now = new Date();
  const start = new Date('2026-09-16');
  const end = new Date('2030-12-01');
  
  if (now < start) return 0;
  if (now > end) return 100;
  
  const total = end.getTime() - start.getTime();
  const current = now.getTime() - start.getTime();
  
  return Math.round((current / total) * 100);
}

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
                <div>
                  <h3 className="text-xl font-semibold">Payment Timeline</h3>
                  <p className="text-white/40 text-sm">Dynamic progress based on current date</p>
                </div>
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

            {/* Dynamic Progress Bar */}
            <div className="relative mb-8">
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#c9a962] via-[#c9a962] to-white/50 rounded-full transition-all duration-1000 relative"
                  style={{ width: `${getProgressPercentage()}%` }}
                >
                  {/* Animated pulse at end */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full animate-pulse" />
                </div>
              </div>
              <div className="flex justify-between mt-3 text-xs">
                <div>
                  <span className="text-[#c9a962] font-semibold">Sep 2026</span>
                  <span className="text-white/40 ml-1">Start</span>
                </div>
                <div className="text-center">
                  <span className="text-white font-semibold">{getProgressPercentage()}%</span>
                  <span className="text-white/40 ml-1">Progress</span>
                </div>
                <div className="text-right">
                  <span className="text-white/40">Handover</span>
                  <span className="text-white font-semibold ml-1">Q4 2030</span>
                </div>
              </div>
            </div>

            {/* Milestone Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {paymentMilestones
                .filter(m => activePhase === 'all' || m.phase === activePhase)
                .map((item, index) => {
                  const status = getPaymentStatus(item.dateObj);
                  const timeUntil = getTimeUntil(item.dateObj);
                  
                  return (
                    <div
                      key={index}
                      className={`group relative p-5 rounded-xl border transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                        status === 'completed'
                          ? 'bg-green-500/10 border-green-500/30'
                          : status === 'current'
                          ? 'bg-[#c9a962]/20 border-[#c9a962] ring-2 ring-[#c9a962]/50'
                          : item.phase === 'handover'
                          ? 'bg-white/5 border-white/10 hover:border-white/30'
                          : 'bg-white/5 border-white/10 hover:border-[#c9a962]/30'
                      }`}
                    >
                      {/* Status Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          {status === 'completed' && (
                            <span className="flex items-center gap-1 text-xs font-semibold text-green-400 bg-green-500/20 px-2 py-0.5 rounded-full">
                              <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                              PAID
                            </span>
                          )}
                          {status === 'current' && (
                            <span className="flex items-center gap-1 text-xs font-semibold text-[#c9a962] bg-[#c9a962]/20 px-2 py-0.5 rounded-full animate-pulse">
                              <span className="w-1.5 h-1.5 bg-[#c9a962] rounded-full" />
                              NEXT
                            </span>
                          )}
                          {status === 'upcoming' && (
                            <span className="text-xs font-semibold uppercase tracking-wider text-white/40">
                              {item.phase}
                            </span>
                          )}
                        </div>
                        <span className={`text-2xl font-bold ${
                          status === 'completed' ? 'text-green-400' :
                          status === 'current' ? 'text-[#c9a962]' :
                          'text-white/60'
                        }`}>
                          {item.percentage}%
                        </span>
                      </div>
                      
                      <p className={`font-semibold mb-1 ${
                        status === 'completed' ? 'text-green-300' :
                        status === 'current' ? 'text-white' :
                        'text-white/80'
                      }`}>
                        {item.milestone}
                      </p>
                      <p className="text-white/40 text-sm">{item.date}</p>
                      
                      {/* Time Until */}
                      {status !== 'completed' && (
                        <div className="mt-2">
                          <span className={`text-xs ${
                            status === 'current' ? 'text-[#c9a962]' : 'text-white/30'
                          }`}>
                            {status === 'current' ? '⏱ Due in ' : 'In '}{timeUntil}
                          </span>
                        </div>
                      )}
                      
                      {/* Amount based on selected unit */}
                      <div className="mt-3 pt-3 border-t border-white/10">
                        <p className="text-white/50 text-xs">Amount</p>
                        <p className={`font-semibold ${
                          status === 'completed' ? 'text-green-400 line-through opacity-60' :
                          status === 'current' ? 'text-[#c9a962]' :
                          'text-white'
                        }`}>
                          {formatCurrency(selectedPrice * (item.percentage / 100))}
                        </p>
                      </div>

                      {/* Hover indicator */}
                      <ChevronRight className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 transition-all group-hover:translate-x-1 ${
                        status === 'completed' ? 'text-green-500/30 group-hover:text-green-400' :
                        status === 'current' ? 'text-[#c9a962]/50 group-hover:text-[#c9a962]' :
                        'text-white/20 group-hover:text-white/60'
                      }`} />
                    </div>
                  );
                })}
            </div>

            {/* Summary Stats */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-green-400 text-2xl font-bold">
                  {formatCurrency(
                    paymentMilestones
                      .filter(m => getPaymentStatus(m.dateObj) === 'completed')
                      .reduce((sum, m) => sum + selectedPrice * (m.percentage / 100), 0)
                  )}
                </p>
                <p className="text-white/40 text-sm">Paid</p>
              </div>
              <div>
                <p className="text-[#c9a962] text-2xl font-bold">
                  {formatCurrency(
                    paymentMilestones
                      .filter(m => getPaymentStatus(m.dateObj) === 'current')
                      .reduce((sum, m) => sum + selectedPrice * (m.percentage / 100), 0)
                  )}
                </p>
                <p className="text-white/40 text-sm">Next Due</p>
              </div>
              <div>
                <p className="text-white text-2xl font-bold">
                  {formatCurrency(
                    paymentMilestones
                      .filter(m => getPaymentStatus(m.dateObj) === 'upcoming')
                      .reduce((sum, m) => sum + selectedPrice * (m.percentage / 100), 0)
                  )}
                </p>
                <p className="text-white/40 text-sm">Remaining</p>
              </div>
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
