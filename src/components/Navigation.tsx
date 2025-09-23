"use client"

import { Shield, Check } from "lucide-react";

export function Navigation() {

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-xl gradient-uf-primary flex items-center justify-center">
              <span className="text-white font-bold">K</span>
            </div>
            <span className="text-lg sm:text-xl font-bold gradient-uf-text">Kampus.fun</span>
          </div>

          {/* Trust Badge */}
          <div className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 text-orange-700 px-3 py-1.5 rounded-full text-xs font-semibold">
            <div className="flex items-center gap-1">
              <Shield size={12} className="text-orange-600" />
              <Check size={12} className="text-green-600" />
            </div>
            <span>@ufl.edu Verified</span>
          </div>
        </div>

      </div>
    </nav>
  );
}