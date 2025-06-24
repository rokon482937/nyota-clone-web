
import React from 'react';

const TrustedBySection = () => {
  const companies = [
    { name: 'News Corp', logo: 'NC' },
    { name: 'Coca-Cola', logo: 'CC' },
    { name: 'Flying Bisons', logo: 'FB' },
    { name: 'Twilio', logo: 'TW' },
    { name: 'Magic', logo: 'MG' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium mb-4 uppercase tracking-wide">OUR USERS</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by 1000s of teams
          </h2>
          <p className="text-xl text-gray-600">
            Join <strong>thousands of teams</strong> already using Nyota to automate their meeting workflows
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center space-x-2 text-2xl font-bold text-gray-700">
              <span>{company.logo}</span>
              <span>{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
