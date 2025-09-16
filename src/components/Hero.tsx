"use client"

import { Button } from "./ui/button";
import { motion } from "motion/react";

export function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-50 pt-24 sm:pt-32 md:pt-40 relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-orange-200 to-orange-300 blur-xl"></div>
        <div className="absolute top-32 right-16 w-16 h-16 rounded-full bg-gradient-to-br from-blue-200 to-blue-300 blur-lg"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 rounded-full bg-gradient-to-br from-purple-200 to-purple-300 blur-lg"></div>
        <div className="absolute bottom-60 right-1/3 w-24 h-24 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 blur-2xl"></div>
      </div>
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Logo/Brand */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 gradient-uf-text">
            Kampus.fun
          </h1>
          <div className="w-20 sm:w-24 md:w-32 h-2 mx-auto rounded-full gradient-uf-primary"></div>
        </motion.div>

        {/* Main Tagline */}
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 leading-tight text-gray-800"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Your Ultimate Campus Life Platform
        </motion.h2>

        {/* Subtext with emojis */}
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 max-w-4xl mx-auto text-gray-600 font-medium px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Connect, buy, sell, ride, and discover everything campus has to offer — all in one place.
        </motion.p>

        {/* Visual Feature Icons */}
        <motion.div
          className="flex justify-center items-center space-x-8 sm:space-x-12 mb-10 sm:mb-12 md:mb-14"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <motion.div 
            className="text-center group cursor-pointer"
            whileHover={{ y: -5, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mb-2 mx-auto shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-2xl sm:text-3xl">🛒</span>
            </div>
            <p className="text-sm font-semibold text-gray-700">Shop</p>
          </motion.div>
          <motion.div 
            className="text-center group cursor-pointer"
            whileHover={{ y: -5, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-2 mx-auto shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-2xl sm:text-3xl">🚗</span>
            </div>
            <p className="text-sm font-semibold text-gray-700">Ride</p>
          </motion.div>
          <motion.div 
            className="text-center group cursor-pointer"
            whileHover={{ y: -5, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mb-2 mx-auto shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-2xl sm:text-3xl">🏡</span>
            </div>
            <p className="text-sm font-semibold text-gray-700">Live</p>
          </motion.div>
          <motion.div 
            className="text-center group cursor-pointer"
            whileHover={{ y: -5, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-2 mx-auto shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-2xl sm:text-3xl">🎉</span>
            </div>
            <p className="text-sm font-semibold text-gray-700">Party</p>
          </motion.div>
        </motion.div>

        {/* Simple Context */}
        <motion.div
          className="mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <p className="text-base sm:text-lg text-gray-600 font-medium text-center">
            Discover what campus life has to offer. Explore our apps below ↓
          </p>
        </motion.div>

        {/* Enhanced CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-blue-600 opacity-30 blur-xl scale-110"></div>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="relative text-xl sm:text-2xl px-12 sm:px-16 py-6 sm:py-7 rounded-full bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white font-black transform transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-2xl"
              onClick={() => {
                const appsSection = document.getElementById('apps');
                if (appsSection) {
                  appsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-white"
              >
                Explore Our Apps
              </motion.span>
            </Button>
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