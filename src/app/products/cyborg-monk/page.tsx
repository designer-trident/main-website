"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function CyborgMonkCaseStudy() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  } as const;

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  } as const;

  return (
    <div ref={containerRef} className="bg-neutral-950 text-neutral-300 min-h-screen font-sans selection:bg-white/20">
      {/* Hero Section */}
      <section className="h-screen relative flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/cyborgmonk/indian-monk-portfolio.png" 
            alt="Cyborg Monk Hero Portfolio" 
            fill 
            className="object-cover opacity-50 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-neutral-950" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-5xl text-center px-6"
        >
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-md bg-white/5 text-sm uppercase tracking-widest text-white/80"
          >
            Concept Art & 3D Modeling
          </motion.div>
          <h1 className="text-6xl md:text-9xl font-heading font-black text-white uppercase tracking-tighter mb-6 drop-shadow-2xl">
            Cyborg <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">Monk</span>
          </h1>
          <p className="text-xl md:text-3xl text-neutral-400 font-light max-w-3xl mx-auto leading-relaxed">
            A fusion of ancient spirituality and hyper-advanced cybernetics. 
            Character design, concept art, and high-fidelity rendering.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-neutral-500">Discover</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-neutral-500 to-transparent" />
        </motion.div>
      </section>

      {/* Section 1: Character Blueprints & Concept Art */}
      <section className="py-32 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
        >
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white uppercase mb-8 leading-none">
              Blueprints & <br/>Concept Art
            </h2>
            <div className="w-12 h-1 bg-white mb-8" />
            <p className="text-lg leading-relaxed text-neutral-400 mb-6">
              The design process began with deep research into traditional monastic robes, prayer beads, and spiritual iconography. 
              We layered these foundational elements with biomechanical augmentations, ensuring every cybernetic enhancement felt purposeful rather than purely decorative. 
            </p>
            <p className="text-lg leading-relaxed text-neutral-500">
              Initial sketches focused on silhouette and pose, establishing a calm yet formidable presence. The tension between natural woven fabrics and cold, hard metal plating forms the core visual motif of the character.
            </p>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-2 gap-6 relative">
            <motion.div style={{ y: y1 }} className="flex flex-col gap-6 pt-12">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <Image src="/cyborgmonk/sketchs-of-indian-monk-hero.png-1.png" alt="Sketch 1" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <Image src="/cyborgmonk/indian-monk-hero-1.png" alt="Hero Render 1" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </motion.div>
            <motion.div style={{ y: y2 }} className="flex flex-col gap-6 -mt-24">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <Image src="/cyborgmonk/indian-monk-hero-2.png" alt="Hero Render 2" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <Image src="/cyborgmonk/sketchs-of-indian-monk-hero.png-2.png" alt="Sketch 2" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Section 2: High-fidelity rendered assets */}
      <section className="py-32 bg-black border-y border-white/5 relative overflow-hidden">
        <div className="absolute -left-1/4 top-0 w-1/2 h-full bg-gradient-to-r from-white/[0.02] to-transparent pointer-events-none" />
        
        <div className="px-6 max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
          >
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-white uppercase mb-6 leading-none">
                High-Fidelity Renders
              </h2>
              <p className="text-lg leading-relaxed text-neutral-400">
                Moving from 2D concepts to fully realized 3D models required meticulous attention to material physics. 
                The contrast between rough, woven fabrics and highly polished chrome cybernetics creates a visceral visual tension.
              </p>
            </div>
            <div className="text-right hidden md:block">
              <span className="text-6xl font-heading font-bold text-white/5 tracking-tighter">02</span>
            </div>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { src: "/cyborgmonk/front.png", alt: "Front Render", label: "Front Elevation" },
              { src: "/cyborgmonk/right-side.png", alt: "Side Render", label: "Right Profile" },
              { src: "/cyborgmonk/back.png", alt: "Back Render", label: "Posterior Detail" }
            ].map((img, idx) => (
              <motion.div key={idx} variants={fadeIn} className="group cursor-crosshair">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/10 bg-neutral-900 mb-4">
                  <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">FIG. {idx + 1}</span>
                  <div className="h-[1px] flex-grow bg-white/10 group-hover:bg-white/30 transition-colors" />
                  <span className="text-sm text-neutral-300 font-medium">{img.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-100px" }}
             variants={fadeIn}
             className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 mt-20 group"
          >
            <Image src="/cyborgmonk/indian-monk-hero-3.png" alt="Hero Action" fill className="object-cover transition-transform duration-[2s] group-hover:scale-105" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors duration-700">
              <div className="text-center translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <span className="text-white font-heading text-2xl uppercase tracking-[0.3em]">Action Stance</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Extended Gallery */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase mb-6">
            Visual Exploration
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            A deeper look into the iterations, alternative textures, and atmospheric lighting tests that shaped the final character.
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
           <div className="relative rounded-xl overflow-hidden border border-white/10 break-inside-avoid shadow-xl group">
             <Image src="/cyborgmonk/final-action-hero.png" alt="Final Action" width={800} height={1000} className="w-full h-auto group-hover:scale-105 transition-transform duration-700" />
           </div>
           <div className="relative rounded-xl overflow-hidden border border-white/10 break-inside-avoid shadow-xl group">
             <Image src="/cyborgmonk/t-shirt-print-final-action-hero.png" alt="T-Shirt Print" width={800} height={800} className="w-full h-auto group-hover:scale-105 transition-transform duration-700" />
           </div>
           <div className="relative rounded-xl overflow-hidden border border-white/10 break-inside-avoid shadow-xl group">
             <Image src="/cyborgmonk/monk-power-partten.png" alt="Power Pattern" width={800} height={600} className="w-full h-auto group-hover:scale-105 transition-transform duration-700" />
           </div>
           <div className="relative rounded-xl overflow-hidden border border-white/10 break-inside-avoid shadow-xl group">
             <Image src="/cyborgmonk/8.png" alt="Exploration 8" width={800} height={1200} className="w-full h-auto group-hover:scale-105 transition-transform duration-700" />
           </div>
           <div className="relative rounded-xl overflow-hidden border border-white/10 break-inside-avoid shadow-xl group">
             <Image src="/cyborgmonk/3.png" alt="Exploration 3" width={800} height={900} className="w-full h-auto group-hover:scale-105 transition-transform duration-700" />
           </div>
           <div className="relative rounded-xl overflow-hidden border border-white/10 break-inside-avoid shadow-xl group">
             <Image src="/cyborgmonk/1.png" alt="Exploration 1" width={800} height={1000} className="w-full h-auto group-hover:scale-105 transition-transform duration-700" />
           </div>
        </div>
      </section>

      {/* Footer / Outro */}
      <section className="py-24 border-t border-white/10 bg-black text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h3 className="text-3xl font-heading text-white uppercase tracking-wider mb-8">
            Interested in this project?
          </h3>
          <a href="/contact" className="inline-block bg-white text-black font-medium tracking-wide uppercase px-8 py-4 rounded-full hover:scale-105 hover:bg-neutral-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]">
            Start a Conversation
          </a>
        </motion.div>
      </section>
    </div>
  );
}
