import { motion, useScroll, useTransform } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { useRef } from 'react';

const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company: 'Corizo',
    date: 'Jul 2025 - Aug 2025',
    duration: '2 months',
    points: [
      'Developed REST APIs & reusable UI components',
      'Improved API performance by optimizing backend logic',
    ],
    skills: ['React.js', 'Node.js', 'REST APIs', 'MongoDB']
  },
  {
    title: 'IBM Full Stack Virtual Intern',
    company: 'Edunet Foundation (NASSCOM)',
    date: 'Jun 2025 - Jul 2025',
    duration: '1 month',
    points: [
      'Worked on software development workflows & debugging',
      'Assisted in deployment & Git collaboration with team',
    ],
    skills: ['Full Stack', 'Git', 'Deployment', 'Debugging']
  }
];

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [80, 0]);

  return (
    <section id="experience" className="py-24 px-6 overflow-hidden" ref={containerRef}>
      <motion.div 
        style={{ opacity, y }}
        className="max-w-6xl mx-auto"
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
            EXPERIENCE
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-sm uppercase tracking-widest font-medium"
          >
            Where I've worked and what I've learned
          </motion.p>
        </motion.div>

        {/* Experience Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative bg-secondary/50 p-8 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300 h-full backdrop-blur-sm shadow-lg hover:shadow-2xl overflow-hidden hover-lift hover-glow">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <motion.div 
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  whileHover={{ scale: 1.2, rotate: 15, y: -3 }}
                  viewport={{ once: true }}
                  className="w-12 h-12 rounded-lg bg-amber-400/20 flex items-center justify-center mb-6 relative z-10 transition-all group-hover:bg-amber-400/30 icon-hover"
                >
                  <FaBriefcase className="text-amber-400 text-lg" />
                </motion.div>
                
                {/* Content */}
                <div className="relative z-10">
                  <motion.h3 
                    whileHover={{ x: 5, color: '#fbbf24' }}
                    className="text-2xl font-bold text-foreground mb-1 transition-all duration-300 text-hover-underline"
                  >
                    {exp.title}
                  </motion.h3>
                  <motion.p 
                    whileHover={{ color: '#fbbf24', x: 3 }}
                    className="text-amber-400 font-semibold mb-1 transition-all cursor-default"
                  >
                    {exp.company}
                  </motion.p>
                  <motion.p 
                    whileHover={{ color: '#d1d5db' }}
                    className="text-muted-foreground text-sm mb-6 transition-colors duration-300"
                  >
                    {exp.date}
                  </motion.p>
                  
                  {/* Experience Points */}
                  <ul className="space-y-3 mb-8">
                    {exp.points.map((point, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ x: 5, color: '#fbbf24' }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        viewport={{ once: true }}
                        className="text-muted-foreground text-sm leading-relaxed flex items-start gap-3 transition-all duration-300 hover:text-amber-400 group/item"
                      >
                        <motion.span 
                          whileHover={{ scale: 1.3, y: -2 }}
                          className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0 transition-all"
                        />
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                  
                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <motion.span 
                        key={i} 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.15, y: -4, rotate: 5 }}
                        transition={{ delay: 0.4 + i * 0.05 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-amber-400/15 border border-amber-400/40 rounded-full text-xs text-amber-400 font-medium uppercase tracking-wider transition-all cursor-default badge-hover hover:bg-amber-400/30 hover:border-amber-400/80"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.02, y: -3 }}
          viewport={{ once: true }}
          className="bg-secondary/30 p-8 rounded-xl border border-amber-400/30 text-center hover-lift hover-glow transition-all"
        >
          <motion.p 
            whileHover={{ color: '#fbbf24' }}
            className="text-muted-foreground hover:text-amber-400 transition-colors duration-300 font-medium text-lg"
          >
            Passionate about learning and contributing to innovative projects that make a meaningful difference
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;