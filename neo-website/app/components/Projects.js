"use client";

import { ExternalLink, Database, Layout, Sparkles } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Daftarkan plugin GSAP
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "AI Sales Page Generator",
    description:
      "A full-stack AI-powered web application that transforms product information into complete, persuasive sales pages instantly.",
    longDescription:
      "Built with Next.js and Groq API (Llama 3.3 70B). Features include user authentication, AI-generated structured sales pages, live preview, edit and regenerate, history management, and HTML export. Deployed on Vercel with PostgreSQL on Neon.tech.",
    tags: [
      "Next.js",
      "Groq AI",
      "Prisma",
      "PostgreSQL",
      "NextAuth.js",
      "Tailwind CSS",
    ],
    icon: <Sparkles className="w-5 h-5" />,
    link: "https://ai-sales-generator.vercel.app",
  },
  {
    title: "Asyifa Hiperbarik - Clinic Management",
    description:
      "An integrated healthcare platform managing patient registration, medical records, and automated pharmacy inventory.",
    longDescription:
      "Built with a focus on data integrity for medical environments. Features include real-time stock tracking and secure patient data handling.",
    tags: ["Next.js", "Prisma", "MySQL", "Tailwind CSS"],
    icon: <Layout className="w-5 h-5" />,
    link: "https://asyifa-internal-development.vercel.app/login",
  },
  {
    title: "Minesweeper Web Game",
    description:
      "A logic-based puzzle game featuring custom grid generation and recursive tile-clearing algorithms.",
    longDescription:
      "Developed using complex array manipulation and depth-first search (DFS) logic to handle zero-tile expansion efficiently. Focuses on high-performance state updates and seamless UI responsiveness.",
    tags: ["React.js", "State Management", "Algorithm Design", "CSS Grid"],
    icon: <Layout className="w-5 h-5" />,
    link: "https://minesweeper-six-psi.vercel.app/",
  },
  {
    title: "RESTful Pokedex App",
    description:
      "A dynamic web application integrated with the PokeAPI to fetch and display real-time data.",
    longDescription:
      "Implemented advanced searching and filtering logic with infinite scrolling. Focused on optimizing API calls and image loading to ensure a smooth, high-performance user experience.",
    tags: ["React.js", "REST API", "Axios", "Dynamic Routing"],
    icon: <Database className="w-5 h-5" />,
    link: "https://pokedex-neo9.vercel.app/",
  },
];

export default function Projects() {
  const containerRef = useRef(null);
  const headerLineRef = useRef(null);

  // Memicu trigger reveal grid utama menggunakan Framer Motion
  const isGridInView = useInView(containerRef, { once: true, amount: 0.1 });

  // GSAP ScrollTrigger untuk animasi garis horizontal header
  useGSAP(
    () => {
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
    },
    { scope: containerRef },
  );

  // Varian orkestrasi kemunculan kartu (Staggered Grid Reveal)
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Jeda antar kartu saat muncul berurutan
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="projects"
      ref={containerRef}
      className="w-full py-24 px-6 bg-[#0a0a0f] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isGridInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-serif font-bold text-sm tracking-widest text-[#d4af37]">
            04
          </span>
          <div
            ref={headerLineRef}
            className="h-px bg-gradient-to-r from-[#d4af37] to-transparent"
          />
          <h2 className="font-serif font-bold text-3xl text-[#e8e8e8] whitespace-nowrap">
            Featured Projects
          </h2>
        </motion.div>

        {/* PROJECTS GRID CONTAINER */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate={isGridInView ? "visible" : "hidden"}
          className="grid md:grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants} className="h-full">
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.015,
                  borderColor: "#d4af374d",
                  backgroundColor: "#d4af3712",
                }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                className="group flex flex-col h-full p-8 rounded-2xl border bg-[#0a0a0f] shadow-2xl relative overflow-hidden cursor-default select-none"
                style={{
                  borderColor: "rgba(212, 175, 55, 0.1)",
                  backgroundColor: "rgba(212, 175, 55, 0.03)",
                }}
              >
                {/* Efek Hover Kursor: Menggerakkan ikon luar saat link di-hover */}
                <div className="flex justify-between items-start mb-6 z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 rounded-lg bg-[#d4af37]/10 text-[#d4af37]"
                  >
                    {project.icon}
                  </motion.div>

                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: "#d4af37" }}
                    className="text-[#707070] transition-colors p-1"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>

                {/* TEXT CONTENT */}
                <div className="z-10">
                  <h3 className="text-2xl font-bold text-[#e8e8e8] mb-3 group-hover:text-[#d4af37] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[#a0a0a0] text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <p className="text-[#707070] text-xs leading-relaxed mb-6 italic">
                    {project.longDescription}
                  </p>
                </div>

                {/* TAGS LIST WITH MICROINTERACTIONS */}
                <div className="flex flex-wrap gap-2 mt-auto z-10">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(212, 175, 55, 0.2)",
                      }}
                      className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#d4af37]/10 text-[#d4af37] rounded-md border border-[#d4af37]/20 transition-colors duration-200"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
