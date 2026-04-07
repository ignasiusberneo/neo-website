import { ChevronRight } from "lucide-react";

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
  return (
    <section id="experience" className="w-full py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-serif font-bold text-sm tracking-widest text-[#d4af37]">
            03
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-[#d4af37] to-transparent"></div>
          <h2 className="font-serif font-bold text-3xl text-[#e8e8e8]">
            Experience
          </h2>
        </div>

        <div className="relative pl-8 border-l-2 border-[#d4af37]/25 space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[calc(2rem+6px)] w-3 h-3 rounded-full bg-[#d4af37] top-2 shadow-[0_0_10px_#d4af37]"></div>
              <div className="p-6 rounded-xl border border-[#d4af37]/10 bg-[#d4af37]/5 hover:bg-[#d4af37]/10 transition-colors">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#d4af37]/15 text-[#d4af37]">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold mt-3 text-[#e8e8e8]">
                  {exp.role}
                </h3>
                <p className="text-[#d4af37] text-sm mb-4">{exp.company}</p>
                <ul className="space-y-2 text-sm text-[#a0a0a0]">
                  {exp.points.map((p, j) => (
                    <li key={j} className="flex gap-2">
                      <ChevronRight className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
