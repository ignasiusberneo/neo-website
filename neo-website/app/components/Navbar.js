"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  // State untuk melacak menu mana yang sedang di-hover secara real-time
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const menuItems = ["About", "Skills", "Experience", "Projects", "Contact"];

  return (
    <motion.nav
      // Animasi entrance saat navbar pertama kali muncul di layar
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-[#d4af37]/15 bg-[#0a0a0f]/85 select-none"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO DENGAN INTERAKSI SPRING */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="font-serif font-bold text-lg text-[#d4af37] tracking-wider cursor-pointer"
        >
          IBD
        </motion.a>

        {/* NAVIGATION MENUS */}
        <div
          className="flex gap-6 lg:gap-8 text-sm font-medium tracking-wide text-[#e8e8e8]"
          onMouseLeave={() => setHoveredIndex(null)} // Reset garis saat kursor keluar dari area navbar
        >
          {menuItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative px-1 py-1 transition-colors duration-300 hover:text-[#d4af37]"
              onMouseEnter={() => setHoveredIndex(index)}
            >
              {/* Teks Menu */}
              <span className="relative z-10">{item}</span>

              {/* SHARED LAYOUT ANIMATION (Garis Emas yang Mengalir Mengikuti Kursor) */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.span
                    layoutId="navbar-underline" // Kunci utama: ID yang sama memaksa elemen untuk meluncur secara organik
                    initial={{ opacity: 0, scaleX: 0.8 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    exit={{ opacity: 0, scaleX: 0.8 }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30, // Mengontrol keempukan efek meluncur
                    }}
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d4af37] origin-center"
                  />
                )}
              </AnimatePresence>
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
