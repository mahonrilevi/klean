import React from 'react';

const Projects = () => {

  const imageSources = {
    img1: '/p1.png', 
    img2: '/p2.png', 
    img3: '/p3.png', 
    img4: '/p4.png', 
    img5: '/p5.png',
    img6: '/p6.png', 
  };

  const commonCardStyles = "bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl backdrop-filter backdrop-blur-lg bg-opacity-80 border border-gray-200";
  const commonImageStyles = "w-full h-full object-cover"; 
  const placeholderOnError = (e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/E0BBE4/FFFFFF?text=Project"; };

  return (
    <div className="relative min-h-screen bg-gray-50 font-inter py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-96 h-96 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-100 rounded-full opacity-25 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A project is a single or team activity, combining research and design with best effort. Here are some of our team's projects.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 auto-rows-[180px] grid-flow-row-dense"> 
          <div className={`${commonCardStyles}`}>
            <img src={imageSources.img1} alt="Project 1" className={commonImageStyles} onError={placeholderOnError} />
          </div>
          <div className={`${commonCardStyles} row-span-2`}>
            <img src={imageSources.img3} alt="Project 2" className={commonImageStyles} onError={placeholderOnError} />
          </div>
          <div className={`${commonCardStyles}`}>
            <img src={imageSources.img5} alt="Project 3" className={commonImageStyles} onError={placeholderOnError} />
          </div>

          <div className={`${commonCardStyles} row-span-2`}> 
            <img src={imageSources.img2} alt="Project 4" className={commonImageStyles} onError={placeholderOnError} />
          </div>

          <div className={`${commonCardStyles}`}> 
            <img src={imageSources.img4} alt="Project 5" className={commonImageStyles} onError={placeholderOnError} />
          </div>

          <div className={`${commonCardStyles} row-span-2`}> 
            <img src={imageSources.img6} alt="Project 6" className={commonImageStyles} onError={placeholderOnError} />
          </div>
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;