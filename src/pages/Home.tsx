import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import AsciiHelix from '../components/AsciiHelix';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y = useTransform(smoothScroll, [0, 1], [0, -400]);
  const opacity = useTransform(smoothScroll, [0, 0.4], [1, 0]);
  const scale = useTransform(smoothScroll, [0, 0.4], [1, 0.95]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[250vh] relative bg-stone-950"
    >
      <section className="h-screen sticky top-0 flex flex-col justify-center px-6 md:px-20 overflow-hidden z-10">
        <motion.div style={{ y, opacity, scale }} className="max-w-screen-2xl mx-auto w-full">
          <div className="space-y-4 md:space-y-8">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 md:gap-4"
            >
              <div className="w-6 md:w-12 h-[1px] bg-stone-800" />
              <p className="font-mono text-[7px] md:text-[8px] tracking-[0.2em] md:tracking-[0.5em] uppercase text-stone-500">
                Operational Integrity / {new Date().getFullYear()}
              </p>
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[11vw] font-serif italic leading-[0.9] md:leading-[0.8] tracking-tighter max-w-5xl">
              We make <br/>
              <span className="not-italic text-stone-400">everything</span> safe.
            </h1>
            
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row gap-8 md:gap-16 mt-8 md:mt-24 items-start md:items-end"
            >
              <div className="max-w-md space-y-4 md:space-y-6">
                <p className="text-xs sm:text-sm md:text-base text-stone-400 leading-relaxed font-light">
                  "Building a safer digital space through protection, prevention, and education."
                  A collective committed to uncovering the unseen shadows of infrastructure.
                </p>
                <div className="flex flex-wrap items-center gap-4 md:gap-6">
                  <span className="text-[7px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-stone-500 font-mono">Greyhat · Bug Hunter</span>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-stone-700 animate-pulse" />
                    <span className="text-[7px] md:text-[8px] uppercase tracking-widest text-stone-700 font-mono">Signal Active</span>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:flex-1 flex flex-col gap-4">
                 <div className="h-[1px] w-full bg-stone-900 overflow-hidden">
                    <motion.div 
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                      className="w-1/3 h-full bg-stone-600/20"
                    />
                 </div>
                 <span className="font-mono text-[7px] md:text-[8px] text-stone-700 uppercase tracking-[0.3em] md:tracking-[0.4em]">Node Diagnostics / Optimal</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Abstract Background Blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-stone-900/10 rounded-full blur-[150px] pointer-events-none" />
      </section>

      {/* Narrative Section */}
      <section className="relative px-6 md:px-20 py-24 md:py-60 z-20 bg-stone-950">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16 md:gap-32 items-center">
          <div className="space-y-8 md:space-y-16">
            <motion.h2 
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: false, margin: "-10%" }}
              className="text-5xl sm:text-6xl md:text-8xl font-serif italic leading-none hover:animate-glitch cursor-default transition-all"
            >
              The unseen <br /><span className="text-stone-400">shadow.</span>
            </motion.h2>
            <div className="space-y-6 md:space-y-8 max-w-sm">
              <p className="text-stone-400 font-light leading-relaxed text-base md:text-lg">
                Security is not a static state, but a continuous evolution. We navigate the digital expanse to identify flaws before they become catastrophes.
              </p>
              <Link to="/about" className="group flex items-center gap-4 md:gap-6 text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] text-stone-500 hover:text-stone-100 transition-colors">
                <span className="shrink-0">View Manifesto</span>
                <div className="flex-1 h-px bg-stone-900 group-hover:bg-stone-500 transition-colors" />
              </Link>
            </div>
          </div>
          
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="aspect-[5/6] w-full max-w-md mx-auto md:max-w-none border border-stone-900/50 flex items-center justify-center relative overflow-hidden group"
          >
            <div className="relative z-10 transition-transform duration-1000 group-hover:scale-110">
              <AsciiHelix />
            </div>
            
            <div className="absolute top-0 right-0 p-8">
               <span className="font-mono text-[8px] text-stone-800 uppercase tracking-[0.3em] group-hover:text-stone-500 transition-colors">Neural_Helix / H-01</span>
            </div>

            <div className="absolute bottom-8 left-8 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
               <span className="text-[6px] font-mono text-stone-700 uppercase">Coordinate: 0x7721</span>
               <span className="text-[6px] font-mono text-stone-700 uppercase">Status: Rotating</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 md:px-20 py-32 md:py-60 border-t border-stone-900/30 bg-stone-950 relative overflow-hidden">
        {/* Decorative Grid background for this section */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        
        <div className="max-w-screen-2xl mx-auto space-y-16 md:space-y-32 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-12">
            <div className="space-y-3 md:space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-stone-500 rounded-full animate-pulse" />
                <span className="font-mono text-[8px] md:text-[9px] text-stone-500 uppercase tracking-[0.3em] md:tracking-[0.4em]">Core Competencies</span>
              </div>
              <h3 className="text-5xl sm:text-6xl md:text-9xl font-serif italic tracking-tighter leading-none">Operational <br /><span className="text-stone-400">Core.</span></h3>
            </div>
            <p className="text-[10px] sm:text-xs md:text-sm font-light text-stone-500 leading-relaxed max-w-xs md:max-w-sm border-l border-stone-900 pl-4 md:pl-8">
              "Systematic approaches to digital sovereignty. We don't just find paths; we reinforce the foundation."
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-stone-900 border border-stone-900 gap-px">
            {[
              { id: "R-01", title: "Vulnerability Research", desc: "Systematic auditing of hardware and software layers." },
              { id: "V-02", title: "Integrity Verification", desc: "Formal verification of security-critical systems." },
              { id: "E-03", title: "Awareness Education", desc: "Disseminating technical knowledge to fortify the human element." },
              { id: "X-04", title: "Network Audit", desc: "Deep packet inspection and perimeter defense mapping." },
              { id: "S-05", title: "Threat Modeling", desc: "Predictive analysis of attack vectors and architectural hardening." },
              { id: "C-06", title: "Cryptographic Analysis", desc: "Evaluation of encryption standards and implementation entropy." }
            ].map((s, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 1, y: 0 }}
                className="bg-stone-950 p-6 sm:p-8 md:p-12 lg:p-16 space-y-6 md:space-y-12 group hover:bg-stone-900/10 transition-all duration-700 relative overflow-hidden"
              >
                {/* ID Watermark */}
                <span className="absolute top-4 right-4 md:top-8 md:right-8 font-mono text-[7px] md:text-[10px] text-stone-800 uppercase tracking-widest group-hover:text-stone-400 transition-colors">[{s.id}]</span>
                
                <div className="space-y-3 md:space-y-6">
                  <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif italic text-stone-200 leading-tight transition-transform group-hover:-translate-y-1 duration-500">{s.title}</h4>
                  <div className="w-10 h-px bg-stone-800 group-hover:w-full transition-all duration-700 mt-2" />
                  <p className="text-[11px] sm:text-sm md:text-base font-light text-stone-500 leading-relaxed group-hover:text-stone-400 transition-colors">
                    {s.desc}
                  </p>
                </div>
                
                <div className="pt-8 sm:pt-12 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    {[1, 2, 3].map(dot => (
                      <div key={dot} className="w-1 h-1 bg-stone-800 rounded-full group-hover:bg-stone-400 transition-colors" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Meta */}
      <section className="px-6 md:px-20 py-20 border-t border-stone-900/50">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center opacity-30">
          <span className="font-mono text-[7px] uppercase tracking-[0.5em]">WMES Collective / Since 2026</span>
          <span className="font-mono text-[7px] uppercase tracking-[0.5em]">Jakarta Node / Operational</span>
        </div>
      </section>
    </motion.div>
  );
}
