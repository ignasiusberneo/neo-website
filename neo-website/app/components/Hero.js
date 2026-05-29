"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Terminal, Sparkles, Code2 } from "lucide-react";
// IMPORT BACKGROUND FUTURISTIK BARU
import HeroBackgroundFuturistic from "./HeroBackgroundFuturistic";

export default function Hero() {
  const containerRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center bg-[#0a0a0f] overflow-hidden px-6 pt-16 select-none"
    >
      {/* 🌌 BACKGROUND FUTURISTIK DIGITAL GRID (Bebas Three.js/Three.timer) */}
      <HeroBackgroundFuturistic />

      {/* AMBIENT GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* CONTENT INNER */}
      <motion.div
        className="max-w-4xl w-full text-center relative z-10 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge Status */}
        <motion.div
          variants={fadeUpVariants}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#d4af37]/20 bg-[#d4af37]/5 mb-6 backdrop-blur-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37] animate-pulse" />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#d4af37]">
            Full-Stack Web Architecture
          </span>
        </motion.div>

        {/* Nama / Identitas Utama */}
        <motion.h1
          variants={fadeUpVariants}
          className="font-serif font-bold text-5xl md:text-7xl text-[#e8e8e8] tracking-tight mb-4 leading-[1.1]"
        >
          Ignasius Berneo <span className="text-[#d4af37]">Dwitama</span>
        </motion.h1>

        {/* Subtitle / Role Utama */}
        <motion.h2
          variants={fadeUpVariants}
          className="text-lg md:text-2xl font-medium text-[#a0a0a0] tracking-wide max-w-2xl mb-8 leading-relaxed"
        >
          Full-Stack Developer engineering robust system architectures and
          immersive, fluid user interfaces.
        </motion.h2>

        {/* Baris Tombol Aksi */}
        <motion.div
          variants={fadeUpVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#projects"
            whileHover={{
              y: -4,
              scale: 1.02,
              boxShadow: "0 10px 25px -5px rgba(212, 175, 55, 0.25)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="flex items-center gap-2 px-8 py-4 bg-[#d4af37] text-[#0a0a0f] rounded-xl font-bold text-sm shadow-xl transition-colors duration-200 hover:bg-[#c29f2e]"
          >
            <Code2 className="w-4 h-4" />
            <span>View My Work</span>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{
              y: -4,
              scale: 1.02,
              backgroundColor: "rgba(212, 175, 55, 0.12)",
              borderColor: "rgba(212, 175, 55, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="flex items-center gap-2 px-8 py-4 bg-transparent text-[#e8e8e8] rounded-xl font-bold text-sm border transition-all duration-300"
            style={{
              borderColor: "rgba(212, 175, 55, 0.15)",
              backgroundColor: "rgba(212, 175, 55, 0.04)",
            }}
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-4 h-4 text-[#d4af37]" />
          </motion.a>
        </motion.div>

        {/* Tanda Navigasi Bawah */}
        <motion.div
          variants={fadeUpVariants}
          className="mt-20 text-[#707070] flex flex-col items-center gap-2 opacity-50"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <Terminal className="w-4 h-4 text-[#d4af37]" />
          <span className="text-[9px] uppercase tracking-[0.3em] font-mono">
            Scroll to explore
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
