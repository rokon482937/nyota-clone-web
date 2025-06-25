
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
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-blue-600 font-medium mb-3 uppercase tracking-wide text-sm">OUR USERS</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Trusted by 1000s of teams
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join <strong>thousands of teams</strong> already using Nyota to automate their meeting workflows
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 opacity-70">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center space-x-2 text-lg lg:text-xl font-semibold text-gray-600">
              <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm">
                {company.logo}
              </span>
              <span>{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
