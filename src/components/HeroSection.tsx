
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-20 sm:pt-24 pb-8 sm:pb-16 overflow-hidden">
      {/* Large Blue Gradient Background - Right Side */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-400 to-blue-500 opacity-20 transform skew-x-12 translate-x-1/4"></div>
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-br from-blue-300 to-blue-600 opacity-15 rounded-l-full"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 right-10 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 sm:left-20 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              The best{' '}
              <span className="text-gray-900">AI Notetaker</span>
              <br />
              to align{' '}
              <span className="text-blue-500">sales, support,</span>
              <br />
              <span className="text-blue-500">and project teams</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Automate your <strong>data entry and call workflows</strong>. Update your{' '}
              <strong>CRMs and project tools</strong> from your meeting notes and{' '}
              <strong>share updates</strong> with your team without the hassle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg rounded-lg font-semibold shadow-lg">
                Try Nyota free trial
              </Button>
              <Button variant="outline" className="px-8 py-4 text-lg rounded-lg border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold">
                <Play className="w-5 h-5 mr-2" />
                How it works
              </Button>
            </div>

            <p className="text-sm text-gray-500">Start a 7-day free trial</p>
          </div>

          {/* Right Content - Video Call Interface */}
          <div className="relative">
            {/* Main Video Call Window */}
            <div className="relative bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
              {/* Browser Header */}
              <div className="flex items-center justify-between p-4 bg-gray-800">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-white text-sm font-medium">Thread Meeting</span>
                <div className="w-6"></div>
              </div>
              
              {/* Video Grid */}
              <div className="grid grid-cols-2 gap-2 p-4 bg-gray-900">
                {/* Top participant - Woman */}
                <div className="col-span-2 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg aspect-video flex items-center justify-center relative overflow-hidden">
                  <img 
                    src="/lovable-uploads/a557e3bd-56c7-46e3-93d3-ee3473715cbb.png" 
                    alt="Meeting participant"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Bottom participant - Man */}
                <div className="bg-gray-700 rounded-lg aspect-video flex items-center justify-center">
                  <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-gray-300 font-bold text-xl">M</span>
                  </div>
                </div>
                
                {/* Nyota AI indicator */}
                <div className="bg-gray-700 rounded-lg aspect-video flex flex-col items-center justify-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-sm">A</span>
                  </div>
                  <span className="text-blue-400 text-xs">Nyota</span>
                </div>
              </div>
              
              {/* Meeting Controls Bar */}
              <div className="p-4 bg-gray-800 border-t border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="text-white text-sm">
                    <span className="text-green-400">●</span> Thread Nyota
                  </div>
                  <div className="text-green-400 text-sm">Taking notes...</div>
                </div>
              </div>
            </div>

            {/* Floating Insights Panel */}
            <div className="absolute -right-4 top-8 bg-white rounded-xl shadow-2xl p-6 w-80 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Insights</h3>
                <span className="text-xs text-gray-500">(visible only to you)</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">40%</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-700">
                      <strong>Your talking time 40%.</strong> This is 20% less than last week. Well done!
                    </p>
                  </div>
                </div>
                
                <div className="text-sm text-gray-600">
                  <p><strong>Marketing team</strong> was brought up by 3 people this week. Create a reminder for the next retro?</p>
                </div>
                
                <div className="text-sm text-gray-600">
                  <p><strong>Capacity issues</strong> have been brought up in the last 3 meetings...</p>
                </div>
              </div>
            </div>

            {/* Floating Action Items */}
            <div className="absolute -left-4 bottom-8 bg-white rounded-xl shadow-xl p-4 w-72 border border-gray-200">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-600 text-sm">SA</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Sandra Amin</p>
                    <p className="text-xs text-gray-500">11:50 AM</p>
                    <p className="text-sm text-gray-700 mt-1">Nyota: todo: bring in Ray to help with github settings page</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">N</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Nyota</p>
                    <p className="text-xs text-gray-500">11:56 AM</p>
                    <p className="text-sm text-gray-700 mt-1">Action item added</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
