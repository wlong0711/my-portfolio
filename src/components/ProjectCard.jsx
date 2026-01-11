import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
      viewport={{ once: true }}
      className="group relative bg-glass backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:border-neon-blue/50 transition-colors duration-300"
    >
      {/* 1. PROJECT IMAGE */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] to-transparent z-10 opacity-60" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
        />
      </div>

      {/* 2. CONTENT */}
      <div className="p-6 relative z-20">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* 3. TECH STACK TAGS */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <span 
              key={i} 
              className="px-3 py-1 text-xs font-mono text-neon-pink bg-neon-pink/10 border border-neon-pink/20 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 4. ACTION BUTTONS */}
        <div className="flex items-center gap-4">
          {/* <a 
            href={project.github} 
            target="_blank" 
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
          >
            <FaGithub size={18} /> Code
          </a> */}
          {/* <a 
            href={project.demo} 
            target="_blank" 
            className="flex items-center gap-2 text-sm text-neon-blue hover:text-white transition-colors"
          >
            <FaExternalLinkAlt size={16} /> Visit Project
          </a> */}
        </div>
      </div>
    </motion.div>
  );
}