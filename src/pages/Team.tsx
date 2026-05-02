import { motion } from 'motion/react';
import AsciiSphere from '../components/AsciiSphere';

const personnel = [
  { id: "01", name: "./Mr-Rubic", role: "Founder", quote: "Seeing the unseen. Data is the definitive shadow of reality." },
  { id: "02", name: "ZenithxNecxus", role: "Founder 2", quote: "Learning, protecting, and disseminating digital security knowledge." },
  { id: "03", name: "0xrphy", role: "Admin", quote: "The integrity of your system depends on the quality of your logic. Accept the breach without arrogance, and let go of the vulnerability without indifference." },
  { id: "04", name: "./Mr-AliExploit", role: "Admin", quote: "Maintaining digital integrity through expertise and unwavering responsibility." },
  { id: "05", name: "Aryx7177.html", role: "Admin", quote: "Applying technical depth to fortify structures, not to exploit them." },
  { id: "06", name: "Poloss", role: "Admin", quote: "Exposing flaws is not an act of destruction, but a necessity for enlightenment." },
  { id: "07", name: "./Mr-Shadownex", role: "Admin", quote: "Penetration testing is the art of discovery. We reveal to protect." },
  { id: "08", name: "Lizarus", role: "Admin", quote: "We enter without permission, exit without a trace—leaving only the lesson of resilience." },
  { id: "09", name: "./Mr-Shahed", role: "Admin", quote: "A reminder that in a connected world, vigilance is the only constant." },
];

export default function Team() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-stone-950 pt-32 px-6 md:px-20 pb-40"
    >
      <div className="max-w-screen-2xl mx-auto">
        <header className="mb-16 md:mb-32 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-stone-900 pb-12 md:pb-20 gap-8 relative group overflow-hidden">
          <div className="space-y-3 md:space-y-6 relative z-10">
            <span className="font-mono text-[8px] md:text-[9px] tracking-[0.2em] md:tracking-[0.5em] text-stone-600 uppercase italic">Personnel Registry // Level 4 Auth Required</span>
            <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-[10vw] font-serif italic tracking-tighter leading-none text-stone-200">Personnel.</h2>
          </div>
          
          {/* Background Visualbackdrop */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 group-hover:opacity-30 transition-all duration-1000 pointer-events-none scale-[2.5] sm:scale-125 md:scale-150 flex items-center justify-center w-full overflow-hidden">
            <AsciiSphere />
          </div>

          <div className="text-left md:text-right space-y-1 md:space-y-2 relative z-10">
             <span className="font-mono text-[8px] text-stone-700 uppercase tracking-widest">Active nodes in matrix</span>
             <p className="text-xl md:text-3xl font-serif italic text-stone-500">The Collective.</p>
          </div>
        </header>

        <div className="grid grid-cols-2 lg:grid-cols-3 bg-stone-900 border border-stone-800 gap-px overflow-hidden">
          {personnel.map((member, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-5%" }}
              className="group bg-stone-950 p-4 sm:p-6 md:p-12 space-y-4 sm:space-y-6 md:space-y-10 hover:bg-stone-900/10 transition-all duration-700 flex flex-col"
            >
              <div className="aspect-[4/3] sm:aspect-square bg-stone-900/20 border border-stone-900/60 relative overflow-hidden group-hover:border-stone-700 transition-colors duration-500 rounded-sm">
                 {/* Technical watermark */}
                 <div className="absolute top-3 right-3 sm:top-4 sm:right-4 font-mono text-[6px] sm:text-[7px] text-stone-800 uppercase tracking-widest z-20 group-hover:text-stone-600 transition-colors">
                    REF // {member.id}
                 </div>
                 <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-30 transition-all duration-1000 scale-[1.5] sm:scale-90 group-hover:scale-[1.8] sm:group-hover:scale-110 overflow-hidden pointer-events-none">
                    <AsciiSphere />
                 </div>
                 <div className="absolute bottom-4 left-4 h-1 w-8 bg-stone-900 group-hover:bg-stone-700 transition-colors z-20" />
                 
                 {/* Decorative technical corners */}
                 <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-stone-800" />
                 <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-stone-800" />
              </div>

              <div className="space-y-4 md:space-y-6 text-left flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex flex-col xl:flex-row justify-between items-start xl:items-baseline gap-1 xl:gap-2">
                    <h3 className="text-base sm:text-xl md:text-2xl font-serif italic tracking-tight group-hover:text-stone-300 transition-colors truncate w-full">
                      {member.name}
                    </h3>
                    <span className="font-mono text-[7px] md:text-[8px] text-stone-700 uppercase tracking-widest font-bold shrink-0">{member.role}</span>
                  </div>
                  <div className="h-px w-full bg-stone-900 group-hover:bg-stone-800 transition-colors" />
                  <p className="text-[9px] sm:text-[11px] md:text-sm font-light leading-relaxed text-stone-500 italic text-balanced hover:text-stone-400 transition-colors line-clamp-4">
                    "{member.quote}"
                  </p>
                </div>
                
                <div className="pt-6 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0">
                  <span className="text-[6px] font-mono text-stone-700 uppercase tracking-widest">Protocol Stance: Passive</span>
                  <div className="flex gap-1">
                    {[1, 2].map(dot => (
                      <div key={dot} className="w-1 h-1 bg-stone-800 rounded-full" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
