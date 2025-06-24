
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Rocket, Calendar, Users, Zap, ArrowRight, Star } from 'lucide-react';

const GetStartedSection = () => {
  const steps = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Sign up & Connect",
      description: "Create your account and connect your calendar in under 2 minutes"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Join Your First Meeting",
      description: "Nyota automatically joins and starts taking intelligent notes"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Get Instant Insights",
      description: "Receive structured summaries and action items immediately after"
    }
  ];

  const features = [
    "7-day free trial",
    "No credit card required",
    "Setup in under 5 minutes",
    "Cancel anytime"
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-blue-600 font-medium mb-3 sm:mb-4 uppercase tracking-wide text-sm">GET STARTED</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Start transforming your meetings today
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of teams who have already revolutionized their meeting workflows with Nyota
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-blue-600">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              
              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-blue-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ready to get started?
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Start your free trial and experience the power of AI-driven meeting intelligence
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg font-medium">
                Start Free Trial
              </Button>
              <Button variant="outline" className="px-8 py-4 text-lg rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium">
                Schedule Demo
              </Button>
            </div>

            {/* Features list */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-gray-600">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-green-500 fill-current" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-gray-500 text-sm mb-6">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 opacity-60">
            {['Microsoft', 'Google', 'Slack', 'Zoom', 'Salesforce'].map((company, index) => (
              <div key={index} className="text-gray-400 font-semibold text-lg">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
