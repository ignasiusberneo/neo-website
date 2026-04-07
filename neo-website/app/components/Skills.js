"use client";
import { Layers, Database, Shield, Terminal } from "lucide-react";

const techSkills = [
  { name: "Node.js / Express.js", level: "90%" }, // [cite: 10]
  { name: "React.js / React Native / Next.js", level: "95%" }, // [cite: 9]
  { name: "Vue.js", level: "88%" }, // [cite: 9]
  { name: "TypeScript / JavaScript", level: "92%" }, // [cite: 9]
  { name: "SQL / MongoDB", level: "85%" }, // [cite: 11]
  { name: "Docker / Redis / CI/CD", level: "80%" }, // [cite: 10, 12]
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-24 px-6 bg-[#d4af37]/[0.02]">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-serif font-bold text-sm tracking-widest text-[#d4af37]">
            02
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-[#d4af37] to-transparent"></div>
          <h2 className="font-serif font-bold text-3xl">Technical Expertise</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#d4af37]">
              Core Tech Stack
            </h3>
            {techSkills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-xs text-[#707070]">{skill.level}</span>
                </div>
                <div className="h-1.5 w-full bg-[#d4af37]/15 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#d4af37]"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <SkillCard icon={<Layers />} label="Frontend Architecture" />
            <SkillCard icon={<Database />} label="Database Design" />
            <SkillCard icon={<Shield />} label="Security Best Practices" />
            <SkillCard icon={<Terminal />} label="Agile/Scrum" />
          </div>
        </div>
      </div>
    </section>
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
