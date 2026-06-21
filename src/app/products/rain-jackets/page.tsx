"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { getAssetUrl } from "@/lib/utils";

const k2Images = [
  "1.2", "2.1", "3.1", "4.1", "5.1", "6.2"
];

const kazaImages = [
  "1", "2", "3", "4", "5", "6"
];

export default function RainJacketsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 bg-gradient-to-br from-white to-neutral-500 bg-clip-text text-transparent">
            Rain Jackets
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Explore the latest collection of premium rainwear, designed for ultimate protection and aesthetic excellence. Featuring the K2 and Kaza concept lines.
          </p>
        </motion.div>

        {/* K2 Section */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold tracking-widest uppercase border-l-4 border-white pl-6">
              K2 Series
            </h2>
            <p className="text-neutral-500 mt-4 pl-6 max-w-xl">
              High-performance gear built for the harshest environments. Featuring weather-sealed seams and an articulated fit.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {k2Images.map((num, idx) => {
              const imagePath = getAssetUrl(`/rain-jackets/k2-rain-jackets-1080-x-1350-${num}.png`);
              return (
                <motion.div 
                  key={num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-neutral-900 border border-white/5"
                >
                  <Image
                    src={imagePath}
                    alt={`K2 Rain Jacket ${idx + 1}`}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <span className="text-white font-bold tracking-widest text-lg uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      Concept 0{idx + 1}
                    </span>
                    <div className="w-8 h-1 bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Kaza Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold tracking-widest uppercase border-l-4 border-white pl-6">
              Kaza Series
            </h2>
            <p className="text-neutral-500 mt-4 pl-6 max-w-xl">
              Sleek, minimalist profiles perfect for the urban commute without compromising on element protection.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kazaImages.map((num, idx) => {
              const imagePath = getAssetUrl(`/rain-jackets/kaza-rain-jacket-1080-x-1350-${num}.png`);
              return (
                <motion.div 
                  key={num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-neutral-900 border border-white/5"
                >
                  <Image
                    src={imagePath}
                    alt={`Kaza Rain Jacket ${idx + 1}`}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <span className="text-white font-bold tracking-widest text-lg uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      Concept 0{idx + 1}
                    </span>
                    <div className="w-8 h-1 bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
