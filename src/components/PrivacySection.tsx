
import React from 'react';
import { Shield } from 'lucide-react';

const PrivacySection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Shield className="w-8 h-8 text-white" />
        </div>
        
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Privacy by design</h2>
        
        <p className="text-base lg:text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
          We have designed Nyota purposefully to foster trust during confidential conversations. Built-in 
          privacy controls for all meeting participants. <strong>You own your data</strong>, you decide what gets stored 
          and how it's accessed and processed. <strong>We do not store voice recordings</strong> and provide tools to 
          delete and redact transcripts. All data is encrypted at rest.
        </p>

        <div className="inline-flex items-center space-x-3 bg-blue-900 px-4 py-2 rounded-lg">
          <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">EU</span>
          </div>
          <span className="font-bold text-sm">GDPR COMPLIANT</span>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
