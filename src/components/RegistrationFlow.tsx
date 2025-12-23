import React, { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { 
  Building2, Wallet, TrendingUp, CreditCard, CheckCircle2, 
  UploadCloud, ShieldCheck, ArrowRight, X, Star, FileText
} from "lucide-react";
import { Button } from "./ui/button";
import { GlassCard } from "./ui/glass-card";

interface RegistrationFlowProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole: 'investor' | 'franchise' | 'fund' | null;
  onComplete: (role: 'investor' | 'business') => void;
}

export function RegistrationFlow({ isOpen, onClose, initialRole, onComplete }: RegistrationFlowProps) {
  const [step, setStep] = useState(1);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [selectedPlanDuration, setSelectedPlanDuration] = useState<'1m' | '3m' | '6m' | '1y'>('1m');

  // Business Flow State
  const [businessData, setBusinessData] = useState({
    name: '',
    revenue: '',
    files: [] as string[]
  });

  // Investor Flow State
  const [ccData, setCcData] = useState({
    number: '',
    expiry: '',
    cvc: ''
  });

  if (!isOpen) return null;

  const handleNext = () => setStep(s => s + 1);
  const handleBack = () => setStep(s => s - 1);

  const handleSubmit = () => {
    // Determine final broad role based on specific selection
    const finalRole = initialRole === 'investor' ? 'investor' : 'business';
    onComplete(finalRole);
  };

  const renderProgress = () => (
    <div className="flex justify-center gap-2 mb-8">
      {[1, 2, 3].map((i) => (
        <div 
          key={i} 
          className={`h-1.5 rounded-full transition-all duration-300 ${
            step >= i ? 'bg-[#d4af37] w-8' : 'bg-white/10 w-4'
          }`} 
        />
      ))}
    </div>
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#020b1c]/90 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="w-full max-w-2xl my-auto"
      >
        <GlassCard className="p-0 overflow-hidden relative shadow-2xl border-[#d4af37]/30">
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#020b1c]/50">
            <div>
              <h2 className="text-xl font-serif font-bold text-white">
                {initialRole === 'investor' ? 'Investor Registration' : 'Partner Registration'}
              </h2>
              <p className="text-xs text-gray-400">Complete your profile to access CHANCE</p>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-8 bg-[#020b1c] min-h-[500px] flex flex-col">
            {renderProgress()}

            <AnimatePresence mode="wait">
              
              {/* Step 1: Authentication (Simulated) */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex-1 flex flex-col"
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Verify Mobile Number</h3>
                    <p className="text-gray-400">We'll send a code to verify your identity.</p>
                  </div>

                  <div className="max-w-sm mx-auto w-full space-y-4">
                    <div className="flex gap-3">
                      <select className="bg-white/5 border border-white/10 rounded-lg px-3 text-white focus:border-[#d4af37]">
                        <option>+20</option>
                        <option>+966</option>
                      </select>
                      <input 
                        type="tel" 
                        placeholder="1xxxxxxxxx"
                        className="flex-1 bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-[#d4af37] outline-none"
                      />
                    </div>
                    <Button onClick={handleNext} className="w-full bg-[#d4af37] text-[#020b1c] hover:bg-[#b5952f] font-bold">
                      Send Code
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Role Specific Logic */}
              {step === 2 && initialRole === 'investor' && (
                <motion.div
                  key="step2-investor"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex-1"
                >
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-xs font-bold mb-4">
                      <Star className="w-3 h-3 fill-current" /> SPECIAL OFFER
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Pay-Per-Click Access</h3>
                    <p className="text-gray-400 text-sm max-w-md mx-auto">
                      View full company financials and contact details for <span className="text-[#d4af37] font-bold">20 EGP / Click</span>.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-[#d4af37]/20 to-transparent border border-[#d4af37]/30 rounded-xl p-6 mb-8 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#d4af37] text-[#020b1c] text-[10px] font-bold px-3 py-1 rounded-bl-xl">
                      PROMO
                    </div>
                    <h4 className="text-xl font-bold text-white mb-1">First 10 Clicks are FREE!</h4>
                    <p className="text-xs text-gray-300">Link your card now to claim your welcome gift.</p>
                  </div>

                  <div className="space-y-4 max-w-sm mx-auto">
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
                      <input 
                        type="text" 
                        placeholder="Card Number"
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 pl-10 text-white focus:border-[#d4af37] outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        placeholder="MM/YY"
                        className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-[#d4af37] outline-none"
                      />
                      <input 
                        type="text" 
                        placeholder="CVC"
                        className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-[#d4af37] outline-none"
                      />
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-gray-500 justify-center">
                      <ShieldCheck className="w-3 h-3" /> Secure Payment processed by PayTabs
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (initialRole === 'franchise' || initialRole === 'fund') && (
                <motion.div
                  key="step2-business"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex-1"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Choose Your Plan</h3>
                    <p className="text-gray-400 text-sm">Select a subscription duration to list your business.</p>
                  </div>

                  {/* Pricing Tiers */}
                  <div className="grid grid-cols-4 gap-2 bg-white/5 p-1 rounded-lg mb-8">
                    {[
                      { id: '1m', label: 'Monthly' },
                      { id: '3m', label: '3 Months' },
                      { id: '6m', label: '6 Months' },
                      { id: '1y', label: 'Annual' },
                    ].map((plan) => (
                      <button
                        key={plan.id}
                        onClick={() => setSelectedPlanDuration(plan.id as any)}
                        className={`py-2 rounded-md text-xs font-medium transition-all ${
                          selectedPlanDuration === plan.id 
                            ? 'bg-[#d4af37] text-[#020b1c]' 
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {plan.label}
                      </button>
                    ))}
                  </div>

                  {/* Plan Details Card */}
                  <div className="border border-[#d4af37]/30 bg-[#d4af37]/5 rounded-xl p-6 mb-8 text-center">
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">
                      {selectedPlanDuration === '1m' ? 'Standard Access' : 'Premium Savings'}
                    </p>
                    <div className="flex items-end justify-center gap-1 mb-4">
                      <span className="text-4xl font-serif font-bold text-white">
                        {selectedPlanDuration === '1m' ? '5,000' : selectedPlanDuration === '3m' ? '13,500' : selectedPlanDuration === '6m' ? '25,000' : '45,000'}
                      </span>
                      <span className="text-sm text-[#d4af37] font-bold mb-2">EGP</span>
                    </div>
                    <ul className="text-left space-y-2 text-sm text-gray-300 max-w-xs mx-auto">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#d4af37]" /> Unlimited Investor Views</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#d4af37]" /> Financial Locker Security</li>
                      {selectedPlanDuration !== '1m' && (
                        <li className="flex items-center gap-2"><Star className="w-4 h-4 text-[#d4af37]" /> Homepage Feature</li>
                      )}
                    </ul>
                  </div>

                  {/* Quick Data Entry */}
                  <div className="space-y-4 mb-8">
                     <h4 className="font-bold text-white text-sm">Upload Financials</h4>
                     <div className="border-2 border-dashed border-white/10 rounded-xl p-4 flex items-center justify-center gap-4 hover:border-[#d4af37]/50 transition-colors cursor-pointer bg-white/5">
                        <UploadCloud className="w-6 h-6 text-gray-400" />
                        <div className="text-left">
                          <p className="text-sm text-white">Drop Bank Statements / P&L</p>
                          <p className="text-xs text-gray-500">PDF or Excel (Max 5MB)</p>
                        </div>
                     </div>
                  </div>

                  {/* Payment Section for Business */}
                  <div className="border-t border-white/10 pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-white text-sm">Secure Checkout</h4>
                      <div className="flex gap-2">
                        <div className="bg-white/10 px-2 py-1 rounded text-[10px] text-gray-400 font-mono">VISA</div>
                        <div className="bg-white/10 px-2 py-1 rounded text-[10px] text-gray-400 font-mono">MASTERCARD</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="relative">
                        <CreditCard className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
                        <input 
                          type="text" 
                          placeholder="Card Number"
                          value={ccData.number}
                          onChange={(e) => setCcData({...ccData, number: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-lg p-3 pl-10 text-white focus:border-[#d4af37] outline-none font-mono placeholder:font-sans"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <input 
                          type="text" 
                          placeholder="MM/YY"
                          value={ccData.expiry}
                          onChange={(e) => setCcData({...ccData, expiry: e.target.value})}
                          className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-[#d4af37] outline-none text-center"
                        />
                        <input 
                          type="text" 
                          placeholder="CVC"
                          value={ccData.cvc}
                          onChange={(e) => setCcData({...ccData, cvc: e.target.value})}
                          className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-[#d4af37] outline-none text-center"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between text-xs mt-2">
                        <span className="text-gray-400">Total to charge:</span>
                        <span className="text-[#d4af37] font-bold text-lg">
                          {selectedPlanDuration === '1m' ? '5,000' : selectedPlanDuration === '3m' ? '13,500' : selectedPlanDuration === '6m' ? '25,000' : '45,000'} EGP
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Legal Agreement (All Roles) */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex-1 flex flex-col justify-center"
                >
                  <div className="text-center mb-8">
                    <ShieldCheck className="w-16 h-16 text-[#d4af37] mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Final Step: Terms of Service</h3>
                    <p className="text-gray-400 max-w-md mx-auto">
                      Please review the platform agreement to activate your account.
                    </p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8 max-h-48 overflow-y-auto">
                    <h4 className="font-bold text-white text-sm mb-2">Commission Agreement</h4>
                    <p className="text-xs text-gray-300 leading-relaxed mb-4">
                      By using CHANCE, you agree that a success fee of <span className="text-[#d4af37] font-bold">2.0%</span> of the total deal value or funding amount will be payable to CHANCE Financial Technologies upon the successful closure of any investment deal initiated through this platform.
                    </p>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      This fee is legally binding and is due within 14 days of funds transfer. Failure to report closed deals may result in legal action and platform ban.
                    </p>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-[#d4af37]/5 border border-[#d4af37]/20 rounded-lg cursor-pointer" onClick={() => setAgreedToTerms(!agreedToTerms)}>
                    <div 
                      className={`min-w-[20px] h-5 rounded border flex items-center justify-center mt-0.5 transition-colors ${agreedToTerms ? 'bg-[#d4af37] border-[#d4af37]' : 'border-gray-500'}`}
                    >
                      {agreedToTerms && <CheckCircle2 className="w-3.5 h-3.5 text-[#020b1c]" />}
                    </div>
                    <label className="text-sm text-gray-200 cursor-pointer select-none">
                      I agree to the <span className="text-white underline">Terms of Service</span> and the <span className="text-[#d4af37] font-bold">2% Commission Fee</span> on success.
                    </label>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Footer Actions */}
          <div className="p-6 bg-[#020b1c] border-t border-white/10 flex justify-between items-center">
            <Button 
              variant="ghost" 
              onClick={step === 1 ? onClose : handleBack}
              className="text-gray-400 hover:text-white"
            >
              {step === 1 ? 'Cancel' : 'Back'}
            </Button>
            
            {step < 3 ? (
              <Button onClick={handleNext} className="bg-[#d4af37] text-[#020b1c] hover:bg-[#b5952f] font-bold">
                Next Step <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            ) : (
              <Button 
                onClick={handleSubmit} 
                disabled={!agreedToTerms}
                className="bg-[#d4af37] text-[#020b1c] hover:bg-[#b5952f] font-bold px-8 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Complete Registration
              </Button>
            )}
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
