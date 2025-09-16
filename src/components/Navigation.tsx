"use client"

import { Button } from "./ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-xl gradient-uf-primary flex items-center justify-center">
              <span className="text-white font-bold">K</span>
            </div>
            <span className="type-h3 gradient-uf-text">Kampus.fun</span>
          </div>
        </div>

      </div>
    </nav>
  );
}