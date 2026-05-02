import { motion } from 'motion/react';

import AsciiTorusKnot from '../components/AsciiTorusKnot';

export default function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-stone-950 pt-28 sm:pt-32 md:pt-44 px-6 md:px-20 pb-24 md:pb-40 overflow-x-hidden relative"
    >
      <div className="max-w-screen-2xl mx-auto w-full relative">
        <header className="mb-12 md:mb-32 border-b border-stone-900 pb-6 md:pb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8 overflow-hidden">
          <div className="space-y-3 md:space-y-6 text-left max-w-full">
            <div className="flex items-center gap-3 md:gap-4">
               <div className="w-6 md:w-10 h-[1px] bg-stone-800" />
               <span className="font-mono text-[7px] md:text-[9px] tracking-[0.2em] md:tracking-[0.5em] text-stone-600 uppercase italic">Communication Relay // Established 2026</span>
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-[8vw] lg:text-[10vw] font-serif italic leading-[0.8] tracking-tighter hover:animate-glitch transition-all cursor-default text-stone-200">Liaison.</h1>
          </div>
          <div className="text-left md:text-right max-w-xs space-y-2 md:space-y-4 shrink-0">
             <p className="text-stone-500 font-mono text-[8px] md:text-[10px] tracking-widest uppercase font-bold">Signal Status: Optimal</p>
             <p className="text-[11px] md:text-sm text-stone-400 font-light leading-relaxed italic">
               "Available for professional collaboration, security audits, and coordinated vulnerability disclosure."
             </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 bg-stone-900 border border-stone-800 gap-px overflow-hidden">
          {/* Left Column: Channels & Core Visual */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-stone-900 bg-stone-900">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-px bg-stone-900">
              <a 
                href="mailto:zikri.wmes@gmail.com" 
                className="bg-stone-950 p-4 sm:p-8 md:p-12 group hover:bg-stone-900/40 transition-all duration-500 flex flex-col justify-between aspect-[4/3] sm:aspect-square lg:aspect-auto"
              >
                <div className="space-y-3 md:space-y-4">
                  <span className="text-[8px] md:text-[9px] font-mono text-stone-700 uppercase tracking-widest group-hover:text-stone-500 transition-colors">Channel_01</span>
                  <h3 className="text-base sm:text-xl md:text-3xl font-serif italic transition-colors group-hover:text-stone-100 text-stone-300">Official Email</h3>
                </div>
                <div className="h-[2px] w-8 bg-stone-800 group-hover:w-full group-hover:bg-stone-700 transition-all duration-700 mt-auto" />
              </a>
              
              <a 
                href="https://t.me/WMES_COMMUNITY" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-stone-950 p-4 sm:p-8 md:p-12 group hover:bg-stone-900/40 transition-all duration-500 flex flex-col justify-between aspect-[4/3] sm:aspect-square lg:aspect-auto"
              >
                <div className="space-y-3 md:space-y-4">
                  <span className="text-[8px] md:text-[9px] font-mono text-stone-700 uppercase tracking-widest group-hover:text-stone-500 transition-colors">Channel_02</span>
                  <h3 className="text-base sm:text-xl md:text-3xl font-serif italic transition-colors group-hover:text-stone-100 text-stone-300">Telegram Hub</h3>
                </div>
                <div className="h-[2px] w-8 bg-stone-800 group-hover:w-full group-hover:bg-stone-700 transition-all duration-700 mt-auto" />
              </a>
            </div>

            <div className="bg-stone-950 p-8 sm:p-12 flex flex-col items-center justify-center min-h-[350px] sm:min-h-[450px] lg:min-h-[600px] relative overflow-hidden group border-t border-stone-900">
               {/* ASCII Rotating Torus Knot */}
               <div className="relative z-10 transition-transform duration-1000 group-hover:scale-110">
                  <AsciiTorusKnot />
               </div>

               <div className="mt-8 md:mt-12 text-center space-y-3 md:space-y-4 relative z-10">
                  <span className="font-mono text-[7px] md:text-[8px] text-stone-700 uppercase tracking-widest">Target Node ID</span>
                  <p className="font-mono text-[8px] sm:text-[11px] text-stone-500 tracking-[0.2em] truncate max-w-[200px] sm:max-w-none">0x82A1_WMES_LIAISON</p>
               </div>

               {/* ASCII Watermark Accent */}
               <pre className="absolute bottom-6 left-6 text-[4px] sm:text-[5px] md:text-[6px] font-mono text-stone-900 leading-none select-none pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-700">
{`   _____
  /     \\
 |  WMES |
  \\_____/ `}
               </pre>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col divide-y divide-stone-900 bg-stone-900 overflow-hidden">
            <div className="flex-1 p-8 md:p-12 bg-stone-950 relative overflow-hidden group min-h-[250px] md:min-h-0">
              <div className="absolute top-0 right-0 p-6 md:p-8 opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none">
                 <div className="w-20 h-20 md:w-32 md:h-32 border border-stone-700 rounded-full flex items-center justify-center animate-spin-slow">
                   <div className="w-12 h-12 md:w-20 md:h-20 border border-dashed border-stone-800 rounded-full" />
                 </div>
              </div>

              <div className="space-y-6 md:space-y-8 relative z-10">
                <span className="text-[8px] md:text-[9px] font-mono text-stone-500 uppercase tracking-[0.3em] md:tracking-[0.5em]">Transmission Guide</span>
                <p className="text-stone-400 font-light leading-relaxed md:leading-loose text-[12px] sm:text-[13px] md:text-sm italic">
                  When reaching out, please include a clear subject line indicating the nature of your inquiry. For vulnerability disclosures, we recommend utilizing encrypted channels or secure aliases. Response latency currently averages 48 hours.
                </p>
              </div>
            </div>

            <div className="p-8 md:p-12 space-y-8 bg-stone-950">
              <div className="grid grid-cols-2 gap-px bg-stone-900 border border-stone-900 overflow-hidden">
                 <div className="p-3 sm:p-4 bg-stone-950 space-y-1 sm:space-y-2">
                    <span className="text-[7px] font-mono text-stone-700 uppercase tracking-widest">Availability</span>
                    <p className="text-stone-300 font-serif italic text-sm sm:text-lg line-clamp-1">Active</p>
                 </div>
                 <div className="p-3 sm:p-4 bg-stone-950 space-y-1 sm:space-y-2">
                    <span className="text-[7px] font-mono text-stone-700 uppercase tracking-widest">Region</span>
                    <p className="text-stone-300 font-serif italic text-sm sm:text-lg line-clamp-1">Asia/SE</p>
                 </div>
              </div>

              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-stone-100" />
                  <span className="text-[9px] md:text-[10px] font-mono text-stone-300 uppercase tracking-widest leading-none">Security Active</span>
                </div>
                <p className="text-[8px] md:text-[9px] font-mono text-stone-700 uppercase tracking-[0.2em] md:tracking-[0.3em] max-w-full leading-relaxed">
                  All communications are strictly recorded for integrity & audit purposes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
