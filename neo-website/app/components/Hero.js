"use client";
import { Mail, Briefcase, Check } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <header
      id="home"
      className="relative w-full flex items-center justify-center min-h-[90vh] pt-20 px-6"
    >
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="animate-in fade-in zoom-in duration-700 flex-shrink-0">
          <div className="relative">
            <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full flex items-center justify-center text-6xl lg:text-7xl font-serif font-black bg-gradient-to-br from-[#d4af37] to-[#8b6914] text-[#0a0a0f]">
              <Image
                src="/foto-profil.jpg" // Pastikan file foto ada di folder /public/
                alt="Ignasius Berneo Dwitama"
                width={224} // Sesuaikan dengan ukuran w-56 (14rem * 16px)
                height={224}
                className="object-cover w-full h-full"
                priority // Memastikan foto dimuat lebih cepat (LCP)
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center bg-green-600 shadow-xl">
              <Check className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        <div className="text-center lg:text-left">
          {/* <div className="animate-in slide-in-from-left duration-700 delay-200 text-sm font-semibold tracking-[0.3em] uppercase mb-4 text-[#d4af37]">
            Available for New Opportunities
          </div> */}
          <h1 className="animate-in fade-in slide-in-from-bottom duration-700 delay-300 font-serif font-black text-4xl lg:text-6xl leading-tight mb-4">
            Ignasius Berneo Dwitama
          </h1>
          <p className="animate-in fade-in duration-700 delay-500 text-xl lg:text-2xl font-light mb-6 text-[#d4af37]">
            Full Stack Developer
          </p>
          <p className="animate-in fade-in duration-700 delay-700 text-base lg:text-lg leading-relaxed max-w-lg text-[#a0a0a0]">
            3+ years of experience designing, developing, and optimizing
            scalable web and mobile applications
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#d4af37] text-[#0a0a0f] hover:bg-[#c4a030] transition-all"
            >
              <Mail className="w-4 h-4" /> Get in Touch
            </a>
            <a
              href="/CV_Ignasius_Berneo_Dwitama.pdf"
              download="CV_Ignasius_Berneo_Dwitama.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/10 transition-all"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
