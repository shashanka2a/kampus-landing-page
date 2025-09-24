"use client"

import { useEffect, useState } from "react";
import { Shield, Check } from "lucide-react";

export function Navigation() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b backdrop-blur-sm transition-shadow ${
        hasScrolled ? "shadow-md border-white/10" : "shadow-none border-transparent"
      } bg-gradient-to-r from-orange-600/95 via-orange-700/95 to-blue-800/95`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center">
              <span className="text-orange-600 font-bold">K</span>
            </div>
            <span className="text-lg sm:text-xl font-extrabold text-white tracking-tight">Kampus.fun</span>
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#apps" className="text-white/90 hover:text-white font-semibold transition-colors">Our Apps</a>
            <a href="#contact" className="text-white/90 hover:text-white font-semibold transition-colors">Contact</a>
          </div>

          {/* Trust Badge */}
          <div className="hidden sm:flex items-center gap-2 bg-white/10 border border-white/20 text-white px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-white/15 transition-colors">
            <div className="flex items-center gap-1">
              <Shield size={12} className="text-white" />
              <Check size={12} className="text-white" />
            </div>
            <span>@ufl.edu Verified</span>
          </div>
        </div>
      </div>
    </nav>
  );
}