
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              NYOTA
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-600 transition-colors text-sm font-medium">
              <span>Features</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-600 transition-colors text-sm font-medium">
              <span>Solutions</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <span className="cursor-pointer hover:text-blue-600 transition-colors text-sm font-medium">Integrations</span>
            <span className="cursor-pointer hover:text-blue-600 transition-colors text-sm font-medium">Pricing</span>
            <span className="cursor-pointer hover:text-blue-600 transition-colors text-sm font-medium">Contact</span>
            <span className="cursor-pointer hover:text-blue-600 transition-colors text-sm font-medium">Blog</span>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium">
              Get a demo
            </button>
            <button className="text-gray-600 hover:text-gray-700 transition-colors text-sm font-medium">
              Sign in
            </button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium rounded-md">
              Start free trial
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-700">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
