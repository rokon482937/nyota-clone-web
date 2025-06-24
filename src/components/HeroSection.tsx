
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-24 pb-16">
      {/* Gradient Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
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
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Automate your <strong>data entry</strong> and <strong>call workflows</strong>. Update your{' '}
              <strong>CRMs and project tools</strong> from your meeting notes and{' '}
              <strong>share updates</strong> with your team without the hassle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg">
                Try Nyota free trial
              </Button>
              <Button variant="outline" className="px-8 py-4 text-lg rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                <Play className="w-5 h-5 mr-2" />
                How it works
              </Button>
            </div>

            <p className="text-sm text-gray-500">Start a 7-day free trial</p>
          </div>

          {/* Right Content - Mock Video Interface */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Video Call Interface Mockup */}
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                <div className="flex items-center justify-between p-4 bg-gray-800">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-white text-sm">Nyota Meeting</span>
                  <div className="w-6"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 p-4">
                  <div className="bg-blue-600 rounded-lg h-32 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">A</span>
                    </div>
                  </div>
                  <div className="bg-gray-700 rounded-lg h-32"></div>
                </div>
                
                <div className="p-4 bg-gray-800">
                  <div className="text-white text-xs mb-2">Nyota</div>
                  <div className="text-green-400 text-sm">Taking notes...</div>
                </div>
              </div>
            </div>

            {/* Chat Interface */}
            <div className="absolute -right-8 top-8 bg-white rounded-xl shadow-xl p-4 w-80 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                  <div>
                    <div className="text-sm font-medium">How are you feeling about all the marketing stuff?</div>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 text-sm">
                  Not great. We've got a bit of a scope creep. I had a few more requests coming from the marketing team...
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                  <div className="text-sm">Alright, let's check with Ray if he's able to help and I'll work with Simon on time boxing this.</div>
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
