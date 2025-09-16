"use client"

import { useState } from "react";
import { Instagram, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";

export function InstagramCTA() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
          <motion.div 
          className="fixed left-4 right-4 z-40 flex justify-center pointer-events-none"
          style={{ 
            bottom: 'max(1rem, env(safe-area-inset-bottom))',
            paddingBottom: 'env(safe-area-inset-bottom)'
          }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
        <div className="bg-white rounded-2xl p-4 shadow-2xl border-2 border-gray-300 backdrop-blur-sm max-w-sm w-full mx-auto pointer-events-auto relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
          
          {/* Close Button */}
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
          >
            <X size={12} className="text-gray-600" />
          </button>

          <div className="relative z-10 flex items-center space-x-3">
            {/* Instagram Icon */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center shadow-xl border-2 border-white">
              <Instagram size={24} className="text-white font-bold" strokeWidth={2.5} />
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <p className="text-black font-bold text-base mb-1">Follow us on Instagram!</p>
              <p className="text-gray-700 text-sm font-bold">@kampus.fun</p>
            </div>
            
            {/* CTA Button */}
            <Button 
              className="rounded-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-sm transition-all duration-200 hover:scale-105 shadow-xl hover:shadow-2xl border-2 border-white"
              onClick={() => {
                window.open('https://instagram.com/kampus.fun', '_blank', 'noopener,noreferrer');
              }}
            >
              Follow
            </Button>
          </div>
        </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}