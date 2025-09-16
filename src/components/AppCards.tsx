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
          className={`group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl rounded-2xl border-0 shadow-md overflow-hidden ${gradient}`}
        >
        <CardContent className="p-6 text-center relative">
          
          {/* App Logo */}
          <motion.div 
            className="w-16 h-16 rounded-2xl bg-white/30 backdrop-blur-sm flex items-center justify-center mb-4 mx-auto transition-all duration-300 group-hover:scale-105 shadow-sm"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-2xl">{emoji}</span>
          </motion.div>

          {/* Title */}
          <h3 className="mb-2 text-white font-bold text-lg">{title}</h3>

          {/* Description */}
          <p className="text-white/90 mb-4 font-medium text-sm leading-relaxed">{description}</p>
          
          {/* Explore Button - Clean Style */}
          <Button 
            className="rounded-full px-6 py-2 bg-white/90 hover:bg-white text-gray-800 font-semibold text-sm transition-all duration-200 hover:shadow-md pointer-events-none"
            style={{ 
              color: accentColor 
            }}
          >
            Explore App
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
    <section className="py-32 sm:py-40 md:py-48 px-4 sm:px-6 bg-gradient-to-br from-slate-50/80 via-blue-50/40 to-purple-50/40 scroll-mt-24" id="apps">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20 sm:mb-24 md:mb-28"
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
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Four powerful student-focused apps, all designed to make your campus life easier
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 md:gap-14">
          {apps.map((app, index) => (
            <AppCard key={index} {...app} index={index} />
          ))}
        </div>

        {/* Call to Action after apps */}
        <motion.div
          className="text-center mt-24 sm:mt-28 md:mt-32"
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
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">Ready to Simplify Your Campus Life?</h3>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              Get started with our student-focused platform today
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
                className="rounded-full px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-bold text-white bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get Started Today
              </Button>
              <p className="text-sm text-gray-500 sm:ml-4">Free to start • No credit card required</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}