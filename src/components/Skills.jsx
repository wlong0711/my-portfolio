import { motion } from "framer-motion";
import { FaCode, FaServer, FaTools } from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend & Mobile",
    icon: <FaCode className="text-neon-blue" />,
    skills: ["React", "Vue.js", "Flutter (Dart)", "Tailwind CSS", "Bootstrap", "HTML5/CSS3", "JavaScript"],
  },
  {
    title: "Backend & DB",
    icon: <FaServer className="text-neon-pink" />,
    skills: ["Java (Spring MVC)", "Node.js", "Express", "PHP", "C++", "MongoDB", "MySQL", "Firebase"],
  },
  {
    title: "Tools & DevOps",
    icon: <FaTools className="text-neon-blue" />,
    skills: ["Git & GitHub", "Docker", "Jira (Agile)", "Postman", "Figma", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      
      {/* Background Decor (Optional Subtle Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue opacity-5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-pink"
        >
          Technical Arsenal
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-glass backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-neon-blue/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(138,43,226,0.1)]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-3xl p-3 bg-white/5 rounded-lg border border-white/10">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm bg-white/5 text-gray-300 border border-white/10 rounded-lg hover:bg-neon-blue/20 hover:text-white hover:border-neon-blue transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}