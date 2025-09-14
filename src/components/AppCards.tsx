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
          className={`group cursor-pointer transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:-translate-y-4 rounded-3xl border-0 shadow-lg overflow-hidden ${gradient}`}
        >
        <CardContent className="p-6 sm:p-8 md:p-10 text-center relative">
          
          {/* Popularity Badge */}
          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
            <span className="text-white text-xs font-semibold flex items-center">
              ★ {index === 0 ? '4,200+' : index === 1 ? '3,800+' : index === 2 ? '5,100+' : '3,600+'}
            </span>
          </div>
          
          {/* App Logo */}
          <motion.div 
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl sm:rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 sm:mb-6 mx-auto transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-lg"
            whileHover={{ rotate: 12 }}
          >
            <span className="text-2xl sm:text-3xl md:text-4xl">{emoji}</span>
          </motion.div>

          {/* Title */}
          <h3 className="mb-2 sm:mb-3 text-white font-bold text-lg sm:text-xl">{title}</h3>

          {/* Description */}
          <p className="text-white/90 mb-4 sm:mb-6 font-medium text-sm sm:text-base">{description}</p>
          
          {/* Key Feature */}
          <div className="mb-6 sm:mb-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="text-white/80 text-xs font-medium">
                {index === 0 && "🚀 Instant selling"}
                {index === 1 && "💎 Save 50% on rides"}
                {index === 2 && "🏠 Best locations"}
                {index === 3 && "🎉 Never miss out"}
              </span>
            </div>
          </div>

          {/* Explore Button */}
          <Button 
            className="rounded-full px-6 sm:px-8 md:px-10 py-2 sm:py-3 bg-white hover:bg-gray-50 text-gray-800 border-none font-bold text-sm sm:text-base transition-all duration-300 hover:shadow-xl hover:scale-105 pointer-events-none relative overflow-hidden group/btn"
            style={{ 
              color: accentColor 
            }}
          >
            <span className="relative z-10 flex items-center">
              Explore App
              <span className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-200">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover/btn:opacity-10 transition-opacity duration-200" style={{ backgroundImage: `linear-gradient(90deg, ${accentColor}20, ${accentColor}40)` }}></div>
          </Button>
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
      accentColor: "#FA4616",
      gradient: "gradient-uf-orange",
      url: "https://www.gatorex.shop/"
    },
    {
      emoji: "🚗", 
      title: "Rydify",
      description: "Split ride costs effortlessly",
      accentColor: "#0021A5",
      gradient: "gradient-uf-blue",
      url: "http://rydify.co/"
    },
    {
      emoji: "🏡",
      title: "Vybr", 
      description: "Discover your dream housing",
      accentColor: "#FA4616",
      gradient: "gradient-uf-orange",
      url: "https://www.vybr.club/"
    },
    {
      emoji: "🎉",
      title: "Tribzy",
      description: "Never miss campus events",
      accentColor: "#0021A5",
      gradient: "gradient-uf-blue",
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
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6 gradient-uf-text"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Everything You Need
          </motion.h2>
          <motion.div
            className="mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-blue-100 border border-orange-200">
              <span className="text-orange-600 font-semibold text-sm">🔥 Most Popular Campus Platform</span>
            </div>
          </motion.div>
          <motion.p 
            className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto font-medium px-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
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
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">Ready to Transform Your Campus Life?</h3>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              Join 15,000+ students already saving time and money with our platform
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
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
              <p className="text-sm text-gray-500 sm:ml-4">Free to start • No credit card required</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}