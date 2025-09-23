"use client"

import { Button } from "./ui/button";
import { motion } from "motion/react";
import { ArrowRight, Shield, Users, Star } from "lucide-react";

export function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-50 pt-24 sm:pt-32 md:pt-40 relative overflow-hidden">
      {/* Enhanced Background Graphics */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-orange-200 to-orange-300 blur-3xl"></div>
        <div className="absolute top-32 right-16 w-24 h-24 rounded-full bg-gradient-to-br from-blue-200 to-blue-300 blur-2xl"></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 rounded-full bg-gradient-to-br from-purple-200 to-purple-300 blur-2xl"></div>
        <div className="absolute bottom-60 right-1/3 w-40 h-40 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 blur-3xl"></div>
        {/* Campus-themed floating elements */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-orange-400 rounded-full opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-orange-400 rounded-full opacity-60"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">

        {/* Main Headline with Animated Gradient Background */}
        <motion.div
          className="relative mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-100/30 via-blue-100/30 to-orange-100/30 rounded-3xl blur-3xl animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-200/20 to-transparent rounded-3xl animate-pulse" style={{ animationDuration: '3s' }}></div>
          
          <h1 className="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">
              Your Campus,
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-orange-500 bg-clip-text text-transparent drop-shadow-sm">
              Simplified.
            </span>
          </h1>
        </motion.div>

        {/* SEO-Rich Sub-headline */}
        <motion.h2 
          className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent font-bold">Kampus.fun:</span> 
          <span className="text-gray-800 font-medium"> The UF student marketplace for textbooks, furniture, rides, housing, and events — trusted by 250+ Gators.</span>
        </motion.h2>

        {/* Category Cards with Bubble Design */}
        <motion.div
          className="flex justify-center items-center space-x-4 sm:space-x-6 mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <motion.div 
            className="text-center group cursor-pointer"
            whileHover={{ y: -8, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <a
              href="https://www.gatorex.shop/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Shop on GatorEx"
              className="block rounded-3xl focus:outline-none focus:ring-4 focus:ring-orange-300/50"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100 flex flex-col items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 border border-orange-200 group-hover:border-orange-300 group-hover:from-orange-100 group-hover:to-orange-200">
                <span className="text-2xl sm:text-3xl mb-1 group-hover:scale-110 transition-transform duration-300">🛒</span>
                <p className="text-xs font-bold text-orange-700 group-hover:text-orange-800 transition-colors duration-300">Shop</p>
              </div>
            </a>
          </motion.div>
          <motion.div 
            className="text-center group cursor-pointer"
            whileHover={{ y: -8, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <a
              href="http://rydify.co/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Find rides with Rydify"
              className="block rounded-3xl focus:outline-none focus:ring-4 focus:ring-blue-300/50"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 border border-blue-200 group-hover:border-blue-300 group-hover:from-blue-100 group-hover:to-blue-200">
                <span className="text-2xl sm:text-3xl mb-1 group-hover:scale-110 transition-transform duration-300">🚗</span>
                <p className="text-xs font-bold text-blue-700 group-hover:text-blue-800 transition-colors duration-300">Ride</p>
              </div>
            </a>
          </motion.div>
          <motion.div 
            className="text-center group cursor-pointer"
            whileHover={{ y: -8, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <a
              href="https://www.vybr.club/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Find housing on Vybr"
              className="block rounded-3xl focus:outline-none focus:ring-4 focus:ring-orange-300/50"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100 flex flex-col items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 border border-orange-200 group-hover:border-orange-300 group-hover:from-orange-100 group-hover:to-orange-200">
                <span className="text-2xl sm:text-3xl mb-1 group-hover:scale-110 transition-transform duration-300">🏡</span>
                <p className="text-xs font-bold text-orange-700 group-hover:text-orange-800 transition-colors duration-300">Live</p>
              </div>
            </a>
          </motion.div>
          <motion.div 
            className="text-center group cursor-pointer"
            whileHover={{ y: -8, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <a
              href="http://tribzy.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discover events on Tribzy"
              className="block rounded-3xl focus:outline-none focus:ring-4 focus:ring-blue-300/50"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 border border-blue-200 group-hover:border-blue-300 group-hover:from-blue-100 group-hover:to-blue-200">
                <span className="text-2xl sm:text-3xl mb-1 group-hover:scale-110 transition-transform duration-300">🎉</span>
                <p className="text-xs font-bold text-blue-700 group-hover:text-blue-800 transition-colors duration-300">Party</p>
              </div>
            </a>
          </motion.div>
        </motion.div>

        {/* Enhanced CTA Buttons - More Vibrant & Balanced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          {/* Primary CTA - More Vibrant Orange */}
          <Button 
            size="lg" 
            className="relative text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-white font-extrabold tracking-tight transform transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl border-2 border-orange-400 hover:border-orange-500 drop-shadow-[0_1px_0_rgba(0,0,0,0.4)]"
            onClick={() => {
              window.open('https://www.gatorex.shop/', '_blank');
            }}
          >
            <span className="relative z-10 text-white/95">Browse Listings</span>
            <ArrowRight size={20} className="ml-2 relative z-10 text-white/95" />
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-300 to-orange-500 opacity-0 hover:opacity-30 transition-opacity duration-300 blur-md"></div>
          </Button>
          
          {/* Secondary CTA - Post a Listing */}
          <Button 
            size="lg" 
            variant="outline"
            className="relative text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-2xl border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white font-bold transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white hover:shadow-blue-500/25"
            onClick={() => {
              window.open('https://www.gatorex.shop/', '_blank');
            }}
          >
            <span className="relative z-10">Post a Listing</span>
          </Button>
        </motion.div>

        {/* Stats Cards with Gradient Borders */}
        <motion.div
          className="flex justify-center items-center space-x-4 sm:space-x-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <div className="text-center group">
            <div className="relative p-4 rounded-2xl bg-white border-2 border-transparent bg-gradient-to-r from-orange-100 to-orange-50 group-hover:shadow-lg transition-all duration-300" style={{ background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, #fb923c, #f97316) border-box' }}>
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="p-2 rounded-full bg-gradient-to-br from-orange-100 to-orange-200">
                  <Users size={18} className="text-orange-600" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">250+</span>
              </div>
              <div className="text-sm text-gray-700 font-semibold">Active Students</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="relative p-4 rounded-2xl bg-white border-2 border-transparent bg-gradient-to-r from-yellow-100 to-yellow-50 group-hover:shadow-lg transition-all duration-300" style={{ background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, #fbbf24, #f59e0b) border-box' }}>
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="p-2 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-200">
                  <Star size={18} className="text-yellow-500" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">4.9</span>
              </div>
              <div className="text-sm text-gray-700 font-semibold">Average Rating</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="relative p-4 rounded-2xl bg-white border-2 border-transparent bg-gradient-to-r from-green-100 to-green-50 group-hover:shadow-lg transition-all duration-300" style={{ background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, #10b981, #059669) border-box' }}>
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="p-2 rounded-full bg-gradient-to-br from-green-100 to-green-200">
                  <Shield size={18} className="text-green-600" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">100%</span>
              </div>
              <div className="text-sm text-gray-700 font-semibold">Edu Verified</div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex flex-col items-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center cursor-pointer hover:border-orange-500 transition-colors duration-300"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => {
              const appsSection = document.getElementById('apps');
              if (appsSection) {
                appsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <motion.div
              className="w-2 h-2 bg-gray-400 rounded-full"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          <p className="text-xs text-gray-500 mt-2 font-medium">Scroll to explore</p>
        </motion.div>

      </div>
    </div>
  );
}