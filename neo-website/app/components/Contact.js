import { Mail, Phone, FolderGit } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-24 px-6 bg-[#d4af37]/[0.02]">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="font-serif font-bold text-sm tracking-widest text-[#d4af37]">
            05
          </span>
          <h2 className="font-serif font-bold text-3xl text-[#e8e8e8]">
            Get In Touch
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <ContactLink
            icon={<Mail />}
            text="ignasiusberneo95@gmail.com"
            href="mailto:ignasiusberneo95@gmail.com"
          />
          <ContactLink
            icon={<Phone />}
            text="+62 857-7068-8841"
            href="https://wa.me/6285770688841"
          />
          <ContactLink
            icon={<FolderGit />}
            text="https://github.com/ignasiusberneo"
            href="https://github.com/ignasiusberneo"
          />
        </div>

        {/* <p className="mt-12 text-[#707070] text-sm italic">
          Currently open for full-time roles and freelance collaborations.
        </p> */}
      </div>
    </section>
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
