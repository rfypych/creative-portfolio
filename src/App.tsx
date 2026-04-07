import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';

import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Preloader from './components/Preloader';

import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  // Prevent scrolling while loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [loading]);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black text-slate-300 font-sans relative">
        <CustomCursor />
        
        <AnimatePresence mode="wait">
          {loading && <Preloader onComplete={() => setLoading(false)} />}
        </AnimatePresence>

        {!loading && (
          <>
            {/* Global Noise Texture */}
            <div className="fixed inset-0 z-50 pointer-events-none bg-noise mix-blend-overlay opacity-40" />
            
            <Navigation />
            <AnimatedRoutes />
          </>
        )}
      </div>
    </Router>
  );
}
