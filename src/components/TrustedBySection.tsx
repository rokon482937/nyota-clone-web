
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
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-blue-600 font-medium mb-3 sm:mb-4 uppercase tracking-wide text-sm">OUR USERS</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Trusted by 1000s of teams
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Join <strong>thousands of teams</strong> already using Nyota to automate their meeting workflows
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12 opacity-60">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center space-x-2 text-lg sm:text-xl lg:text-2xl font-bold text-gray-700">
              <span className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center text-sm sm:text-base">
                {company.logo}
              </span>
              <span className="hidden sm:inline">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
