
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const DemoSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-blue-600 font-medium mb-4 uppercase tracking-wide text-sm">DEMO</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-16">
            How Nyota works
          </h2>
          
          {/* YouTube Video Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/PcBGFSi8ZJ0"
                title="Nyota Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          {/* Large NYOTA Logo */}
          <div className="flex items-center justify-center">
            <div className="text-8xl lg:text-9xl font-bold tracking-wider">
              <span className="text-green-400">N</span>
              <span className="text-green-400">Y</span>
              <span className="relative">
                <span className="text-blue-500">O</span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
                    <Play className="w-8 h-8 lg:w-10 lg:h-10 text-white ml-1" />
                  </div>
                </div>
              </span>
              <span className="text-blue-500">T</span>
              <span className="text-blue-500">A</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
