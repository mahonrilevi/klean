import React from 'react';

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-white font-inter py-16 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center">
      <div
        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center opacity-70" // Ajusta la opacidad si es necesario
        style={{ backgroundImage: `url('./image1.png')` }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10 bg-white bg-opacity-80 rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center md:items-stretch gap-12">
        <div
          className="flex-1 p-6 rounded-2xl w-full"
          style={{
            background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(240, 240, 240, 0.7))',
            boxShadow: '8px 8px 15px #d1d9e6, -8px -8px 15px #ffffff',
            borderRadius: '1.5rem',
          }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center lg:text-left">Contact Us</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Write your name</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </span>
                <input
                  type="text"
                  id="name"
                  placeholder="Write your name"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Write your email</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-4 6v4a2 2 0 01-2 2H7a2 2 0 01-2-2v-4m0-4h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h14"></path></svg>
                </span>
                <input
                  type="email"
                  id="email"
                  placeholder="Write your email"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Write your message</label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.232z"></path></svg>
                </span>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start space-y-8 text-gray-700">
          <div className="flex items-center space-x-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
            <div>
              <p className="font-semibold text-lg">Phone</p>
              <p>+880124932334</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg>
            <div>
              <p className="font-semibold text-lg">Email</p>
              <p>something@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657m10.314-10.314L13.414 3.1a1.998 1.998 0 00-2.828 0L6.343 6.343m10.314 10.314L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657m10.314-10.314L13.414 3.1a1.998 1.998 0 00-2.828 0L6.343 6.343m7.928 10.314l-4.243 4.243a1.998 1.998 0 01-2.828 0L3.1 16.657m7.928-10.314l-4.243 4.243a1.998 1.998 0 00-2.828 0L3.1 6.343m7.928 10.314l-4.243 4.243a1.998 1.998 0 01-2.828 0L3.1 16.657m7.928-10.314l-4.243 4.243a1.998 1.998 0 00-2.828 0L3.1 6.343m10.314 10.314a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"></path></svg>
            <div>
              <p className="font-semibold text-lg">Location</p>
              <p>4304 Sporer Street, <br /> St Lawrence, Virginia, <br /> Texas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;