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
          All-in-one campus hub
        </motion.h2>

        {/* Subtext with emojis */}
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl mb-10 sm:mb-12 md:mb-14 max-w-3xl mx-auto text-gray-600 font-medium px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Your campus life simplified. Shop 🛒 • Ride 🚗 • Live 🏡 • Party 🎉
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <Button 
            size="lg" 
            className="text-lg sm:text-xl px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 rounded-full text-white border-none font-bold transform transition-all duration-300 hover:scale-105 hover:shadow-2xl gradient-uf-primary hover:gradient-uf-orange shadow-lg"
          >
            Get Started
          </Button>
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