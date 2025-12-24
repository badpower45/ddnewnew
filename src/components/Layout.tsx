import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "./ui/button";
import { User, Briefcase, Wallet, Bell, Menu, X, Globe, LogOut, Languages } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
  userRole: 'investor' | 'business';
  setUserRole: (role: 'investor' | 'business') => void;
  walletBalance: number;
  onNavigate: (view: string) => void;
  currency: 'EGP' | 'SAR';
  onToggleCurrency: () => void;
  onLogout: () => void;
}

export function Layout({
  children,
  userRole,
  setUserRole,
  walletBalance,
  onNavigate,
  currency,
  onToggleCurrency,
  onLogout
}: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const isRTL = i18n.language === 'ar';
  const toggleLanguage = () => {
    i18n.changeLanguage(isRTL ? 'en' : 'ar');
  };

  return (
    <div
      className="min-h-screen bg-[#020b1c] text-white font-sans selection:bg-[#d4af37] selection:text-[#020b1c] flex flex-col"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;600;700&family=Cairo:wght@300;400;500;600;700&display=swap');
        
        :root {
          --font-sans: 'Inter', sans-serif;
          --font-serif: 'Playfair Display', serif;
          --font-arabic: 'Cairo', sans-serif;
        }

        body {
          font-family: var(--font-sans);
        }

        [dir="rtl"] body,
        [dir="rtl"] {
          font-family: var(--font-arabic);
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: var(--font-serif);
        }

        [dir="rtl"] h1, [dir="rtl"] h2, [dir="rtl"] h3, 
        [dir="rtl"] h4, [dir="rtl"] h5, [dir="rtl"] h6 {
          font-family: var(--font-arabic);
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        [dir="rtl"] .animate-marquee {
          animation-direction: reverse;
        }
      `}</style>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#020b1c]/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="w-8 h-8 rounded-full bg-[#d4af37] flex items-center justify-center">
              <span className="text-[#020b1c] font-bold text-lg">C</span>
            </div>
            <span className="text-2xl font-bold tracking-wider text-white">CHANCE</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => onNavigate('marketplace')}
              className="text-sm font-medium text-gray-300 hover:text-[#d4af37] transition-colors"
            >
              {t('nav.marketplace')}
            </button>
            {userRole === 'investor' && (
              <>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="text-sm font-medium text-gray-300 hover:text-[#d4af37] transition-colors"
                >
                  {t('nav.portfolio')}
                </button>
                <button
                  onClick={() => onNavigate('messages')}
                  className="text-sm font-medium text-gray-300 hover:text-[#d4af37] transition-colors"
                >
                  {t('nav.messages')}
                </button>
              </>
            )}
            <button
              onClick={() => onNavigate('dashboard')}
              className="text-sm font-medium text-gray-300 hover:text-[#d4af37] transition-colors"
            >
              {t('nav.dashboard')}
            </button>

            <div className="h-4 w-px bg-white/20 mx-2" />

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:border-[#d4af37] transition-colors text-xs font-bold"
            >
              <Languages className="w-3 h-3 text-[#d4af37]" />
              {isRTL ? 'EN' : 'عربي'}
            </button>

            {/* Currency Toggle */}
            <button
              onClick={onToggleCurrency}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:border-[#d4af37] transition-colors text-xs font-bold"
            >
              <Globe className="w-3 h-3 text-[#d4af37]" />
              {currency}
            </button>

            {/* Wallet & Profile */}
            <div className="flex items-center gap-4">
              {userRole === 'investor' && (
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <Wallet className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-sm font-bold text-[#d4af37]">
                    {walletBalance.toLocaleString()} <span className="text-[10px] uppercase">{t('nav.credits')}</span>
                  </span>
                </div>
              )}

              <div className="group relative">
                <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20 hover:border-[#d4af37] transition-colors">
                  <User className="w-4 h-4 text-white" />
                </button>
                {/* Simple Dropdown for logout */}
                <div className={`absolute ${isRTL ? 'left-0' : 'right-0'} top-full mt-2 w-32 py-1 bg-[#020b1c] border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all`}>
                  <button
                    onClick={onLogout}
                    className="w-full text-start px-4 py-2 text-xs text-red-400 hover:bg-white/5 flex items-center gap-2"
                  >
                    <LogOut className="w-3 h-3" /> {t('nav.logout')}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#020b1c] p-4 space-y-4">
            <button
              onClick={() => { onNavigate('marketplace'); setIsMobileMenuOpen(false); }}
              className="block w-full text-start text-sm font-medium text-gray-300 hover:text-[#d4af37] transition-colors py-2"
            >
              {t('nav.marketplace')}
            </button>
            {userRole === 'investor' && (
              <>
                <button
                  onClick={() => { onNavigate('portfolio'); setIsMobileMenuOpen(false); }}
                  className="block w-full text-start text-sm font-medium text-gray-300 hover:text-[#d4af37] transition-colors py-2"
                >
                  {t('nav.portfolio')}
                </button>
                <button
                  onClick={() => { onNavigate('messages'); setIsMobileMenuOpen(false); }}
                  className="block w-full text-start text-sm font-medium text-gray-300 hover:text-[#d4af37] transition-colors py-2"
                >
                  {t('nav.messages')}
                </button>
              </>
            )}
            <button
              onClick={() => { onNavigate('dashboard'); setIsMobileMenuOpen(false); }}
              className="block w-full text-start text-sm font-medium text-gray-300 hover:text-[#d4af37] transition-colors py-2"
            >
              {t('nav.dashboard')}
            </button>
            <div className="flex gap-2 pt-2">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:border-[#d4af37] transition-colors text-xs font-bold"
              >
                <Languages className="w-3 h-3 text-[#d4af37]" />
                {isRTL ? 'EN' : 'عربي'}
              </button>
              <button
                onClick={onToggleCurrency}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:border-[#d4af37] transition-colors text-xs font-bold"
              >
                <Globe className="w-3 h-3 text-[#d4af37]" />
                {currency}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#010610] py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-[#d4af37] flex items-center justify-center">
                <span className="text-[#020b1c] font-bold text-xs">C</span>
              </div>
              <span className="text-xl font-bold tracking-wider text-white">CHANCE</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {t('footer.description')}
            </p>
            <div className="text-[10px] text-gray-500 space-y-1">
              <p>{t('footer.crEgypt')} 72881922</p>
              <p>{t('footer.crKsa')} 101048291</p>
              <p>{t('footer.license')} FinTech Sandbox 22-B</p>
            </div>
          </div>
          <div>
            <h4 className="font-serif text-[#d4af37] mb-4">{t('footer.platform')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">{t('footer.browseOpportunities')}</a></li>
              <li><a href="#" className="hover:text-white">{t('footer.listYourBrand')}</a></li>
              <li><a href="#" className="hover:text-white">{t('footer.successStories')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-[#d4af37] mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">{t('footer.termsOfService')}</a></li>
              <li><a href="#" className="hover:text-white">{t('footer.privacyPolicy')}</a></li>
              <li><a href="#" className="hover:text-white">{t('footer.escrowAgreement')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-[#d4af37] mb-4">{t('footer.contact')}</h4>
            <p className="text-sm text-gray-400">Cairo • Riyadh • Dubai</p>
            <p className="text-sm text-gray-400">support@chance.com</p>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
          {t('footer.copyright')}
        </div>
      </footer>
    </div>
  );
}

