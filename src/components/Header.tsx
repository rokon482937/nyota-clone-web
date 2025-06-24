
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full bg-white/80 backdrop-blur-sm border-b border-gray-100 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
              NYOTA
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-600 transition-colors">
              <span>Features</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-600 transition-colors">
              <span>Solutions</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <span className="cursor-pointer hover:text-blue-600 transition-colors">Integrations</span>
            <span className="cursor-pointer hover:text-blue-600 transition-colors">Pricing</span>
            <span className="cursor-pointer hover:text-blue-600 transition-colors">Contact</span>
            <span className="cursor-pointer hover:text-blue-600 transition-colors">Blog</span>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-blue-600 hover:text-blue-700 transition-colors">
              Get a demo
            </button>
            <button className="text-gray-600 hover:text-gray-700 transition-colors">
              Sign in
            </button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
              Start free trial
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
