import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Github, Twitter, Terminal, Figma, Cpu, Globe, Code2, Layers, Zap } from 'lucide-react';
import { useRef } from 'react';
import { Magnetic } from '../components/Navigation';

// --- Horizontal Scroll Section ---
function HorizontalScrollProjects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  const projects = [
    { title: "Ethereal OS", type: "Web Desktop", img: "from-zinc-900 to-black", text: "text-stroke-1" },
    { title: "Quantum", type: "Fintech App", img: "from-blue-900 to-black", text: "text-white" },
    { title: "Nexus", type: "AI Interface", img: "from-purple-900 to-black", text: "text-white" },
    { title: "Aura", type: "Generative Art", img: "from-emerald-900 to-black", text: "text-stroke-1" },
  ];

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute top-20 left-8 md:left-20 z-10">
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mix-blend-difference">
            THE <span className="font-serif italic text-stroke-1">ARCHIVE</span>
          </h2>
        </div>
        
        <motion.div style={{ x }} className="flex gap-8 px-8 md:px-20 pt-20">
          {projects.map((project, index) => (
            <div key={index} className="w-[85vw] md:w-[60vw] h-[60vh] shrink-0 relative group hover-trigger" data-cursor-text="VIEW">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.img} rounded-3xl overflow-hidden border border-white/10 transition-transform duration-700 group-hover:scale-[0.98]`}>
                <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:32px_32px]" />
                
                {/* Abstract Visuals inside card */}
                <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="w-64 h-64 border border-white/20 rounded-full animate-[spin_20s_linear_infinite] border-dashed" />
                  <div className="absolute w-48 h-48 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                </div>

                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                  <div>
                    <p className="text-sm font-mono text-white/50 mb-2">{project.type}</p>
                    <h3 className={`text-5xl md:text-7xl font-black uppercase tracking-tighter ${project.text}`}>{project.title}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-500">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  // Text Reveal Animation
  const revealRef = useRef(null);
  const { scrollYProgress: revealProgress } = useScroll({
    target: revealRef,
    offset: ["start 80%", "end 50%"]
  });
  const clipPath = useTransform(revealProgress, [0, 1], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="bg-black text-slate-300 font-sans relative"
    >
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
          {/* Intense Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

          {/* Parallax Grid */}
          <motion.div style={{ y }} className="absolute inset-0 z-0 flex items-center justify-center opacity-30">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />
          </motion.div>

          <div className="relative z-10 w-full px-4 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <h1 className="text-[15vw] md:text-[12vw] font-black tracking-tighter leading-[0.8] text-white mix-blend-difference flex flex-col items-center">
                <span className="block hover-trigger" data-cursor-text="WOW">CREATIVE</span>
                <span className="block font-serif italic font-light text-stroke-2 hover-trigger" data-cursor-text="DEV">DEVELOPER</span>
              </h1>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-12 flex justify-between w-full max-w-7xl px-8 text-xs font-mono text-white/50 uppercase tracking-widest"
            >
              <div>Based in<br/><span className="text-white">The Internet</span></div>
              <div className="text-right">Scroll to<br/><span className="text-white">Explore</span></div>
            </motion.div>
          </div>
        </section>

        {/* Infinite Marquee Section */}
        <section className="py-12 border-y border-white/10 bg-white/[0.02] overflow-hidden flex items-center">
          <div className="flex whitespace-nowrap animate-marquee w-[200%]">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 px-4 text-4xl md:text-6xl font-black tracking-tighter uppercase">
                <span className="text-white">React</span>
                <span className="text-stroke-1">TypeScript</span>
                <span className="text-white">Next.js</span>
                <span className="text-stroke-1">WebGL</span>
                <span className="text-white">Tailwind</span>
                <span className="text-stroke-1">Framer Motion</span>
                <span className="text-white">Three.js</span>
                <span className="text-stroke-1">Node.js</span>
              </div>
            ))}
          </div>
        </section>

        {/* Scroll Reveal Text */}
        <section className="py-40 px-4 md:px-20 max-w-7xl mx-auto flex items-center justify-center min-h-screen">
          <div className="relative text-4xl md:text-7xl font-bold tracking-tight leading-tight" ref={revealRef}>
            {/* Background Text (Faded) */}
            <p className="text-white/10 absolute inset-0">
              I don't just write code. I design <span className="font-serif italic">systems</span>, craft <span className="font-serif italic">illusions</span>, and build digital experiences that feel <span className="text-stroke-1">alive</span>.
            </p>
            {/* Foreground Text (Revealed on scroll) */}
            <motion.p 
              className="text-white relative z-10"
              style={{ clipPath }}
            >
              I don't just write code. I design <span className="font-serif italic">systems</span>, craft <span className="font-serif italic">illusions</span>, and build digital experiences that feel <span className="text-stroke-1">alive</span>.
            </motion.p>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-32 px-4 md:px-20 bg-white/[0.01] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-20">
              <div className="md:w-1/3">
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 uppercase">
                  Core <span className="font-serif italic text-stroke-1">Expertise</span>
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Delivering end-to-end solutions from system architecture to pixel-perfect UI implementation.
                </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { icon: <Code2 className="w-8 h-8" />, title: "Frontend Engineering", desc: "Building scalable applications with React, Next.js, and TypeScript. Obsessed with performance and accessibility." },
                  { icon: <Layers className="w-8 h-8" />, title: "Design Systems", desc: "Translating brand identities into robust, reusable component libraries using Tailwind CSS and Radix UI." },
                  { icon: <Globe className="w-8 h-8" />, title: "Creative Coding", desc: "Crafting immersive 3D experiences and complex animations using WebGL, Three.js, and Framer Motion." },
                  { icon: <Zap className="w-8 h-8" />, title: "Performance Optimization", desc: "Auditing and improving Core Web Vitals, reducing bundle sizes, and optimizing rendering pipelines." }
                ].map((item, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-black border border-white/10 hover:border-cyan-500/50 transition-colors group hover-trigger" data-cursor-text="READ">
                    <div className="text-white/30 group-hover:text-cyan-400 transition-colors mb-6">{item.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Horizontal Scroll Projects */}
        <HorizontalScrollProjects />

        {/* The Lab / Bento Grid */}
        <section id="lab" className="py-40 relative z-10 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-20">
              <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4 uppercase">
                The <span className="font-serif italic text-stroke-1">Lab</span>
              </h2>
              <p className="text-white/50 text-xl font-mono uppercase tracking-widest">Experiments & Open Source</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[600px]">
              {/* Large Cell */}
              <div className="md:col-span-2 md:row-span-2 rounded-3xl bg-white/[0.02] border border-white/10 p-8 relative overflow-hidden group hover-trigger" data-cursor-text="CODE">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Terminal className="w-12 h-12 text-white/30 mb-8 group-hover:text-white transition-colors" />
                <h3 className="text-3xl font-bold text-white mb-4">CLI Tools</h3>
                <p className="text-white/50">Building developer tooling in Rust and Go to speed up workflow pipelines.</p>
                
                {/* Abstract Code visualization */}
                <div className="absolute bottom-0 right-0 p-8 opacity-20 group-hover:opacity-50 transition-opacity font-mono text-xs text-right">
                  <p>fn main() {'{'}</p>
                  <p className="pl-4">println!("Hello");</p>
                  <p>{'}'}</p>
                </div>
              </div>

              {/* Medium Cell */}
              <div className="md:col-span-2 rounded-3xl bg-white/[0.02] border border-white/10 p-8 relative overflow-hidden group hover-trigger" data-cursor-text="DESIGN">
                <div className="absolute inset-0 bg-gradient-to-bl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex justify-between items-start">
                  <Figma className="w-10 h-10 text-white/30 group-hover:text-white transition-colors" />
                  <ArrowUpRight className="w-6 h-6 text-white/30 group-hover:text-white transition-colors" />
                </div>
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-white mb-2">Design Systems</h3>
                  <p className="text-white/50">Bridging Figma tokens to React components.</p>
                </div>
              </div>

              {/* Small Cells */}
              <div className="rounded-3xl bg-white/[0.02] border border-white/10 p-8 flex flex-col justify-between group hover-trigger" data-cursor-text="WASM">
                <Cpu className="w-8 h-8 text-white/30 group-hover:text-white transition-colors" />
                <h3 className="text-xl font-bold text-white mt-8">WebAssembly</h3>
              </div>
              <div className="rounded-3xl bg-white/[0.02] border border-white/10 p-8 flex flex-col justify-between group hover-trigger" data-cursor-text="GLSL">
                <Globe className="w-8 h-8 text-white/30 group-hover:text-white transition-colors" />
                <h3 className="text-xl font-bold text-white mt-8">Shaders</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Footer / CTA */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white text-black">
          {/* Inverted section for massive contrast */}
          <div className="absolute inset-0 bg-noise opacity-50 mix-blend-overlay pointer-events-none" />
          
          <div className="text-center z-10 w-full px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[18vw] leading-[0.8] font-black tracking-tighter hover-trigger"
              data-cursor-text="TALK"
            >
              HELLO.
            </motion.h2>
            
            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 font-mono text-sm font-bold uppercase tracking-widest">
              <Magnetic><a href="mailto:hello@example.com" className="hover:underline hover-trigger" data-cursor-text="SEND">Email</a></Magnetic>
              <div className="w-1 h-1 rounded-full bg-black" />
              <Magnetic><a href="#" className="hover:underline hover-trigger" data-cursor-text="X">Twitter</a></Magnetic>
              <div className="w-1 h-1 rounded-full bg-black" />
              <Magnetic><a href="#" className="hover:underline hover-trigger" data-cursor-text="CODE">Github</a></Magnetic>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
