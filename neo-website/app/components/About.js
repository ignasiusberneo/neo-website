import { GraduationCap, MapPin, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="w-full py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-serif font-bold text-sm tracking-widest text-[#d4af37]">
            01
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-[#d4af37] to-transparent"></div>
          <h2 className="font-serif font-bold text-3xl text-[#e8e8e8]">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 text-[#a0a0a0] space-y-6 text-lg leading-relaxed">
            <p>
              I am a Full Stack Developer with over 3 years of experience in
              designing and optimizing scalable web and mobile applications. I
              specialize in building high-performance systems using the React
              and Node.js ecosystems.
            </p>
            <p>
              My approach focuses on clean architecture and code optimization to
              improve security and user experience. I thrive in collaborative
              environments and am passionate about solving complex technical
              challenges.
            </p>
          </div>

          <div className="space-y-4">
            <InfoCard
              icon={<GraduationCap />}
              title="Full Stack JavaScript Immersive"
              sub="Hacktiv8 Certified"
            />
            <InfoCard
              icon={<MapPin />}
              title="Jakarta, Indonesia"
              sub="Remote / On-site"
            />
            <InfoCard
              icon={<Award />}
              title="3+ Years"
              sub="Professional Exp."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, sub }) {
  return (
    <div className="p-4 rounded-xl border border-[#d4af37]/12 bg-[#d4af37]/5 hover:-translate-y-1 transition-transform">
      <div className="flex items-center gap-3">
        <div className="text-[#d4af37]">{icon}</div>
        <div>
          <div className="text-sm font-semibold text-[#e8e8e8]">{title}</div>
          <div className="text-xs text-[#707070]">{sub}</div>
        </div>
      </div>
    </div>
  );
}
