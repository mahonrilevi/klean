import React from 'react';

const Details = () => {
  return (
    <div className="relative min-h-screen bg-gray-50 font-inter py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="absolute top-1/4 left-0 -translate-x-1/2 w-96 h-96 bg-blue-200 rounded-full opacity-30 blur-3xl hidden md:block"
        style={{ backgroundImage: `url('./d1.png')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
      ></div>
      <div
        className="absolute bottom-1/4 right-0 translate-x-1/2 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl hidden md:block"
        style={{ backgroundImage: `url('./d2.png')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-24 md:mb-32">
          <div
            className="md:w-1/2 mb-12 md:mb-0 flex justify-center p-4"
            style={{
              background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(240, 240, 240, 0.7))',
              boxShadow: '8px 8px 15px #d1d9e6, -8px -8px 15px #ffffff',
              borderRadius: '1.5rem',
              maxWidth: '400px', 
            }}
          >
            <img
              src="./d12.png" 
              alt="Creative team working on UI/UX"
              className="w-full h-auto rounded-xl shadow-lg"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/E0BBE4/FFFFFF?text=Illustration"; }}
            />
          </div>
          <div className="md:w-1/2 md:pl-16 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
              A creative team which <br className="hidden md:inline"/> builds stunning UI/UX
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Today, I'd like to show you some incredible Sign Up screen app UI ideas and concepts that offer a modern user experience. The most stunning, cutting-edge UI/UX.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Klean is a free Bootstrap 5 template for multipurpose landing pages. This design is a perfect choice, carefully curated by <span className="font-semibold text-blue-600">ThemeWagon</span>
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
              Read More
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center justify-between">
          <div
            className="md:w-1/2 mb-12 md:mb-0 flex justify-center p-4"
            style={{
              background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(240, 240, 240, 0.7))',
              boxShadow: '8px 8px 15px #d1d9e6, -8px -8px 15px #ffffff',
              borderRadius: '1.5rem',
              maxWidth: '400px',
            }}
          >
            <img
              src="./d13.png"
              alt="Team discussing cutting edge technology"
              className="w-full h-auto rounded-xl shadow-lg"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/E0BBE4/FFFFFF?text=Illustration"; }}
            />
          </div>
          <div className="md:w-1/2 md:pr-16 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
              Devoted to defining <br className="hidden md:inline"/> the cutting edge
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              "This new creation is cutting-edge technology," says the researcher. "Whose study originates from a business at the forefront of space science."
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Klean is a free Bootstrap 5 template for multipurpose landing pages. This design is a perfect choice, carefully curated by <span className="font-semibold text-blue-600">ThemeWagon</span>
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;