
import React from 'react';
import { Users, Zap, FileText, User, Code, Megaphone } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Sales Teams',
      color: 'bg-blue-500',
      items: [
        'Capture customer requirements and feedback automatically',
        'Keep your CRM up to date with meeting summaries'
      ]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Sales Engineering',
      color: 'bg-green-500',
      items: [
        'Document technical requirements accurately',
        'Share solution designs with implementation teams'
      ]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Project Management',
      color: 'bg-orange-500',
      items: [
        'Convert discussions into actionable tickets',
        'Keep stakeholders aligned with automated updates'
      ]
    },
    {
      icon: <User className="w-6 h-6" />,
      title: 'Recruiting',
      color: 'bg-pink-500',
      items: [
        'Document candidate interviews consistently',
        'Share feedback with hiring managers efficiently'
      ]
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Engineering',
      color: 'bg-purple-500',
      items: [
        'Document technical decisions and architecture',
        'Track action items from planning meetings'
      ]
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: 'Marketing',
      color: 'bg-red-500',
      items: [
        'Capture customer insights and testimonials',
        'Document campaign planning and reviews'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium mb-4 uppercase tracking-wide text-sm">TEAMS USING NYOTA</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trusted by teams across functions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how different teams use Nyota to improve their meeting outcomes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`${feature.color} w-10 h-10 rounded-lg flex items-center justify-center text-white`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
              </div>
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
