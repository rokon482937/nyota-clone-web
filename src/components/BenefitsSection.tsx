
import React from 'react';
import { Check } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Save time and increase productivity",
      description: "Automate time-consuming tasks like note-taking and follow-up emails with Nyota so you can stay focused on what really matters in your meetings. With more time and less stress, you'll be able to work smarter, not harder."
    },
    {
      title: "Show up prepared and focused", 
      description: "Nyota prepares you for every meeting in seconds, capturing all the information you need in a clear and concise view. This means you can show up well-informed and ready to listen."
    },
    {
      title: "Have more visibility and insights",
      description: "Understand what's working and what's not, ultimately giving you more visibility across your conversations and helping you make better decisions. More than just a note-taker, Nyota surfaces insights and patterns that keep you ahead of the curve."
    },
    {
      title: "Enhance communication and collaboration",
      description: "Misunderstandings and miscommunications can derail even the best meetings. Nyota helps ensure everyone is on the same page, with real-time updates and clear action items. You'll be able to collaborate more effectively and get more done together."
    },
    {
      title: "Understand things on a deeper level",
      description: "Gain a better understanding of your meetings, your team, and your business as a whole, ultimately leading to more informed decisions. Quickly identify trends and opportunities, so you can make strategic decisions that drive growth and success."
    },
    {
      title: "Balance execution and strategy",
      description: "Nyota helps you strike the perfect balance between execution and strategy, so you can achieve your goals while staying focused on the big picture. By making better decisions that are both practical and strategic, you'll be able to drive your business forward."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-500 font-medium mb-4 uppercase tracking-wide text-sm">BENEFITS OF NYOTA</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How will Nyota boost your productivity?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nyota was created to help you achieve more through guided and intentional planning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
