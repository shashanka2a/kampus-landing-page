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
        {/* Enhanced Trust Badge */}
        <motion.div 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-white/90 to-orange-50/90 backdrop-blur-sm border border-orange-200 text-orange-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-xl hover:shadow-2xl transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="p-1 rounded-full bg-gradient-to-br from-orange-100 to-orange-200">
            <Shield size={16} className="text-orange-600" />
          </div>
          <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent font-bold">
            Verified @ufl.edu Access • Trusted by 250+ Students
          </span>
        </motion.div>

        {/* Main Headline - Enhanced with Gradient */}
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">
            Your Campus,
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-orange-500 bg-clip-text text-transparent drop-shadow-sm">
            Simplified.
          </span>
        </motion.h1>

        {/* Enhanced Sub-headline with Better Visibility */}
        <motion.h2 
          className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent font-bold">Kampus.fun:</span> 
          <span className="text-gray-800 font-medium"> Connect, Buy, Sell, Ride, and Live Better at UF — All in One Place</span>
        </motion.h2>

        {/* Enhanced Feature Icons with Better Visual Hierarchy */}
        <motion.div
          className="flex justify-center items-center space-x-6 sm:space-x-8 mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <motion.div 
            className="text-center group cursor-pointer"
            whileHover={{ y: -12, scale: 1.15 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 flex items-center justify-center mb-3 mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 border-2 border-orange-200 group-hover:border-orange-300">
              <span className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300">🛒</span>
            </div>
            <p className="text-sm font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">Shop</p>
          </motion.div>
          <motion.div 
            className="text-center group cursor-pointer"
            whileHover={{ y: -12, scale: 1.15 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 flex items-center justify-center mb-3 mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 border-2 border-blue-200 group-hover:border-blue-300">
              <span className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300">🚗</span>
            </div>
            <p className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Ride</p>
          </motion.div>
          <motion.div 
            className="text-center group cursor-pointer"
            whileHover={{ y: -12, scale: 1.15 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 flex items-center justify-center mb-3 mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 border-2 border-orange-200 group-hover:border-orange-300">
              <span className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300">🏡</span>
            </div>
            <p className="text-sm font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">Live</p>
          </motion.div>
          <motion.div 
            className="text-center group cursor-pointer"
            whileHover={{ y: -12, scale: 1.15 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 flex items-center justify-center mb-3 mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 border-2 border-blue-200 group-hover:border-blue-300">
              <span className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300">🎉</span>
            </div>
            <p className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Party</p>
          </motion.div>
        </motion.div>

        {/* Enhanced CTA Buttons with Premium Gradients */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          {/* Primary CTA with Enhanced Gradient */}
          <Button 
            size="lg" 
            className="relative text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-white font-bold transform transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl border-2 border-orange-400 hover:border-orange-500"
            onClick={() => {
              const appsSection = document.getElementById('apps');
              if (appsSection) {
                appsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span className="relative z-10">Get Started - It&apos;s Free!</span>
            <ArrowRight size={20} className="ml-2 relative z-10" />
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
          </Button>
          
          {/* Secondary CTA with Gradient Border */}
          <Button 
            size="lg" 
            variant="outline"
            className="relative text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-border text-blue-600 hover:text-white font-bold transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, #3b82f6, #2563eb) border-box',
            }}
            onClick={() => {
              window.open('https://www.gatorex.shop/', '_blank');
            }}
          >
            <span className="relative z-10">Browse Listings</span>
          </Button>
        </motion.div>

        {/* Enhanced Social Proof Stats */}
        <motion.div
          className="flex justify-center items-center space-x-8 sm:space-x-12 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <div className="text-center group">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="p-2 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
                <Users size={18} className="text-orange-600" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">250+</span>
            </div>
            <div className="text-sm text-gray-700 font-semibold">Active Students</div>
          </div>
          <div className="text-center group">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="p-2 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-200 group-hover:from-yellow-200 group-hover:to-yellow-300 transition-all duration-300">
                <Star size={18} className="text-yellow-500" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">4.9</span>
            </div>
            <div className="text-sm text-gray-700 font-semibold">Average Rating</div>
          </div>
          <div className="text-center group">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="p-2 rounded-full bg-gradient-to-br from-green-100 to-green-200 group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300">
                <Shield size={18} className="text-green-600" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">100%</span>
            </div>
            <div className="text-sm text-gray-700 font-semibold">UF Verified</div>
          </div>
        </motion.div>

        {/* Decorative floating elements */}
        <motion.div 
          className="mt-16 sm:mt-20 md:mt-24 flex justify-center space-x-4 md:space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.div 
            className="w-4 h-4 rounded-full bg-orange-500"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
          ></motion.div>
          <motion.div 
            className="w-4 h-4 rounded-full bg-blue-800"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          ></motion.div>
          <motion.div 
            className="w-4 h-4 rounded-full bg-orange-500"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
}