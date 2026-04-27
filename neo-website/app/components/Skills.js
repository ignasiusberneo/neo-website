"use client";
import { Layers, Database, Shield, Terminal } from "lucide-react";
import { useEffect, useRef } from "react";

const techSkills = [
  { name: "Node.js / Express.js", level: "90%" },
  { name: "React.js / React Native / Next.js", level: "95%" },
  { name: "Vue.js", level: "88%" },
  { name: "TypeScript / JavaScript", level: "92%" },
  { name: "SQL / MongoDB", level: "85%" },
  { name: "Docker / Redis / CI/CD", level: "80%" },
];

function useScrollAnimation(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll("[data-animate]").forEach((el, i) => {
              setTimeout(() => el.classList.add("animate-in"), i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

export default function Skills() {
  const sectionRef = useScrollAnimation();

  return (
    <>
      <style>{`
        [data-animate] {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s cubic-bezier(0.22,1,0.36,1),
                      transform 0.6s cubic-bezier(0.22,1,0.36,1);
        }
        [data-animate].animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .skill-bar {
          width: 0%;
          transition: width 1s cubic-bezier(0.22,1,0.36,1);
        }
        [data-animate].animate-in .skill-bar {
          width: var(--skill-level);
        }
      `}</style>

      <section
        id="skills"
        ref={sectionRef}
        className="w-full py-24 px-6 bg-[#d4af37]/[0.02]"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12" data-animate>
            <span className="font-serif font-bold text-sm tracking-widest text-[#d4af37]">
              02
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#d4af37] to-transparent" />
            <h2 className="font-serif font-bold text-3xl">
              Technical Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3
                className="text-xs font-bold tracking-widest uppercase text-[#d4af37]"
                data-animate
              >
                Core Tech Stack
              </h3>
              {techSkills.map((skill) => (
                <div key={skill.name} data-animate>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-xs text-[#707070]">
                      {skill.level}
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-[#d4af37]/15 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#d4af37] rounded-full skill-bar"
                      style={{ "--skill-level": skill.level }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Layers />, label: "Frontend Architecture" },
                { icon: <Database />, label: "Database Design" },
                { icon: <Shield />, label: "Security Best Practices" },
                { icon: <Terminal />, label: "Agile/Scrum" },
              ].map((card, i) => (
                <div key={i} data-animate>
                  <SkillCard {...card} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SkillCard({ icon, label }) {
  return (
    <div className="p-6 rounded-xl border border-[#d4af37]/10 bg-[#d4af37]/[0.04] text-center hover:translate-y-[-4px] transition-all duration-300">
      <div className="mb-3 flex justify-center text-[#d4af37]">{icon}</div>
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
}
