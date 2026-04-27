"use client";
import { Mail, Phone, FolderGit } from "lucide-react";
import { useEffect, useRef } from "react";

function useScrollAnimation(threshold = 0.2) {
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

export default function Contact() {
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
      `}</style>

      <section
        id="contact"
        ref={sectionRef}
        className="w-full py-24 px-6 bg-[#d4af37]/[0.02]"
      >
        <div className="max-w-5xl mx-auto text-center">
          <div
            className="flex items-center justify-center gap-4 mb-12"
            data-animate
          >
            <span className="font-serif font-bold text-sm tracking-widest text-[#d4af37]">
              05
            </span>
            <h2 className="font-serif font-bold text-3xl text-[#e8e8e8]">
              Get In Touch
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <div data-animate>
              <ContactLink
                icon={<Mail />}
                text="ignasiusberneo95@gmail.com"
                href="mailto:ignasiusberneo95@gmail.com"
              />
            </div>
            <div data-animate>
              <ContactLink
                icon={<Phone />}
                text="+62 857-7068-8841"
                href="https://wa.me/6285770688841"
              />
            </div>
            <div data-animate>
              <ContactLink
                icon={<FolderGit />}
                text="https://github.com/ignasiusberneo"
                href="https://github.com/ignasiusberneo"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactLink({ icon, text, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-6 py-4 rounded-xl border border-[#d4af37]/10 bg-[#d4af37]/5 hover:bg-[#d4af37]/15 transition-all group"
    >
      <div className="text-[#d4af37] group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <span className="text-sm font-medium text-[#e8e8e8]">{text}</span>
    </a>
  );
}
