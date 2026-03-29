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
              <div className="relative bg-secondary/50 p-8 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300 h-full backdrop-blur-sm shadow-lg hover:shadow-xl overflow-hidden">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <motion.div 
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6 relative z-10"
                >
                  <FaBriefcase className="text-primary text-lg" />
                </motion.div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{exp.title}</h3>
                  <p className="text-primary font-semibold mb-1">{exp.company}</p>
                  <p className="text-muted-foreground text-sm mb-6">{exp.date}</p>
                  
                  {/* Experience Points */}
                  <ul className="space-y-3 mb-8">
                    {exp.points.map((point, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        viewport={{ once: true }}
                        className="text-muted-foreground text-sm leading-relaxed flex items-start gap-3"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
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
                        transition={{ delay: 0.4 + i * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-muted-foreground hover:text-primary hover:border-primary/50 transition-all cursor-default font-medium"
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
          viewport={{ once: true }}
          className="bg-secondary/30 p-8 rounded-xl border border-primary/10 text-center"
        >
          <p className="text-muted-foreground">
            Passionate about learning and contributing to innovative projects that make a meaningful difference
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;