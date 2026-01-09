import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-opacity-5 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* 1. THE LOGO: Dual-color Neon */}
        <div className="text-2xl font-bold font-mono cursor-pointer flex items-center gap-1 group">
          {/* <span className="text-neon-blue drop-shadow-[0_0_8px_rgba(0,243,255,0.5)] group-hover:animate-pulse">
            &lt;
          </span> */}
          <span className="text-neon-pink drop-shadow-[0_0_8px_rgba(255,0,255,0.5)]">
            ANG WEI LONG
          </span>
          {/* <span className="text-neon-blue drop-shadow-[0_0_8px_rgba(0,243,255,0.5)] group-hover:animate-pulse">
            /&gt;
          </span> */}
        </div>

        {/* 2. DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-300 hover:text-neon-blue transition-colors duration-300 text-sm tracking-wide font-medium"
            >
              {link.title}
            </a>
          ))}

          {/* 3. THE "GLITCH" RESUME BUTTON */}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-block group"
          >
            {/* The Pink Shadow Layer */}
            <div className="absolute top-0 left-0 w-full h-full bg-neon-pink transform -skew-x-12 translate-x-1 translate-y-1 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            
            {/* The Cyan Main Button */}
            <div className="relative bg-neon-blue px-6 py-2 transform -skew-x-12 border border-white/20">
              <span className="inline-block transform skew-x-12 text-black font-bold text-sm tracking-wider">
                RESUME
              </span>
            </div>
          </motion.a>
        </div>

        {/* 4. MOBILE HAMBURGER BUTTON */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* 5. MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a12] border-b border-white/10 overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="text-gray-300 hover:text-neon-blue text-lg" onClick={() => setIsOpen(false)}>
                    {link.title}
                  </a>
                </li>
              ))}
              <li>
                  <a href="/resume.pdf" className="text-neon-blue font-bold border border-neon-blue px-6 py-2 rounded-lg bg-neon-blue/10">
                      Resume
                  </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}