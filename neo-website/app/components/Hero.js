"use client";
import { Mail, Check } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeZoom {
          from { opacity: 0; transform: scale(0.9); }
          to   { opacity: 1; transform: scale(1); }
        }
        .hero-avatar  { animation: fadeZoom 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s both; }
        .hero-name    { animation: fadeUp  0.7s cubic-bezier(0.22,1,0.36,1) 0.3s both; }
        .hero-role    { animation: fadeUp  0.7s cubic-bezier(0.22,1,0.36,1) 0.45s both; }
        .hero-desc    { animation: fadeUp  0.7s cubic-bezier(0.22,1,0.36,1) 0.6s both; }
        .hero-buttons { animation: fadeUp  0.7s cubic-bezier(0.22,1,0.36,1) 0.75s both; }
      `}</style>

      <header
        id="home"
        className="relative w-full flex items-center justify-center min-h-[90vh] pt-20 px-6"
      >
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="hero-avatar flex-shrink-0">
            <div className="relative">
              <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden ring-2 ring-[#d4af37]/30 ring-offset-4 ring-offset-[#0a0a0f]">
                <Image
                  src="/foto-profil.jpg"
                  alt="Ignasius Berneo Dwitama"
                  width={224}
                  height={224}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center bg-green-600 shadow-xl">
                <Check className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h1 className="hero-name font-serif font-black text-4xl lg:text-6xl leading-tight mb-4">
              Ignasius Berneo Dwitama
            </h1>

            <p className="hero-role text-xl lg:text-2xl font-light mb-6 text-[#d4af37]">
              Full Stack Developer
            </p>

            <p className="hero-desc text-base lg:text-lg leading-relaxed max-w-lg text-[#a0a0a0]">
              3+ years of experience designing, developing, and optimizing
              scalable web and mobile applications
            </p>

            <div className="hero-buttons mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#d4af37] text-[#0a0a0f] hover:bg-[#c4a030] transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
              <a
                href="/CV_Ignasius_Berneo_Dwitama.pdf"
                download="CV_Ignasius_Berneo_Dwitama.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/10 transition-all duration-200"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
