import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // Wait a bit before unmounting
          return 100;
        }
        return p + Math.floor(Math.random() * 15) + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ y: "0%" }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center text-black"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-8 flex justify-between items-end mix-blend-difference text-white">
        <span className="text-sm font-mono tracking-widest uppercase">System.OS</span>
        <span className="text-[15vw] font-black leading-none tracking-tighter">{Math.min(progress, 100)}%</span>
      </div>
      
      {/* Loading Bar */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-black/10">
        <motion.div 
          className="h-full bg-black"
          initial={{ width: "0%" }}
          animate={{ width: `${Math.min(progress, 100)}%` }}
          transition={{ ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}
