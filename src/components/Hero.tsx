"use client"

import { Button } from "./ui/button";
import { motion } from "motion/react";

export function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-50 pt-16 sm:pt-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
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

        {/* Social Proof & Context */}
        <motion.div
          className="mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center space-x-6 mb-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-orange-600">15,000+</div>
              <div className="text-sm text-gray-500">Active Students</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-blue-600">4.8★</div>
              <div className="text-sm text-gray-500">App Rating</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-orange-600">50+</div>
              <div className="text-sm text-gray-500">Universities</div>
            </div>
          </div>
          <p className="text-base sm:text-lg text-gray-500 font-medium text-center">
            Join thousands of students already using our platform. Explore our apps below ↓
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
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button 
              size="lg" 
              className="relative text-xl sm:text-2xl px-12 sm:px-16 py-6 sm:py-7 rounded-full text-white border-none font-black transform transition-all duration-300 hover:scale-110 hover:shadow-2xl bg-gradient-to-r from-orange-500 to-blue-700 hover:from-orange-600 hover:to-blue-800 shadow-2xl order-1 sm:order-1"
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
              >
                Explore Our Apps
              </motion.span>
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="text-lg sm:text-xl px-8 sm:px-12 py-6 sm:py-7 rounded-full border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-bold transition-all duration-300 hover:scale-105 order-2 sm:order-2 bg-white/80 backdrop-blur-sm"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get Started Free
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