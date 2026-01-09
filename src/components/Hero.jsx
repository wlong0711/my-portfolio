import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      
      {/* 1. BACKGROUND NEBULAS (Floating Blobs) */}
      <div className="absolute inset-0 z-0">
        {/* Purple Blob */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-96 h-96 bg-neon-blue opacity-20 rounded-full blur-[100px]"
        />
        {/* Indigo Blob */}
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-neon-pink opacity-20 rounded-full blur-[120px]"
        />
      </div>

      {/* 2. THE GLASS CARD (Content) */}
      <div className="relative z-10 w-full max-w-4xl px-4">
        <div className="bg-glass backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-neon-pink font-mono text-lg mb-4">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
              Ang Wei Long
            </h1>
            
            <h3 className="text-2xl md:text-3xl text-gray-300 mb-6">
              I am a{" "}
              <span className="text-neon-blue font-bold">
                Software Engineer
              </span>
            </h3>

            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-8">
              Fresh Computer Science (Software Engineering) graduate from Universiti Teknologi Malaysia with hands-on experience 
              in web and mobile app development. Passionate about building practical, user-focused solutions and continuously 
              learning new technologies to grow as a software engineer.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projects"
                className="px-8 py-3 bg-neon-blue text-white font-bold rounded-lg hover:bg-opacity-80 transition-all text-center shadow-[0_0_15px_rgba(138,43,226,0.5)]"
              >
                View My Work
              </a>
              <a 
                href="#contact"
                className="px-8 py-3 border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-all text-center"
              >
                Contact Me
              </a>
              
              {/* SOCIAL ICONS */}
              {/* <div className="flex items-center gap-4 sm:ml-6 justify-center sm:justify-start mt-4 sm:mt-0">
                <a href="https://github.com/yourusername" className="text-2xl text-gray-400 hover:text-white transition-colors"><FaGithub /></a>
                <a href="https://linkedin.com/in/yourusername" className="text-2xl text-gray-400 hover:text-neon-blue transition-colors"><FaLinkedin /></a>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3. SCROLL INDICATOR */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500"
      >
        <FaArrowDown />
      </motion.div>

    </section>
  );
}