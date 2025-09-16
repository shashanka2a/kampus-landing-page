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
        <div className="bg-white rounded-2xl p-5 shadow-2xl border-3 border-gray-400 backdrop-blur-sm max-w-sm w-full mx-auto pointer-events-auto relative overflow-hidden ring-4 ring-black/5">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-25 to-white"></div>
          
          {/* Close Button */}
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
          >
            <X size={12} className="text-gray-600" />
          </button>

          <div className="relative z-10 flex items-center space-x-3">
            {/* Instagram Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center shadow-2xl border-3 border-white ring-2 ring-purple-200">
              <Instagram size={28} className="text-white" strokeWidth={3} />
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <p className="text-gray-900 font-extrabold text-lg mb-1 tracking-tight">Follow us on Instagram!</p>
              <p className="text-purple-700 text-base font-bold tracking-wide">@kampus.fun</p>
            </div>
            
            {/* CTA Button */}
            <Button 
              className="rounded-full px-7 py-3.5 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-700 hover:via-pink-700 hover:to-purple-700 text-white font-extrabold text-base transition-all duration-200 hover:scale-110 shadow-2xl hover:shadow-3xl border-3 border-white ring-2 ring-purple-300"
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