import React from 'react';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 overflow-hidden font-inter">
      <div className="absolute top-0 left-0 w-full h-full">
        <span className="absolute block w-10 h-10 bg-blue-300 rounded-full opacity-30 animate-float-1" style={{ top: '10%', left: '5%' }}></span>
        <span className="absolute block w-6 h-6 bg-purple-300 rounded-full opacity-30 animate-float-2" style={{ top: '20%', right: '15%' }}></span>
        <span className="absolute block w-8 h-8 bg-pink-300 rounded-full opacity-30 animate-float-3" style={{ bottom: '30%', left: '10%' }}></span>
        <span className="absolute block w-12 h-12 bg-yellow-300 rounded-full opacity-30 animate-float-4" style={{ bottom: '15%', right: '5%' }}></span>
        <span className="absolute block w-7 h-7 bg-green-300 rounded-full opacity-30 animate-float-5" style={{ top: '5%', left: '40%' }}></span>
        <svg className="absolute top-1/4 left-1/4 w-24 h-24 text-blue-400 opacity-20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 12h3v8h14v-8h3L12 2zm0 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
        </svg>
        <svg className="absolute bottom-1/4 right-1/4 w-20 h-20 text-purple-400 opacity-20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6 0h-4V4h4v2z"/>
        </svg>
      </div>
      <div
        className="absolute right-0 top-0 h-2/3 md:w-2/3 bg-no-repeat bg-contain bg-center hidden md:block opacity-70" 
        style={{ backgroundImage: `url('/illustration1.png')` }}
      ></div>
      <div className="container mx-auto px-4 py-16 relative z-10 flex flex-col md:flex-row items-stretch justify-between min-h-[calc(100vh-80px)]">
        <div className="text-center md:text-left md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight mb-6">
            Bootstrap 5 theme <br /> crafted by ThemeWagon
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
            ThemeWagon offers an wide array of category-oriented Free and Premium Bootstrap HTML Templates and Themes.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            Check Demo
          </button>
        </div>
      </div>
      <div className="relative z-10 bg-white bg-opacity-80 py-8 mt-8 md:mt-0">
        <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <img src="/google.png" alt="Google Logo" className="h-10 opacity-75 hover:opacity-100 transition-opacity duration-300" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/120x40/E0BBE4/FFFFFF?text=Google"; }} />
          <img src="/netflix.png" alt="Netflix Logo" className="h-10 opacity-75 hover:opacity-100 transition-opacity duration-300" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/120x40/E0BBE4/FFFFFF?text=Netflix"; }} />
          <img src="/microsoft.png" alt="Microsoft Logo" className="h-10 opacity-75 hover:opacity-100 transition-opacity duration-300" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/120x40/E0BBE4/FFFFFF?text=Microsoft"; }} />
          <img src="/mailbuster.png" alt="MailBluster Logo" className="h-10 opacity-75 hover:opacity-100 transition-opacity duration-300" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/120x40/E0BBE4/FFFFFF?text=MailBluster"; }} />
          <img src="/themewagon.png" alt="ThemeWagon Logo" className="h-10 opacity-75 hover:opacity-100 transition-opacity duration-300" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/120x40/E0BBE4/FFFFFF?text=ThemeWagon"; }} />
        </div>
      </div>
    </div>
  );
};

export default Home;