import React from 'react';
import { motion } from "motion/react";
import { PieChart, TrendingUp, Calendar, AlertCircle, ArrowUpRight } from "lucide-react";
import { GlassCard } from "./ui/glass-card";

export function Portfolio() {
  return (
    <div className="min-h-screen bg-[#020b1c] pb-24 pt-12">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-serif font-bold text-white mb-2">My Portfolio</h1>
            <p className="text-gray-400">Track your active investments and performance.</p>
          </div>
          <div className="flex gap-4">
             <div className="bg-[#0f172a] border border-white/10 rounded-lg px-4 py-2 text-right">
                <p className="text-[10px] text-gray-500 uppercase">Total Invested</p>
                <p className="text-lg font-bold text-white">450,000 EGP</p>
             </div>
             <div className="bg-[#0f172a] border border-white/10 rounded-lg px-4 py-2 text-right">
                <p className="text-[10px] text-gray-500 uppercase">Current Value</p>
                <p className="text-lg font-bold text-[#d4af37]">512,000 EGP</p>
             </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Active Investment 1 */}
          <GlassCard className="p-0 overflow-hidden group hover:border-[#d4af37]/30 transition-all">
            <div className="h-32 bg-gradient-to-br from-[#020b1c] to-[#0f172a] relative">
               <div className="absolute top-4 right-4 bg-green-500/10 text-green-400 border border-green-500/20 text-[10px] px-2 py-1 rounded-full flex items-center gap-1 font-bold">
                 <TrendingUp className="w-3 h-3" /> +12.5%
               </div>
               <div className="absolute -bottom-6 left-6 w-12 h-12 rounded-lg bg-[#1e293b] border border-white/10 flex items-center justify-center text-xl font-serif font-bold text-white shadow-xl">
                 UE
               </div>
            </div>
            <div className="pt-8 px-6 pb-6">
              <h3 className="text-lg font-bold text-white mb-1">Urban Eats</h3>
              <p className="text-xs text-gray-500 mb-4">Fast Casual Dining Chain</p>
              
              <div className="grid grid-cols-2 gap-4 mb-4 border-t border-white/5 pt-4">
                 <div>
                   <p className="text-[10px] text-gray-500 uppercase">Equity Owned</p>
                   <p className="text-sm font-bold text-white">2.5%</p>
                 </div>
                 <div>
                   <p className="text-[10px] text-gray-500 uppercase">Next Dividend</p>
                   <p className="text-sm font-bold text-white">Jun 15, 2025</p>
                 </div>
              </div>
              
              <button className="w-full py-2 rounded bg-white/5 hover:bg-white/10 text-xs text-gray-300 transition-colors">
                View Performance Report
              </button>
            </div>
          </GlassCard>

          {/* Active Investment 2 */}
          <GlassCard className="p-0 overflow-hidden group hover:border-[#d4af37]/30 transition-all">
            <div className="h-32 bg-gradient-to-br from-[#020b1c] to-[#0f172a] relative">
               <div className="absolute top-4 right-4 bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 text-[10px] px-2 py-1 rounded-full flex items-center gap-1 font-bold">
                 <Calendar className="w-3 h-3" /> Quarterly
               </div>
               <div className="absolute -bottom-6 left-6 w-12 h-12 rounded-lg bg-[#1e293b] border border-white/10 flex items-center justify-center text-xl font-serif font-bold text-white shadow-xl">
                 TF
               </div>
            </div>
            <div className="pt-8 px-6 pb-6">
              <h3 className="text-lg font-bold text-white mb-1">TechFlow Solutions</h3>
              <p className="text-xs text-gray-500 mb-4">SaaS Enterprise Software</p>
              
              <div className="grid grid-cols-2 gap-4 mb-4 border-t border-white/5 pt-4">
                 <div>
                   <p className="text-[10px] text-gray-500 uppercase">Invested Amount</p>
                   <p className="text-sm font-bold text-white">200,000 EGP</p>
                 </div>
                 <div>
                   <p className="text-[10px] text-gray-500 uppercase">Lock-up Period</p>
                   <p className="text-sm font-bold text-white">18 Months</p>
                 </div>
              </div>
              
              <button className="w-full py-2 rounded bg-white/5 hover:bg-white/10 text-xs text-gray-300 transition-colors">
                View Performance Report
              </button>
            </div>
          </GlassCard>

          {/* Pending Action Card */}
          <div className="border border-dashed border-white/10 rounded-xl p-6 flex flex-col items-center justify-center text-center bg-white/[0.02]">
             <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-4">
               <AlertCircle className="w-6 h-6 text-[#d4af37]" />
             </div>
             <h3 className="text-lg font-bold text-white mb-2">Pending Deal</h3>
             <p className="text-sm text-gray-400 mb-6 max-w-xs">
               You have an active negotiation with <span className="text-white">BioHealth Clinics</span> waiting for your signature.
             </p>
             <button className="px-6 py-2 bg-[#d4af37] text-[#020b1c] font-bold rounded-lg hover:bg-[#b5952f] transition-colors text-sm">
               Resume Negotiation
             </button>
          </div>

        </div>
      </div>
    </div>
  );
}
