import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative flex items-center justify-center overflow-hidden text-white">
      
      {/* Background Glow (Optional - kept from your code) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-pink opacity-5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl w-full px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* === LEFT SIDE: Text & Details === */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative p-6 space-y-8"
          >
            {/* Pink Corner Bracket: Top Left */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-neon-pink rounded-tl-sm" />
            
            {/* Pink Corner Bracket: Bottom Right */}
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-neon-pink rounded-br-sm" />

            {/* Content */}
            <div className="relative z-10 px-4 py-6">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neon-blue tracking-tight">
                Let's Connect !
              </h2>
              
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                I'm currently looking for new opportunities to collaborate on projects that challenge me and help me grow. 
                Feel free to reach out if you'd like to connect!
              </p>

              <div className="space-y-6">
                {/* Email Item */}
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-lg border border-white/10 group-hover:border-neon-pink/50 transition-colors">
                    <FaEnvelope className="text-neon-pink text-xl" />
                  </div>
                  <a href="mailto:weilong02@gmail.com" className="text-lg text-gray-300 hover:text-white transition-colors font-mono">
                    weilong02@gmail.com
                  </a>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-lg border border-white/10 group-hover:border-neon-pink/50 transition-colors">
                    <FaMapMarkerAlt className="text-neon-pink text-xl" />
                  </div>
                  <span className="text-lg text-gray-300 font-mono">
                    Johor Bahru, Malaysia
                  </span>
                </div>
              </div>
            </div>
          </motion.div>


          {/* === RIGHT SIDE: Connect Card === */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl backdrop-blur-sm"
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-neon-pink font-mono">
                Connect With Me
              </h3>
            </div>

            {/* Grid for Social Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/angweilong/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-black/40 border border-white/10 rounded-xl hover:border-neon-pink hover:bg-white/5 transition-all group"
              >
                <FaLinkedin className="text-2xl text-gray-400 group-hover:text-neon-pink transition-colors" />
                <span className="font-semibold text-gray-300 group-hover:text-white">LinkedIn</span>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/wlong0711" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-black/40 border border-white/10 rounded-xl hover:border-neon-pink hover:bg-white/5 transition-all group"
              >
                <FaGithub className="text-2xl text-gray-400 group-hover:text-white transition-colors" />
                <span className="font-semibold text-gray-300 group-hover:text-white">GitHub</span>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/60177276326" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-black/40 border border-white/10 rounded-xl hover:border-neon-pink hover:bg-white/5 transition-all group"
              >
                <FaWhatsapp className="text-2xl text-gray-400 group-hover:text-green-500 transition-colors" />
                <span className="font-semibold text-gray-300 group-hover:text-white">WhatsApp</span>
              </a>

              {/* Email (Button) */}
              <a 
                href="mailto:weilong02@gmail.com"
                className="flex items-center gap-3 p-4 bg-black/40 border border-white/10 rounded-xl hover:border-neon-pink hover:bg-white/5 transition-all group"
              >
                <FaEnvelope className="text-2xl text-gray-400 group-hover:text-purple-400 transition-colors" />
                <span className="font-semibold text-gray-300 group-hover:text-white">Email</span>
              </a>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}