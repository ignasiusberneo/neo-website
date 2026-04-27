"use client";
import { GraduationCap, MapPin, Award } from "lucide-react";
import { useEffect, useRef } from "react";

function useScrollAnimation(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll("[data-animate]").forEach((el, i) => {
              setTimeout(() => el.classList.add("animate-in"), i * 120);
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

export default function About() {
  const sectionRef = useScrollAnimation();

  return (
    <>
      <style>{`
        [data-animate] {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        [data-animate].animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <section id="about" ref={sectionRef} className="w-full py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12" data-animate>
            <span className="font-serif font-bold text-sm tracking-widest text-[#d4af37]">
              01
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#d4af37] to-transparent" />
            <h2 className="font-serif font-bold text-3xl text-[#e8e8e8]">
              About Me
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 text-[#a0a0a0] space-y-6 text-lg leading-relaxed">
              <p data-animate>
                I am a Full Stack Developer with over 3 years of experience in
                designing and optimizing scalable web and mobile applications. I
                specialize in building high-performance systems using the React
                and Node.js ecosystems.
              </p>
              <p data-animate>
                My approach focuses on clean architecture and code optimization
                to improve security and user experience. I thrive in
                collaborative environments and am passionate about solving
                complex technical challenges.
              </p>
            </div>

            <div className="space-y-4">
              {[
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
              ].map((card, i) => (
                <div key={i} data-animate>
                  <InfoCard {...card} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
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
