"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getAssetUrl } from "@/lib/utils";

export default function HighlightedWork() {
  return (
    <section className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-wider text-white">
            Selected Work
          </h2>
          <span className="text-neutral-500 uppercase tracking-widest text-sm font-medium">2026</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/products/cyborg-monk" className="group block col-span-1 md:col-span-2 relative overflow-hidden rounded-2xl aspect-[16/9] md:aspect-[21/9] bg-neutral-900 border border-white/10 shadow-2xl">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full h-full relative"
            >
              {/* Actual Image */}
              <Image 
                src={getAssetUrl("/cyborgmonk/indian-monk-hero-2.png")} 
                alt="Indian Cyborg Monk Hero" 
                fill 
                className="object-cover object-center opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              />
              
              {/* Gradient Overlay for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 z-20">
                <div className="flex items-end justify-between transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="overflow-hidden"
                    >
                      <h3 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white uppercase tracking-wider mb-4 drop-shadow-lg">
                        Indian Cyborg Monk
                      </h3>
                    </motion.div>
                    <p className="text-neutral-300 text-lg md:text-xl font-light max-w-xl drop-shadow-md">
                      A visual exploration of ancient spirituality merging with cybernetic augmentations.
                    </p>
                  </div>
                  
                  {/* Arrow Button */}
                  <div className="hidden md:flex w-20 h-20 rounded-full border border-white/30 items-center justify-center bg-black/20 backdrop-blur-md group-hover:bg-white group-hover:text-black transition-all duration-500 hover:scale-110">
                    <ArrowUpRight className="w-10 h-10" />
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
