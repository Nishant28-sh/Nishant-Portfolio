import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const imageX = useTransform(scrollYProgress, [0, 0.3], [-100, 0]);
  const textX = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  return (
    <section id="about" className="py-24 px-6 overflow-hidden" ref={containerRef}>
      <motion.div 
        style={{ opacity }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-amber-400"
          >
            ABOUT
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-sm uppercase tracking-widest font-medium"
          >
            Here is a little background
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div 
            style={{ x: imageX, scale }}
            className="flex justify-center"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              <motion.div 
                className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-amber-400/50 relative"
              >
                <img 
                  src="/profile image.jpg" 
                  alt="Nishant Sharma"
                  loading="lazy"
                  width="320"
                  height="320"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  style={{ imageRendering: 'crisp-edges' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-amber-400/20 to-amber-300/10 blur-3xl -z-10 group-hover:blur-2xl transition-all" />
            </motion.div>
          </motion.div>

          {/* About Text */}
          <motion.div 
            style={{ x: textX }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                I'm <span className="text-amber-400 font-semibold">Nishant Sharma</span>, a pre final-year <span className="text-amber-400 font-semibold">B.Tech Computer Science and Engineering</span> student at <span className="text-amber-400 font-semibold">KR Mangalam University, Haryana</span>, with a strong academic background and hands-on project experience.
              </p>

              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                I am a <span className="text-amber-400 font-semibold">Full Stack Developer</span> experienced in building scalable web applications using <span className="text-amber-400 font-semibold">React.js</span>, <span className="text-amber-400 font-semibold">Node.js</span>, and <span className="text-amber-400 font-semibold">Spring Boot</span>. I have worked on real-world projects involving RESTful APIs, real-time features using Socket.io, secure authentication, database integration, and cloud deployment on platforms like <span className="text-amber-400 font-semibold">Vercel</span> and <span className="text-amber-400 font-semibold">Render</span>.
              </p>

              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                I focus on writing clean, maintainable code and enjoy solving practical problems through technology. I'm actively seeking opportunities where I can apply my skills, learn from experienced teams, and contribute to impactful software products.
              </p>
              
              {/* Skills Tags */}
              <motion.div 
                className="flex flex-wrap gap-3 pt-4"
              >
                {['Java', 'JavaScript', 'React.js', 'Node.js', 'Spring Boot', 'MongoDB', 'TypeScript', 'Full Stack'].map((skill, index) => (
                  <motion.span 
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 bg-amber-400/10 border border-amber-400/30 rounded-full text-sm text-gray-300 hover:text-amber-400 hover:border-amber-400/60 hover:bg-amber-400/15 transition-all cursor-default font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;