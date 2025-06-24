
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 sm:pt-24 pb-8 sm:pb-16">
      {/* Gradient Orbs */}
      <div className="absolute top-20 right-10 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 sm:left-20 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              The best{' '}
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                AI Notetaker
              </span>
              <br />
              to align{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                sales, support,
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                and project teams
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Automate your <strong>data entry</strong> and <strong>call workflows</strong>. Update your{' '}
              <strong>CRMs and project tools</strong> from your meeting notes and{' '}
              <strong>share updates</strong> with your team without the hassle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg font-medium">
                Try Nyota free trial
              </Button>
              <Button variant="outline" className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                How it works
              </Button>
            </div>

            <p className="text-sm text-gray-500">Start a 7-day free trial</p>
          </div>

          {/* Right Content - Mock Video Interface */}
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 transform hover:scale-105 transition-transform duration-500">
              {/* Video Call Interface Mockup */}
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                <div className="flex items-center justify-between p-3 sm:p-4 bg-gray-800">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-white text-xs sm:text-sm font-medium">Nyota Meeting</span>
                  <div className="w-6"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 p-3 sm:p-4">
                  <div className="bg-blue-600 rounded-lg h-24 sm:h-32 flex items-center justify-center">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm sm:text-base">A</span>
                    </div>
                  </div>
                  <div className="bg-gray-700 rounded-lg h-24 sm:h-32 flex items-center justify-center">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gray-600 rounded-full flex items-center justify-center">
                      <span className="text-gray-300 font-bold text-sm sm:text-base">B</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 sm:p-4 bg-gray-800">
                  <div className="text-white text-xs mb-2">Nyota AI</div>
                  <div className="text-green-400 text-sm">Taking notes...</div>
                </div>
              </div>
            </div>

            {/* Chat Interface */}
            <div className="absolute -right-2 sm:-right-8 top-8 bg-white rounded-xl shadow-xl p-3 sm:p-4 w-64 sm:w-80 transform hover:scale-105 transition-transform duration-500">
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <div className="text-xs sm:text-sm font-medium">How are you feeling about all the marketing stuff?</div>
                </div>
                <div className="bg-gray-100 rounded-lg p-2 sm:p-3 text-xs sm:text-sm">
                  Not great. We've got a bit of a scope creep. I had a few more requests coming from the marketing team...
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex-shrink-0"></div>
                  <div className="text-xs sm:text-sm">Alright, let's check with Ray if he's able to help and I'll work with Simon on time boxing this.</div>
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
