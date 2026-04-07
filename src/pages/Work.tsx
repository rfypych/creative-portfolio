import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const projects = [
  { 
    title: "Linear Clone", 
    category: "Web Application",
    year: "2024",
    desc: "A high-performance issue tracker built with React, Tailwind, and Framer Motion. Featuring a custom command palette and keyboard-first navigation.",
    color: "from-indigo-500/20 to-purple-500/20",
    accent: "bg-indigo-500",
    tags: ["React", "TypeScript", "Zustand", "Framer Motion"]
  },
  { 
    title: "Vercel Dashboard", 
    category: "Interface Design",
    year: "2023",
    desc: "A conceptual redesign of a deployment dashboard. Focuses on data visualization, real-time logs, and a sleek dark mode aesthetic.",
    color: "from-cyan-500/20 to-blue-500/20",
    accent: "bg-cyan-500",
    tags: ["Next.js", "Tailwind CSS", "Recharts", "SWR"]
  },
  { 
    title: "Stripe Checkout", 
    category: "E-Commerce",
    year: "2023",
    desc: "A pixel-perfect recreation of Stripe's checkout flow. Implements complex micro-interactions, layout animations, and accessible form controls.",
    color: "from-emerald-500/20 to-teal-500/20",
    accent: "bg-emerald-500",
    tags: ["React", "Stripe Elements", "Radix UI"]
  },
  { 
    title: "Ethereal OS", 
    category: "Web Desktop",
    year: "2022",
    desc: "An experimental web-based operating system interface. Features window management, custom file system, and a suite of built-in apps.",
    color: "from-zinc-500/20 to-slate-500/20",
    accent: "bg-zinc-500",
    tags: ["Vue.js", "WebRTC", "IndexedDB", "Canvas API"]
  }
];

export default function Work() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen bg-black text-slate-300 font-sans pt-48 pb-32 px-4 md:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-[10vw] font-black tracking-tighter leading-[0.85] text-white mb-24"
        >
          SELECTED <span className="font-serif italic text-stroke-2">ARCHIVE</span>
        </motion.h1>

        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.5, duration: 0.8 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative p-8 md:p-12 rounded-[2.5rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-12 hover-trigger overflow-hidden"
              data-cursor-text="VIEW"
            >
              {/* Hover Background Reveal */}
              <div 
                className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
              />
              <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay pointer-events-none" />

              <div className="relative z-10 flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-mono text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">{project.year}</span>
                  <div className={`w-2 h-2 rounded-full ${project.accent} shadow-[0_0_10px_currentColor]`} />
                  <span className="text-xs font-mono text-white/70 uppercase tracking-widest">{project.category}</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight group-hover:translate-x-4 transition-transform duration-500 mb-8">
                  {project.title}
                </h2>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-slate-400 border border-white/10 px-4 py-1.5 rounded-full bg-black/20 backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 md:w-1/3 flex flex-col items-start md:items-end gap-8">
                <p className="text-base text-slate-400 opacity-70 group-hover:opacity-100 transition-opacity duration-500 md:text-right leading-relaxed">
                  {project.desc}
                </p>
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 shrink-0 group-hover:scale-110 bg-black/20 backdrop-blur-sm">
                  <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
