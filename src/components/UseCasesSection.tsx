
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Lightbulb, TrendingUp, FileText, MessageSquare, Clock, CheckCircle } from 'lucide-react';

const UseCasesSection = () => {
  const useCases = [
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Sales & Customer Success",
      description: "Transform customer conversations into revenue opportunities",
      features: [
        "Automatically capture customer requirements and pain points",
        "Generate follow-up emails with key discussion points",
        "Update CRM records with meeting insights",
        "Track customer sentiment and satisfaction"
      ],
      color: "bg-blue-500"
    },
    {
      icon: <Target className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Project Management",
      description: "Keep projects on track with automated documentation",
      features: [
        "Convert discussions into actionable tickets",
        "Track project milestones and blockers",
        "Generate status reports for stakeholders",
        "Maintain project history and decisions"
      ],
      color: "bg-green-500"
    },
    {
      icon: <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Product Development",
      description: "Accelerate innovation with structured feedback capture",
      features: [
        "Document user feedback and feature requests",
        "Track product decisions and rationale",
        "Generate product requirements from discussions",
        "Maintain feature roadmap alignment"
      ],
      color: "bg-purple-500"
    },
    {
      icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Executive Leadership",
      description: "Make data-driven decisions with meeting intelligence",
      features: [
        "Executive briefings from key meetings",
        "Track strategic initiatives progress",
        "Identify organizational blockers",
        "Generate board meeting summaries"
      ],
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-blue-600 font-medium mb-3 sm:mb-4 uppercase tracking-wide text-sm">USE CASES</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Powerful solutions for every team
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how different teams use Nyota to streamline their workflows and achieve better outcomes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`${useCase.color} w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center text-white`}>
                    {useCase.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                      {useCase.title}
                    </CardTitle>
                    <p className="text-sm sm:text-base text-gray-600">{useCase.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3">
                  {useCase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">75%</h3>
            <p className="text-gray-600">Time saved on meeting follow-ups</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">90%</h3>
            <p className="text-gray-600">Reduction in missed action items</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">10x</h3>
            <p className="text-gray-600">Faster meeting summaries</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
