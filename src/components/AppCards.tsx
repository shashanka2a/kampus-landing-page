"use client"

import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "motion/react";

interface AppCardProps {
  emoji: string;
  title: string;
  description: string;
  accentColor: string;
  gradient: string;
  url: string;
  index: number;
}

function AppCard({ emoji, title, description, accentColor, gradient, url, index }: AppCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-3xl"
      >
        <Card 
          className="group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 bg-white/90 backdrop-blur-sm rounded-3xl border-0 shadow-lg overflow-hidden"
        >
        <CardContent className="p-6 sm:p-8 md:p-10 text-center relative">
          {/* Background gradient on hover */}
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-all duration-500 bg-gradient-to-br ${gradient}`}></div>
          
          {/* App Logo */}
          <motion.div 
            className={`relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-6 sm:mb-8 mx-auto transition-all duration-500 group-hover:scale-110 shadow-lg bg-gradient-to-br ${gradient}`}
            whileHover={{ rotate: 8, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Glow effect */}
            <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500 scale-110`}></div>
            <span className="relative text-2xl sm:text-3xl md:text-4xl">{emoji}</span>
          </motion.div>

          {/* Title */}
          <h3 className="mb-3 sm:mb-4 text-gray-800 font-bold text-lg sm:text-xl">{title}</h3>

          {/* Description */}
          <p className="text-gray-600 mb-6 sm:mb-8 font-medium text-sm sm:text-base">{description}</p>

          {/* Explore Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className={`relative rounded-full px-6 sm:px-8 md:px-10 py-2 sm:py-3 transition-all duration-300 hover:shadow-xl border-none font-bold text-sm sm:text-base pointer-events-none text-white bg-gradient-to-r ${gradient} hover:shadow-lg group/btn overflow-hidden`}
            >
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
              <span className="relative">Explore</span>
            </Button>
          </motion.div>
        </CardContent>
      </Card>
      </a>
    </motion.div>
  );
}

export function AppCards() {
  const apps = [
    {
      emoji: "🛒",
      title: "GatorEx",
      description: "Sell textbooks in seconds",
      accentColor: "#FF6B35",
      gradient: "from-orange-400 to-orange-600",
      url: "https://www.gatorex.shop/"
    },
    {
      emoji: "🚗", 
      title: "Rydify",
      description: "Split ride costs effortlessly",
      accentColor: "#3B82F6",
      gradient: "from-blue-500 to-blue-700",
      url: "http://rydify.co/"
    },
    {
      emoji: "🏡",
      title: "Vybr", 
      description: "Discover your dream housing",
      accentColor: "#8B5CF6",
      gradient: "from-purple-500 to-purple-700",
      url: "https://www.vybr.club/"
    },
    {
      emoji: "🎉",
      title: "Tribzy",
      description: "Never miss campus events",
      accentColor: "#10B981",
      gradient: "from-emerald-500 to-emerald-700",
      url: "http://tribzy.com/"
    }
  ];

  return (
    <section className="py-24 sm:py-32 md:py-40 px-4 sm:px-6 bg-gradient-to-br from-slate-50/80 via-blue-50/40 to-purple-50/40 scroll-mt-24" id="apps">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 sm:mb-20 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 sm:mb-8 gradient-uf-text"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Everything You Need
          </motion.h2>
          <motion.p 
            className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto font-medium px-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Four powerful student-focused apps, all designed to make your campus life easier
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {apps.map((app, index) => (
            <AppCard key={index} {...app} index={index} />
          ))}
        </div>

        {/* Call to Action after apps */}
        <motion.div
          className="text-center mt-16 sm:mt-20 md:mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 mb-6 max-w-2xl mx-auto font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to simplify your campus experience? Get started today!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button 
              className="rounded-full px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-bold text-white bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl border-none"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Join the Community
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}