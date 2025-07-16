import React, { useState } from 'react';

const Navbar = ({ setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavLinkClick = (page) => {
    setCurrentPage(page);
    setIsOpen(false); 
  };

  return (
    <nav className="relative bg-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex-shrink-0"> 
          <a href="#" onClick={() => handleNavLinkClick('/')}>
            <img
              src="./logo.png" 
              alt="Your Company Logo"
              className="h-20 w-auto"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/120x40/E0BBE4/FFFFFF?text=Logo"; }}
            />
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 01-1.414 1.414L12 13.414l-4.864 4.864a1 1 0 01-1.414-1.414L10.586 12 5.722 7.136a1 1 0 011.414-1.414L12 10.586l4.864-4.864a1 1 0 011.414 1.414L13.414 12l4.864 4.864z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2z"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden md:flex space-x-8">
          <a
            href="#"
            onClick={() => handleNavLinkClick('/')}
            className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out font-semibold"
          >
            Home
          </a>
          <a
            href="#"
            onClick={() => handleNavLinkClick('/services')}
            className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out font-semibold"
          >
            Services
          </a>
          <a
            href="#"
            onClick={() => handleNavLinkClick('/details')}
            className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out font-semibold"
          >
            Details
          </a>
          <a
            href="#"
            onClick={() => handleNavLinkClick('/features')}
            className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out font-semibold"
          >
            Features
          </a>
          <a
            href="#"
            onClick={() => handleNavLinkClick('/projects')}
            className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out font-semibold"
          >
            Projects
          </a>
          <a
            href="#"
            onClick={() => handleNavLinkClick('/team')}
            className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out font-semibold"
          >
            Team
          </a>
          <a
            href="#"
            onClick={() => handleNavLinkClick('/contact')}
            className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out font-semibold"
          >
            Contact
          </a>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            onClick={() => handleNavLinkClick('/')}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
          >
            Home
          </a>
          <a
            href="#"
            onClick={() => handleNavLinkClick('/services')}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
          >
            Services
          </a>
          <a
            href="#"
            onClick={() => handleNavLinkClick('/details')}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
          >
            Details
          </a>
          <a
            href="#"
            onClick={() => handleNavLinkClick('/features')}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
          >
            Features
          </a>
          <a
            href="#"
            onClick={() => handleNavLinkClick('/projects')}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
          >
            Projects
          </a>
          <a
            href="#"
            onClick={() => handleNavLinkClick('/team')}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
          >
            Team
          </a>
          <a
            href="#"
            onClick={() => handleNavLinkClick('/contact')}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;