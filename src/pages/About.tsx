import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Magnetic } from '../components/Navigation';

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen bg-black text-slate-300 font-sans pt-32 pb-20 px-4 md:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-[10vw] font-black tracking-tighter leading-[0.85] text-white mix-blend-difference mb-20"
        >
          THE <span className="font-serif italic text-stroke-2">MIND</span><br/>BEHIND THE CODE.
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-3xl font-medium leading-relaxed"
          >
            <p className="mb-8">
              I am a creative engineer obsessed with the intersection of <span className="text-white">design</span> and <span className="text-white">technology</span>.
            </p>
            <p className="text-slate-500">
              For the past 5 years, I've been building digital experiences that don't just function, but feel alive. I believe that the best software is indistinguishable from magic.
            </p>
          </motion.div>

          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              <h3 className="text-sm font-mono tracking-widest uppercase text-white/50 mb-6 border-b border-white/10 pb-4">Capabilities</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center justify-between hover:text-white transition-colors hover-trigger" data-cursor-text="REACT">
                  <span>Frontend Architecture</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </li>
                <li className="flex items-center justify-between hover:text-white transition-colors hover-trigger" data-cursor-text="WEBGL">
                  <span>Creative Coding (WebGL)</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </li>
                <li className="flex items-center justify-between hover:text-white transition-colors hover-trigger" data-cursor-text="UI/UX">
                  <span>Interaction Design</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </li>
                <li className="flex items-center justify-between hover:text-white transition-colors hover-trigger" data-cursor-text="RUST">
                  <span>Systems Engineering</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              <h3 className="text-sm font-mono tracking-widest uppercase text-white/50 mb-6 border-b border-white/10 pb-4">Experience</h3>
              <div className="space-y-8">
                <div className="hover-trigger" data-cursor-text="CURRENT">
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-white font-bold text-xl">Tech Innovators Inc.</h4>
                    <span className="text-xs font-mono text-cyan-400">2023 - Present</span>
                  </div>
                  <p className="text-slate-500">Senior Frontend Engineer</p>
                </div>
                <div className="hover-trigger" data-cursor-text="PAST">
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-white font-bold text-xl">Creative Agency</h4>
                    <span className="text-xs font-mono text-slate-500">2021 - 2023</span>
                  </div>
                  <p className="text-slate-500">Frontend Developer</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
