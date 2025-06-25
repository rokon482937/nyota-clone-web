
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-white pt-20 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <div className="space-y-8 text-left">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              The best{' '}
              <span className="text-blue-600">AI Notetaker</span>
              <br />
              to align{' '}
              <span className="text-gray-700">sales, support,</span>
              <br />
              <span className="text-gray-700">and project teams</span>
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
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-sm">A</span>
                  </div>
                  <span className="text-green-400 text-xs">Nyota</span>
                </div>
              </div>
              
              {/* Meeting Controls Bar */}
              <div className="p-4 bg-gray-800 border-t border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-white text-sm">Thread Meeting</div>
                  <div className="w-6"></div>
                </div>
              </div>
            </div>

            {/* Floating Chat Interface */}
            <div className="absolute -right-8 top-16 bg-white rounded-xl shadow-2xl p-4 w-80 border border-gray-200">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm font-medium">You</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-1">How are you feeling about all the marketing stuff?</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-1">Not great. We've got a bit of a scope creep. I had a few more requests coming from the marketing team. So I'm not sure if I'll get to the settings page this week.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600">Alright, let's check with Ray if he's able to help and I'll work with Simon on time boxing this.</p>
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
