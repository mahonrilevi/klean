import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '/i1.png', 
      title: 'Encrypted Mail',
      description: 'A process of encrypting email communications',
    },
    {
      icon: '/i2.png', 
      title: 'Display Sharing',
      description: 'With other participants, you may share your screen',
    },
    {
      icon: '/i3.png', 
      title: 'Private Notebook',
      description: 'Private Notebook is an application that is protected',
    },
    {
      icon: '/i4.png', 
      title: 'App App Assistance',
      description: 'App Assistant is quickly and effectively ran the system',
    },
    {
      icon: '/i5.png', 
      title: 'Multiple Printing',
      description: 'Our canvas prints are crafted on top-notch canvas.',
    },
    {
      icon: '/i6.png', 
      title: 'Free Sketch',
      description: 'Our canvas prints are crafted on top-notch canvas.',
    },
  ];

  return (
    <div className="relative min-h-screen bg-gray-50 font-inter py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-96 h-96 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-100 rounded-full opacity-25 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide a number of excellent features that will undoubtedly improve the user experience. We also provide a better support system
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 
          {features.map((feature, index) => (
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
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  className="w-full h-full object-contain"ad
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/96x96/E0BBE4/FFFFFF?text=Icon"; }}
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;