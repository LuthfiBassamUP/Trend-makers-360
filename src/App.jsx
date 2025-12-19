import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Background from './components/Background';
import KineticRibbon from './components/KineticRibbon';
import HiringPulse from './components/HiringPulse';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { AnimatePresence } from 'framer-motion';

// Lazy loading pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));

// New Service Sub-pages
const LanguageHub = lazy(() => import('./pages/services/LanguageHub'));
const ExamPrep = lazy(() => import('./pages/services/ExamPrep'));
const ResearchSupport = lazy(() => import('./pages/services/ResearchSupport'));

const PageLoader = () => (
  <div style={{
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'var(--color-primary)'
  }}>
    <div className="loader">Loading...</div>
  </div>
);

function App() {
  // Global Mouse Tracking for Flashlight Effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Router>
      <Cursor />
      <Background />
      <KineticRibbon />
      <div className="app-container">
        <Navbar />
        <main>
          <Suspense fallback={<PageLoader />}>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />

                {/* Service Sub-routes */}
                <Route path="/services/language-hub" element={<LanguageHub />} />
                <Route path="/services/exam-prep" element={<ExamPrep />} />
                <Route path="/services/research-support" element={<ResearchSupport />} />

                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </main>
        <Footer />
        <HiringPulse />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
