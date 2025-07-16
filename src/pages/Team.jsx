import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      image: '/t1.png',
      name: 'John Adams',
      role: 'CEO',
    },
    {
      image: '/t2.png',
      name: 'Carrey Johnson',
      role: 'Senior Developer',
    },
    {
      image: '/t3.png', 
      name: 'Ray Marie',
      role: 'Developer',
    },
    {
      image: '/t4.png', 
      name: 'Austin Min',
      role: 'Designer',
    },
  ];

  return (
    <div className="relative min-h-screen bg-gray-50 font-inter py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-96 h-96 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-100 rounded-full opacity-25 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            People from various origins, cultures, and personalities make up our team. This blend makes it a powerful team
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-4 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl
                         backdrop-filter backdrop-blur-lg bg-opacity-80 border border-gray-200"
              style={{
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(240, 240, 240, 0.7))',
                boxShadow: '8px 8px 15px #d1d9e6, -8px -8px 15px #ffffff',
                borderRadius: '1.5rem', 
              }}
            >
              <div className="w-full h-auto mb-4 overflow-hidden rounded-xl"> 
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-xl" 
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/200x250/E0BBE4/FFFFFF?text=Member"; }}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            View Full Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;