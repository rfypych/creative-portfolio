import { motion } from 'motion/react';
import AsciiCube from '../components/AsciiCube';

export default function About() {
  const missions = [
    "Expanding digital security awareness across various societal strata.",
    "Cultivating technical expertise and ethical standards in the next generation.",
    "Advancing research and tool development to preemptively identify vulnerabilities.",
    "Fortifying systems and data against unauthorized exploitation.",
    "Fostering a professional community grounded in cybersecurity ethics."
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-stone-950 pt-40 px-6 md:px-20 pb-40"
    >
      <div className="max-w-5xl mx-auto space-y-24 md:space-y-48">
        <section className="space-y-8 md:space-y-16">
          <div className="flex items-center gap-3 md:gap-6 relative z-10">
            <div className="w-10 md:w-16 h-px bg-stone-800" />
            <span className="font-mono text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.5em] text-stone-600 uppercase italic">The System Manifesto / 02</span>
          </div>
          
          <div className="relative border-b border-stone-900 pb-12 md:pb-24 group overflow-hidden">
            <h1 className="text-6xl md:text-[12vw] font-serif italic leading-none tracking-tighter text-stone-200 relative z-10">Archive.</h1>
            
            {/* Background ASCII Animation backdrop */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 group-hover:opacity-30 transition-all duration-1000 pointer-events-none scale-[1.8] sm:scale-110 md:scale-125 flex items-center justify-center w-full overflow-hidden">
               <AsciiCube />
            </div>
          </div>
          
          <div className="grid md:grid-cols-5 gap-10 md:gap-20 pt-6 md:pt-12 items-start">
            <div className="md:col-span-2 space-y-4 md:space-y-12">
              <div className="space-y-4 md:space-y-8">
                <span className="text-[8px] md:text-[9px] font-mono tracking-[0.3em] md:tracking-[0.4em] uppercase text-stone-500 font-medium italic">/ 01 / Vision</span>
                <p className="text-xl sm:text-2xl md:text-4xl font-serif italic text-stone-300 leading-[1.2] tracking-tight">
                  "To remain the silent guardian of the digital threshold. Security is not a privilege, but a fundamental human right."
                </p>
              </div>
              <div className="pt-8 border-t border-stone-900 flex justify-between items-center text-stone-700 font-mono text-[7px] uppercase tracking-widest">
                <span>Core.Foundations</span>
                <span>v1.0.2</span>
              </div>
            </div>
            <div className="md:col-span-3">
              <div className="grid grid-cols-2 bg-stone-900 border border-stone-800 gap-px">
                {missions.map((m, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className={`bg-stone-950 p-4 sm:p-6 md:p-10 group hover:bg-stone-900/10 transition-all duration-500 flex flex-col justify-between ${i === 4 ? 'col-span-2 aspect-auto py-8 md:py-12' : 'aspect-[4/3] sm:aspect-square md:aspect-auto md:min-h-[250px]'}`}
                  >
                    <div className="space-y-4 md:space-y-6">
                      <span className="text-[9px] md:text-[10px] font-mono text-stone-800 font-bold group-hover:text-stone-600 transition-colors">0{i + 1}</span>
                      <p className="text-[10px] sm:text-xs md:text-base font-light text-stone-400 group-hover:text-stone-200 transition-colors leading-snug">
                        {m}
                      </p>
                    </div>
                    <div className="h-px w-6 bg-stone-900 group-hover:w-full group-hover:bg-stone-800 transition-all duration-700 mt-8" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-12 gap-12 md:gap-20 items-start md:items-end border-t border-stone-900 pt-12 md:pt-24 pb-12">
          <div className="lg:col-span-7 space-y-6 md:space-y-12">
            <span className="text-[8px] md:text-[9px] font-mono tracking-[0.3em] md:tracking-[0.4em] uppercase text-stone-600 font-medium italic">/ 03 / The Architect</span>
            <div className="space-y-3 md:space-y-8">
              <h4 className="text-5xl md:text-7xl lg:text-8xl font-serif italic text-stone-300 tracking-tighter">Zikri_</h4>
              <p className="text-stone-400 font-light leading-relaxed text-[14px] md:text-lg max-w-xl italic">
                Visualizing WMES as a professional ecosystem where technical discovery meets ethical standards. Committed to educating and fortifying the digital frontier.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex flex-col gap-8 md:gap-12 text-left items-start lg:pl-20 border-l-0 lg:border-l border-stone-900/50">
             <div className="space-y-1 md:space-y-2">
                <span className="text-[7px] md:text-[8px] font-mono text-stone-700 uppercase tracking-widest">Active Presence Since</span>
                <p className="text-3xl md:text-5xl lg:text-6xl font-serif italic text-stone-500 font-medium">2026.</p>
             </div>
             <div className="space-y-4">
               <p className="text-base md:text-2xl font-serif italic text-stone-400 uppercase leading-tight tracking-tight border-b border-stone-900 pb-4">
                 See the unseen. <br />Break the unbreakable.
               </p>
               <div className="flex gap-2">
                 {[1, 2, 3, 4].map(i => (
                   <div key={i} className="w-1.5 h-1.5 bg-stone-900 rounded-full" />
                 ))}
               </div>
             </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
