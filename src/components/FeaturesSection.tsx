
import React from 'react';
import { Mic, FileText, Zap, Users, Bot, Shield, CheckCircle } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Smart Recording",
      description: "Automatically record and transcribe your meetings with high accuracy across 90+ languages"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "AI Note Taking", 
      description: "Generate structured meeting notes, action items, and summaries automatically"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automation",
      description: "Sync meeting notes and tasks to your CRMs, project management tools, and internal systems"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Share updates with your team and keep everyone aligned on meeting outcomes"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Agent",
      description: "Ask Nyota questions about your meeting content and get instant answers and insights"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-grade security with SOC 2 compliance and data encryption at rest and in transit"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-500 font-medium mb-4 uppercase tracking-wide text-sm">CORE FEATURES</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to get more out of your meetings?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We take AI note taking to the next level to decipher incomplete notes. It's all your decisions, captured and organized, automatically.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            ...and all of that supporting <strong>90+ languages!</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 text-blue-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Meeting Notes Section */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <p className="text-blue-500 font-medium mb-2 uppercase tracking-wide text-sm">MEETING NOTES</p>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Meeting notes</h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nyota joins your <strong>Zoom</strong>, <strong>Google Meet</strong>, and <strong>Microsoft Teams</strong> calls to take comprehensive, high-quality notes. Every detail is captured, so you can stay fully engaged in the conversation without worrying about missing key points.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                No more scrambling to remember what was discussed or decipher incomplete notes. It's all your decisions, captured and organized, automatically.
              </p>
              <p className="text-gray-600 leading-relaxed">
                ...and all of that supporting <strong>90+ languages!</strong>
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 h-80 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <FileText className="w-20 h-20 mx-auto mb-4" />
                <p>Meeting Notes Interface</p>
              </div>
            </div>
          </div>
        </div>

        {/* Automation Section */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <p className="text-blue-500 font-medium mb-2 uppercase tracking-wide text-sm">AUTOMATION</p>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Automate your data entry</h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-50 rounded-lg p-6 h-80 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <Zap className="w-20 h-20 mx-auto mb-4" />
                <p>Automation Dashboard</p>
              </div>
            </div>
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nyota automatically syncs meeting notes and tasks to your <strong>CRMs</strong>, project management tools, and internal systems. From logging action items to updating client details, Nyota handles it all.
              </p>
              
              {/* Integration icons */}
              <div className="flex flex-wrap gap-3 mt-6">
                <div className="w-10 h-10 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">SF</span>
                </div>
                <div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">HS</span>
                </div>
                <div className="w-10 h-10 bg-green-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">MF</span>
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">MS</span>
                </div>
                <div className="w-10 h-10 bg-red-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">A</span>
                </div>
                <div className="w-10 h-10 bg-pink-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">C</span>
                </div>
                <div className="w-10 h-10 bg-yellow-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">M</span>
                </div>
                <div className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">N</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Agent Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <p className="text-blue-500 font-medium mb-2 uppercase tracking-wide text-sm">AI AGENT</p>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ask Nyota</h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Interact with your meeting content. Need a quick answer, a summary or a specific note created directly from a discussion? Simply ask!
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ask in the context of a single meeting, an <strong>account or project-specific folder</strong>, or <strong>across all your meetings</strong>.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Chat with Nyota in the app, from Slack or MS Teams.
              </p>
              
              {/* Chat platform icons */}
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">MS</span>
                </div>
                <div className="w-10 h-10 bg-purple-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">S</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 h-80 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <Bot className="w-20 h-20 mx-auto mb-4" />
                <p>AI Chat Interface</p>
              </div>
            </div>
          </div>
        </div>

        {/* Original Integration logos section */}
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-8 uppercase tracking-wide">INTEGRATIONS</p>
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
            <div className="w-10 h-10 bg-blue-500 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">SF</span>
            </div>
            <div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">HS</span>
            </div>
            <div className="w-10 h-10 bg-green-500 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">MF</span>
            </div>
            <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">MS</span>
            </div>
            <div className="w-10 h-10 bg-red-500 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">A</span>
            </div>
            <div className="w-10 h-10 bg-pink-500 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">C</span>
            </div>
            <div className="w-10 h-10 bg-yellow-500 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">M</span>
            </div>
            <div className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">N</span>
            </div>
            <div className="w-10 h-10 bg-indigo-500 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">J</span>
            </div>
            <div className="w-10 h-10 bg-gray-900 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">N</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
