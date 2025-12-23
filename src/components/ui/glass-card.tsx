import React from "react";
import { cn } from "./utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export function GlassCard({ className, children, hoverEffect = false, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl transition-all duration-300",
        hoverEffect && "hover:border-[#d4af37]/50 hover:bg-white/10 hover:shadow-[#d4af37]/10 hover:shadow-2xl hover:-translate-y-1",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      {children}
    </div>
  );
}
