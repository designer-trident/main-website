"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  const tools = [
    "Creative Direction",
    "AI Asset Generation",
    "UI/UX",
    "Commercial Branding",
    "E-commerce Marketing",
    "VN Video Editing"
  ];
  const duplicatedTools = [...tools, ...tools, ...tools, ...tools];

  return (
    <section className="py-16 relative overflow-hidden flex z-10 my-12">
      {/* Background glow for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-white/[0.02] border-y border-white/5 backdrop-blur-sm z-0" />
      
      <motion.div
        className="flex whitespace-nowrap gap-12 items-center relative z-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
      >
        {duplicatedTools.map((tool, index) => (
          <div key={index} className="flex items-center gap-12 group">
            <span className="text-2xl md:text-4xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-500 to-neutral-800 uppercase tracking-widest transition-all duration-500 group-hover:from-white group-hover:to-neutral-400">
              {tool}
            </span>
            <span className="w-3 h-3 rounded-full bg-white/10 group-hover:bg-white/50 transition-colors duration-500" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
