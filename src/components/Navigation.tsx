"use client"

import { Button } from "./ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-xl gradient-uf-primary flex items-center justify-center">
              <span className="text-white font-bold">K</span>
            </div>
            <span className="text-lg sm:text-xl font-bold gradient-uf-text">Kampus.fun</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#apps" className="text-gray-600 hover:text-blue-800 transition-colors font-medium">
              Apps
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-800 transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-800 transition-colors font-medium">
              Contact
            </a>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button className="rounded-full px-5 py-2.5 lg:px-6 lg:py-3 bg-orange-500 hover:bg-orange-600 text-white border-none transition-all duration-300 hover:shadow-lg hover:scale-105 font-semibold text-sm lg:text-base">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
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
                className="text-gray-600 hover:text-blue-800 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Apps
              </a>
              <a 
                href="#about" 
                className="text-gray-600 hover:text-blue-800 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-gray-600 hover:text-blue-800 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="rounded-full px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white border-none transition-all duration-300 hover:shadow-lg hover:scale-105 w-fit font-semibold">
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}