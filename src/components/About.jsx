import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaTrophy } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-pink"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 1. EDUCATION CARD */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-glass backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-neon-blue/30 transition-colors"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-neon-blue/10 rounded-lg text-neon-blue text-2xl">
                <FaGraduationCap />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-xl text-gray-200 font-semibold">Bachelor of Computer Science (Software Engineering)</h4>
                <p className="text-neon-pink text-sm">Universiti Teknologi Malaysia (2021 - 2025)</p>
                <p className="text-gray-400 mt-2">First Class Honors | <span className="text-white font-bold">CGPA: 3.75</span></p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <h4 className="text-lg text-gray-200 font-semibold">Foundation in Physical Science</h4>
                <p className="text-neon-pink text-sm">UTM SPACE</p>
                <p className="text-gray-400">CGPA: 3.80</p>
              </div>
            </div>
          </motion.div>

          {/* 2. EXPERIENCE CARD */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-glass backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-neon-pink/30 transition-colors"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-neon-pink/10 rounded-lg text-neon-pink text-2xl">
                <FaBriefcase />
              </div>
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>
            
            <div className="relative border-l border-white/20 pl-6 ml-2 space-y-8">
              <div className="relative">
                <span className="absolute -left-[31px] top-1 w-4 h-4 bg-neon-pink rounded-full shadow-[0_0_10px_var(--color-neon-pink)]"></span>
                <h4 className="text-xl text-gray-200 font-semibold">Software Engineer Intern</h4>
                <p className="text-neon-blue text-sm mb-2">Venture Technocom System Sdn Bhd | Oct 2024 - Jan 2025</p>
                <ul className="list-disc list-outside text-gray-400 text-sm space-y-1 ml-4">
                  <li>Analyzed and simulated production workflows in MES environments.</li>
                  <li>Provided technical support and hardware troubleshooting.</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 3. ACHIEVEMENTS CARD (Full Width) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-glass backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-colors"
          >
             <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-yellow-500/10 rounded-lg text-yellow-500 text-2xl">
                <FaTrophy />
              </div>
              <h3 className="text-2xl font-bold text-white">Achievements</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <h4 className="text-neon-blue font-bold">7th Place - Innovation & Usability</h4>
                <p className="text-gray-300 text-sm mt-1">Application Development Showcase @STARTUP'24</p>
                <p className="text-gray-500 text-xs mt-1">RecycleGo Project</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <h4 className="text-neon-pink font-bold">Top 10 Finalist</h4>
                <p className="text-gray-300 text-sm mt-1">Symposium Iskandar Puteri Low Carbon</p>
                <p className="text-gray-500 text-xs mt-1">Environmental Monitoring System</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}