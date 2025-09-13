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
      <Card 
        className="group cursor-pointer transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:-translate-y-4 bg-white rounded-3xl border-0 shadow-lg overflow-hidden"
        onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
      >
        <CardContent className="p-6 sm:p-8 md:p-10 text-center relative">
          {/* Background gradient on hover */}
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${gradient}`}></div>
          
          {/* App Logo */}
          <motion.div 
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-6 sm:mb-8 mx-auto transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-lg"
            style={{ backgroundColor: accentColor }}
            whileHover={{ rotate: 12 }}
          >
            <span className="text-2xl sm:text-3xl md:text-4xl">{emoji}</span>
          </motion.div>

          {/* Title */}
          <h3 className="mb-3 sm:mb-4 text-gray-800 font-bold text-lg sm:text-xl">{title}</h3>

          {/* Description */}
          <p className="text-gray-600 mb-6 sm:mb-8 font-medium text-sm sm:text-base">{description}</p>

          {/* Explore Button */}
          <Button 
            className="rounded-full px-6 sm:px-8 md:px-10 py-2 sm:py-3 transition-all duration-300 hover:shadow-xl hover:scale-105 border-none font-bold transform text-sm sm:text-base"
            style={{ 
              backgroundColor: accentColor, 
              color: 'white'
            }}
            onClick={(e) => {
              e.stopPropagation();
              window.open(url, '_blank', 'noopener,noreferrer');
            }}
          >
            Explore
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function AppCards() {
  const apps = [
    {
      emoji: "🛒",
      title: "GatorEx",
      description: "Student only marketplace",
      accentColor: "#FA4616",
      gradient: "gradient-uf-orange",
      url: "https://www.gatorex.shop/"
    },
    {
      emoji: "🚗", 
      title: "Rydify",
      description: "Splitwise for rides",
      accentColor: "#0021A5",
      gradient: "gradient-uf-blue",
      url: "http://rydify.co/"
    },
    {
      emoji: "🏡",
      title: "Vybr", 
      description: "Find your perfect housing",
      accentColor: "#FA4616",
      gradient: "gradient-uf-orange",
      url: "https://www.vybr.club/"
    },
    {
      emoji: "🎉",
      title: "Tribzy",
      description: "Discover campus events",
      accentColor: "#0021A5",
      gradient: "gradient-uf-blue",
      url: "http://tribzy.com/"
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-blue-50/30 to-orange-50/30" id="apps">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 gradient-uf-text">
            Everything you need for campus life
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-medium px-4">
            Four powerful apps designed specifically for the modern student experience
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {apps.map((app, index) => (
            <AppCard key={index} {...app} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}