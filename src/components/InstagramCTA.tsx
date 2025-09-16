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
        <div className="bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl p-4 shadow-2xl border-2 border-white/50 backdrop-blur-sm max-w-sm w-full mx-auto pointer-events-auto relative overflow-hidden ring-2 ring-black/10">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          
          {/* Close Button */}
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors duration-200"
          >
            <X size={12} className="text-white" />
          </button>

          <div className="relative z-10 flex items-center space-x-3">
            {/* Instagram Icon */}
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Instagram size={20} className="text-white" />
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <p className="text-white font-semibold text-sm mb-1 drop-shadow-lg">Follow us on Instagram!</p>
              <p className="text-white/95 text-xs font-medium drop-shadow-md">@kampus.fun</p>
            </div>
            
            {/* CTA Button */}
            <Button 
              className="rounded-full px-4 py-2 bg-white hover:bg-gray-100 text-orange-600 font-bold text-sm transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
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