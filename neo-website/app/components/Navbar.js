"use client";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 backdrop-blur-md border-b border-[#d4af37]/15 bg-[#0a0a0f]/85">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-serif font-bold text-lg text-[#d4af37]">IBD</span>
        <div className="flex gap-8 text-sm font-medium tracking-wide text-[#e8e8e8]">
          {["About", "Skills", "Experience", "Projects", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#d4af37] transition-colors relative group"
              >
                {item}
                <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-[#d4af37] transition-all group-hover:w-full"></span>
              </a>
            ),
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
