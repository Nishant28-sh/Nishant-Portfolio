import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaJava, FaGitAlt, FaDatabase, FaHtml5, FaCss3Alt, FaPlug, FaGithub
} from 'react-icons/fa';
import { SiSpringboot, SiMongodb, SiJavascript, SiPostman, SiExpress, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { useState } from 'react';

const skills = [
  { name: 'React.js', icon: FaReact, level: 90, color: '#61DAFB' },
  { name: 'JavaScript', icon: SiJavascript, level: 85, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, level: 80, color: '#3178C6' },
  { name: 'Java', icon: FaJava, level: 85, color: '#ED8B00' },
  { name: 'Spring Boot', icon: SiSpringboot, level: 80, color: '#6DB33F' },
  { name: 'Node.js', icon: FaNodeJs, level: 80, color: '#339933' },
  { name: 'Express.js', icon: SiExpress, level: 75, color: '#90c53f' },
  { name: 'REST API', icon: FaPlug, level: 85, color: '#FF6B6B' },
  { name: 'MongoDB', icon: SiMongodb, level: 80, color: '#47A248' },
  { name: 'SQL', icon: FaDatabase, level: 75, color: '#336791' },
  { name: 'HTML5', icon: FaHtml5, level: 95, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, level: 90, color: '#1572B6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, color: '#06B6D4' },
  { name: 'Git', icon: FaGitAlt, level: 85, color: '#F05032' },
  { name: 'GitHub', icon: FaGithub, level: 85, color: '#ffffff' },
  { name: 'VS Code', icon: VscCode, level: 90, color: '#007ACC' },
  { name: 'Postman', icon: SiPostman, level: 80, color: '#FF6C37' },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="skills" className="py-24 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-amber-400"
          >
            SKILLS
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-base uppercase tracking-widest font-medium"
          >
            Hover over a skill for current proficiency level
          </motion.p>
        </div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 md:gap-10"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="flex flex-col items-center cursor-pointer group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative mb-6">
                {/* Main Skill Circle */}
                <motion.div
                  animate={{
                    boxShadow: hoveredSkill === skill.name
                      ? `0 0 30px ${skill.color}80, inset 0 0 20px ${skill.color}40`
                      : `0 0 10px ${skill.color}40`,
                  }}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center bg-secondary border border-primary/20 transition-all duration-300"
                >
                  <skill.icon 
                    className="w-9 h-9 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110"
                    style={{ 
                      color: skill.color,
                      filter: hoveredSkill === skill.name ? `drop-shadow(0 0 8px ${skill.color})` : 'none'
                    }}
                  />
                </motion.div>

                {/* Hover Proficiency Badge */}
                <motion.div
                  animate={{
                    opacity: hoveredSkill === skill.name ? 1 : 0,
                    scale: hoveredSkill === skill.name ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm border-2 border-background"
                >
                  {skill.level}%
                </motion.div>

                {/* Skill Progress Ring */}
                <svg 
                  className="absolute inset-0 w-full h-full -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  viewBox="0 0 88 88"
                >
                  <circle
                    cx="44"
                    cy="44"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    className="text-primary/10"
                  />
                  <motion.circle
                    cx="44"
                    cy="44"
                    r="40"
                    stroke={skill.color}
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - skill.level / 100)}`}
                    strokeLinecap="round"
                    animate={{
                      strokeDashoffset: hoveredSkill === skill.name 
                        ? `${2 * Math.PI * 40 * (1 - skill.level / 100)}`
                        : `${2 * Math.PI * 40}`
                    }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                </svg>
              </div>

              {/* Skill Name */}
              <motion.span 
                animate={{
                  color: hoveredSkill === skill.name ? 'rgb(59, 130, 246)' : 'rgb(156, 163, 175)',
                }}
                className="text-xs md:text-sm text-center font-medium uppercase tracking-widest transition-colors duration-300"
              >
                {skill.name}
              </motion.span>

              {/* Proficiency Text on Hover */}
              <motion.span
                animate={{
                  opacity: hoveredSkill === skill.name ? 1 : 0,
                  y: hoveredSkill === skill.name ? 0 : -5,
                }}
                transition={{ duration: 0.2 }}
                className="text-xs text-primary mt-1 font-semibold"
              >
                {skill.level > 85 ? 'Expert' : skill.level > 75 ? 'Advanced' : 'Intermediate'}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: 'Frontend',
              skills: ['React.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
            },
            {
              title: 'Backend',
              skills: ['Node.js', 'Express.js', 'Spring Boot', 'Java', 'REST API', 'SQL'],
            },
            {
              title: 'Tools & Others',
              skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'MongoDB', 'Database'],
            },
          ].map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-secondary/50 border border-primary/10 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-lg font-semibold text-primary mb-4 uppercase tracking-wider">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
