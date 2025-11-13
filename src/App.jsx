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

// Robotics Pages
import AboutRobot from './pages/Robotics/AboutRobot';
// import ProgramsPage from './pages/Robotics/ProgramsPage';
// import WorkshopsPage from './pages/Robotics/WorkshopsPage';
// import CompetitionsPage from './pages/Robotics/CompetitionsPage';
// import ProjectsPage from './pages/Robotics/ProjectsPage';
// import ResourcesPage from './pages/Robotics/ResourcesPage';
// import TeamPage from './pages/Robotics/TeamPage';

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

      {/* Skills Development Pages */}
      {currentPage === 'automotive' && <AutomotiveMechanic />}
      {currentPage === 'carpentry' && <CarpentryCreative />}
      {currentPage === 'construction' && <ConstructionDivision />}
      {currentPage === 'electrical' && <ElectricalEnergy />}
      {currentPage === 'welding' && <WeldingFabrication />}

      {/* Robotics Pages */}
      {currentPage === 'robotics' && <AboutRobot setCurrentPage={setCurrentPage} />}
      {currentPage === 'programs' && <ProgramsPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'workshops' && <WorkshopsPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'competitions' && <CompetitionsPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'projects' && <ProjectsPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'resources' && <ResourcesPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'team' && <TeamPage setCurrentPage={setCurrentPage} />}

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;