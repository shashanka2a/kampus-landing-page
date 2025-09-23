import { Instagram, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-700 via-orange-800 to-blue-900 text-white mt-16 sm:mt-20 md:mt-24 scroll-mt-24" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 md:gap-16">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl gradient-uf-primary flex items-center justify-center">
                <span className="text-white font-bold text-base sm:text-lg">K</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold">Kampus.fun</span>
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              Your all-in-one campus hub designed by students, for students. 
              Making university life easier, one app at a time.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center sm:justify-start space-x-4 sm:space-x-6">
              <a 
                href="https://instagram.com/kampus.fun" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram size={18} className="sm:w-[20px] sm:h-[20px]" />
              </a>
              <a 
                href="mailto:kampus.fun@gmail.com"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-green-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Mail size={18} className="sm:w-[20px] sm:h-[20px]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors text-sm sm:text-base">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors text-sm sm:text-base">Our Apps</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors text-sm sm:text-base">Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors text-sm sm:text-base">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Get in Touch</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a 
                  href="mailto:kampus.fun@gmail.com"
                  className="inline-flex items-center space-x-3 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-green-500 flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <Mail size={18} className="sm:w-[20px] sm:h-[20px] text-gray-300 group-hover:text-white" />
                  </div>
                  <span className="text-gray-300 hover:text-orange-400 transition-colors text-sm sm:text-base">
                    kampus.fun@gmail.com
                  </span>
                </a>
              </li>
              <li className="text-gray-300 text-sm sm:text-base flex items-center space-x-3">
                <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                <span>University of Florida</span>
              </li>
              <li className="text-gray-300 text-sm sm:text-base flex items-center space-x-3">
                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                <span>Gainesville, FL</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm sm:text-base">
            <span>Made with</span>
            <Heart size={14} className="sm:w-4 sm:h-4 text-orange-500 fill-current" />
            <span>by Gator students</span>
          </div>
          <p className="text-gray-400 mt-2 text-xs sm:text-sm">
            © 2024 Kampus.fun. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}