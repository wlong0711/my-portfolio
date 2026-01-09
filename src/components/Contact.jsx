import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-pink opacity-10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-4xl w-full px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-glass backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative Gradient Border Top */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue to-neon-pink" />

          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
            <p className="text-gray-400 max-w-lg mx-auto">
              I am currently looking for new opportunities in Johor Bahru or Singapore. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-10 justify-center items-start">
            
            {/* LEFT SIDE: Contact Info */}
            <div className="flex-1 space-y-6 w-full md:w-auto">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-neon-blue/30 transition-colors">
                <div className="bg-neon-blue/10 p-3 rounded-full text-neon-blue">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">Email Me</h4>
                  <a href="mailto:weilong02@gmail.com" className="text-white font-medium hover:text-neon-pink transition-colors">
                    weilong02@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-neon-pink/30 transition-colors">
                <div className="bg-neon-pink/10 p-3 rounded-full text-neon-pink">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">Location</h4>
                  <p className="text-white font-medium">Johor Bahru, Malaysia</p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Simple Form (Visual Only for now) */}
            <form className="flex-1 w-full space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors placeholder-gray-500"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors placeholder-gray-500"
                />
              </div>
              <textarea 
                rows="4" 
                placeholder="Message" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors placeholder-gray-500 resize-none"
              ></textarea>
              
              <button className="w-full py-3 bg-gradient-to-r from-neon-blue to-neon-pink text-white font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg">
                <FaPaperPlane /> Send Message
              </button>
            </form>

          </div>
        </motion.div>
      </div>
    </section>
  );
}