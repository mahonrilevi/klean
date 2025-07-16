import React from 'react';

const Services = () => { 
  const services = [
    {
      icon: '/icon1.png',
      title: 'Send Texts Instantly',
      description: 'Financial planning, forecasting and adjusting rapidly with customer demands and budgets.',
    },
    {
      icon: '/icon2.png', 
      title: 'Better Organized',
      description: 'Latest technology and experienced guidance, trained HR specialists to keep updated.',
    },
    {
      icon: '/icon3.png', 
      title: 'Analytical Statistics',
      description: 'Messages, real-time reminders, memos, and many more will keep your team in sync.',
    },
  ];

  return (
    <div className="relative min-h-screen bg-gray-50 font-inter py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="absolute top-1/4 left-0 -translate-x-1/2 w-80 h-80 bg-blue-200 rounded-full opacity-30 blur-3xl hidden md:block"
        style={{ backgroundImage: `url('/illustration1.png')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
      ></div>
      <div
        className="absolute bottom-1/4 right-0 translate-x-1/2 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl hidden md:block"
        style={{ backgroundImage: `url('/illustration1.png')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Service</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer youth with chances for career development in their practice. We also support a wide range of services to ensure client satisfaction
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl
                         backdrop-filter backdrop-blur-lg bg-opacity-80 border border-gray-200"
              style={{
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(240, 240, 240, 0.7))',
                boxShadow: '8px 8px 15px #d1d9e6, -8px -8px 15px #ffffff',
                borderRadius: '1.5rem', 
              }}
            >
              <div className="w-24 h-24 mb-6 flex items-center justify-center">
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="w-full h-full object-contain"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/96x96/E0BBE4/FFFFFF?text=Icon"; }}
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a
                href="#"
                className="text-blue-600 font-medium flex items-center group"
              >
                Learn More
                <svg
                  className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;