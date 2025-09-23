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
        {/* Trust Badge */}
        <motion.div 
          className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-orange-200 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Shield size={16} className="text-orange-600" />
          <span>Verified @ufl.edu Access • Trusted by 250+ Students</span>
        </motion.div>

        {/* Main Headline - More Impactful */}
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-r from-orange-600 via-blue-600 to-orange-600 bg-clip-text text-transparent">
            Your Campus,
          </span>
          <br />
          <span className="text-gray-900">Simplified.</span>
        </motion.h1>

        {/* Enhanced Sub-headline */}
        <motion.h2 
          className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 max-w-4xl mx-auto text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <span className="text-orange-600 font-bold">Kampus.fun:</span> Connect, Buy, Sell, Ride, and Live Better at UF — All in One Place
        </motion.h2>

        {/* Enhanced Feature Icons with Better Visual Weight */}
        <motion.div
          className="flex justify-center items-center space-x-6 sm:space-x-8 mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <motion.div 
            className="text-center group cursor-pointer"
            whileHover={{ y: -8, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mb-3 mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300">
              <span className="text-3xl sm:text-4xl">🛒</span>
            </div>
            <p className="text-sm font-bold text-gray-800">Shop</p>
          </motion.div>
          <motion.div 
            className="text-center group cursor-pointer"
            whileHover={{ y: -8, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-3 mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300">
              <span className="text-3xl sm:text-4xl">🚗</span>
            </div>
            <p className="text-sm font-bold text-gray-800">Ride</p>
          </motion.div>
          <motion.div 
            className="text-center group cursor-pointer"
            whileHover={{ y: -8, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mb-3 mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300">
              <span className="text-3xl sm:text-4xl">🏡</span>
            </div>
            <p className="text-sm font-bold text-gray-800">Live</p>
          </motion.div>
          <motion.div 
            className="text-center group cursor-pointer"
            whileHover={{ y: -8, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-3 mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300">
              <span className="text-3xl sm:text-4xl">🎉</span>
            </div>
            <p className="text-sm font-bold text-gray-800">Party</p>
          </motion.div>
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          {/* Primary CTA */}
          <Button 
            size="lg" 
            className="relative text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold transform transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl"
            onClick={() => {
              const appsSection = document.getElementById('apps');
              if (appsSection) {
                appsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get Started - It&apos;s Free!
            <ArrowRight size={20} className="ml-2" />
          </Button>
          
          {/* Secondary CTA */}
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white font-bold transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => {
              window.open('https://www.gatorex.shop/', '_blank');
            }}
          >
            Browse Listings
          </Button>
        </motion.div>

        {/* Social Proof Stats */}
        <motion.div
          className="flex justify-center items-center space-x-8 sm:space-x-12 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Users size={16} className="text-orange-600" />
              <span className="text-2xl font-bold text-gray-900">250+</span>
            </div>
            <div className="text-sm text-gray-600 font-medium">Active Students</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Star size={16} className="text-yellow-500" />
              <span className="text-2xl font-bold text-gray-900">4.9</span>
            </div>
            <div className="text-sm text-gray-600 font-medium">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Shield size={16} className="text-green-600" />
              <span className="text-2xl font-bold text-gray-900">100%</span>
            </div>
            <div className="text-sm text-gray-600 font-medium">UF Verified</div>
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