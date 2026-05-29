"use client";

import { Layers, Database, Shield, Terminal } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Daftarkan plugin GSAP
gsap.registerPlugin(ScrollTrigger);

const techSkills = [
  { name: "Node.js / Express.js", level: "90%" },
  { name: "React.js / React Native / Next.js", level: "95%" },
  { name: "Vue.js", level: "88%" },
  { name: "TypeScript / JavaScript", level: "92%" },
  { name: "SQL / MongoDB", level: "85%" },
  { name: "Docker / Redis / CI/CD", level: "80%" },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const headerLineRef = useRef(null);

  // Deteksi scroll reveal untuk container menggunakan Framer Motion
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  // GSAP ScrollTrigger untuk animasi garis header dan pengisian skill bar
  useGSAP(
    () => {
      // 1. Animasi Garis Header
      gsap.fromTo(
        headerLineRef.current,
        { width: "0%" },
        {
          width: "100%",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );

      // 2. Animasi Pengisian Skill Bars secara bersamaan dengan easing premium
      gsap.utils.toArray(".gsap-skill-bar").forEach((bar) => {
        const targetWidth = bar.getAttribute("data-level");
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: targetWidth,
            duration: 1.5,
            ease: "power4.out", // Easing eksporsial yang sangat halus di akhir gerakan
            scrollTrigger: {
              trigger: bar,
              start: "top 90%", // Mulai mengisi saat bar mendekati bagian bawah layar
            },
          },
        );
      });
    },
    { scope: sectionRef },
  );

  // Varian orkestrasi stagger Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="w-full py-24 px-6 bg-[#d4af37]/[0.02] overflow-hidden"
    >
      <motion.div
        className="max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* HEADER SECTION */}
        <motion.div
          variants={fadeUpVariants}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-serif font-bold text-sm tracking-widest text-[#d4af37]">
            02
          </span>
          <div
            ref={headerLineRef}
            className="h-px bg-gradient-to-r from-[#d4af37] to-transparent"
          />
          <h2 className="font-serif font-bold text-3xl whitespace-nowrap">
            Technical Expertise
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT COLUMN: SKILL BARS */}
          <div className="space-y-6">
            <motion.h3
              variants={fadeUpVariants}
              className="text-xs font-bold tracking-widest uppercase text-[#d4af37]"
            >
              Core Tech Stack
            </motion.h3>

            {techSkills.map((skill) => (
              <motion.div key={skill.name} variants={fadeUpVariants}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-xs text-[#707070]">{skill.level}</span>
                </div>
                <div className="h-1.5 w-full bg-[#d4af37]/15 rounded-full overflow-hidden">
                  {/* Div ini dikontrol penuh ukurannya oleh GSAP */}
                  <div
                    className="h-full bg-[#d4af37] rounded-full gsap-skill-bar"
                    data-level={skill.level}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT COLUMN: SKILL CARDS */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <Layers />, label: "Frontend Architecture" },
              { icon: <Database />, label: "Database Design" },
              { icon: <Shield />, label: "Security Best Practices" },
              { icon: <Terminal />, label: "Agile/Scrum" },
            ].map((card, i) => (
              <motion.div key={i} variants={fadeUpVariants}>
                <SkillCard {...card} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function SkillCard({ icon, label }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.03,
        backgroundColor: "#d4af3714",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="p-6 h-full flex flex-col justify-center items-center rounded-xl border text-center cursor-pointer select-none"
      style={{
        borderColor: "rgba(212, 175, 55, 0.1)",
        backgroundColor: "rgba(212, 175, 55, 0.04)",
      }}
    >
      <div className="mb-3 flex justify-center text-[#d4af37]">{icon}</div>
      <div className="text-sm font-medium leading-snug">{label}</div>
    </motion.div>
  );
}
