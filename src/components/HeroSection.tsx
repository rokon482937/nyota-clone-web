
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-white pt-20 pb-16 overflow-hidden">
      {/* Blue gradient background - positioned differently on mobile */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-blue-400 to-blue-600 transform skew-x-12 translate-x-1/4 hidden lg:block"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-tr from-blue-400 to-blue-600 transform -skew-x-12 translate-y-12 block lg:hidden"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <div className="space-y-8 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              The best{' '}
              <span className="text-black">AI Notetaker</span>
              <br />
              to align{' '}
              <span className="text-blue-600">sales, support,</span>
              <br />
              <span className="text-blue-600">and project teams</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              Automate your <strong>data entry and call workflows</strong>. Update your{' '}
              <strong>CRMs and project tools</strong> from your meeting notes and{' '}
              <strong>share updates</strong> with your team without the hassle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg font-semibold shadow-lg">
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
          <div className="relative z-20 order-first lg:order-last">
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
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-sm">A</span>
                  </div>
                  <span className="text-green-400 text-xs">Nyota</span>
                </div>
              </div>
            </div>

            {/* Floating Chat Interface - Challenges */}
            <div className="absolute -right-8 top-16 bg-white rounded-xl shadow-2xl p-4 w-80 border border-gray-200 hidden lg:block">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Challenges</h3>
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">!</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-700">Capacity regarding testing page, marketing stuff including Ray and Simon</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-700">Mike and Sandra discuss the scope creep on the current marketing project.</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-700">They decide to check with Ray to see if he can help and to time box the project.</p>
                </div>
              </div>
            </div>

            {/* Thread Nyota Chat */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-2xl p-4 w-80 border border-gray-200 hidden lg:block">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">TN</span>
                </div>
                <span className="font-semibold text-gray-900">Thread Nyota</span>
                <span className="text-red-500 text-xs bg-red-100 px-2 py-1 rounded">Rec</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-xs">MF</span>
                  </div>
                  <span className="text-sm text-gray-600">Mike Fischer</span>
                  <span className="text-xs text-gray-400">11:02 AM</span>
                </div>
                <p className="text-sm text-gray-700">Today I got a full list of requirements from Simon and I timeline the marketing asks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
