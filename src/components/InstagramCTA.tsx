"use client"

import { useState } from "react";
import { Instagram, X, ExternalLink } from "lucide-react";
// import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";

export function InstagramCTA() {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handleInstagramClick = () => {
    window.open('https://instagram.com/kampus.fun', '_blank', 'noopener,noreferrer');
  };

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
        <motion.div 
          className="bg-white rounded-2xl p-5 shadow-2xl border-3 border-gray-400 backdrop-blur-sm max-w-sm w-full mx-auto pointer-events-auto relative overflow-hidden ring-4 ring-black/5 cursor-pointer group"
          onClick={handleInstagramClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Animated Background Pattern */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50"
            animate={{
              background: isHovered 
                ? "linear-gradient(135deg, #f3e8ff, #fce7f3, #fed7aa)" 
                : "linear-gradient(135deg, #faf5ff, #fdf2f8, #fff7ed)"
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Floating particles effect */}
          <motion.div 
            className="absolute inset-0 opacity-20"
            animate={{
              background: isHovered 
                ? "radial-gradient(circle at 20% 80%, #a855f7 0%, transparent 50%), radial-gradient(circle at 80% 20%, #ec4899 0%, transparent 50%)"
                : "radial-gradient(circle at 20% 80%, #a855f7 0%, transparent 30%), radial-gradient(circle at 80% 20%, #ec4899 0%, transparent 30%)"
            }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Close Button */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsVisible(false);
            }}
            className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-200 hover:scale-110 z-20"
          >
            <X size={12} className="text-gray-600" />
          </button>

          <div className="relative z-10 flex items-center space-x-3">
            {/* Instagram Icon with enhanced animation */}
            <motion.div 
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center shadow-2xl border-3 border-white ring-2 ring-purple-200"
              animate={{
                rotate: isHovered ? 5 : 0,
                scale: isHovered ? 1.1 : 1,
                boxShadow: isHovered 
                  ? "0 25px 50px -12px rgba(168, 85, 247, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.8)"
                  : "0 25px 50px -12px rgba(168, 85, 247, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.5)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  rotate: isHovered ? -5 : 0
                }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <Instagram size={28} className="text-white" strokeWidth={3} />
              </motion.div>
            </motion.div>
            
            {/* Content with enhanced typography */}
            <div className="flex-1">
              <motion.p 
                className="text-gray-900 font-extrabold text-lg mb-1 tracking-tight"
                animate={{
                  color: isHovered ? "#7c3aed" : "#111827"
                }}
                transition={{ duration: 0.2 }}
              >
                Follow us on Instagram!
              </motion.p>
              <motion.p 
                className="text-purple-700 text-base font-bold tracking-wide"
                animate={{
                  color: isHovered ? "#a855f7" : "#7c3aed"
                }}
                transition={{ duration: 0.2 }}
              >
                @kampus.fun
              </motion.p>
            </div>
            
            {/* Enhanced CTA Button — more explicit label and anchor semantics */}
            <motion.div
              animate={{
                scale: isHovered ? 1.05 : 1,
                rotate: isHovered ? 2 : 0
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <a
                href="https://instagram.com/kampus.fun"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-700 hover:via-pink-700 hover:to-purple-700 text-white font-extrabold text-base transition-all duration-200 shadow-2xl border-3 border-white ring-2 ring-purple-300 focus:outline-none focus:ring-4 focus:ring-purple-300/40"
              >
                <span>Follow on Instagram</span>
                <motion.span
                  animate={{
                    x: isHovered ? 2 : 0,
                    opacity: isHovered ? 1 : 0.9
                  }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex"
                >
                  <ExternalLink size={16} />
                </motion.span>
              </a>
            </motion.div>
          </div>
        </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}