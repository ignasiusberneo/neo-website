"use client";
import {
  ExternalLink,
  FolderGit,
  Database,
  Layout,
  Lock,
  Sparkles,
} from "lucide-react";

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
    github: "https://github.com/ignasiusberneo/ai-sales-generator",
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
    github: "#",
  },
  {
    title: "Minesweeper Web Game",
    description:
      "A logic-based puzzle game featuring custom grid generation and recursive tile-clearing algorithms.",
    longDescription:
      "Developed using complex array manipulation and depth-first search (DFS) logic to handle zero-tile expansion efficiently. Focuses on high-performance state updates and seamless UI responsiveness.",
    tags: ["React.js", "State Management", "Algorithm Design", "CSS Grid"],
    icon: <Layout className="w-5 h-5" />, // Anda bisa mengganti icon ini dengan 'Gamepad2' dari lucide-react
    link: "https://minesweeper-six-psi.vercel.app/",
    github: "#",
  },
  {
    title: "RESTful Pokedex App",
    description:
      "A dynamic web application integrated with the PokeAPI to fetch and display real-time data.",
    longDescription:
      "Implemented advanced searching and filtering logic with infinite scrolling. Focused on optimizing API calls and image loading to ensure a smooth, high-performance user experience.",
    tags: ["React.js", "REST API", "Axios", "Dynamic Routing"],
    icon: <Database className="w-5 h-5" />, // Anda bisa menggunakan icon 'Search' atau 'Database'
    link: "https://pokedex-neo9.vercel.app/",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-24 px-6 bg-[#0a0a0f]">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-serif font-bold text-sm tracking-widest text-[#d4af37]">
            04
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-[#d4af37] to-transparent"></div>
          <h2 className="font-serif font-bold text-3xl text-[#e8e8e8]">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-[#d4af37]/10 bg-[#d4af37]/[0.03] hover:bg-[#d4af37]/[0.07] transition-all duration-500 hover:-translate-y-2 shadow-2xl"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-lg bg-[#d4af37]/10 text-[#d4af37]">
                  {project.icon}
                </div>
                <div className="flex gap-4 text-[#707070]">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#d4af37] transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[#e8e8e8] mb-3 group-hover:text-[#d4af37] transition-colors">
                {project.title}
              </h3>
              <p className="text-[#a0a0a0] text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <p className="text-[#707070] text-xs leading-relaxed mb-6 italic">
                {project.longDescription}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#d4af37]/10 text-[#d4af37] rounded-md border border-[#d4af37]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
