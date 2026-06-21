"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CyborgMonkCaseStudy() {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="bg-black text-neutral-300 min-h-screen">
      {/* Hero Section */}
      <section className="h-[80vh] relative flex flex-col justify-end p-6 md:p-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/Cyborgmonk/INDIAN Monk Hero 1.png" 
            alt="Cyborg Monk Hero" 
            fill 
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative z-10 max-w-4xl"
        >
          <h1 className="text-5xl md:text-8xl font-heading font-bold text-white uppercase tracking-tighter mb-4">
            Indian Cyborg Monk
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 font-light max-w-2xl">
            A fusion of ancient spirituality and hyper-advanced cybernetics. Character design, concept art, and high-fidelity rendering.
          </p>
        </motion.div>
      </section>

      {/* Section 1: Character Blueprints & Concept Art */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase mb-6">
              Blueprints & Concept Art
            </h2>
            <p className="text-lg leading-relaxed text-neutral-400">
              The design process began with deep research into traditional monastic robes, prayer beads, and spiritual iconography. We layered these foundational elements with biomechanical augmentations, ensuring every cybernetic enhancement felt purposeful rather than purely decorative. 
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/10">
              <Image src="/Cyborgmonk/Sketchs of INDIAN Monk Hero.png 1.png" alt="Sketch 1" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/10 translate-y-8">
              <Image src="/Cyborgmonk/Sketchs of INDIAN Monk Hero.png 2.png" alt="Sketch 2" fill className="object-cover" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 2: High-fidelity rendered assets */}
      <section className="py-24 md:py-32 bg-neutral-900 border-y border-white/5">
        <div className="px-6 max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase mb-6">
              High-Fidelity Renders
            </h2>
            <p className="text-lg leading-relaxed text-neutral-400">
              Moving from 2D concepts to fully realized 3D models required meticulous attention to material physics. The contrast between rough, woven fabrics and highly polished chrome cybernetics creates a visceral visual tension.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={fadeIn} className="relative aspect-square rounded-xl overflow-hidden border border-white/10">
               <Image src="/Cyborgmonk/Front.png" alt="Front Render" fill className="object-cover" />
            </motion.div>
            <motion.div variants={fadeIn} className="relative aspect-square rounded-xl overflow-hidden border border-white/10">
               <Image src="/Cyborgmonk/Right Side.png" alt="Side Render" fill className="object-cover" />
            </motion.div>
            <motion.div variants={fadeIn} className="relative aspect-square rounded-xl overflow-hidden border border-white/10">
               <Image src="/Cyborgmonk/Back.png" alt="Back Render" fill className="object-cover" />
            </motion.div>
          </div>
          
          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-100px" }}
             variants={fadeIn}
             className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 mt-12"
          >
            <Image src="/Cyborgmonk/INDIAN Monk Hero 3.png" alt="Hero Action" fill className="object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Section 3: Cinematic placeholders */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase mb-6">
            Cinematic Transformation
          </h2>
          <p className="text-lg leading-relaxed text-neutral-400 mb-12">
            The final stage brings the character to life through motion. The video reels demonstrate the weight of the cybernetic limbs and the flowing physics of the traditional garments.
          </p>
          
          <div className="relative aspect-video bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center group overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent z-10" />
             <Image src="/Cyborgmonk/Final Action Hero.png" alt="Video Thumbnail" fill className="object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
             <div className="relative z-20 w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white group-hover:scale-110 transition-transform cursor-pointer">
                <svg className="w-8 h-8 ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
             </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
