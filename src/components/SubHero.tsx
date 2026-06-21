"use client";

import { motion } from "framer-motion";

export default function SubHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-32 px-6 relative z-10 flex justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="max-w-5xl w-full"
      >
        <div className="relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent shadow-[0_0_50px_rgba(255,255,255,0.03)]">
          {/* Glassmorphism Card */}
          <div className="bg-black/60 backdrop-blur-2xl rounded-[22px] p-10 md:p-16 border border-white/5 relative overflow-hidden">
            {/* Subtle glow inside card */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

            <motion.p 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl md:text-4xl text-neutral-400 leading-snug md:leading-relaxed font-light text-center relative z-10 flex flex-wrap justify-center gap-x-2"
            >
              {[
                "Expertise", "spanning", 
                <span key="clothing" className="text-white font-medium drop-shadow-md">clothing,</span>, 
                <span key="outdoor" className="text-white font-medium drop-shadow-md">outdoor garments,</span>, 
                "and", "the", 
                <span key="auto" className="text-white font-medium drop-shadow-md">automobile sector,</span>, 
                "utilizing", "advanced", "workflows", "across", 
                <span key="ps" className="text-white font-medium">Photoshop,</span>, 
                <span key="ai" className="text-white font-medium">Illustrator,</span>, 
                "and", "AI-driven", "4K/8K", "hyper-realistic", "generation."
              ].map((word, i) => (
                <motion.span key={i} variants={itemVariants} className="inline-block">
                  {word}
                </motion.span>
              ))}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
