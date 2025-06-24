
import React from 'react';
import { Shield } from 'lucide-react';

const PrivacySection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-4xl mx-auto px-6 text-center text-white">
        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
          <Shield className="w-10 h-10 text-white" />
        </div>
        
        <h2 className="text-4xl font-bold mb-8">Privacy by design</h2>
        
        <p className="text-xl leading-relaxed mb-8">
          We have designed Nyota purposefully to foster trust during confidential conversations. Built-in 
          privacy controls for all meeting participants. <strong>You own your data</strong>, you decide what gets stored 
          and how it's accessed and processed. <strong>We do not store voice recordings</strong> and provide tools to 
          delete and redact transcripts. All data is encrypted at rest.
        </p>

        <div className="inline-flex items-center space-x-2 bg-blue-900 px-6 py-3 rounded-lg">
          <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">EU</span>
          </div>
          <span className="font-bold">GDPR COMPLIANT</span>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
