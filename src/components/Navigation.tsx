import { Button } from "./ui/button";

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-xl gradient-uf-primary flex items-center justify-center">
              <span className="text-white font-bold">K</span>
            </div>
            <span className="text-xl font-bold gradient-uf-text">Kampus.fun</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#apps" className="text-gray-600 hover:text-blue-800 transition-colors font-medium">
              Apps
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-800 transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-800 transition-colors font-medium">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <Button className="rounded-full px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white border-none transition-all duration-300 hover:shadow-lg hover:scale-105">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
}