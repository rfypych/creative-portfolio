import { motion, useScroll } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const navItems = [
    { id: '01', name: 'Index', path: '/' },
    { id: '02', name: 'Personnel', path: '/team' },
    { id: '03', name: 'Archive', path: '/about' },
    { id: '04', name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[110] pointer-events-none">
      <motion.div
        animate={{
          backgroundColor: isScrolled ? "rgba(12, 10, 9, 0.7)" : "rgba(12, 10, 9, 0)",
          backdropFilter: isScrolled ? "blur(16px)" : "blur(0px)",
          borderBottomColor: isScrolled ? "rgba(41, 37, 36, 0.5)" : "rgba(41, 37, 36, 0)",
          paddingTop: isScrolled ? "1rem" : "2.5rem",
          paddingBottom: isScrolled ? "1rem" : "2.5rem",
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full px-6 md:px-12 border-b pointer-events-auto"
      >
        <div className="max-w-screen-2xl mx-auto flex flex-row justify-between items-center">
          
          {/* Left: Branding */}
          <Link to="/" className="flex flex-col group transition-opacity hover:opacity-70 shrink-0">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-baseline gap-1 md:gap-2"
            >
              <span className="text-base sm:text-lg md:text-2xl font-serif italic font-medium tracking-tighter text-stone-100">
                W.M.E.S
              </span>
              <span className="text-[5px] md:text-[7px] font-mono text-stone-600 font-bold tracking-widest uppercase">
                / Collective
              </span>
            </motion.div>
          </Link>

          {/* Center: Navigation Links */}
          <nav className="flex items-center gap-3 sm:gap-8 md:gap-12 lg:gap-16">
            {navItems.map((item, i) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={i}
                  to={item.path}
                  className={`flex items-start gap-1 group relative py-1 ${
                    isActive ? 'text-stone-100' : 'text-stone-600 hover:text-stone-300'
                  } transition-colors duration-500`}
                >
                  <span className="text-[5px] md:text-[7px] font-mono mt-0.5 md:mt-1 opacity-40 group-hover:opacity-100 transition-opacity hidden sm:inline">
                    {item.id}
                  </span>
                  <span className="text-[7px] md:text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.3em] font-medium font-sans">
                    {item.name}
                  </span>
                  
                  {/* Active Underline */}
                  {isActive && (
                    <motion.div 
                      layoutId="header-nav-line"
                      className="absolute -bottom-1 left-0 w-full h-[1px] bg-stone-100"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  {/* Hover line */}
                  {!isActive && (
                    <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-stone-800 group-hover:w-full transition-all duration-700" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Technical Metadata (Desktop Only) */}
          <div className="hidden xl:flex flex-col items-end gap-1 opacity-20 pointer-events-none transition-opacity duration-700" style={{ opacity: isScrolled ? 0 : 0.2 }}>
            <span className="text-[7px] font-mono tracking-[0.4em] uppercase">Security_Protocol_4.0</span>
            <span className="text-[7px] font-mono tracking-[0.4em] uppercase text-stone-500">Node_ID: WMES_JAK_01</span>
          </div>
        </div>
        
        {/* Scroll Progress Bar Mini */}
        <motion.div 
          className="absolute bottom-0 left-0 h-[1px] bg-stone-100/20 origin-left"
          style={{ 
            scaleX: scrollYProgress,
            width: '100%',
            display: isScrolled ? 'block' : 'none'
          }}
        />
      </motion.div>
    </header>
  );
}
