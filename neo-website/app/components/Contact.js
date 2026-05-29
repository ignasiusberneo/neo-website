"use client";

import { Mail, Phone, FolderGit } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const containerRef = useRef(null);

  // Deteksi ketika seksi kontak masuk ke viewport
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // Varian orkestrasi kemunculan berurutan (Stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Menggantikan logika penundaan setTimeout manual
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const contactLinks = [
    {
      icon: <Mail />,
      text: "ignasiusberneo95@gmail.com",
      href: "mailto:ignasiusberneo95@gmail.com",
    },
    {
      icon: <Phone />,
      text: "+62 857-7068-8841",
      href: "https://wa.me/6285770688841",
    },
    {
      icon: <FolderGit />,
      text: "https://github.com/ignasiusberneo",
      href: "https://github.com/ignasiusberneo",
    },
  ];

  return (
    <section
      id="contact"
      ref={containerRef}
      className="w-full py-24 px-6 bg-[#d4af37]/[0.02] overflow-hidden"
    >
      <motion.div
        className="max-w-5xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* HEADER CONTACT */}
        <motion.div
          variants={fadeUpVariants}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span className="font-serif font-bold text-sm tracking-widest text-[#d4af37]">
            05
          </span>
          <h2 className="font-serif font-bold text-3xl text-[#e8e8e8]">
            Get In Touch
          </h2>
        </motion.div>

        {/* CONTACT LINKS CONTAINER */}
        <div className="flex flex-wrap justify-center gap-6">
          {contactLinks.map((link, index) => (
            <motion.div key={index} variants={fadeUpVariants}>
              <ContactLink {...link} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ContactLink({ icon, text, href }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        y: -4,
        scale: 1.02,
        backgroundColor: "#d4af3726",
        borderColor: "#d4af374d",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 350, damping: 15 }}
      className="flex items-center gap-3 px-6 py-4 rounded-xl border transition-colors duration-300 group select-none"
      style={{
        borderColor: "rgba(212, 175, 55, 0.1)",
        backgroundColor: "rgba(212, 175, 55, 0.05)",
      }}
    >
      {/* Sisa kode icon dan text tetap sama */}
      <motion.div
        className="text-[#d4af37]"
        whileHover={{ scale: 1.12, rotate: 3 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {icon}
      </motion.div>
      <span className="text-sm font-medium text-[#e8e8e8]">{text}</span>
    </motion.a>
  );
}
