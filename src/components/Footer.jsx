import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a12] pt-10 pb-6 overflow-hidden">
      
      {/* 1. THE GLOWING SEPARATOR LINE */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50 shadow-[0_0_10px_var(--color-neon-blue)]" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* 2. TOP ROW: Logo & Nav */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          
          {/* Logo */}
          <div className="text-2xl font-bold font-mono text-gray-300">
            {/* <span className="text-neon-blue">&lt;</span> */}
            ANG WEI LONG
            {/* <span className="text-neon-blue">/&gt;</span> */}
          </div>

          {/* Navigation Links */}
          <div className="flex gap-8 text-sm font-medium text-gray-400">
            <a href="#about" className="hover:text-neon-pink transition-colors">About</a>
            <a href="#skills" className="hover:text-neon-pink transition-colors">Skills</a>
            <a href="#projects" className="hover:text-neon-pink transition-colors">Projects</a>
            <a href="#contact" className="hover:text-neon-pink transition-colors">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6">
            <a href="https://github.com/wlong0711" target="_blank" className="text-gray-400 hover:text-neon-blue hover:scale-110 transition-all">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/angweilong/" target="_blank" className="text-gray-400 hover:text-neon-blue hover:scale-110 transition-all">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:weilong02@gmail.com" className="text-gray-400 hover:text-neon-blue hover:scale-110 transition-all">
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        {/* 3. BOTTOM ROW: Copyright */}
        <div className="w-full border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Ang Wei Long. All rights reserved.</p>
          
          <p className="flex items-center gap-1 mt-2 md:mt-0">
            Designed & Built with using React & Tailwind
          </p>
        </div>

      </div>
    </footer>
  );
}