import React, { useState } from 'react';
import { Button } from "./ui/button";
import { User, Briefcase, Wallet, Bell, Menu, X, Globe, LogOut } from "lucide-react";

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

  return (
    <div className="min-h-screen bg-[#020b1c] text-white font-sans selection:bg-[#d4af37] selection:text-[#020b1c] flex flex-col">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;600;700&display=swap');
        
        :root {
          --font-sans: 'Inter', sans-serif;
          --font-serif: 'Playfair Display', serif;
        }

        body {
          font-family: var(--font-sans);
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: var(--font-serif);
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
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
              Marketplace
            </button>
            {userRole === 'investor' && (
              <>
                <button 
                  onClick={() => onNavigate('portfolio')}
                  className="text-sm font-medium text-gray-300 hover:text-[#d4af37] transition-colors"
                >
                  Portfolio
                </button>
                <button 
                  onClick={() => onNavigate('messages')}
                  className="text-sm font-medium text-gray-300 hover:text-[#d4af37] transition-colors"
                >
                  Messages
                </button>
              </>
            )}
            <button 
              onClick={() => onNavigate('dashboard')}
              className="text-sm font-medium text-gray-300 hover:text-[#d4af37] transition-colors"
            >
              Dashboard
            </button>
            
            <div className="h-4 w-px bg-white/20 mx-2" />

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
                    {walletBalance.toLocaleString()} <span className="text-[10px] uppercase">Credits</span>
                  </span>
                </div>
              )}
              
              <div className="group relative">
                <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20 hover:border-[#d4af37] transition-colors">
                  <User className="w-4 h-4 text-white" />
                </button>
                {/* Simple Dropdown for logout */}
                <div className="absolute right-0 top-full mt-2 w-32 py-1 bg-[#020b1c] border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                   <button 
                     onClick={onLogout}
                     className="w-full text-left px-4 py-2 text-xs text-red-400 hover:bg-white/5 flex items-center gap-2"
                   >
                     <LogOut className="w-3 h-3" /> Logout
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
              The premium marketplace for verified franchise opportunities and high-growth investments across MENA.
            </p>
            <div className="text-[10px] text-gray-500 space-y-1">
              <p>CR No (Egypt): 72881922</p>
              <p>CR No (KSA): 101048291</p>
              <p>License: FinTech Sandbox 22-B</p>
            </div>
          </div>
          <div>
            <h4 className="font-serif text-[#d4af37] mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Browse Opportunities</a></li>
              <li><a href="#" className="hover:text-white">List Your Brand</a></li>
              <li><a href="#" className="hover:text-white">Success Stories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-[#d4af37] mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Escrow Agreement</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-[#d4af37] mb-4">Contact</h4>
            <p className="text-sm text-gray-400">Cairo • Riyadh • Dubai</p>
            <p className="text-sm text-gray-400">support@chance.com</p>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
          © 2024 CHANCE Financial Technologies. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
