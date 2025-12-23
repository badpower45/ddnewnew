import React, { useState } from 'react';
import { ArrowLeft, Download, ExternalLink, CheckSquare, FileText, TrendingUp, Users, DollarSign, PieChart, Shield, Lock, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { GlassCard } from "./ui/glass-card";
import { Opportunity } from "./Marketplace";

interface ProjectDetailProps {
  opportunity: Opportunity;
  onBack: () => void;
}

export function ProjectDetail({ opportunity, onBack }: ProjectDetailProps) {
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  return (
    <div className="min-h-screen bg-[#020b1c] pb-24">
      {/* Hero Header */}
      <div className="relative h-[400px]">
        <img 
          src={opportunity.imageUrl} 
          alt={opportunity.name} 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020b1c] via-[#020b1c]/80 to-[#020b1c]/30" />
        
        <div className="container mx-auto px-4 relative h-full flex flex-col justify-end pb-12">
          <Button 
            variant="ghost" 
            className="absolute top-8 left-4 text-white hover:text-[#d4af37] hover:bg-white/5"
            onClick={onBack}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Marketplace
          </Button>

          <div className="flex flex-col md:flex-row items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#d4af37] text-[#020b1c] px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                  Verified Brand
                </span>
                <span className="text-gray-300 text-sm flex items-center gap-1">
                  <Shield className="w-4 h-4 text-[#d4af37]" /> Checked by ITI
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
                {opportunity.name}
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl font-light">
                {opportunity.description}
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button className="bg-[#d4af37] text-[#020b1c] hover:bg-[#c5a028] h-12 px-8 font-bold">
                Contact Founder
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-12 relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Financial Metrics & Data */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Metrics Grid - REFINED TO MATCH IMAGE */}
          <div className="grid grid-cols-2 gap-4">
            {/* Card 1: Min Investment */}
            <div className="bg-[#0b101b]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg aspect-square relative group overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               
               <div className="mb-4 relative z-10 p-3 rounded-full bg-white/5 group-hover:bg-[#d4af37]/10 transition-colors">
                 <DollarSign className="w-6 h-6 text-[#d4af37]" />
               </div>
               <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1 relative z-10">Min. Investment</p>
               <p className="text-2xl font-bold text-white tracking-tight relative z-10">{opportunity.minInvestment.toLocaleString()} EGP</p>
            </div>

            {/* Card 2: ROI */}
            <div className="bg-[#0b101b]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg aspect-square relative group overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               
               <div className="mb-4 relative z-10 p-3 rounded-full bg-white/5 group-hover:bg-[#d4af37]/10 transition-colors">
                 <TrendingUp className="w-6 h-6 text-[#d4af37]" />
               </div>
               <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1 relative z-10">Est. ROI (Year 1)</p>
               <p className="text-2xl font-bold text-white tracking-tight relative z-10">22-28%</p>
            </div>

            {/* Card 3: Locations */}
            <div className="bg-[#0b101b]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg aspect-square relative group overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               
               <div className="mb-4 relative z-10 p-3 rounded-full bg-white/5 group-hover:bg-[#d4af37]/10 transition-colors">
                 <MapPin className="w-6 h-6 text-[#d4af37]" />
               </div>
               <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1 relative z-10">Active Locations</p>
               <p className="text-2xl font-bold text-white tracking-tight relative z-10">3 Branches</p>
            </div>

            {/* Card 4: Team Size */}
            <div className="bg-[#0b101b]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg aspect-square relative group overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               
               <div className="mb-4 relative z-10 p-3 rounded-full bg-white/5 group-hover:bg-[#d4af37]/10 transition-colors">
                 <Users className="w-6 h-6 text-[#d4af37]" />
               </div>
               <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1 relative z-10">Team Size</p>
               <p className="text-2xl font-bold text-white tracking-tight relative z-10">12-50</p>
            </div>
          </div>

          {/* Financial Performance Section */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0b1221] p-8 shadow-2xl">
            {/* Golden Glow Effect */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-[#d4af37] opacity-10 blur-[100px] pointer-events-none rounded-full" />
            
            <div className="flex items-start justify-between mb-8 relative z-10">
              <div className="flex items-center gap-3">
                 <div className="w-1 h-12 bg-[#d4af37] rounded-full" />
                 <div>
                   <h3 className="text-3xl font-serif font-bold text-white leading-none mb-1">
                     Financial <br/> Performance
                   </h3>
                 </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="px-4 py-2 bg-[#d4af37] text-[#020b1c] text-xs font-bold rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] border border-[#f3e5ab]/50">
                  Audited Dec 2024
                </div>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest">Big 4 Audited</span>
              </div>
            </div>

            <div className="relative z-10 space-y-8">
              {/* Main Revenue Metric */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <span className="text-gray-400 text-sm font-medium uppercase tracking-wide">Gross Revenue (2024)</span>
                  <div className="text-right">
                    <span className="text-3xl font-mono font-bold text-white tracking-tight block">{opportunity.revenue}</span>
                    <span className="text-green-500 text-xs font-bold flex items-center justify-end gap-1">
                      <TrendingUp className="w-3 h-3" /> +12.5% YoY
                    </span>
                  </div>
                </div>
                
                {/* Custom Progress Bar */}
                <div className="h-4 w-full bg-[#020b1c] rounded-full overflow-hidden border border-white/5 relative mb-2">
                  <div className="absolute inset-0 bg-[#020b1c]" />
                  <div className="relative h-full w-[85%] bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37] rounded-full shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
                </div>
                <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                  <span>0 EGP</span>
                  <span>Target: {opportunity.revenue}</span>
                </div>
              </div>

              {/* Key Ratios Grid */}
              <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6">
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">EBITDA Margin</p>
                  <p className="text-xl text-white font-mono font-bold">18.2%</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Net Profit</p>
                  <p className="text-xl text-white font-mono font-bold">4.1M</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Burn Rate</p>
                  <p className="text-xl text-green-400 font-mono font-bold">Low</p>
                </div>
              </div>
            </div>
          </div>

          {/* Investment Thesis */}
          <GlassCard className="p-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
               <Shield className="w-24 h-24 text-white" />
             </div>
             
             <div className="relative z-10">
               <div className="flex items-center gap-3 mb-6">
                 <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                    <FileText className="w-5 h-5 text-[#d4af37]" />
                 </div>
                 <div>
                   <h3 className="text-xl font-serif font-bold text-white leading-none">Investment Thesis</h3>
                   <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">Analyst Note • Jan 2025</p>
                 </div>
               </div>
               
               <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed border-l-2 border-[#d4af37]/50 pl-6">
                 <p className="mb-4">
                   <span className="text-white font-bold">{opportunity.name}</span> represents a unique entry point into the high-growth {opportunity.industry} sector. 
                   Our analysis indicates a strong upside potential due to their proprietary supply chain logistics, which have reduced operational overhead by 15% compared to industry averages.
                 </p>
                 <p>
                   The brand has secured exclusive territorial rights for the next 5 branches, creating a defensible moat against local competitors. 
                   With a loyal customer base and high engagement rates, the risk profile is significantly lower than typical Seed-stage opportunities.
                 </p>
               </div>
               
               <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/5">
                 <div className="w-8 h-8 rounded-full bg-gray-700" />
                 <div>
                   <p className="text-xs text-white font-bold">Sarah Jenkins</p>
                   <p className="text-[10px] text-gray-500 uppercase">Senior Investment Analyst</p>
                 </div>
               </div>
             </div>
          </GlassCard>
        </div>

        {/* Right Column: Document Vault & Legal */}
        <div className="space-y-6">
          <div className="bg-[#0b101b] border border-white/5 rounded-2xl p-6 shadow-xl">
            <h3 className="text-lg font-serif font-bold text-white mb-6 flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#d4af37]" /> Document Vault
            </h3>
            <div className="space-y-3">
              {[
                { name: "Pitch Deck 2024", type: "PDF", size: "2.4 MB" },
                { name: "Financial Statements", type: "XLS", size: "1.1 MB" },
                { name: "Franchise Agreement", type: "PDF", size: "850 KB" },
                { name: "Commercial Registration", type: "PDF", size: "450 KB" },
              ].map((doc, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-[#0f1523] hover:bg-[#161d2d] cursor-pointer border border-transparent hover:border-[#d4af37]/20 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#1e293b]/50 flex items-center justify-center border border-white/5">
                      <FileText className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">{doc.name}</p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wide">{doc.type} • {doc.size}</p>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-gray-600 group-hover:text-[#d4af37] transition-colors" />
                </div>
              ))}
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 text-center">
              <p className="text-[10px] text-gray-500 flex items-center justify-center gap-2">
                <Shield className="w-3 h-3" />
                Files are watermarked with your ID.
              </p>
            </div>
          </div>

          {/* Sticky Legal Footer / Modal Placeholder */}
          <div className="sticky top-24 space-y-6">
            
            {/* NEW: Investment Simulator Widget */}
            <GlassCard className="p-6 border-[#d4af37]/30 bg-[#0b101b]/90 backdrop-blur-xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-24 h-24 bg-[#d4af37] opacity-5 blur-[50px] rounded-full pointer-events-none group-hover:opacity-10 transition-opacity" />
               
               <div className="flex items-center gap-2 mb-6">
                 <div className="p-2 rounded-lg bg-[#d4af37]/10 text-[#d4af37]">
                   <TrendingUp className="w-5 h-5" />
                 </div>
                 <div>
                   <h3 className="text-lg font-serif font-bold text-white leading-none">ROI Simulator</h3>
                   <p className="text-[10px] text-gray-400 uppercase tracking-wider">Projected Returns</p>
                 </div>
               </div>

               <div className="space-y-6">
                 <div>
                   <div className="flex justify-between text-xs mb-2">
                     <span className="text-gray-400">Investment Amount</span>
                     <span className="text-white font-mono font-bold">{(opportunity.minInvestment * 1.5).toLocaleString()} EGP</span>
                   </div>
                   <input 
                     type="range" 
                     min={opportunity.minInvestment} 
                     max={opportunity.minInvestment * 5} 
                     step={5000}
                     className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#d4af37] hover:accent-[#f3e5ab] transition-all"
                   />
                   <div className="flex justify-between text-[10px] text-gray-500 mt-1 font-mono">
                     <span>{opportunity.minInvestment.toLocaleString()}</span>
                     <span>{(opportunity.minInvestment * 5).toLocaleString()}</span>
                   </div>
                 </div>

                 <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-3">
                   <div className="flex justify-between items-center">
                     <span className="text-xs text-gray-400">Year 1 Return (25%)</span>
                     <span className="text-[#d4af37] font-mono font-bold text-sm">+{(opportunity.minInvestment * 1.5 * 0.25).toLocaleString()} EGP</span>
                   </div>
                   <div className="flex justify-between items-center pt-3 border-t border-white/5">
                     <span className="text-xs text-gray-200 font-bold">Total Value</span>
                     <span className="text-white font-mono font-bold text-lg">{(opportunity.minInvestment * 1.5 * 1.25).toLocaleString()} EGP</span>
                   </div>
                 </div>
               </div>
            </GlassCard>

            <GlassCard className="p-6 border-white/10 bg-[#020b1c]/90 backdrop-blur-xl">
              <h3 className="text-lg font-bold text-white mb-2">Ready to Commit?</h3>
              <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                Start the negotiation process. A dedicated investment manager will be assigned to this deal.
              </p>
              
              <div className="flex items-start gap-3 mb-6 bg-white/5 p-3 rounded border border-white/5 hover:border-[#d4af37]/30 transition-colors">
                <div 
                  className={`min-w-[20px] h-5 rounded border cursor-pointer flex items-center justify-center mt-0.5 transition-colors ${agreedToTerms ? 'bg-[#d4af37] border-[#d4af37]' : 'border-gray-500 hover:border-gray-400'}`}
                  onClick={() => setAgreedToTerms(!agreedToTerms)}
                >
                  {agreedToTerms && <CheckSquare className="w-3.5 h-3.5 text-[#020b1c]" />}
                </div>
                <label className="text-xs text-gray-300 cursor-pointer select-none" onClick={() => setAgreedToTerms(!agreedToTerms)}>
                  I agree to the Terms of Service and understand the <span className="text-[#d4af37] font-bold">1-2% Success Fee</span> structure upon deal closure.
                </label>
              </div>

              <Button 
                disabled={!agreedToTerms}
                className="w-full bg-gradient-to-r from-[#d4af37] to-[#b5952f] text-[#020b1c] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed font-bold h-12 text-sm uppercase tracking-wide"
              >
                Initiate Deal Process
              </Button>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
