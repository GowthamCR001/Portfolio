import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Skill from './pages/Skill';
import Certificate from './pages/Certificate';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import ProjectDetails from './pages/ProjectDetails';
import Support from './pages/Support';

// ScrollToTop component to reset scroll on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    // Re-initialize AOS on route change
    if (window.AOS) window.AOS.refresh();
  }, [pathname]);
  return null;
};

import ScrollTopButton from './components/ScrollTopButton';

const MainContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="wrapper">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
      {!isHomePage && <Footer />}
      <ScrollTopButton />
    </div>
  );
};

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

export default App;
