"use client";

import { GraduationCap, MapPin, Award, Code2, Cpu, Layers } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";

// Daftarkan plugin GSAP
gsap.registerPlugin(ScrollTrigger);

// Data JSON Lottie Animasi Mikro Cyber (After Effects Integration)
const lottieCodingAnimation = {
  v: "5.5.7",
  fr: 30,
  ip: 0,
  op: 60,
  w: 500,
  h: 500,
  nm: "Cyber Pulse",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Pulse Ring",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 0, s: [100], e: [0] }, { t: 60 }] },
        s: { a: 1, k: [{ t: 0, s: [20, 20], e: [100, 100] }, { t: 60 }] },
        p: { k: [250, 250, 0] },
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              d: 1,
              ty: "el",
              s: { k: [240, 240] },
              p: { k: [0, 0] },
              nm: "Oval",
            },
            {
              ty: "st",
              c: { k: [0.83, 0.68, 0.21, 1] },
              w: { k: 1.5 },
              nm: "Stroke",
            },
            {
              ty: "tr",
              p: { k: [0, 0] },
              a: { k: [0, 0] },
              s: { k: [100, 100] },
              r: { k: 0 },
              o: { k: 100 },
              nm: "Transform",
            },
          ],
        },
      ],
    },
  ],
};

export default function About() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  // Gunakan useInView dari Framer Motion untuk mendeteksi scroll reveal
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  // Menggunakan GSAP untuk animasi garis pembatas yang memanjang saat di-scroll
  useGSAP(
    () => {
      gsap.fromTo(
        lineRef.current,
        { width: "0%" },
        {
          width: "100%",
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%", // Mulai animasi saat top container berada di 85% layar
          },
        },
      );
    },
    { scope: containerRef },
  );

  // Varian orkestrasi stagger Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const cardsData = [
    {
      icon: <GraduationCap />,
      title: "Full Stack JavaScript Immersive",
      sub: "Hacktiv8 Certified",
    },
    {
      icon: <MapPin />,
      title: "Jakarta, Indonesia",
      sub: "Remote / On-site",
    },
    {
      icon: <Award />,
      title: "3+ Years",
      sub: "Professional Exp.",
    },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="w-full py-28 px-6 bg-[#0a0a0f] relative overflow-hidden"
    >
      {/* Efek Ambient Glow Latar Belakang */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] h-[350px] bg-[#d4af37]/3 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* HEADER SECTION WITH GSAP & FRAMER MOTION */}
        <motion.div
          variants={fadeUpVariants}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-serif font-bold text-sm tracking-widest text-[#d4af37]">
            01
          </span>
          {/* Garis ini dianimasikan secara presisi menggunakan GSAP */}
          <div
            ref={lineRef}
            className="h-px bg-gradient-to-r from-[#d4af37] to-transparent"
          />
          <h2 className="font-serif font-bold text-3xl text-[#e8e8e8] whitespace-nowrap">
            About Me
          </h2>
        </motion.div>

        {/* CONTENT TIERED LAYOUT GRID */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* ================= SISI KIRI: NARASI TEKS UTAMA (7 Kolom) ================= */}
          <div className="lg:col-span-7 space-y-6 text-[#a0a0a0] text-[15px] leading-relaxed font-sans">
            <motion.p variants={fadeUpVariants}>
              I am a Full Stack Developer with over 3 years of experience in
              designing and optimizing scalable web and mobile applications. I
              specialize in building high-performance systems using the React
              and Node.js ecosystems.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              My approach focuses on clean architecture and code optimization to
              improve security and user experience. I thrive in collabor
              environments and am passionate about solving complex technical
              challenges.
            </motion.p>

            {/* Mini Grid Core Focus Tambahan */}
            <motion.div
              variants={fadeUpVariants}
              className="grid grid-cols-2 gap-4 pt-6 border-t border-[#d4af37]/10"
            >
              <div className="flex gap-3 items-start">
                <Code2 className="w-4 h-4 text-[#d4af37] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#e8e8e8] mb-1">
                    Full-Stack Capability
                  </h4>
                  <p className="text-[#707070] text-xs leading-snug">
                    End-to-end development spanning from database schema design
                    to advanced DOM optimization.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Cpu className="w-4 h-4 text-[#d4af37] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#e8e8e8] mb-1">
                    Clean Code & Architecture
                  </h4>
                  <p className="text-[#707070] text-xs leading-snug">
                    Prioritizing maintainable codebase structures alongside
                    highly efficient, GPU-accelerated performance.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ================= SISI KANAN: LOTTIE & KARTU INFORMASI (5 Kolom) ================= */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            {/* Box Render Animasi Lottie (After Effects) */}

            {/* List InfoCard Bawaan Asli dengan Struktur Spring Physics */}
            <div className="space-y-4">
              {cardsData.map((card, i) => (
                <motion.div key={i} variants={fadeUpVariants}>
                  <InfoCard {...card} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function InfoCard({ icon, title, sub }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className="p-4 rounded-xl border cursor-pointer select-none"
      style={{
        borderColor: "rgba(212, 175, 55, 0.12)",
        backgroundColor: "rgba(212, 175, 55, 0.04)",
      }}
    >
      <div className="flex items-center gap-3">
        <div className="text-[#d4af37] flex-shrink-0">{icon}</div>
        <div>
          <div className="text-sm font-semibold text-[#e8e8e8]">{title}</div>
          <div className="text-xs text-[#707070]">{sub}</div>
        </div>
      </div>
    </motion.div>
  );
}
