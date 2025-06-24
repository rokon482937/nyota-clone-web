
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, CheckCircle } from 'lucide-react';

const DemoSection = () => {
  const steps = [
    {
      number: "01",
      title: "Connect your calendar",
      description: "Nyota automatically joins your meetings and starts taking notes"
    },
    {
      number: "02", 
      title: "AI processes conversations",
      description: "Our AI listens and understands context, extracting key insights"
    },
    {
      number: "03",
      title: "Get actionable summaries",
      description: "Receive structured notes, action items, and next steps instantly"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-blue-600 font-medium mb-3 sm:mb-4 uppercase tracking-wide text-sm">HOW IT WORKS</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Demo: How Nyota works
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12">
            See how Nyota transforms your meetings into actionable insights in just 3 simple steps
          </p>
          
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg font-medium mb-12 sm:mb-16">
            <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Watch Demo Video
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Demo Video Placeholder */}
          <div className="relative">
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" />
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center space-x-2 text-white">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live Demo Recording</span>
                </div>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-6 sm:space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4 sm:space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
