
import React from 'react';
import { Shield, Users, Brain, FileText, Zap, MessageSquare } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Sales Teams',
      color: 'bg-blue-500',
      items: [
        'Capture customer requirements and feedback automatically',
        'Keep your CRM up to date with meeting summaries'
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Sales Engineering',
      color: 'bg-green-500',
      items: [
        'Document technical requirements accurately',
        'Share solution designs with implementation teams'
      ]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Project Management',
      color: 'bg-orange-500',
      items: [
        'Convert discussions into actionable tickets',
        'Keep stakeholders aligned with automated updates'
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Recruiting',
      color: 'bg-pink-500',
      items: [
        'Document candidate interviews consistently',
        'Share feedback with hiring managers efficiently'
      ]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Engineering',
      color: 'bg-purple-500',
      items: [
        'Document technical decisions and architecture',
        'Track action items from planning meetings'
      ]
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Marketing',
      color: 'bg-red-500',
      items: [
        'Capture customer insights and testimonials',
        'Document campaign planning and reviews'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium mb-4 uppercase tracking-wide">TEAMS USING NYOTA</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by teams across functions
          </h2>
          <p className="text-xl text-gray-600">
            See how different teams use Nyota to improve their meeting outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className={`${feature.color} w-16 h-16 rounded-lg flex items-center justify-center text-white mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <ul className="space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
