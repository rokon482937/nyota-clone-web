
import React from 'react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Company',
      links: ['About us', 'Blog', 'Contact us', 'Get a demo']
    },
    {
      title: 'Features',
      links: ['Meeting notes', 'Meeting planning', 'Meeting insights', 'Custom notes', 'Agenda summarization', 'Integrations', 'Release updates']
    },
    {
      title: 'Solutions',
      links: ['Engineering leaders', 'Project managers', 'Startup founders', 'Agencies & Consulting', 'Freelancers']
    },
    {
      title: 'Resources',
      links: ['FAQ', 'Help', 'Your account', 'Terms & Conditions', 'Privacy Policy', 'Status page']
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                NYOTA
              </span>
            </div>
            <div className="space-y-2 text-sm">
              <p>Nyota AI Ltd</p>
              <p>International House, 10 Beaufort Court</p>
              <p>Admirals Way</p>
              <p>London E14 9XL</p>
              <br />
              <p>Reg no. 13407950</p>
              <p>VAT ID: GB393179953</p>
              <br />
              <p>hello@nyota.ai</p>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>© 2025 Nyota AI Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
