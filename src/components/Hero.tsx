import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from "motion/react";
import {
  Search, Wallet, Upload, TrendingUp, ShieldCheck,
  CheckCircle2, Users, Globe, Building2, Briefcase, ChevronRight
} from "lucide-react";
import { Button } from "./ui/button";
import { GlassCard } from "./ui/glass-card";

interface HeroProps {
  onRegister: (role: 'investor' | 'franchise' | 'fund') => void;
  currency: 'EGP' | 'SAR';
}

export function Hero({ onRegister, currency }: HeroProps) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  // Simple multiplier for display purposes
  const rate = currency === 'SAR' ? 0.08 : 1;
  const formatMoney = (val: number) => Math.round(val * rate).toLocaleString() + (currency === 'SAR' ? ' SAR' : ' EGP');

  return (
    <div className="relative">
      {/* 1. Live Market Ticker */}
      <div className="bg-[#020b1c] border-b border-[#d4af37]/20 relative z-20">
        <div className="container mx-auto flex items-center h-10 overflow-hidden">

          {/* Label */}
          <div className="flex items-center gap-2 px-4 h-full bg-[#d4af37]/10 border-r border-[#d4af37]/20 z-10 shrink-0">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            <span className="text-[10px] font-bold tracking-widest text-[#d4af37] uppercase">{t('hero.marketLive')}</span>
          </div>

          {/* Marquee Content */}
          <div className="flex-1 overflow-hidden relative flex items-center">
            <motion.div
              className="flex items-center gap-12 whitespace-nowrap"
              animate={{ x: isRTL ? [0, 1000] : [0, -1000] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            >
              {[1, 2].map((iter) => (
                <React.Fragment key={iter}>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-gray-400 font-bold">URBAN EATS</span>
                    <span className="text-green-400 font-mono flex items-center">
                      <TrendingUp className="w-3 h-3 me-1" />
                      {formatMoney(2500000)}
                    </span>
                    <span className="bg-green-500/20 text-green-400 px-1 rounded text-[10px]">100% {t('hero.funded')}</span>
                  </div>

                  <div className="w-[1px] h-4 bg-white/10" />

                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-gray-400 font-bold">TECHFLOW</span>
                    <span className="text-[#d4af37] font-mono">{t('hero.seriesAOpen')}</span>
                    <span className="bg-[#d4af37]/20 text-[#d4af37] px-1 rounded text-[10px]">{t('hero.hot')}</span>
                  </div>

                  <div className="w-[1px] h-4 bg-white/10" />

                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-gray-400 font-bold">BIOHEALTH</span>
                    <span className="text-white font-mono">RIYADH {t('hero.expansion')}</span>
                    <span className="text-blue-400 text-[10px] flex items-center gap-1">
                      <Globe className="w-3 h-3" /> KSA
                    </span>
                  </div>

                  <div className="w-[1px] h-4 bg-white/10" />

                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-gray-400 font-bold">{t('hero.marketVol')}</span>
                    <span className="text-white font-mono">{formatMoney(145000000)}</span>
                  </div>
                </React.Fragment>
              ))}
            </motion.div>

            {/* Gradient Fade for Marquee */}
            <div className="absolute inset-y-0 end-0 w-20 bg-gradient-to-l from-[#020b1c] to-transparent z-10" />
            <div className="absolute inset-y-0 start-0 w-20 bg-gradient-to-r from-[#020b1c] to-transparent z-10" />
          </div>
        </div>
      </div>

      {/* 2. Main Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-24">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#d4af37] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-900 opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-start lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 text-[#d4af37] text-xs font-bold tracking-widest uppercase mb-8">
                <ShieldCheck className="w-3 h-3" />
                <span>{t('hero.badge')}</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 tracking-tight leading-[1.1]">
                {t('hero.headline')} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37]">
                  {t('hero.headlineHighlight')}
                </span>
              </h1>

              <p className="text-gray-300 text-lg max-w-xl mb-10 leading-relaxed font-light">
                {t('hero.description')}
              </p>

              <div className="flex flex-wrap items-center gap-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  <span>{t('hero.crossBorder')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  <span>{t('hero.samaCompliant')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  <span>{t('hero.secureEscrow')}</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Sector Cards */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 w-full grid md:grid-cols-2 gap-4 lg:gap-6"
            >
              {/* 1. Franchise Owner */}
              <GlassCard
                className="p-6 cursor-pointer group hover:bg-[#d4af37]/10 transition-all border-s-4 border-s-transparent hover:border-s-[#d4af37] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
                onClick={() => onRegister('franchise')}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Building2 className="w-7 h-7 text-blue-400 group-hover:text-[#d4af37] transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-serif">{t('hero.franchiseOwner')}</h3>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">{t('hero.franchiseDesc')}</p>
                <div className="flex items-center text-[#d4af37] text-xs font-bold uppercase tracking-widest">
                  {t('hero.startSelling')} <ChevronRight className="w-4 h-4 ms-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </GlassCard>

              {/* 2. Business Seeking Funds */}
              <GlassCard
                className="p-6 cursor-pointer group hover:bg-[#d4af37]/10 transition-all border-s-4 border-s-transparent hover:border-s-[#d4af37] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
                onClick={() => onRegister('fund')}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <TrendingUp className="w-7 h-7 text-purple-400 group-hover:text-[#d4af37] transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-serif">{t('hero.seekFunding')}</h3>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">{t('hero.seekFundingDesc')}</p>
                <div className="flex items-center text-[#d4af37] text-xs font-bold uppercase tracking-widest">
                  {t('hero.getFunded')} <ChevronRight className="w-4 h-4 ms-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </GlassCard>

              {/* 3. Investor (Full Width) */}
              <GlassCard
                className="p-8 md:col-span-2 cursor-pointer group hover:bg-[#d4af37]/10 transition-all border-s-4 border-s-transparent hover:border-s-[#d4af37] flex flex-col md:flex-row items-start md:items-center gap-8 relative overflow-hidden"
                onClick={() => onRegister('investor')}
              >
                {/* Decorative Glow */}
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#d4af37] opacity-5 blur-[80px] rounded-full pointer-events-none group-hover:opacity-10 transition-opacity" />

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <Wallet className="w-8 h-8 text-green-400 group-hover:text-[#d4af37] transition-colors" />
                </div>
                <div className="flex-1 relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2 font-serif">{t('hero.iAmInvestor')}</h3>
                  <p className="text-sm text-gray-400 max-w-sm leading-relaxed">{t('hero.investorDesc')}</p>
                </div>
                <Button className="bg-white text-[#020b1c] hover:bg-[#d4af37] font-bold rounded-xl px-8 py-6 h-auto transition-all shadow-lg shrink-0 relative z-10 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                  {t('hero.startInvesting')} <ChevronRight className="w-4 h-4 ms-2" />
                </Button>
              </GlassCard>

            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Stats Section */}
      <section className="py-12 border-y border-white/5 bg-[#020b1c] relative z-20">
        <div className="container mx-auto px-4">

          {/* Trusted By Strip */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mb-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="text-lg font-serif font-bold text-white flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#d4af37]" /> FORBES</div>
            <div className="text-lg font-serif font-bold text-white flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#d4af37]" /> BLOOMBERG</div>
            <div className="text-lg font-serif font-bold text-white flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#d4af37]" /> TECHCRUNCH</div>
            <div className="text-lg font-serif font-bold text-white flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#d4af37]" /> FINANCIAL TIMES</div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem
              label={t('hero.capitalDeployed')}
              value={formatMoney(145000000).split(' ')[0]}
              suffix={` ${currency}`}
              icon={<Wallet className="w-5 h-5" />}
            />
            <StatItem
              label={t('hero.verifiedBrands')}
              value="85"
              suffix="+"
              icon={<ShieldCheck className="w-5 h-5 text-blue-400" />}
            />
            <StatItem
              label={t('hero.avgAnnualRoi')}
              value="22"
              suffix="%"
              icon={<TrendingUp className="w-5 h-5 text-green-400" />}
              highlight
              topTierLabel={t('hero.topTier')}
            />
            <StatItem
              label={t('hero.successRate')}
              value="94"
              suffix="%"
              icon={<CheckCircle2 className="w-5 h-5 text-purple-400" />}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function StatItem({ label, value, suffix, icon, highlight, topTierLabel }: { label: string, value: string, suffix: string, icon: React.ReactNode, highlight?: boolean, topTierLabel?: string }) {
  return (
    <div className={`relative p-6 rounded-2xl border transition-all duration-500 group hover:-translate-y-2 ${highlight ? 'bg-gradient-to-b from-[#d4af37]/10 to-[#d4af37]/5 border-[#d4af37]/30 shadow-[0_0_30px_rgba(212,175,55,0.1)]' : 'bg-white/[0.02] border-white/5 hover:border-[#d4af37]/20 hover:shadow-2xl'}`}>
      <div className="flex items-center justify-between mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
        <div className={`p-3 rounded-xl transition-colors ${highlight ? 'bg-[#d4af37] text-[#020b1c]' : 'bg-white/5 text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-[#020b1c]'}`}>
          {icon}
        </div>
        {highlight && <div className="text-[10px] font-bold bg-[#d4af37] text-[#020b1c] px-3 py-1 rounded-full shadow-lg">{topTierLabel || 'TOP TIER'}</div>}
      </div>
      <div className="text-3xl md:text-5xl font-serif font-bold text-white mb-2 tracking-tight group-hover:scale-105 transition-transform origin-left">
        {value}<span className={`text-lg md:text-2xl font-sans font-medium ms-1 ${highlight ? 'text-[#d4af37]' : 'text-gray-500 group-hover:text-[#d4af37] transition-colors'}`}>{suffix}</span>
      </div>
      <p className="text-xs text-gray-400 uppercase tracking-widest font-medium group-hover:text-white transition-colors">{label}</p>
    </div>
  );
}

