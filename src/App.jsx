import React, { useState } from 'react';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Details from './pages/Details.jsx';
import Features from './pages/Features.jsx';
import Projects from './pages/Projects.jsx';
import Team from './pages/Team.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx'; 

function App() {
  const [currentPage, setCurrentPage] = useState('/');

  
  const renderContent = () => {
    switch (currentPage) {
      case '/':
        return <Home />;
      case '/services':
        return <Services />;
      case '/details':
        return <Details />;
      case '/features':
        return <Features />; 
      case '/projects':
        return <Projects />; 
      case '/team':
        return <Team />;     
      case '/contact':
        return <Contact />;
      default:
        return (
          <div className="min-h-screen flex items-center justify-center bg-gray-100 font-inter">
            <h2 className="text-4xl font-bold text-gray-800">Página No Encontrada</h2>
          </div>
        );
    }
  };

  return (
    <div className="App">
      <Navbar setCurrentPage={setCurrentPage} />
      {renderContent()}
      <Footer />
    </div>
  );
}

export default App;
