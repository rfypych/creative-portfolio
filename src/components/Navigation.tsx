import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { useRef, useState } from 'react';

export function Magnetic({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const boundingRect = ref.current?.getBoundingClientRect();
    if (boundingRect) {
      const { width, height, top, left } = boundingRect;
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
    }
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Navigation() {
  const location = useLocation();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-fit transition-all duration-500 ${isScrolled ? 'top-4' : 'top-8'}`}
    >
      <div className={`flex items-center justify-between gap-8 px-6 rounded-full border transition-all duration-500 ${isScrolled ? 'bg-[#030712]/80 backdrop-blur-xl border-white/20 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] py-4' : 'bg-black/20 backdrop-blur-md border-white/10 py-3'}`}>
        <Link to="/" className="flex items-center gap-2 hover-trigger" data-cursor-text="HOME">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-sm font-bold text-white tracking-widest uppercase">System.OS</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase">
          <Magnetic>
            <Link to="/work" className={`transition-colors ${location.pathname === '/work' ? 'text-white' : 'text-white/70 hover:text-white'}`} data-cursor-text="WORK">Archive</Link>
          </Magnetic>
          <Magnetic>
            <Link to="/about" className={`transition-colors ${location.pathname === '/about' ? 'text-white' : 'text-white/70 hover:text-white'}`} data-cursor-text="ABOUT">About</Link>
          </Magnetic>
        </div>
        <Magnetic>
          <a href="mailto:hello@dev.os" className="text-xs font-mono tracking-widest uppercase text-white hover:text-cyan-400 transition-colors" data-cursor-text="MAIL">
            [ Initiate ]
          </a>
        </Magnetic>
      </div>
    </motion.nav>
  );
}
