"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const links = [
    { name: "Home", href: "/" },
    {
      name: "Products",
      href: "/products/rain-jackets",
      subItems: [
        { name: "Rain Jackets", href: "/products/rain-jackets" },
        { name: "Cyborg Monk", href: "/products/cyborg-monk" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-heading font-bold tracking-widest uppercase">
          Kunal
        </Link>
        <div className="flex gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href || link.subItems?.some(sub => pathname.startsWith(sub.href));
            
            return (
              <div
                key={link.name}
                className="relative flex items-center h-full py-6"
                onMouseEnter={() => setHoveredItem(link.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  href={link.href}
                  className={`relative text-sm font-medium tracking-wide transition-colors py-2 flex items-center gap-1 ${isActive ? "text-white" : "text-neutral-300 hover:text-white"}`}
                >
                  {link.name}
                  {link.subItems && (
                    <svg className="w-4 h-4 ml-1 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 w-full h-[2px] bg-white"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>

                {link.subItems && (
                  <AnimatePresence>
                    {hoveredItem === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-[80px] left-0 min-w-[200px] bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl py-2"
                      >
                        {link.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`block px-5 py-3 text-sm font-medium transition-colors ${
                              pathname === subItem.href
                                ? "bg-white/10 text-white"
                                : "text-neutral-300 hover:bg-white/5 hover:text-white"
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
