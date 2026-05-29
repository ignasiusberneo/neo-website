"use client";

import { ChevronRight } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Daftarkan plugin GSAP
gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: "Karya Baik Bersama",
    role: "Frontend Developer",
    period: "Sep 2023 - Present",
    points: [
      "Improved page load speed by 30% using React.js and Next.js.",
      "Reduced feature development time by 25% through reusable component libraries.",
      "Increased test coverage to 80% using Jest.",
    ],
  },
  {
    company: "Platon",
    role: "Full Stack Developer",
    period: "Dec 2023 - Feb 2024",
    points: [
      "Reduced API latency by 20% using Node.js, Prisma, and PostgreSQL.",
      "Developed cross-platform apps with React and React Native.",
      "Integrated third-party APIs (payment, OAuth) and improved system documentation.",
    ],
  },
  {
    company: "Honest Properties",
    role: "Backend Engineer",
    period: "Jan 2023 - Dec 2023",
    points: [
      "Designed RESTful API architecture with Express.js and Node.js.",
      "Improved response time by 35% through query and schema optimization.",
      "Implemented JWT authentication and Redis caching for scalability.",
    ],
  },
  {
    company: "Socialights",
    role: "Backend Engineer",
    period: "Sep 2022 - May 2023",
    points: [
      "Developed backend services in TypeScript and Node.js for scalable architectures.",
      "Integrated analytics, notifications, and payment APIs, enhancing backend efficiency.",
      "Refactored legacy codebase to improve system throughput by 28%.",
    ],
  },
];

export default function Experience() {
  const containerRef = useRef(null);
  const headerLineRef = useRef(null);
  const timelineLineRef = useRef(null);

  // Deteksi reveal viewport untuk header menggunakan Framer Motion
  const isHeaderInView = useInView(containerRef, { once: true, amount: 0.1 });

  useGSAP(
    () => {
      // 1. Animasi horizontal garis header
      gsap.fromTo(
        headerLineRef.current,
        { width: "0%" },
        {
          width: "100%",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        },
      );

      // 2. Animasi vertikal garis TIMELINE (Mencerminkan skill ScrollTrigger, Pinning, Scrubbing)
      gsap.fromTo(
        timelineLineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 70%", // Mulai tumbuh saat container berada di 70% tinggi layar
            end: "bottom 75%", // Selesai tumbuh penuh saat bagian bawah container di 75% layar
            scrub: 0.5, // Mengikat panjang garis secara real-time dengan scrollwheel (smooth!)
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      id="experience"
      ref={containerRef}
      className="w-full py-24 px-6 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-serif font-bold text-sm tracking-widest text-[#d4af37]">
            03
          </span>
          <div
            ref={headerLineRef}
            className="h-px bg-gradient-to-r from-[#d4af37] to-transparent"
          />
          <h2 className="font-serif font-bold text-3xl text-[#e8e8e8] whitespace-nowrap">
            Experience
          </h2>
        </motion.div>

        {/* TIMELINE CONTAINER */}
        <div className="timeline-container relative pl-8">
          {/* Garis Dasar Berwarna Redup (Aksen Awal) */}
          <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-[#d4af37]/10" />

          {/* Garis Aktif yang Diisi Dinamis oleh GSAP ScrollTrigger */}
          <div
            ref={timelineLineRef}
            className="absolute left-0 top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#d4af37] to-[#d4af37]/40 origin-top"
          />

          {/* LIST PENGALAMAN */}
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <TimelineCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Sub-komponen terpisah agar penanganan useInView per kartu bekerja sempurna secara individu
function TimelineCard({ exp, index }) {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, amount: 0.2 });

  return (
    <div ref={cardRef} className="relative">
      {/* 1. Timeline Dot dengan Efek Pop-up Mengembang (Spring Physics) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isCardInView ? { scale: 1, opacity: 1 } : {}}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 12,
          delay: 0.1,
        }}
        className="absolute -left-[calc(2rem+6px)] w-3 h-3 rounded-full bg-[#d4af37] top-2 shadow-[0_0_10px_#d4af37]"
      />

      {/* 2. Isi Kartu dengan Animasi Slide In dari Kiri (Transform GPU Accelerated) */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={isCardInView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.2,
        }}
        whileHover={{ x: 4, backgroundColor: "rgba(212, 175, 55, 0.08)" }}
        className="p-6 rounded-xl border border-[#d4af37]/10 bg-[#d4af37]/5 hover:border-[#d4af37]/20 transition-colors duration-300 cursor-default"
      >
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#d4af37]/15 text-[#d4af37]">
          {exp.period}
        </span>
        <h3 className="text-xl font-bold mt-3 text-[#e8e8e8]">{exp.role}</h3>
        <p className="text-[#d4af37] text-sm mb-4">{exp.company}</p>

        <ul className="space-y-2 text-sm text-[#a0a0a0]">
          {exp.points.map((p, j) => (
            <li key={j} className="flex gap-2">
              <ChevronRight className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
