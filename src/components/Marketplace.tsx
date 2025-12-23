import React from 'react';
import { Lock, Unlock, ArrowRight, MapPin, TrendingUp, DollarSign } from "lucide-react";
import { Button } from "./ui/button";
import { GlassCard } from "./ui/glass-card";

export interface Opportunity {
  id: string;
  name: string;
  industry: string;
  description: string;
  location: string;
  minInvestment: number;
  imageUrl: string;
  revenue: number;
  netProfit: number;
  isUnlocked: boolean;
  tags: string[];
}

interface MarketplaceProps {
  opportunities: Opportunity[];
  onUnlock: (id: string) => void;
  onViewDetails: (id: string) => void;
  userRole: 'investor' | 'business';
  currency: 'EGP' | 'SAR';
}

export function Marketplace({ opportunities, onUnlock, onViewDetails, userRole, currency }: MarketplaceProps) {
  return (
    <section className="py-20 container mx-auto px-4" id="marketplace">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-4xl font-serif font-bold text-white mb-4">Marketplace</h2>
          <p className="text-gray-400 max-w-xl">
            Browse verified investment opportunities. Unlock detailed financial data to make informed decisions.
          </p>
        </div>
        <div className="flex gap-2">
          {['All', 'Food & Beverage', 'Retail', 'Tech', 'Services'].map((filter) => (
            <button 
              key={filter}
              className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm hover:bg-[#d4af37] hover:text-[#020b1c] transition-all text-gray-300"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {opportunities.map((opp) => (
          <OpportunityCard 
            key={opp.id} 
            opportunity={opp} 
            onUnlock={() => onUnlock(opp.id)}
            onViewDetails={() => onViewDetails(opp.id)}
            userRole={userRole}
            currency={currency}
          />
        ))}
      </div>
    </section>
  );
}

function OpportunityCard({ 
  opportunity, 
  onUnlock, 
  onViewDetails,
  userRole,
  currency
}: { 
  opportunity: Opportunity; 
  onUnlock: () => void; 
  onViewDetails: () => void;
  userRole: 'investor' | 'business';
  currency: 'EGP' | 'SAR';
}) {
  const rate = currency === 'SAR' ? 0.08 : 1;
  const formatMoney = (val: number) => Math.round(val * rate).toLocaleString() + (currency === 'SAR' ? ' SAR' : ' EGP');

  return (
    <GlassCard hoverEffect className="group h-full flex flex-col">
      {/* Card Header Image */}
      <div className="h-48 w-full relative overflow-hidden">
        <img 
          src={opportunity.imageUrl} 
          alt={opportunity.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
           {opportunity.isUnlocked ? (
             <div className="bg-[#d4af37] text-[#020b1c] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
               <Unlock className="w-3 h-3" /> UNLOCKED
             </div>
           ) : (
             <div className="bg-black/60 backdrop-blur-md text-white border border-white/20 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
               <Lock className="w-3 h-3" /> LOCKED
             </div>
           )}
        </div>
        <div className="absolute top-4 left-4">
           <span className="bg-[#020b1c]/80 backdrop-blur-md text-[#d4af37] px-3 py-1 rounded-full text-xs font-medium border border-[#d4af37]/30">
             {opportunity.industry}
           </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-4">
          <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-[#d4af37] transition-colors">
            {opportunity.name}
          </h3>
          <div className="flex items-center text-gray-400 text-sm mb-4">
            <MapPin className="w-4 h-4 mr-1 text-gray-500" />
            {opportunity.location}
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {opportunity.tags.map(tag => (
              <span key={tag} className="text-[10px] uppercase tracking-wider text-gray-400 border border-white/10 px-2 py-1 rounded-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Financials Grid */}
        <div className="space-y-4 mb-6">
          {/* Funding Progress */}
          <div>
            <div className="flex justify-between text-[10px] uppercase tracking-wider text-gray-400 mb-1">
              <span>Funded</span>
              <span className="text-[#d4af37]">75% Complete</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-[#d4af37] w-3/4 rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 rounded-lg bg-white/5 border border-white/5 flex flex-col justify-between h-20">
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">Target Yield</p>
              <div className="flex items-baseline gap-1">
                 <p className="text-white font-bold text-xl font-mono">22%</p>
                 <span className="text-[10px] text-green-500">IRR</span>
              </div>
            </div>
            
            <div className="p-3 rounded-lg bg-white/5 border border-white/5 relative overflow-hidden group/data flex flex-col justify-between h-20">
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">Min. Ticket</p>
              <p className="text-[#d4af37] font-bold text-lg font-mono">{formatMoney(opportunity.minInvestment).split(' ')[0]}</p>
            </div>
          </div>
        </div>

        {/* Status Strip */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
             <div className="px-2 py-1 rounded border border-green-500/20 bg-green-500/5 text-[10px] text-green-400 font-bold uppercase tracking-wide whitespace-nowrap">
               Verified
             </div>
             <div className="px-2 py-1 rounded border border-blue-500/20 bg-blue-500/5 text-[10px] text-blue-400 font-bold uppercase tracking-wide whitespace-nowrap">
               Audited Data
             </div>
             <div className="px-2 py-1 rounded border border-[#d4af37]/20 bg-[#d4af37]/5 text-[10px] text-[#d4af37] font-bold uppercase tracking-wide whitespace-nowrap">
               Sharia Compliant
             </div>
        </div>

        {/* Actions */}
        <div className="mt-auto">
          {opportunity.isUnlocked ? (
            <Button 
              onClick={onViewDetails}
              className="w-full bg-white/10 hover:bg-[#d4af37] hover:text-[#020b1c] text-white border border-white/20 transition-all"
            >
              View Full Details
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button 
              onClick={onUnlock}
              className="w-full bg-[#d4af37] text-[#020b1c] hover:bg-[#b5952f] transition-all relative overflow-hidden group/btn"
              disabled={userRole !== 'investor'}
            >
              <span className="relative z-10 flex items-center justify-center font-bold">
                Unlock Details (20 Credits)
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
            </Button>
          )}
        </div>
      </div>
    </GlassCard>
  );
}
