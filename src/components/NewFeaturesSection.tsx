
import React from 'react';

const NewFeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium mb-4 uppercase tracking-wide text-sm">CORE FEATURES</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Ready to get more out of your
            <br />
            meetings?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We take AI note taking to the next level to keep you
            <br />
            focused, organized, and stress-free.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Meeting Notes Section */}
          <div>
            <p className="text-blue-600 font-medium mb-4 uppercase tracking-wide text-sm">MEETING NOTES</p>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Meeting notes</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Nyota joins your <span className="text-blue-600 font-semibold">Zoom</span>, <span className="text-blue-600 font-semibold">Google Meet</span>, and <span className="text-blue-600 font-semibold">Microsoft Teams</span>
                <br />
                meetings to take comprehensive, high-quality notes. Every
                <br />
                detail is captured, so you can stay fully engaged in the
                <br />
                conversation without worrying about missing key points.
              </p>
              <p>
                No more scrambling to remember what was discussed or
                <br />
                decipher incomplete notes. It's all your decisions, captured
                <br />
                and organized, <span className="text-blue-600 font-semibold">automatically</span>.
              </p>
              <p>
                ...and all of that supporting <span className="font-semibold">90+ languages</span>!
              </p>
            </div>
          </div>
          
          {/* Meeting Notes Visual */}
          <div className="relative">
            <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
              <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Meeting Recording</span>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Discussed project timeline and deliverables</p>
                  <p>• Marketing team needs additional resources</p>
                  <p>• Ray to assist with technical implementation</p>
                  <p>• Next review scheduled for next Friday</p>
                </div>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-xs">Live Transcription</span>
                </div>
                <p className="text-sm opacity-90">
                  "We need to prioritize the marketing deliverables and ensure
                  we have adequate resources allocated for the Q4 campaign..."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Automation Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-semibold mb-4">Project Management Tools</h4>
                <div className="grid grid-cols-4 gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">SF</span>
                  </div>
                  <div className="w-10 h-10 bg-red-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">JS</span>
                  </div>
                  <div className="w-10 h-10 bg-purple-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">AS</span>
                  </div>
                  <div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">CL</span>
                  </div>
                  <div className="w-10 h-10 bg-green-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">MS</span>
                  </div>
                  <div className="w-10 h-10 bg-indigo-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">NT</span>
                  </div>
                  <div className="w-10 h-10 bg-pink-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">HT</span>
                  </div>
                  <div className="w-10 h-10 bg-teal-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">FG</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Automation Section */}
          <div className="order-1 lg:order-2">
            <p className="text-blue-600 font-medium mb-4 uppercase tracking-wide text-sm">AUTOMATION</p>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Automate your data entry</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Nyota automatically syncs meeting notes and tasks to your <span className="font-semibold">CRMs</span>,
                <br />
                <span className="font-semibold">project management tools</span>, and <span className="font-semibold">internal systems</span>. From logging action
                <br />
                items to updating client details, Nyota handles it all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewFeaturesSection;
