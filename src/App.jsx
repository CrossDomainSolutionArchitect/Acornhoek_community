import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AutomotiveMechanic from './pages/AutomotiveMechanical';
import CarpentryCreative from './pages/CarpentryCreative';
import ConstructionDivision from './pages/ConstructionDivision';
import ElectricalEnergy from './pages/ElectricalEnergy';
import WeldingFabrication from './pages/WeldingFabrication';
import DirectoryPage from './pages/DirectoryPage';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffffff' }}>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Core Pages */}
      {currentPage === 'home' && <AboutPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'about' && <AboutPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'directory' && <DirectoryPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'contact' && <ContactPage />}

      {/* Newer Pages */}
      {currentPage === 'automotive' && <AutomotiveMechanic />}
      {currentPage === 'carpentry' && <CarpentryCreative />}
      {currentPage === 'construction' && <ConstructionDivision />}
      {currentPage === 'electrical' && <ElectricalEnergy />}
      {currentPage === 'welding' && <WeldingFabrication />}

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;