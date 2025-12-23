import React from 'react';
import { GlassCard } from "./ui/glass-card";
import { CreditCard, History, Wallet, Briefcase, ChevronRight, AlertCircle, CheckCircle2, Clock } from "lucide-react";
import { Button } from "./ui/button";

interface DashboardProps {
  userRole: 'investor' | 'business';
  walletBalance: number;
}

export function Dashboard({ userRole, walletBalance }: DashboardProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-serif font-bold text-white mb-2">
            {userRole === 'investor' ? 'Investor Dashboard' : 'Business Portal'}
          </h2>
          <p className="text-gray-400">
            Welcome back, {userRole === 'investor' ? 'Alex' : 'Sarah'}. Here is your overview.
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Current Plan</p>
          <span className="inline-block px-3 py-1 rounded border border-[#d4af37]/30 text-[#d4af37] text-xs font-bold">
            PREMIUM TIER
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <GlassCard className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-[#d4af37]/10 rounded-lg">
                  {userRole === 'investor' ? <Wallet className="text-[#d4af37]" /> : <Briefcase className="text-[#d4af37]" />}
                </div>
                <span className="text-green-400 text-xs font-bold flex items-center gap-1">
                  +12% <TrendingUpIcon className="w-3 h-3" />
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-1">{userRole === 'investor' ? 'Total Invested' : 'Capital Raised'}</p>
              <h3 className="text-2xl font-bold text-white">450,000 EGP</h3>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <CheckCircle2 className="text-blue-400" />
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-1">{userRole === 'investor' ? 'Deals Closed' : 'Applications'}</p>
              <h3 className="text-2xl font-bold text-white">3</h3>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Clock className="text-purple-400" />
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-1">Pending Actions</p>
              <h3 className="text-2xl font-bold text-white">2</h3>
            </GlassCard>
          </div>

          {/* Activity / List */}
          <GlassCard className="min-h-[400px]">
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <h3 className="font-bold text-white">
                {userRole === 'investor' ? 'Unlocked Opportunities' : 'My Listings'}
              </h3>
              <Button variant="ghost" size="sm" className="text-[#d4af37] hover:text-white hover:bg-white/5">
                View All
              </Button>
            </div>
            
            <div className="p-2">
              {[1, 2, 3].map((item) => (
                <div key={item} className="p-4 hover:bg-white/5 rounded-lg transition-colors flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gray-800 bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1552566626-52f8b828add9?w=100&q=80)` }} />
                    <div>
                      <h4 className="text-white font-medium group-hover:text-[#d4af37] transition-colors">Urban Eats Franchise #{item}</h4>
                      <p className="text-sm text-gray-500">Unlocked on Dec {20 - item}, 2024</p>
                    </div>
                  </div>
                  <ChevronRight className="text-gray-600 group-hover:text-white transition-colors" />
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Sidebar / Wallet */}
        <div className="space-y-8">
          <GlassCard className="p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37] opacity-10 blur-[40px] rounded-full pointer-events-none" />
            <h3 className="font-bold text-white mb-6 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-[#d4af37]" /> Wallet Balance
            </h3>
            
            <div className="mb-8 text-center">
              <h2 className="text-4xl font-serif font-bold text-white mb-2">{walletBalance.toLocaleString()} <span className="text-sm text-[#d4af37] font-sans">Credits</span></h2>
              <p className="text-xs text-gray-400">1 Credit = 1 EGP</p>
            </div>

            <div className="space-y-3">
              <Button className="w-full bg-[#d4af37] text-[#020b1c] hover:bg-[#b5952f]">Top Up Wallet</Button>
              <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">Transaction History</Button>
            </div>
          </GlassCard>

          {userRole === 'business' && (
             <GlassCard className="p-6 border-l-4 border-l-[#d4af37]">
               <h3 className="font-bold text-white mb-4">Application Status</h3>
               <div className="space-y-6 relative">
                  {/* Status Line */}
                  <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-white/10" />

                  {[
                    { title: "Draft Created", date: "Dec 10", done: true },
                    { title: "Submitted for Review", date: "Dec 12", done: true },
                    { title: "ITI Verification", date: "In Progress", active: true },
                    { title: "Live on Market", date: "Pending", done: false },
                  ].map((step, idx) => (
                    <div key={idx} className="relative flex items-start gap-4 pl-1">
                      <div className={`w-4 h-4 rounded-full z-10 mt-1 ${step.done ? 'bg-[#d4af37]' : step.active ? 'bg-white border-2 border-[#d4af37]' : 'bg-gray-700'}`} />
                      <div>
                        <p className={`text-sm font-medium ${step.done || step.active ? 'text-white' : 'text-gray-500'}`}>{step.title}</p>
                        <p className="text-xs text-gray-500">{step.date}</p>
                      </div>
                    </div>
                  ))}
               </div>
             </GlassCard>
          )}

          {userRole === 'investor' && (
            <GlassCard className="p-6 bg-gradient-to-br from-[#d4af37]/20 to-transparent border-[#d4af37]/30">
              <h3 className="font-bold text-[#d4af37] mb-2">Premium Investor Club</h3>
              <p className="text-sm text-gray-300 mb-4">
                Join the waiting list for our exclusive Series A syndicate deals.
              </p>
              <Button size="sm" variant="ghost" className="p-0 h-auto text-white hover:text-[#d4af37] underline">
                Learn More
              </Button>
            </GlassCard>
          )}
        </div>
      </div>
    </div>
  );
}

function TrendingUpIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  )
}
