
import React from 'react';
import { Button } from '@/components/ui/button';

const GetStartedSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-blue-600 font-medium mb-4 uppercase tracking-wide text-sm">GET STARTED</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Get started for free
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Ready to try out Nyota on your first meeting?
        </p>

        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg font-medium mb-4">
          Try Nyota free trial
        </Button>
        
        <p className="text-sm text-gray-500">Start a 7-day free trial</p>
      </div>
    </section>
  );
};

export default GetStartedSection;
