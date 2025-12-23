import React, { useState } from 'react';
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner@2.0.3";
import { Layout } from "./components/Layout";
import { Hero } from "./components/Hero";
import { Marketplace, Opportunity } from "./components/Marketplace";
import { ProjectDetail } from "./components/ProjectDetail";
import { Dashboard } from "./components/Dashboard";
import { RegistrationFlow } from "./components/RegistrationFlow";
import { AuthModal } from "./components/AuthModal";

import { Portfolio } from "./components/Portfolio";
import { Messages } from "./components/Messages";

// Mock Data
const INITIAL_OPPORTUNITIES: Opportunity[] = [
  {
    id: '1',
    name: 'Brew & Bean Co.',
    industry: 'Food & Beverage',
    description: 'A premium specialty coffee chain expanding into 5 new locations in Greater Cairo. Established 2019 with strong unit economics.',
    location: 'New Cairo, Egypt',
    minInvestment: 250000,
    imageUrl: 'https://images.unsplash.com/photo-1646681828239-843f5ed340de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY2MTg1NDM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    revenue: 12500000,
    netProfit: 2800000,
    isUnlocked: false,
    tags: ['High Growth', 'Franchise Ready']
  },
  {
    id: '2',
    name: 'TechFlow Systems',
    industry: 'Technology',
    description: 'B2B SaaS platform for logistics management. Seeking Series A funding to expand sales team and product development.',
    location: 'Maadi, Egypt',
    minInvestment: 500000,
    imageUrl: 'https://images.unsplash.com/photo-1762758731221-044c22e651e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3Jwb3JhdGUlMjBvZmZpY2UlMjBkYXJrJTIwYmx1ZXxlbnwxfHx8fDE3NjYyNTY1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    revenue: 8200000,
    netProfit: 1100000,
    isUnlocked: false,
    tags: ['Tech', 'Scalable']
  },
  {
    id: '3',
    name: 'The Golden Fork',
    industry: 'Food & Beverage',
    description: 'Luxury fine dining experience with a proven track record. Opening a flagship location in Sheikh Zayed.',
    location: 'Sheikh Zayed, Egypt',
    minInvestment: 1000000,
    imageUrl: 'https://images.unsplash.com/photo-1765360773028-6affda725695?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc2NjI1NjU1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    revenue: 18500000,
    netProfit: 4200000,
    isUnlocked: false,
    tags: ['Luxury', 'Established']
  },
  {
    id: '4',
    name: 'FinSafe Solutions',
    industry: 'Fintech',
    description: 'Cybersecurity solutions for the financial sector. Growing rapidly with new banking regulations.',
    location: 'Smart Village, Egypt',
    minInvestment: 750000,
    imageUrl: 'https://images.unsplash.com/photo-1634024520950-cb6b612f9bde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGZpbmFuY2lhbCUyMHRlY2hub2xvZ3klMjBnb2xkfGVufDF8fHx8MTc2NjI1NjU1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    revenue: 15000000,
    netProfit: 3500000,
    isUnlocked: false,
    tags: ['Cybersecurity', 'B2B']
  }
];

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // home, marketplace, detail, dashboard, onboarding
  const [userRole, setUserRole] = useState<'investor' | 'business'>('investor');
  const [walletBalance, setWalletBalance] = useState(1500);
  const [opportunities, setOpportunities] = useState<Opportunity[]>(INITIAL_OPPORTUNITIES);
  const [selectedOppId, setSelectedOppId] = useState<string | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [registrationRole, setRegistrationRole] = useState<'investor' | 'franchise' | 'fund' | null>(null);
  const [currency, setCurrency] = useState<'EGP' | 'SAR'>('EGP');

  const handleUnlock = (id: string) => {
    if (walletBalance < 20) {
      toast.error("Insufficient funds! Please top up your wallet.");
      return;
    }

    setWalletBalance(prev => prev - 20);
    setOpportunities(prev => prev.map(opp => 
      opp.id === id ? { ...opp, isUnlocked: true } : opp
    ));
    toast.success("Opportunity Unlocked! 20 Credits deducted.", {
      description: "You now have full access to financial data.",
      duration: 4000,
    });
  };

  const handleViewDetails = (id: string) => {
    setSelectedOppId(id);
    setCurrentView('detail');
    window.scrollTo(0, 0);
  };

  const handleLogin = (role: 'investor' | 'business') => {
    setUserRole(role);
    if (role === 'investor') {
      setCurrentView('marketplace');
    } else {
      setCurrentView('dashboard');
    }
    toast.success(`Welcome back to CHANCE`, {
      description: `Logged in as ${role === 'investor' ? 'Investor' : 'Business Owner'}`,
    });
  };

  const handleRegister = (role: 'investor' | 'franchise' | 'fund') => {
    setRegistrationRole(role);
    setIsRegistrationOpen(true);
  };

  const handleRegistrationComplete = (role: 'investor' | 'business') => {
    setIsRegistrationOpen(false);
    setUserRole(role);
    if (role === 'investor') {
      setCurrentView('marketplace');
    } else {
      setCurrentView('dashboard');
    }
    toast.success("Registration Complete!", {
      description: "Welcome to the platform.",
    });
  };

  const selectedOpportunity = opportunities.find(o => o.id === selectedOppId);

  return (
    <Layout 
      userRole={userRole} 
      setUserRole={setUserRole} 
      walletBalance={walletBalance}
      currency={currency}
      onToggleCurrency={() => setCurrency(c => c === 'EGP' ? 'SAR' : 'EGP')}
      onNavigate={(view) => {
        setCurrentView(view);
        window.scrollTo(0, 0);
      }}
      onLogout={() => {
        setCurrentView('home');
        toast.info("Logged out successfully");
      }}
    >
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={handleLogin}
      />

      <RegistrationFlow 
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
        initialRole={registrationRole}
        onComplete={handleRegistrationComplete}
      />

      {currentView === 'home' && (
        <>
          <Hero 
            onRegister={handleRegister}
            currency={currency}
          />
          <Marketplace 
            opportunities={opportunities} 
            onUnlock={handleUnlock}
            onViewDetails={handleViewDetails}
            userRole={userRole}
            currency={currency}
          />
        </>
      )}

      {currentView === 'marketplace' && (
        <Marketplace 
          opportunities={opportunities} 
          onUnlock={handleUnlock}
          onViewDetails={handleViewDetails}
          userRole={userRole}
          currency={currency}
        />
      )}

      {currentView === 'detail' && selectedOpportunity && (
        <ProjectDetail 
          opportunity={selectedOpportunity} 
          onBack={() => setCurrentView('marketplace')} 
        />
      )}

      {currentView === 'portfolio' && (
        <Portfolio />
      )}

      {currentView === 'messages' && (
        <Messages />
      )}

      {currentView === 'dashboard' && (
        <Dashboard 
          userRole={userRole} 
          walletBalance={walletBalance} 
        />
      )}
      
      <Toaster position="bottom-right" theme="dark" />
    </Layout>
  );
}
