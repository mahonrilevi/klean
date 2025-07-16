import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-gray-100 font-inter py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url('/image1.png')` }}
      ></div>
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-12 text-gray-700">
      
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-6">About</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-blue-600 transition duration-200">Prices</a></li>
            <li><a href="#" className="hover:text-blue-600 transition duration-200">About</a></li>
            <li><a href="#" className="hover:text-blue-600 transition duration-200">Services</a></li>
            <li><a href="#" className="hover:text-blue-600 transition duration-200">Career</a></li>
          </ul>
        </div>
        <div> 
          <h3 className="text-lg font-bold text-gray-800 mb-6">Resources</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-blue-600 transition duration-200">Terms</a></li>
            <li><a href="#" className="hover:text-blue-600 transition duration-200">Help</a></li>
            <li><a href="#" className="hover:text-blue-600 transition duration-200">Privacy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-6">Team</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-blue-600 transition duration-200">Developer</a></li>
            <li><a href="#" className="hover:text-blue-600 transition duration-200">Designer</a></li>
          </ul>
        </div>
        <div> 
          <h3 className="text-lg font-bold text-gray-800 mb-6">Blog</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-blue-600 transition duration-200">CEO</a></li>
            <li><a href="#" className="hover:text-blue-600 transition duration-200">Lifestyle</a></li>
            <li><a href="#" className="hover:text-blue-600 transition duration-200">Article</a></li>
            <li><a href="#" className="hover:text-blue-600 transition duration-200">Tech</a></li>
          </ul>
        </div>
        <div className="col-span-2 lg:col-span-4">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Follow Us</h3>
          <div className="flex space-x-4 mb-8">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition duration-200">
              <i className="fab fa-facebook-f"></i> 
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-400 text-white hover:bg-blue-500 transition duration-200">
              <i className="fab fa-twitter"></i> 
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-white hover:bg-blue-800 transition duration-200">
              <i className="fab fa-linkedin-in"></i> 
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-600 text-white hover:bg-purple-700 transition duration-200">
              <i className="fab fa-discord"></i> 
            </a>
          </div>

          <h3 className="text-lg font-bold text-gray-800 mb-4">Subscribe to our newsletter</h3>
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              className="w-full py-3 pl-4 pr-12 rounded-full border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-700 transition duration-200">
              <i className="fas fa-arrow-right"></i> 
            </button>
          </div>
        </div>
      </div>
      <hr className="border-gray-300 my-12 relative z-10" />
      <div className="text-center text-gray-500 text-sm relative z-10">
        <p>reservo mi codigo © BAES, 2025</p>
        <p className="mt-2">Made with <span className="text-red-500">!</span> </p>
      </div>
      <script src="https://kit.fontawesome.com/a076d05399.js" crossOrigin="anonymous"></script>
    </footer>
  );
};

export default Footer;