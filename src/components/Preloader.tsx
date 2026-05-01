import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const BOOT_MESSAGES = [
  "INITIALIZING SYSTEM CORE...",
  "ESTABLISHING SECURE PROTOCOLS...",
  "LOADING VOLUMES: 0x7721",
  "DECRYPTING ARCHIVE NODES...",
  "VERIFYING INTEGRITY...",
  "ACCESS AUTHORIZED.",
  "W.M.E.S COLLECTIVE v2026.04"
];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    let msgIndex = 0;
    const msgInterval = setInterval(() => {
      if (msgIndex < BOOT_MESSAGES.length) {
        setMessages(prev => [...prev, BOOT_MESSAGES[msgIndex]]);
        msgIndex++;
      }
    }, 120);

    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          clearInterval(msgInterval);
          setTimeout(onComplete, 800);
          return 100;
        }
        return p + Math.floor(Math.random() * 10) + 2;
      });
    }, 80);

    return () => {
      clearInterval(interval);
      clearInterval(msgInterval);
    };
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[99999] bg-stone-950 flex flex-col justify-between p-12 text-stone-100 font-mono"
    >
      <div className="space-y-2">
        <div className="flex items-center gap-4 mb-8">
           <div className="w-2 h-2 rounded-full bg-stone-100 animate-pulse" />
           <span className="text-[10px] tracking-[0.4em] uppercase text-stone-500 font-bold">Secure Transmission</span>
        </div>
        <div className="flex flex-col gap-1 text-[9px] text-stone-400">
          {messages.map((msg, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {`> ${msg}`}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-end w-full">
        <div className="flex flex-col">
          <span className="text-[8px] tracking-[0.5em] text-stone-700 uppercase mb-4">Node Authorization In Progress</span>
          <div className="flex items-baseline gap-2">
            <span className="text-8xl font-serif italic leading-none text-stone-200">
              {Math.min(progress, 100)}
            </span>
            <span className="text-4xl font-serif italic text-stone-500">%</span>
          </div>
        </div>
        
        <div className="text-right">
           <span className="text-[8px] tracking-[0.5em] text-stone-800 uppercase">Est. 2026 / Jakarta</span>
        </div>
      </div>
      
      {/* Subtle Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-stone-900 overflow-hidden">
        <motion.div 
          className="h-full bg-stone-500/50"
          initial={{ width: "0%" }}
          animate={{ width: `${Math.min(progress, 100)}%` }}
          transition={{ ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}
