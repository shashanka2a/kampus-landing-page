"use client"

import { Button } from "./ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex items-center justify-between md:justify-center md:relative">
          {/* Logo */}
          <div className="flex items-center space-x-2 md:absolute md:left-0">
            <div className="w-8 h-8 rounded-xl gradient-uf-primary flex items-center justify-center">
              <span className="text-white font-bold">K</span>
            </div>
            <span className="text-lg sm:text-xl font-bold gradient-uf-text">Kampus.fun</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            <a href="#apps" className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-sm lg:text-base relative group">
              Apps
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-sm lg:text-base relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-sm lg:text-base relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
            </a>
          </div>


          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors md:absolute md:right-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a 
                href="#apps" 
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Apps
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}