import React, { useState } from 'react';
import { X, Smartphone, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "./ui/button";
import { GlassCard } from "./ui/glass-card";
import { motion, AnimatePresence } from "motion/react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (role: 'investor' | 'business') => void;
}

export function AuthModal({ isOpen, onClose, onLogin }: AuthModalProps) {
  const [step, setStep] = useState<'role' | 'phone' | 'otp'>('role');
  const [selectedRole, setSelectedRole] = useState<'investor' | 'business'>('investor');
  const [countryCode, setCountryCode] = useState('+20');
  const [phoneNumber, setPhoneNumber] = useState('');

  if (!isOpen) return null;

  const handleRoleSelect = (role: 'investor' | 'business') => {
    setSelectedRole(role);
    setStep('phone');
  };

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('otp');
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(selectedRole);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
      >
        <GlassCard className="w-full max-w-md p-0 overflow-hidden shadow-2xl border-[#d4af37]/20">
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#020b1c]/50">
            <div>
              <h2 className="text-xl font-serif font-bold text-white">Welcome to CHANCE</h2>
              <p className="text-xs text-gray-400">The Premium Investment Gateway</p>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-8 bg-[#020b1c]">
            <AnimatePresence mode="wait">
              
              {/* Step 1: Role Selection */}
              {step === 'role' && (
                <motion.div
                  key="role"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <p className="text-sm text-gray-300 mb-6 text-center">How would you like to proceed today?</p>
                  
                  <button 
                    onClick={() => handleRoleSelect('investor')}
                    className="w-full p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-[#d4af37]/10 hover:border-[#d4af37] transition-all group flex items-center justify-between"
                  >
                    <div className="text-left">
                      <h3 className="font-bold text-white group-hover:text-[#d4af37]">I'm an Investor</h3>
                      <p className="text-xs text-gray-400">Looking for opportunities</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-[#d4af37]" />
                  </button>

                  <button 
                    onClick={() => handleRoleSelect('business')}
                    className="w-full p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-[#d4af37]/10 hover:border-[#d4af37] transition-all group flex items-center justify-between"
                  >
                    <div className="text-left">
                      <h3 className="font-bold text-white group-hover:text-[#d4af37]">I'm a Business Owner</h3>
                      <p className="text-xs text-gray-400">Looking for funding</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-[#d4af37]" />
                  </button>
                </motion.div>
              )}

              {/* Step 2: Phone Number */}
              {step === 'phone' && (
                <motion.div
                  key="phone"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <form onSubmit={handlePhoneSubmit} className="space-y-6">
                    <div className="text-center mb-6">
                       <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 mx-auto flex items-center justify-center mb-4 text-[#d4af37]">
                         <Smartphone className="w-6 h-6" />
                       </div>
                       <h3 className="text-lg font-bold text-white">Enter Mobile Number</h3>
                       <p className="text-xs text-gray-400">We'll send you a verification code.</p>
                    </div>

                    <div className="flex gap-3">
                      <div className="relative">
                        <select 
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                          className="appearance-none bg-white/5 border border-white/10 rounded-lg py-3 pl-3 pr-8 text-white focus:outline-none focus:border-[#d4af37] h-12"
                        >
                          <option value="+20">🇪🇬 +20</option>
                          <option value="+966">🇸🇦 +966</option>
                          <option value="+971">🇦🇪 +971</option>
                        </select>
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">
                          ▼
                        </div>
                      </div>
                      <input 
                        type="tel" 
                        placeholder="1xxxxxxxxx"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 text-white focus:outline-none focus:border-[#d4af37] h-12"
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-[#d4af37] text-[#020b1c] hover:bg-[#b5952f] h-12 font-bold">
                      Send Verification Code
                    </Button>
                    
                    <button 
                      type="button" 
                      onClick={() => setStep('role')}
                      className="w-full text-xs text-gray-500 hover:text-white"
                    >
                      Back to Role Selection
                    </button>
                  </form>
                </motion.div>
              )}

              {/* Step 3: OTP */}
              {step === 'otp' && (
                <motion.div
                  key="otp"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <form onSubmit={handleOtpSubmit} className="space-y-6">
                    <div className="text-center mb-6">
                       <h3 className="text-lg font-bold text-white">Verify Account</h3>
                       <p className="text-xs text-gray-400">Enter the 4-digit code sent to {countryCode} {phoneNumber}</p>
                    </div>

                    <div className="flex justify-center gap-4">
                      {[1, 2, 3, 4].map((i) => (
                        <input 
                          key={i}
                          type="text" 
                          maxLength={1}
                          className="w-12 h-12 text-center text-xl font-bold bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#d4af37]"
                        />
                      ))}
                    </div>

                    <Button type="submit" className="w-full bg-[#d4af37] text-[#020b1c] hover:bg-[#b5952f] h-12 font-bold">
                      Verify & Login
                    </Button>
                    
                    <button 
                      type="button" 
                      onClick={() => setStep('phone')}
                      className="w-full text-xs text-gray-500 hover:text-white"
                    >
                      Change Phone Number
                    </button>
                  </form>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          <div className="p-4 bg-[#010610] border-t border-white/5 text-center">
            <p className="text-[10px] text-gray-500 flex items-center justify-center gap-2">
              <ShieldCheck className="w-3 h-3" />
              Secure Bank-Grade Encryption
            </p>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
